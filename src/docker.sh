#!/bin/bash

# Parameters
TAG="1.2"
IMAGE="upstride/roadmap:$TAG"
PORT="80"
SERVICE="roadmap"

# Build container
docker build -t $IMAGE .

# Run service
docker run --name $SERVICE -itd --rm \
           -p $PORT:$PORT \
            $IMAGE

