This is an Node.js express web app that makes a connection to a mongodb database. Created as a plauground for docker and docker-compose.

# Build docker image

To build web app docker image use the following command (tag is important because it is used later on):

```
docker build -t nodejs:latest .
```

# Run using docker-compose

To run both the web app and mongo database containers you can use docker-compose. Configuration is distated from docker-compose.yml.

```
docker-compose up
```


