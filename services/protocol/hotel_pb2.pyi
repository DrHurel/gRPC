from protocol import types_pb2 as _types_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class FetchRoomPayload(_message.Message):
    __slots__ = ("header", "roomUUID", "startDate", "endDate", "beds", "minsize", "minprize", "maxprice")
    HEADER_FIELD_NUMBER: _ClassVar[int]
    ROOMUUID_FIELD_NUMBER: _ClassVar[int]
    STARTDATE_FIELD_NUMBER: _ClassVar[int]
    ENDDATE_FIELD_NUMBER: _ClassVar[int]
    BEDS_FIELD_NUMBER: _ClassVar[int]
    MINSIZE_FIELD_NUMBER: _ClassVar[int]
    MINPRIZE_FIELD_NUMBER: _ClassVar[int]
    MAXPRICE_FIELD_NUMBER: _ClassVar[int]
    header: _types_pb2.Header
    roomUUID: str
    startDate: str
    endDate: str
    beds: int
    minsize: int
    minprize: int
    maxprice: int
    def __init__(self, header: _Optional[_Union[_types_pb2.Header, _Mapping]] = ..., roomUUID: _Optional[str] = ..., startDate: _Optional[str] = ..., endDate: _Optional[str] = ..., beds: _Optional[int] = ..., minsize: _Optional[int] = ..., minprize: _Optional[int] = ..., maxprice: _Optional[int] = ...) -> None: ...

class FetchRoomResponse(_message.Message):
    __slots__ = ("header", "rooms")
    HEADER_FIELD_NUMBER: _ClassVar[int]
    ROOMS_FIELD_NUMBER: _ClassVar[int]
    header: _types_pb2.Header
    rooms: _containers.RepeatedCompositeFieldContainer[_types_pb2.Room]
    def __init__(self, header: _Optional[_Union[_types_pb2.Header, _Mapping]] = ..., rooms: _Optional[_Iterable[_Union[_types_pb2.Room, _Mapping]]] = ...) -> None: ...

class ReservationRequest(_message.Message):
    __slots__ = ("header", "roomUUID")
    HEADER_FIELD_NUMBER: _ClassVar[int]
    ROOMUUID_FIELD_NUMBER: _ClassVar[int]
    header: _types_pb2.Header
    roomUUID: str
    def __init__(self, header: _Optional[_Union[_types_pb2.Header, _Mapping]] = ..., roomUUID: _Optional[str] = ...) -> None: ...

class ReservationResponse(_message.Message):
    __slots__ = ("header", "success", "confirmation_code")
    HEADER_FIELD_NUMBER: _ClassVar[int]
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    CONFIRMATION_CODE_FIELD_NUMBER: _ClassVar[int]
    header: _types_pb2.Header
    success: bool
    confirmation_code: str
    def __init__(self, header: _Optional[_Union[_types_pb2.Header, _Mapping]] = ..., success: bool = ..., confirmation_code: _Optional[str] = ...) -> None: ...
