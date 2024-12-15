import grpc


import logging
from concurrent import futures
from typing import List

from protocol.agency_pb2_grpc import (
    AgencyServices,
    add_AgencyServicesServicer_to_server,
)
from protocol.hotel_pb2 import FetchRoomPayload
from protocol.hotel_pb2_grpc import HotelServiceStub


def serve(self_port=50051):
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))

    # Ajouter le service AgencyServices
    add_AgencyServicesServicer_to_server(AgencyServices(), server)

    logging.info(f"AgencyServices starting on port : {self_port}...")
    server.add_insecure_port(f"[::]:{self_port}")
    server.start()
    server.wait_for_termination()
