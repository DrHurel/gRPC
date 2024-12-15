// package: protocol.agency
// file: protocol/agency.proto

import * as jspb from "google-protobuf";
import * as protocol_types_pb from "../protocol/types_pb";

export class AvailabilityRequest extends jspb.Message {
  getAgencyId(): string;
  setAgencyId(value: string): void;

  getAgencyPassword(): string;
  setAgencyPassword(value: string): void;

  getStartDate(): string;
  setStartDate(value: string): void;

  getEndDate(): string;
  setEndDate(value: string): void;

  getNumPeople(): number;
  setNumPeople(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailabilityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AvailabilityRequest): AvailabilityRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AvailabilityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailabilityRequest;
  static deserializeBinaryFromReader(message: AvailabilityRequest, reader: jspb.BinaryReader): AvailabilityRequest;
}

export namespace AvailabilityRequest {
  export type AsObject = {
    agencyId: string,
    agencyPassword: string,
    startDate: string,
    endDate: string,
    numPeople: number,
  }
}

export class AvailabilityResponse extends jspb.Message {
  clearOffersList(): void;
  getOffersList(): Array<protocol_types_pb.Offer>;
  setOffersList(value: Array<protocol_types_pb.Offer>): void;
  addOffers(value?: protocol_types_pb.Offer, index?: number): protocol_types_pb.Offer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailabilityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AvailabilityResponse): AvailabilityResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AvailabilityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailabilityResponse;
  static deserializeBinaryFromReader(message: AvailabilityResponse, reader: jspb.BinaryReader): AvailabilityResponse;
}

export namespace AvailabilityResponse {
  export type AsObject = {
    offersList: Array<protocol_types_pb.Offer.AsObject>,
  }
}

export class ReservationRequest extends jspb.Message {
  getAgencyId(): string;
  setAgencyId(value: string): void;

  getAgencyLogin(): string;
  setAgencyLogin(value: string): void;

  getAgencyPassword(): string;
  setAgencyPassword(value: string): void;

  getOfferId(): string;
  setOfferId(value: string): void;

  hasCustomer(): boolean;
  clearCustomer(): void;
  getCustomer(): protocol_types_pb.Customer | undefined;
  setCustomer(value?: protocol_types_pb.Customer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReservationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReservationRequest): ReservationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReservationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReservationRequest;
  static deserializeBinaryFromReader(message: ReservationRequest, reader: jspb.BinaryReader): ReservationRequest;
}

export namespace ReservationRequest {
  export type AsObject = {
    agencyId: string,
    agencyLogin: string,
    agencyPassword: string,
    offerId: string,
    customer?: protocol_types_pb.Customer.AsObject,
  }
}

export class ReservationResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getConfirmationCode(): string;
  setConfirmationCode(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReservationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReservationResponse): ReservationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReservationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReservationResponse;
  static deserializeBinaryFromReader(message: ReservationResponse, reader: jspb.BinaryReader): ReservationResponse;
}

export namespace ReservationResponse {
  export type AsObject = {
    success: boolean,
    confirmationCode: string,
    message: string,
  }
}

export class FetchRoomPayload extends jspb.Message {
  hasStartdate(): boolean;
  clearStartdate(): void;
  getStartdate(): string;
  setStartdate(value: string): void;

  hasEnddate(): boolean;
  clearEnddate(): void;
  getEnddate(): string;
  setEnddate(value: string): void;

  hasBeds(): boolean;
  clearBeds(): void;
  getBeds(): number;
  setBeds(value: number): void;

  hasMinsize(): boolean;
  clearMinsize(): void;
  getMinsize(): number;
  setMinsize(value: number): void;

  hasMinprize(): boolean;
  clearMinprize(): void;
  getMinprize(): number;
  setMinprize(value: number): void;

  hasMaxprice(): boolean;
  clearMaxprice(): void;
  getMaxprice(): number;
  setMaxprice(value: number): void;

  hasGps(): boolean;
  clearGps(): void;
  getGps(): protocol_types_pb.GPSPosition | undefined;
  setGps(value?: protocol_types_pb.GPSPosition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchRoomPayload.AsObject;
  static toObject(includeInstance: boolean, msg: FetchRoomPayload): FetchRoomPayload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchRoomPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchRoomPayload;
  static deserializeBinaryFromReader(message: FetchRoomPayload, reader: jspb.BinaryReader): FetchRoomPayload;
}

export namespace FetchRoomPayload {
  export type AsObject = {
    startdate: string,
    enddate: string,
    beds: number,
    minsize: number,
    minprize: number,
    maxprice: number,
    gps?: protocol_types_pb.GPSPosition.AsObject,
  }
}

export class FetchRoomResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): protocol_types_pb.Header | undefined;
  setHeader(value?: protocol_types_pb.Header): void;

  clearRoomsList(): void;
  getRoomsList(): Array<protocol_types_pb.Room>;
  setRoomsList(value: Array<protocol_types_pb.Room>): void;
  addRooms(value?: protocol_types_pb.Room, index?: number): protocol_types_pb.Room;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchRoomResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FetchRoomResponse): FetchRoomResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchRoomResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchRoomResponse;
  static deserializeBinaryFromReader(message: FetchRoomResponse, reader: jspb.BinaryReader): FetchRoomResponse;
}

export namespace FetchRoomResponse {
  export type AsObject = {
    header?: protocol_types_pb.Header.AsObject,
    roomsList: Array<protocol_types_pb.Room.AsObject>,
  }
}

