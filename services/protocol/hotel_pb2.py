# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: protocol/hotel.proto
# Protobuf Python Version: 5.28.1
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import runtime_version as _runtime_version
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
_runtime_version.ValidateProtobufRuntimeVersion(
    _runtime_version.Domain.PUBLIC,
    5,
    28,
    1,
    '',
    'protocol/hotel.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from protocol import types_pb2 as protocol_dot_types__pb2
from protocol import agency_pb2 as protocol_dot_agency__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x14protocol/hotel.proto\x12\x11reservation.hotel\x1a\x14protocol/types.proto\x1a\x15protocol/agency.proto\"y\n\x05Hotel\x12\n\n\x02id\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12%\n\x07\x61\x64\x64ress\x18\x03 \x01(\x0b\x32\x14.reservation.Address\x12\r\n\x05stars\x18\x04 \x01(\x05\x12 \n\x05rooms\x18\x05 \x03(\x0b\x32\x11.reservation.Room2\xda\x01\n\x0cHotelService\x12\x66\n\x11\x43heckAvailability\x12\'.reservation.agency.AvailabilityRequest\x1a(.reservation.agency.AvailabilityResponse\x12\x62\n\x0fMakeReservation\x12&.reservation.agency.ReservationRequest\x1a\'.reservation.agency.ReservationResponseb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'protocol.hotel_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  DESCRIPTOR._loaded_options = None
  _globals['_HOTEL']._serialized_start=88
  _globals['_HOTEL']._serialized_end=209
  _globals['_HOTELSERVICE']._serialized_start=212
  _globals['_HOTELSERVICE']._serialized_end=430
# @@protoc_insertion_point(module_scope)
