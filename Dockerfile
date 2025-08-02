FROM alpine:latest

# generics
ENV SERVICE_NAME "my-name"
ENV SERVICE_TYPE "frontend"


COPY myfile myfile


RUN "/bin/bash"
