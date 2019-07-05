FROM golang:alpine

WORKDIR /go/src/app
COPY server/src/app .

RUN apk --no-cache add curl git
RUN curl https://raw.githubusercontent.com/golang/dep/master/install.sh | sh
RUN dep ensure
RUN go get -d -v ./...
RUN go install -v ./...
CMD ["app"]
