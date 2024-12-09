import argparse
import logging
import sys
from pathlib import Path

from agency.serve import serve

sys.path.append(str(Path(__file__).parent / "../"))


if __name__ == "__main__":
    logging.basicConfig(
        level=logging.INFO,  # Log level
        format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
        handlers=[logging.StreamHandler()],  # Logs to stdout
    )

    parser = argparse.ArgumentParser(prog="Hotel gRPC Service")

    parser.add_argument("-p", "--port")
    port = parser.parse_args().port

    serve(port)
