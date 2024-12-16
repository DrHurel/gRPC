// package: protocol.hotel
// file: protocol/hotel.proto

import * as protocol_hotel_pb from "../protocol/hotel_pb";
import {grpc} from "@improbable-eng/grpc-web";

type HotelServiceFetchRooms = {
  readonly methodName: string;
  readonly service: typeof HotelService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof protocol_hotel_pb.FetchRoomPayload;
  readonly responseType: typeof protocol_hotel_pb.FetchRoomResponse;
};

type HotelServiceMakeReservation = {
  readonly methodName: string;
  readonly service: typeof HotelService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof protocol_hotel_pb.ReservationRequest;
  readonly responseType: typeof protocol_hotel_pb.ReservationResponse;
};

export class HotelService {
  static readonly serviceName: string;
  static readonly FetchRooms: HotelServiceFetchRooms;
  static readonly MakeReservation: HotelServiceMakeReservation;
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

export class HotelServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  fetchRooms(
    requestMessage: protocol_hotel_pb.FetchRoomPayload,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: protocol_hotel_pb.FetchRoomResponse|null) => void
  ): UnaryResponse;
  fetchRooms(
    requestMessage: protocol_hotel_pb.FetchRoomPayload,
    callback: (error: ServiceError|null, responseMessage: protocol_hotel_pb.FetchRoomResponse|null) => void
  ): UnaryResponse;
  makeReservation(
    requestMessage: protocol_hotel_pb.ReservationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: protocol_hotel_pb.ReservationResponse|null) => void
  ): UnaryResponse;
  makeReservation(
    requestMessage: protocol_hotel_pb.ReservationRequest,
    callback: (error: ServiceError|null, responseMessage: protocol_hotel_pb.ReservationResponse|null) => void
  ): UnaryResponse;
}

