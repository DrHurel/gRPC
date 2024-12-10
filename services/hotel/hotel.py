import argparse
import configparser
import logging
import sys
from pathlib import Path
from sqlalchemy import create_engine

import grpc
from concurrent import futures

from services.HotelServices import HotelServices
from protocol.hotel_pb2_grpc import add_HotelServiceServicer_to_server


root_path = Path(__file__).parent

sys.path.append(str(root_path / "../../"))

from sqlalchemy import create_engine


def serve(port: int, config: configparser.ConfigParser):
    """
    Starts the gRPC server.

    Args:
        port (int): Port to bind the server.
        config (ConfigParser): Configuration object for setting up the server.
    """
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))

    DATABASE_URI = config["DATABASE"]["URI"]
    JWT_SECRET = config["SECURITY"][
        "JWT_SECRET"
    ]  # May be passed to HotelServices if needed

    # Add service to the server
    add_HotelServiceServicer_to_server(
        HotelServices(
            engine=create_engine(DATABASE_URI, echo=True)  # Logs SQL queries
        ),
        server,
    )

    logging.info(f"HotelServices starting on port : {port}...")
    server.add_insecure_port(f"[::]:{port}")
    server.start()
    server.wait_for_termination()


if __name__ == "__main__":

    logging.basicConfig(
        level=logging.DEBUG,  # Log level
        format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
        handlers=[logging.StreamHandler()],  # Logs to stdout
    )

    parser = argparse.ArgumentParser(prog="Hotel gRPC Service")

    parser.add_argument("-p", "--port")
    port = parser.parse_args().port
    config = configparser.ConfigParser()
    config.read(root_path / "hotel.ini")

    serve(port, config)
