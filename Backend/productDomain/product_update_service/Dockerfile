# Etapa de construcción
FROM golang:1.24-alpine AS builder

WORKDIR /app

COPY go.mod go.sum ./
RUN apk add --no-cache git
RUN go mod download

COPY . .

RUN go build -o app

# Etapa final
FROM alpine:latest

WORKDIR /app

COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
COPY --from=builder /app/app /app

# Solo si el archivo .env existe en tu máquina:
COPY .env /app/.env

EXPOSE 3016

CMD ["./app"]
