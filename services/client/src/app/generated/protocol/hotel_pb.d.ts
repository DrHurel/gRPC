// package: protocol.hotel
// file: protocol/hotel.proto

import * as jspb from "google-protobuf";
import * as protocol_types_pb from "../protocol/types_pb";

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

export class ReservationRequest extends jspb.Message {
  getUuid(): string;
  setUuid(value: string): void;

  getStartDate(): string;
  setStartDate(value: string): void;

  getEndDate(): string;
  setEndDate(value: string): void;

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
    uuid: string,
    startDate: string,
    endDate: string,
  }
}

export class ReservationResponse extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): protocol_types_pb.Header | undefined;
  setHeader(value?: protocol_types_pb.Header): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getConfirmationCode(): string;
  setConfirmationCode(value: string): void;

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
    header?: protocol_types_pb.Header.AsObject,
    success: boolean,
    confirmationCode: string,
  }
}

