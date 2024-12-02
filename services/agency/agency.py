import grpc
from concurrent import futures

# Importer les fichiers générés
import agency_pb2
import agency_pb2_grpc
import hotel_pb2_grpc

# Implémentation du service AgencyServices
class AgencyServices(agency_pb2_grpc.AgencyServicesServicer):
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
                print(f"Erreur lors de la consultation de l'hôtel : {e.details()}")

        return agency_pb2.AvailabilityResponse(offers=all_offers)

    def MakeReservation(self, request, context):
        # Trouver le client hôtel correspondant à l'offre
        for client in self.hotel_clients:
            try:
                response = client.MakeReservation(request)
                if response.success:
                    return agency_pb2.ReservationResponse(
                        success=True,
                        confirmation_code=response.confirmation_code,
                        message="Réservation réussie."
                    )
            except grpc.RpcError as e:
                print(f"Erreur lors de la réservation : {e.details()}")

        return agency_pb2.ReservationResponse(
            success=False,
            confirmation_code="",
            message="Échec de la réservation, aucune offre trouvée."
        )


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))

    # Charger les clients pour chaque hôtel
    hotel_clients = []
    for port in [60051, 60052]:  # Suppose que deux hôtels sont disponibles sur ces ports
        channel = grpc.insecure_channel(f'localhost:{port}')
        hotel_clients.append(hotel_pb2_grpc.HotelServicesStub(channel))

    # Ajouter le service AgencyServices
    agency_pb2_grpc.add_AgencyServicesServicer_to_server(
        AgencyServices(hotel_clients), server
    )

    print("AgencyServices serveur en cours d'exécution sur le port 50051...")
    server.add_insecure_port('[::]:50051')
    server.start()
    server.wait_for_termination()


if __name__ == '__main__':
    serve()
