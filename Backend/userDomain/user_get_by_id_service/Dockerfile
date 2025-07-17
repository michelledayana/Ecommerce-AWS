# Etapa 1: Construcción
FROM golang:1.20-alpine AS builder

WORKDIR /app

# Instala git y ca-certificates necesarios para módulos y HTTPS
RUN apk add --no-cache git ca-certificates

# Copia los archivos de módulos y descarga dependencias
COPY go.mod go.sum ./
RUN go mod download

# Copia el código fuente
COPY . .

# Construye el binario estático
RUN CGO_ENABLED=0 GOOS=linux go build -o main .

# Etapa 2: Imagen final súper liviana
FROM scratch

# Copiar el archivo .env
COPY .env ./

# Copia los certificados SSL para HTTPS si tu app los necesita
COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/

# Copia el binario compilado
COPY --from=builder /app/main /main

# Define el puerto que expone la app
EXPOSE 3010

# Ejecuta el binario
ENTRYPOINT ["/main"]
