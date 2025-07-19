# Dockerfile para el API Gateway
FROM node:18

# Crear directorio de trabajo
WORKDIR /app

# Copiar package.json e instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto del gateway
EXPOSE 3000

# Comando para ejecutar
CMD ["node", "server.js"]
