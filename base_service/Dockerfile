FROM golang:latest

WORKDIR /app
COPY . .
RUN go build main.go

EXPOSE 5212
ENTRYPOINT ["./main"]