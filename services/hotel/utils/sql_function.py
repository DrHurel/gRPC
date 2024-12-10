import logging
from math import log
from sqlalchemy import Connection, text
from protocol.types_pb2 import Room
from utils.token import validate_token


def is_room_available(uuid, start_date, end_date, connection: Connection):
    try:
        return connection.execute(
            text(
                "SELECT is_room_available('{}', '{}','{}')".format(
                    uuid, start_date, end_date
                )
            )
        ).scalar()
    except Exception:
        return False


def create_reservation(uuid, start_date, end_date, connection: Connection):
    res = connection.execute(
        text(
            "SELECT * FROM create_reservation('{}' ,'{}','{}')".format(
                uuid, start_date, end_date
            )
        )
    ).fetchone()
    connection.commit()

    return res


def filter_by_availability(start_date, end_date, connection, rooms):
    logging.info("filter by availability")
    logging.info(rooms[0]._mapping["id"])
    rooms_list = [
        Room(
            id=str(room._mapping["id"]),
            beds=room._mapping["beds"],
            base_price=room._mapping["price"],
        )
        for room in rooms
    ]

    # Filter by availability if dates provided
    logging.info(start_date)
    if start_date and end_date and start_date != "" and end_date != "":
        rooms_list = [
            room
            for room in rooms_list
            if is_room_available(room.id, start_date, end_date, connection)
        ]

    return rooms_list


def fetch_rooms(minsize, minprize, maxprice, beds, connection):
    assert maxprice > minprize and maxprice > 0, "max price lead to error"
    query = """
                SELECT id, name, size, beds, price, description 
                FROM rooms 
                WHERE beds >= :beds 
                AND price >= :minprize 
                AND price <= :maxprice 
                AND size >= :minsize
            """

    params = {
        "beds": beds,
        "minprize": minprize,
        "maxprice": maxprice,
        "minsize": minsize,
    }

    rooms = connection.execute(text(query), params).fetchall()
    return rooms


def fetch_room_detail_by_id(uuid, connection):
    query = """
                SELECT r.id, r.name, r.size, r.beds, r.price, r.description
                FROM rooms r
                WHERE r.id = :uuid
            """

    result = connection.execute(text(query), {"uuid": uuid}).fetchone()
    return result


def delete_reservation_by_id(uuid, token, connection):
    _, payload = validate_token(token)
    user_id = payload.get("user_id")
    query = """
                DELETE reservations 
                WHERE id = :uuid 
            """

    connection.execute(text(query), {"uuid": uuid, "user_id": user_id})
