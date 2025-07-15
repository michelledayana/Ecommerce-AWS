# Usa una imagen base de Java
FROM openjdk:17-jdk-slim

# Crea un directorio para la app
WORKDIR /app

# Copia el jar generado por Maven
COPY target/user-update-service-1.0.0.jar app.jar

# Expón el puerto del servicio
EXPOSE 8080

# Comando para ejecutar el microservicio
ENTRYPOINT ["java", "-jar", "app.jar"]
