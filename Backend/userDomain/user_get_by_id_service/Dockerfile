# Etapa 1: compilar el binario estático
FROM golang:1.21-alpine AS builder

WORKDIR /app

# Instala git y librerías necesarias para dependencias (si usas GORM con MySQL)
RUN apk --no-cache add git

COPY go.mod go.sum ./
RUN go mod download

COPY . .

# Compilar el binario de forma estática
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o main .

# Etapa 2: imagen final ultra liviana
FROM scratch

# Copia el binario desde el builder
COPY --from=builder /app/main /main

# Copia variables de entorno si lo usas
COPY --from=builder /app/.env /app/.env

# Establece el directorio de trabajo (opcional)
WORKDIR /app

# Expone el puerto
EXPOSE 3013

# Ejecuta el binario
ENTRYPOINT ["/main"]
