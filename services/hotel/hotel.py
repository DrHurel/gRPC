import argparse
import configparser
import logging
import sys
from pathlib import Path
from sqlalchemy import create_engine

from server import serve

root_path = Path(__file__).parent

sys.path.append(str(root_path / "../../"))

from sqlalchemy import create_engine

config = configparser.ConfigParser()
config.read(root_path / "hotel.ini")

DATABASE_URI = config["DATABASE"]["URI"]
JWT_SECRET = config["SECURITY"]["JWT_SECRET"]


if __name__ == "__main__":

    logging.basicConfig(
        level=logging.INFO,  # Log level
        format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
        handlers=[logging.StreamHandler()],  # Logs to stdout
    )

    parser = argparse.ArgumentParser(prog="Hotel gRPC Service")

    parser.add_argument("-p", "--port")
    port = parser.parse_args().port
    engine = create_engine(DATABASE_URI, echo=True)  # echo=True logs SQL queries

    serve(port=port)
