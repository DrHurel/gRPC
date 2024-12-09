import argparse
import configparser
import datetime
from email import message
from enum import Enum
import logging
from sre_constants import SUCCESS
import sys
from pathlib import Path
from xmlrpc.client import INTERNAL_ERROR
from sqlalchemy import Engine, create_engine, text

from utils.ResponseHeader import ResponseHeader
from utils.validation import validate_booking_dates
from utils.sql_function import (
    create_reservation,
    fetch_rooms,
    filter_by_availability,
    is_room_available,
)

root_path = Path(__file__).parent

sys.path.append(str(root_path / "../../"))

from sqlalchemy import create_engine, text
import grpc
from concurrent import futures
from protocol.hotel_pb2_grpc import (
    HotelServiceServicer,
    add_HotelServiceServicer_to_server,
)
from protocol.hotel_pb2 import (
    FetchRoomResponse,
    FetchRoomPayload,
    ReservationRequest,
    ReservationResponse,
)

config = configparser.ConfigParser()
config.read(root_path / "hotel.ini")

DATABASE_URI = config["DATABASE"]["URI"]
JWT_SECRET = config["SECURITY"]["JWT_SECRET"]


class HotelServices(HotelServiceServicer):

    def __init__(self, engine: Engine):
        super().__init__()
        self.engine = engine
        logging.info("INIT SERVICE HOTEL")

    def FetchRooms(self, request: FetchRoomPayload, context):
        logging.info("Fetch Room")
        with self.engine.connect() as connection:
            rooms = fetch_rooms(
                request.minsize,
                request.minprize,
                request.maxprice,
                request.beds,
                connection,
            )

            if not rooms:
                return
            rooms_list = filter_by_availability(
                request.start_date, request.end_date, connection, rooms
            )

            return FetchRoomResponse(
                header=ResponseHeader.SUCCESS("success"), rooms=rooms_list
            )

    def MakeReservation(self, request: ReservationRequest, context):
        logging.info("A Reservation is requested")
        is_valid, error = validate_booking_dates(
            datetime.datetime.fromisoformat(request.start_date),
            datetime.datetime.fromisoformat(request.end_date),
        )
        if not is_valid:
            return {"message": error}, 400

        with self.engine.connect() as connection:
            if not is_room_available(
                request.uuid, request.start_date, request.end_date, connection
            ):
                return {"message": "Room isn't available for the selected dates"}, 409

            reservation = create_reservation(
                request.uuid, request.start_date, request.end_date, connection
            )
            if not reservation:
                return {"message": "Failed to create reservation"}, 500

            return ReservationResponse(
                header=ResponseHeader.SUCCESS("reservation success"),
                success=True,
                confirmation_code=reservation,
            )


def serve(port):
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))

    add_HotelServiceServicer_to_server(
        HotelServices(
            engine=create_engine(DATABASE_URI, echo=True)  # echo=True logs SQL queries
        ),
        server,
    )

    logging.info(f"HotelServices starting on port : {port}...")
    server.add_insecure_port(f"[::]:{port}")
    server.start()
    server.wait_for_termination()


if __name__ == "__main__":

    logging.basicConfig(
        level=logging.INFO,  # Log level
        format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
        handlers=[logging.StreamHandler()],  # Logs to stdout
    )

    parser = argparse.ArgumentParser(prog="Hotel gRPC Service")

    parser.add_argument("-p", "--port")
    port = parser.parse_args().port
    engine = create_engine(DATABASE_URI, echo=True)  # echo=True logs SQL queries

    serve(port=port)
