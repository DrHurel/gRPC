import configparser
from pathlib import Path
import grpc


import logging
from concurrent import futures
from typing import List

from sqlalchemy import create_engine

from services.AgencyServices import AgencyServices
from utils.tools import fetch_services
from protocol.agency_pb2_grpc import (
    add_AgencyServicesServicer_to_server,
)

from protocol.hotel_pb2_grpc import HotelServiceStub


def serve(self_port=50051):
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    config = configparser.ConfigParser()
    root_path = Path(__file__).parent

    config.read(root_path / "agency.ini")

    DATABASE_URI = config["DATABASE"]["URI"]

    engine = create_engine(DATABASE_URI, echo=True)  # echo=True logs SQL queries

    with engine.connect() as connection:
        services = fetch_services(connection)
        # Ajouter le service AgencyServices
        service = AgencyServices(
            {
                (service["domain"].split(":"))[0]: HotelServiceStub(
                    grpc.insecure_channel(service["domain"])
                )
                for service in services
            }
        )

        add_AgencyServicesServicer_to_server(
            service,
            server,
        )
        service.test()

    logging.info(f"AgencyServices starting on port : {self_port}...")
    service_name = config["SERVICE"]["NAME"]
    server.add_insecure_port(f"{service_name}:{self_port}")
    server.start()
    server.wait_for_termination()
