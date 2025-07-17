# Etapa 1: compilar el binario estático con Go
FROM golang:1.22-alpine AS builder

WORKDIR /app

# Instala git y librerías necesarias para dependencias
RUN apk --no-cache add git

COPY go.mod go.sum ./
RUN go mod download

COPY . .

# Compilar el binario de forma estática
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o main main.go

# Etapa 2: imagen final ligera basada en Alpine
FROM alpine:latest

WORKDIR /app

# Copiar el binario compilado
COPY --from=builder /app/main .

# Copiar el archivo .env si existe
COPY --from=builder /app/.env . 

# Exponer el puerto
EXPOSE 3013

# Ejecutar el binario
ENTRYPOINT ["./main"]
