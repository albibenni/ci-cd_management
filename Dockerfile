FROM alpine:latest

# generics
ENV SERVICE_NAME "my-name"
ENV SERVICE_TYPE "frontend"

## ignore errors -- it works

COPY myfile myfile


RUN pnpn install


RUN other other


RUN "/bin/bash"
