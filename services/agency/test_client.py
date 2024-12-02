
import sys
from pathlib import Path
sys.path.append(str(Path(__file__).parent /"../"))

import grpc
from protocol.agency_pb2_grpc import AgencyServicesStub
from protocol.agency_pb2 import AvailabilityRequest,ReservationRequest
from protocol.types_pb2 import Customer,CreditCard

 
def test_client():
    # Connexion au serveur gRPC de l'agence
    channel = grpc.insecure_channel('localhost:50051')
    client = AgencyServicesStub(channel)

    # Consulter les disponibilités
    availability_request = AvailabilityRequest(
        agency_id="agency123",
        agency_password="securepassword",
        start_date="2024-01-01",
        end_date="2024-01-05",
        num_people=2
    )
    response = client.CheckAvailability(availability_request)
    print("Disponibilités :", response.offers)

    # Faire une réservation
    if response.offers:
        reservation_request = ReservationRequest(
            agency_id="agency123",
            agency_login="login123",
            agency_password="securepassword",
            offer_id=response.offers[0].id,
            customer=Customer(
                first_name="John",
                last_name="Doe",
                credit_card=CreditCard(
                    number="4111111111111111",
                    expiration_date="12/25",
                    cvv="123"
                )
            )
        )
        reservation_response = client.MakeReservation(reservation_request)
        print("Réservation :", reservation_response)

