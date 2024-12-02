import argparse
import configparser
import logging
import sys
from pathlib import Path

from utils.sql_function import is_room_available

root_path = Path(__file__).parent

sys.path.append(str(root_path / "../../"))

from sqlalchemy import create_engine, text
import grpc
from concurrent import futures
from protocol.hotel_pb2_grpc import (
    HotelServiceServicer,
    add_HotelServiceServicer_to_server,
)
from protocol.types_pb2 import Offer, Room
from protocol.agency_pb2 import AvailabilityResponse, ReservationResponse

config = configparser.ConfigParser()
config.read(root_path / "hotel.ini")

DATABASE_URI = config["DATABASE"]["URI"]
JWT_SECRET = config["SECURITY"]["JWT_SECRET"]


# Implémentation du service HotelServices
class HotelServices(HotelServiceServicer):
    def __init__(self, hotel_data):
        self.hotel_data = (
            hotel_data  # Données codées en dur pour les offres et disponibilités
        )

    def CheckAvailability(self, request, context):
        logging.info("Checking Availability")

        logging.info(is_room_available())

        available_offers = [
            offer for offer in self.hotel_data if offer.room.beds >= request.num_people
        ]
        return AvailabilityResponse(offers=available_offers)

    def MakeReservation(self, request, context):
        logging.info("A Reservation is requested")
        # Validation fictive de l'offre et réservation
        for offer in self.hotel_data:
            if offer.id == request.offer_id:
                logging.info("Reservation successful")
                return ReservationResponse(
                    success=True,
                    confirmation_code="RES12345",
                    message="Réservation confirmée.",
                )

        logging.info("Reservation failed")
        return ReservationResponse(
            success=False, confirmation_code="", message="Offre introuvable."
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
