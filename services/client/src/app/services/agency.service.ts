import { Injectable } from '@angular/core';
import { Agency } from '../models/agency';
import { Request } from '@improbable-eng/grpc-web/dist/typings/invoke';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  grpcClient!: Request;


  private AGENCIES_API_URLS: Array<Agency> = [
    { url: 'http://localhost:5555', name: "luxe" },
    { url: 'http://localhost:4444', name: "urban" }
  ];

  constructor() { }

  public getAgencies() {
    return this.AGENCIES_API_URLS
  }

  public getAgencyUrl(name: string) {
    for (let agency of this.AGENCIES_API_URLS) {
      if (agency.name == name) {
        return agency.url
      }
    }

    return ""



  }
}
