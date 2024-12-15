// package: protocol
// file: protocol/types.proto

import * as jspb from "google-protobuf";

export class Address extends jspb.Message {
  getCountry(): string;
  setCountry(value: string): void;

  getCity(): string;
  setCity(value: string): void;

  getStreet(): string;
  setStreet(value: string): void;

  getNumber(): string;
  setNumber(value: string): void;

  getLocationHint(): string;
  setLocationHint(value: string): void;

  hasGpsPosition(): boolean;
  clearGpsPosition(): void;
  getGpsPosition(): GPSPosition | undefined;
  setGpsPosition(value?: GPSPosition): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Address.AsObject;
  static toObject(includeInstance: boolean, msg: Address): Address.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Address, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Address;
  static deserializeBinaryFromReader(message: Address, reader: jspb.BinaryReader): Address;
}

export namespace Address {
  export type AsObject = {
    country: string,
    city: string,
    street: string,
    number: string,
    locationHint: string,
    gpsPosition?: GPSPosition.AsObject,
  }
}

export class Header extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Header.AsObject;
  static toObject(includeInstance: boolean, msg: Header): Header.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Header, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Header;
  static deserializeBinaryFromReader(message: Header, reader: jspb.BinaryReader): Header;
}

export namespace Header {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class GPSPosition extends jspb.Message {
  getLatitude(): number;
  setLatitude(value: number): void;

  getLongitude(): number;
  setLongitude(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GPSPosition.AsObject;
  static toObject(includeInstance: boolean, msg: GPSPosition): GPSPosition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GPSPosition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GPSPosition;
  static deserializeBinaryFromReader(message: GPSPosition, reader: jspb.BinaryReader): GPSPosition;
}

export namespace GPSPosition {
  export type AsObject = {
    latitude: number,
    longitude: number,
  }
}

export class Room extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getBeds(): number;
  setBeds(value: number): void;

  getBasePrice(): number;
  setBasePrice(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Room.AsObject;
  static toObject(includeInstance: boolean, msg: Room): Room.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Room, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Room;
  static deserializeBinaryFromReader(message: Room, reader: jspb.BinaryReader): Room;
}

export namespace Room {
  export type AsObject = {
    id: string,
    beds: number,
    basePrice: number,
  }
}

export class Offer extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getAvailableDate(): string;
  setAvailableDate(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Offer.AsObject;
  static toObject(includeInstance: boolean, msg: Offer): Offer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Offer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Offer;
  static deserializeBinaryFromReader(message: Offer, reader: jspb.BinaryReader): Offer;
}

export namespace Offer {
  export type AsObject = {
    id: string,
    room?: Room.AsObject,
    availableDate: string,
    price: number,
  }
}

export class Customer extends jspb.Message {
  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  hasCreditCard(): boolean;
  clearCreditCard(): void;
  getCreditCard(): CreditCard | undefined;
  setCreditCard(value?: CreditCard): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Customer.AsObject;
  static toObject(includeInstance: boolean, msg: Customer): Customer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Customer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Customer;
  static deserializeBinaryFromReader(message: Customer, reader: jspb.BinaryReader): Customer;
}

export namespace Customer {
  export type AsObject = {
    firstName: string,
    lastName: string,
    creditCard?: CreditCard.AsObject,
  }
}

export class CreditCard extends jspb.Message {
  getNumber(): string;
  setNumber(value: string): void;

  getExpirationDate(): string;
  setExpirationDate(value: string): void;

  getCvv(): string;
  setCvv(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreditCard.AsObject;
  static toObject(includeInstance: boolean, msg: CreditCard): CreditCard.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreditCard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreditCard;
  static deserializeBinaryFromReader(message: CreditCard, reader: jspb.BinaryReader): CreditCard;
}

export namespace CreditCard {
  export type AsObject = {
    number: string,
    expirationDate: string,
    cvv: string,
  }
}

