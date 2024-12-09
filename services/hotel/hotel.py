import argparse
import configparser
from email import message
from enum import Enum
import logging
from sre_constants import SUCCESS
import sys
from pathlib import Path
from xmlrpc.client import INTERNAL_ERROR
from sqlalchemy import create_engine, text

from utils.sql_function import fetch_rooms, filter_by_availability, is_room_available

root_path = Path(__file__).parent

sys.path.append(str(root_path / "../../"))

from sqlalchemy import create_engine, text
import grpc
from concurrent import futures
from protocol.hotel_pb2_grpc import (
    HotelServiceServicer,
    add_HotelServiceServicer_to_server,
)
from protocol.types_pb2 import Offer, Room, Header
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
engine = create_engine(DATABASE_URI, echo=True)  # echo=True logs SQL queries


class ResponseHeader:
    @staticmethod
    def SUCCESS(message):
        return Header(code=200, message=message)

    @staticmethod
    def BAD_ARGUMENTS(message):
        return Header(code=400, message=message)

    @staticmethod
    def INTERNAL_ERROR(message):
        return Header(code=500, message=message)


# Implémentation du service HotelServices
class HotelServices(HotelServiceServicer):
    def __init__(self, hotel_data):
        self.hotel_data = (
            hotel_data  # Données codées en dur pour les offres et disponibilités
        )

    def FetchRooms(self, request: FetchRoomPayload, context):
        logging.info("Fetch Room")
        with engine.connect() as connection:
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
        # Validation fictive de l'offre et réservation
        for offer in self.hotel_data:
            if offer.id == request.offer_id:
                logging.info("Reservation successful")
                return ReservationResponse(
                    ResponseHeader.SUCCESS("Réservation confirmée."),
                    success=True,
                    confirmation_code="RES12345",
                )

        logging.info("Reservation failed")
        return ReservationResponse(
            success=False,
            confirmation_code="",
            header=ResponseHeader.BAD_ARGUMENTS("Offre introuvable."),
        )


def serve(port):
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))

    # Exemple de données pour un hôtel
    hotel_data = [
        Offer(
            id="OFFER1",
            room=Room(id="ROOM1", beds=2, base_price=100.0),
            available_date="2024-01-01",
            price=120.0,
        ),
        Offer(
            id="OFFER2",
            room=Room(id="ROOM2", beds=3, base_price=150.0),
            available_date="2024-01-02",
            price=170.0,
        ),
    ]

    # Ajouter le service HotelServices
    add_HotelServiceServicer_to_server(HotelServices(hotel_data), server)

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
