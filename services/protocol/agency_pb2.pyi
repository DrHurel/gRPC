from protocol import types_pb2 as _types_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class AvailabilityRequest(_message.Message):
    __slots__ = ("agency_id", "agency_password", "start_date", "end_date", "num_people")
    AGENCY_ID_FIELD_NUMBER: _ClassVar[int]
    AGENCY_PASSWORD_FIELD_NUMBER: _ClassVar[int]
    START_DATE_FIELD_NUMBER: _ClassVar[int]
    END_DATE_FIELD_NUMBER: _ClassVar[int]
    NUM_PEOPLE_FIELD_NUMBER: _ClassVar[int]
    agency_id: str
    agency_password: str
    start_date: str
    end_date: str
    num_people: int
    def __init__(self, agency_id: _Optional[str] = ..., agency_password: _Optional[str] = ..., start_date: _Optional[str] = ..., end_date: _Optional[str] = ..., num_people: _Optional[int] = ...) -> None: ...

class AvailabilityResponse(_message.Message):
    __slots__ = ("offers",)
    OFFERS_FIELD_NUMBER: _ClassVar[int]
    offers: _containers.RepeatedCompositeFieldContainer[_types_pb2.Offer]
    def __init__(self, offers: _Optional[_Iterable[_Union[_types_pb2.Offer, _Mapping]]] = ...) -> None: ...

class ReservationRequest(_message.Message):
    __slots__ = ("agency_id", "agency_login", "agency_password", "offer_id", "customer")
    AGENCY_ID_FIELD_NUMBER: _ClassVar[int]
    AGENCY_LOGIN_FIELD_NUMBER: _ClassVar[int]
    AGENCY_PASSWORD_FIELD_NUMBER: _ClassVar[int]
    OFFER_ID_FIELD_NUMBER: _ClassVar[int]
    CUSTOMER_FIELD_NUMBER: _ClassVar[int]
    agency_id: str
    agency_login: str
    agency_password: str
    offer_id: str
    customer: _types_pb2.Customer
    def __init__(self, agency_id: _Optional[str] = ..., agency_login: _Optional[str] = ..., agency_password: _Optional[str] = ..., offer_id: _Optional[str] = ..., customer: _Optional[_Union[_types_pb2.Customer, _Mapping]] = ...) -> None: ...

class ReservationResponse(_message.Message):
    __slots__ = ("success", "confirmation_code", "message")
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    CONFIRMATION_CODE_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    success: bool
    confirmation_code: str
    message: str
    def __init__(self, success: bool = ..., confirmation_code: _Optional[str] = ..., message: _Optional[str] = ...) -> None: ...
