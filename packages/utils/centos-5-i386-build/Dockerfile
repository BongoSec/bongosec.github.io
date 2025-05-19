FROM centos:5

# Install required packages
RUN yum -y update && \
    yum -y install \
    gcc \
    gcc-c++ \
    make \
    wget \
    tar \
    rpm-build \
    rpmdevtools \
    yum-utils \
    && yum clean all

# Set up build environment
RUN mkdir -p /root/rpmbuild/{BUILD,RPMS,SOURCES,SPECS,SRPMS}

# Set working directory
WORKDIR /root

# Create a script to prepare the environment
COPY prepare.sh /root/
RUN chmod +x /root/prepare.sh

# Default command
CMD ["/bin/bash"] 