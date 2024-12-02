import argparse
import logging
from re import L
import sys
from pathlib import Path
from typing import List

sys.path.append(str(Path(__file__).parent / "../"))

import grpc
from concurrent import futures
from protocol.agency_pb2_grpc import (
    AgencyServicesServicer,
    add_AgencyServicesServicer_to_server,
)
from protocol.agency_pb2 import AvailabilityResponse, ReservationResponse
from protocol.agency_pb2 import AvailabilityRequest
from protocol.hotel_pb2_grpc import HotelServiceStub


# Implémentation du service AgencyServices
class AgencyServices(AgencyServicesServicer):
    def __init__(self, hotel_clients):
        self.hotel_clients = hotel_clients  # Liste des clients pour les hôtels

    def CheckAvailability(self, request, context):
        # Consolidation des réponses des hôtels partenaires
        all_offers = []
        for client in self.hotel_clients:
            try:
                response = client.CheckAvailability(request)
                all_offers.extend(response.offers)
            except grpc.RpcError as e:
                logging.error(
                    f"Erreur lors de la consultation de l'hôtel : {e.details()}"
                )

        return AvailabilityResponse(offers=all_offers)

    def MakeReservation(self, request, context):
        # Trouver le client hôtel correspondant à l'offre
        for client in self.hotel_clients:
            try:
                response = client.MakeReservation(request)
                if response.success:
                    return ReservationResponse(
                        success=True,
                        confirmation_code=response.confirmation_code,
                        message="Réservation réussie.",
                    )
            except grpc.RpcError as e:
                logging.error(f"Erreur lors de la réservation : {e.details()}")

        return ReservationResponse(
            success=False,
            confirmation_code="",
            message="Échec de la réservation, aucune offre trouvée.",
        )


def serve(self_port=50051):
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))

    # Charger les clients pour chaque hôtel
    hotel_clients: List[HotelServiceStub] = []
    for address in [
        "hotel-mountain:2345"
    ]:  # Suppose que deux hôtels sont disponibles sur ces ports
        channel = grpc.insecure_channel(address)
        hotel_clients.append(HotelServiceStub(channel))

    for c in hotel_clients:
        try:
            c.CheckAvailability(
                AvailabilityRequest(
                    agency_id="agency123",
                    agency_password="securepassword",
                    start_date="2024-01-01",
                    end_date="2024-01-05",
                    num_people=2,
                )
            )
        except Exception as e:
            logging.info(e)
    # Ajouter le service AgencyServices
    add_AgencyServicesServicer_to_server(AgencyServices(hotel_clients), server)

    logging.info(f"AgencyServices starting on port : {self_port}...")
    server.add_insecure_port(f"[::]:{self_port}")
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

    serve(port)
