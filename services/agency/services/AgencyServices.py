# Implémentation du service AgencyServices
from typing import List
from protocol.agency_pb2 import (
    AvailabilityResponse,
    FetchRoomResponse,
    ReservationResponse,
)
from protocol.agency_pb2_grpc import AgencyServicesServicer


import grpc


import logging

from protocol.hotel_pb2 import FetchRoomPayload
from protocol.hotel_pb2_grpc import HotelServiceStub


class AgencyServices(AgencyServicesServicer):

    hotel_clients: List[HotelServiceStub]

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
        logging.info("make")
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

    def FetchRooms(self, request, context):
        logging.info("fetchRoom")
        all_rooms = []

        fetch_payload = FetchRoomPayload(
            startDate=request.startDate,
            endDate=request.endDate,
            beds=request.beds,
            minsize=request.minsize,
            minprize=request.minprize,
            maxprice=request.maxprice,
        )

        fetch_payload = {k: v for k, v in fetch_payload.items() if v is not None}
        for client in self.hotel_clients:
            try:
                response = client.FetchRooms(fetch_payload)
                all_rooms.extend(response.rooms)
            except grpc.RpcError as e:
                logging.error(f"Error fetching rooms from hotel: {e.details()}")

        header = context.types_pb2.Header(code=200, message="Success")

        return FetchRoomResponse(header=header, rooms=all_rooms)

    def test(self):
        for stub in self.hotel_clients:
            logging.info(stub)
            logging.info(stub.FetchRooms(FetchRoomPayload()))
