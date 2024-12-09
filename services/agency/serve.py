from services.AgencyServices import AgencyServices
from protocol.agency_pb2 import AvailabilityRequest
from protocol.agency_pb2_grpc import add_AgencyServicesServicer_to_server
from protocol.hotel_pb2_grpc import HotelServiceStub


import grpc


import logging
from concurrent import futures
from typing import List


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
