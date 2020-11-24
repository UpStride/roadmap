#!/bin/bash

# Parameters
IMAGE="upstride/roadmap:1.0"
PORT="80"
SERVICE="roadmap"

# Build container
docker build -t $IMAGE .

# Run service
docker run --name $SERVICE -itd --rm \
           -p $PORT:$PORT \
            $IMAGE

