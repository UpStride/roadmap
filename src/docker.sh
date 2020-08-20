#!/bin/bash

# Parameters
IMAGE="upstride/roadmap:1.0-arthur"
PORT="8082"
SERVICE="roadmap"

# Build container
docker build -t $IMAGE .

# Run service
docker run --name $SERVICE -itd --rm \
           -p $PORT:$PORT \
            $IMAGE

