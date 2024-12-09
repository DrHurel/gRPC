# Implémentation du service AgencyServices
from protocol.agency_pb2 import AvailabilityResponse, ReservationResponse
from protocol.agency_pb2_grpc import AgencyServicesServicer


import grpc


import logging


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
