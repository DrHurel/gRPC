from hotel.utils.ResponseHeader import ResponseHeader
from hotel.utils.sql_function import (
    create_reservation,
    fetch_rooms,
    filter_by_availability,
    is_room_available,
)
from hotel.utils.validation import validate_booking_dates
from protocol.hotel_pb2 import (
    FetchRoomPayload,
    FetchRoomResponse,
    ReservationRequest,
    ReservationResponse,
)
from protocol.hotel_pb2_grpc import HotelServiceServicer


from sqlalchemy import Engine


import datetime
import logging


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
