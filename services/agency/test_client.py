import grpc
import agency_pb2
import agency_pb2_grpc

 
def main():
    # Connexion au serveur gRPC de l'agence
    channel = grpc.insecure_channel('localhost:50051')
    client = agency_pb2_grpc.AgencyServicesStub(channel)

    # Consulter les disponibilités
    availability_request = agency_pb2.AvailabilityRequest(
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
        reservation_request = agency_pb2.ReservationRequest(
            agency_id="agency123",
            agency_login="login123",
            agency_password="securepassword",
            offer_id=response.offers[0].id,
            customer=agency_pb2.Customer(
                first_name="John",
                last_name="Doe",
                credit_card=agency_pb2.CreditCard(
                    number="4111111111111111",
                    expiration_date="12/25",
                    cvv="123"
                )
            )
        )
        reservation_response = client.MakeReservation(reservation_request)
        print("Réservation :", reservation_response)


if __name__ == '__main__':
    main()
