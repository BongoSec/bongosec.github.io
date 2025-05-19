#!/bin/bash

# Create output directory
mkdir -p output

# Build the Docker image
docker build -t centos5-i386-builder .

# Run the container to create the tar.gz file
docker run --rm -v $(pwd)/output:/output centos5-i386-builder /root/prepare.sh

# Move the file to the correct location
mv output/centos-5-i386.tar.gz .
rm -rf output

echo "centos-5-i386.tar.gz has been created successfully!" 