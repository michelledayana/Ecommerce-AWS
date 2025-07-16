# Etapa de construcción
FROM golang:1.20-alpine AS builder

WORKDIR /app

# Copia los archivos necesarios
COPY go.mod go.sum ./
RUN go mod download

COPY . .

# Construye el binario
RUN go build -o user-list-service .

# Etapa final
FROM alpine:latest

WORKDIR /app

# Copia el binario desde el builder
COPY --from=builder /app/user-list-service .

# Expone el puerto donde corre la app
EXPOSE 3013

# Comando para ejecutar la app
CMD ["./user-list-service"]
