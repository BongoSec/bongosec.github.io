#!/bin/bash

# Create necessary directories
mkdir -p /root/build

# Set up environment variables
export PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
export CFLAGS="-m32"
export CXXFLAGS="-m32"
export LDFLAGS="-m32"

# Create the tar.gz file
cd /root
tar -czf centos-5-i386.tar.gz build/

# Move the file to the output directory
mv centos-5-i386.tar.gz /output/ 