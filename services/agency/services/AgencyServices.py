# Implémentation du service AgencyServices
from typing import Dict, List
from protocol import agency_pb2
from protocol import hotel_pb2
from protocol.agency_pb2 import (
    AvailabilityResponse,
    FetchRoomResponse,
    ReservationRequest,
    ReservationResponse,
)
from protocol.agency_pb2_grpc import AgencyServicesServicer


import grpc


import logging

from protocol.hotel_pb2 import FetchRoomPayload
from protocol.hotel_pb2_grpc import HotelServiceStub


class AgencyServices(AgencyServicesServicer):

    hotel_clients: Dict[str, HotelServiceStub]

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

    def MakeReservation(self, request: ReservationRequest, context):
        logging.info("make")
        # Trouver le client hôtel correspondant à l'offre
        for key, client in self.hotel_clients:
            if key == request.agency_id:
                try:
                    reservation = hotel_pb2.ReservationRequest(
                        uuid=request.offer_id,
                        start_date=request.start_date,
                        end_date=request.end_date,
                    )
                    response = client.MakeReservation(reservation)
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

    def FetchRooms(self, request: agency_pb2.FetchRoomPayload, context):
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
