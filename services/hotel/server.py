from hotel.hotel import DATABASE_URI
from hotel.services.HotelServices import HotelServices
from protocol.hotel_pb2_grpc import add_HotelServiceServicer_to_server


import grpc
from sqlalchemy import create_engine


import logging
from concurrent import futures


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
