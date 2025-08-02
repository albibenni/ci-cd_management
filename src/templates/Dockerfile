FROM alpine:latest

# generics
ENV SERVICE_NAME "{{ serviceName }}"
ENV SERVICE_TYPE "{{ serviceType }}"

## ignore errors -- it works
{% for command in dockerfile.preInstallCommands %}
{{ command }}
{% endfor %}

RUN {{ dockerfile.installCommand }}

{% for command in dockerfile.postInstallCommands %}
{{ command }}
{% endfor %}

RUN "/bin/bash"
