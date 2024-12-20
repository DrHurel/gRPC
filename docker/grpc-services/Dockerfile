# Use a lightweight Python image
FROM python:3.10-slim

# Set environment variables to avoid interactive prompts during package installation
ENV DEBIAN_FRONTEND=noninteractive


# Set the working directory
WORKDIR /app

ARG SERVICE
ARG SERVICE_ID
ARG EXPOSED_PORT

COPY ./docker/${SERVICE_ID}/ . 
COPY ./docker/grpc-services/requirement.txt .

# Install system dependencies, including PostgreSQL development libraries
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Install dependencies
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirement.txt

COPY ./services/${SERVICE}/ .
COPY ./services/protocol/ ./protocol/
# Expose the Uvicorn port
EXPOSE ${EXPOSED_PORT}


ENV SERVICE=${SERVICE}
ENV PORT=${EXPOSED_PORT}
ENV GRPC_TRACE="call,call_error"
# Command to run Uvicorn
CMD python -m $SERVICE -p ${PORT}
