#!/bin/bash

docker build -t registry.digitalocean.com/iu-evp/frontend:latest .
docker push registry.digitalocean.com/iu-evp/frontend:latest
