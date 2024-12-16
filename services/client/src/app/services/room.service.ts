import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { Room, RoomFilters } from '../models/room';
import { Agency } from '../models/agency';
import { AgencyService } from './agency.service';
import { AgencyServicesClient } from '../generated/protocol/agency_pb_service';
import { FetchRoomPayload } from '../generated/protocol/agency_pb';
import { grpc } from '@improbable-eng/grpc-web';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(private agencyService: AgencyService) { }

  private getRoomsFromAgency(agency: Agency, filters: RoomFilters): Observable<Room[]> {
    return new Observable((observer) => {
      const agencyClient = new AgencyServicesClient(agency.url, {
        transport: grpc.CrossBrowserHttpTransport({})
      });

      const payload = new FetchRoomPayload();
      // Assuming filters are to be set in the payload
      if (filters.startDate) payload.setStartdate(filters.startDate);
      if (filters.endDate) payload.setEnddate(filters.endDate);
      if (filters.beds) payload.setBeds(filters.beds);

      agencyClient.fetchRooms(payload, (err, response) => {
        if (err) {
          observer.error(err);
        } else {
          const roomsWithAgency = response?.getRoomsList().map((room) => ({
            id: room.getId(),
            name: room.getName(),
            size: room.getSize(),
            basePrice: room.getBasePrice(),
            beds: room.getBeds(),
            agency: agency.name
          }));
          observer.next(roomsWithAgency);
          observer.complete();
        }
      });
    });
  }

  public fetchRooms(filters: RoomFilters): Observable<Room[]> {
    const agencyRequests = this.agencyService.getAgencies().map((agency) =>
      this.getRoomsFromAgency(agency, filters)
    );

    return new Observable((observer) => {
      forkJoin(agencyRequests).subscribe({
        next: (responses) => {
          const allRooms = responses.flat();

          const roomMap = new Map<string, Room>();

          allRooms.forEach((room) => {
            if (!roomMap.has(room.id) || room.basePrice < roomMap.get(room.id)?.basePrice!) {
              roomMap.set(room.id, room);
            }
          });

          const uniqueRooms = Array.from(roomMap.values());
          observer.next(uniqueRooms);
          observer.complete();
        },
        error: (error) => {
          observer.error('Failed to fetch rooms from agencies. Please try again later.');
        },
      });
    });
  }
}
