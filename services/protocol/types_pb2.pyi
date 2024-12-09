from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Address(_message.Message):
    __slots__ = ("country", "city", "street", "number", "location_hint", "gps_position")
    COUNTRY_FIELD_NUMBER: _ClassVar[int]
    CITY_FIELD_NUMBER: _ClassVar[int]
    STREET_FIELD_NUMBER: _ClassVar[int]
    NUMBER_FIELD_NUMBER: _ClassVar[int]
    LOCATION_HINT_FIELD_NUMBER: _ClassVar[int]
    GPS_POSITION_FIELD_NUMBER: _ClassVar[int]
    country: str
    city: str
    street: str
    number: str
    location_hint: str
    gps_position: GPSPosition
    def __init__(self, country: _Optional[str] = ..., city: _Optional[str] = ..., street: _Optional[str] = ..., number: _Optional[str] = ..., location_hint: _Optional[str] = ..., gps_position: _Optional[_Union[GPSPosition, _Mapping]] = ...) -> None: ...

class Header(_message.Message):
    __slots__ = ("code", "message")
    CODE_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    code: int
    message: str
    def __init__(self, code: _Optional[int] = ..., message: _Optional[str] = ...) -> None: ...

class GPSPosition(_message.Message):
    __slots__ = ("latitude", "longitude")
    LATITUDE_FIELD_NUMBER: _ClassVar[int]
    LONGITUDE_FIELD_NUMBER: _ClassVar[int]
    latitude: float
    longitude: float
    def __init__(self, latitude: _Optional[float] = ..., longitude: _Optional[float] = ...) -> None: ...

class Room(_message.Message):
    __slots__ = ("id", "beds", "base_price", "image_url")
    ID_FIELD_NUMBER: _ClassVar[int]
    BEDS_FIELD_NUMBER: _ClassVar[int]
    BASE_PRICE_FIELD_NUMBER: _ClassVar[int]
    IMAGE_URL_FIELD_NUMBER: _ClassVar[int]
    id: str
    beds: int
    base_price: float
    image_url: str
    def __init__(self, id: _Optional[str] = ..., beds: _Optional[int] = ..., base_price: _Optional[float] = ..., image_url: _Optional[str] = ...) -> None: ...

class Offer(_message.Message):
    __slots__ = ("id", "room", "available_date", "price")
    ID_FIELD_NUMBER: _ClassVar[int]
    ROOM_FIELD_NUMBER: _ClassVar[int]
    AVAILABLE_DATE_FIELD_NUMBER: _ClassVar[int]
    PRICE_FIELD_NUMBER: _ClassVar[int]
    id: str
    room: Room
    available_date: str
    price: float
    def __init__(self, id: _Optional[str] = ..., room: _Optional[_Union[Room, _Mapping]] = ..., available_date: _Optional[str] = ..., price: _Optional[float] = ...) -> None: ...

class Customer(_message.Message):
    __slots__ = ("first_name", "last_name", "credit_card")
    FIRST_NAME_FIELD_NUMBER: _ClassVar[int]
    LAST_NAME_FIELD_NUMBER: _ClassVar[int]
    CREDIT_CARD_FIELD_NUMBER: _ClassVar[int]
    first_name: str
    last_name: str
    credit_card: CreditCard
    def __init__(self, first_name: _Optional[str] = ..., last_name: _Optional[str] = ..., credit_card: _Optional[_Union[CreditCard, _Mapping]] = ...) -> None: ...

class CreditCard(_message.Message):
    __slots__ = ("number", "expiration_date", "cvv")
    NUMBER_FIELD_NUMBER: _ClassVar[int]
    EXPIRATION_DATE_FIELD_NUMBER: _ClassVar[int]
    CVV_FIELD_NUMBER: _ClassVar[int]
    number: str
    expiration_date: str
    cvv: str
    def __init__(self, number: _Optional[str] = ..., expiration_date: _Optional[str] = ..., cvv: _Optional[str] = ...) -> None: ...
