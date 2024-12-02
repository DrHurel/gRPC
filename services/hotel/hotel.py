
import sys
from pathlib import Path
sys.path.append(str(Path(__file__).parent /"../../"))

import grpc
from concurrent import futures
from  services.protocol.hotel_pb2_grpc import HotelServiceServicer, add_HotelServiceServicer_to_server
from services.protocol.types_pb2 import Offer,Room
from services.protocol.agency_pb2 import AvailabilityResponse,ReservationResponse

# Implémentation du service HotelServices
class HotelServices(HotelServiceServicer):
    def __init__(self, hotel_data):
        self.hotel_data = hotel_data  # Données codées en dur pour les offres et disponibilités

    def CheckAvailability(self, request, context):
        available_offers = [
            offer for offer in self.hotel_data
            if offer.room.beds >= request.num_people
        ]
        return AvailabilityResponse(offers=available_offers)

    def MakeReservation(self, request, context):
        # Validation fictive de l'offre et réservation
        for offer in self.hotel_data:
            if offer.id == request.offer_id:
                return ReservationResponse(
                    success=True,
                    confirmation_code="RES12345",
                    message="Réservation confirmée."
                )

        return ReservationResponse(
            success=False,
            confirmation_code="",
            message="Offre introuvable."
        )


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))

    # Exemple de données pour un hôtel
    hotel_data = [
        Offer(
            id="OFFER1",
            room=Room(id="ROOM1", beds=2, base_price=100.0),
            available_date="2024-01-01",
            price=120.0
        ),
        Offer(
            id="OFFER2",
            room=Room(id="ROOM2", beds=3, base_price=150.0),
            available_date="2024-01-02",
            price=170.0
        ),
    ]

    # Ajouter le service HotelServices
    add_HotelServiceServicer_to_server(
        HotelServices(hotel_data), server
    )

    print("HotelServices serveur en cours d'exécution sur le port 60051...")
    server.add_insecure_port('[::]:60051')
    server.start()
    server.wait_for_termination()


if __name__ == '__main__':
    serve()
