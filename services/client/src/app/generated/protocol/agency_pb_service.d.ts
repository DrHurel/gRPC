// package: protocol.agency
// file: protocol/agency.proto

import * as protocol_agency_pb from "../protocol/agency_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AgencyServicesCheckAvailability = {
  readonly methodName: string;
  readonly service: typeof AgencyServices;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof protocol_agency_pb.AvailabilityRequest;
  readonly responseType: typeof protocol_agency_pb.AvailabilityResponse;
};

type AgencyServicesMakeReservation = {
  readonly methodName: string;
  readonly service: typeof AgencyServices;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof protocol_agency_pb.ReservationRequest;
  readonly responseType: typeof protocol_agency_pb.ReservationResponse;
};

type AgencyServicesFetchRooms = {
  readonly methodName: string;
  readonly service: typeof AgencyServices;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof protocol_agency_pb.FetchRoomPayload;
  readonly responseType: typeof protocol_agency_pb.FetchRoomResponse;
};

export class AgencyServices {
  static readonly serviceName: string;
  static readonly CheckAvailability: AgencyServicesCheckAvailability;
  static readonly MakeReservation: AgencyServicesMakeReservation;
  static readonly FetchRooms: AgencyServicesFetchRooms;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class AgencyServicesClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  checkAvailability(
    requestMessage: protocol_agency_pb.AvailabilityRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: protocol_agency_pb.AvailabilityResponse|null) => void
  ): UnaryResponse;
  checkAvailability(
    requestMessage: protocol_agency_pb.AvailabilityRequest,
    callback: (error: ServiceError|null, responseMessage: protocol_agency_pb.AvailabilityResponse|null) => void
  ): UnaryResponse;
  makeReservation(
    requestMessage: protocol_agency_pb.ReservationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: protocol_agency_pb.ReservationResponse|null) => void
  ): UnaryResponse;
  makeReservation(
    requestMessage: protocol_agency_pb.ReservationRequest,
    callback: (error: ServiceError|null, responseMessage: protocol_agency_pb.ReservationResponse|null) => void
  ): UnaryResponse;
  fetchRooms(
    requestMessage: protocol_agency_pb.FetchRoomPayload,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: protocol_agency_pb.FetchRoomResponse|null) => void
  ): UnaryResponse;
  fetchRooms(
    requestMessage: protocol_agency_pb.FetchRoomPayload,
    callback: (error: ServiceError|null, responseMessage: protocol_agency_pb.FetchRoomResponse|null) => void
  ): UnaryResponse;
}

