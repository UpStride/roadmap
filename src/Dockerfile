FROM ubuntu:18.04

LABEL maintainer="wilder.lopes@upstride.io"

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY requirements.txt /usr/src/app/

RUN apt-get update && \
    apt-get install -y python3-pip python3-dev && \
    pip3 install --no-cache-dir -r requirements.txt

COPY . /usr/src/app

EXPOSE 8082

ENTRYPOINT ["python3", "run.py"]

