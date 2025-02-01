FROM node:latest

# Crear directorio de trabajo
WORKDIR /app

# Instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar los archivos del proyecto
COPY . .

# Exponer el puerto y ejecutar el proyecto
EXPOSE 3000
CMD ["npm", "run", "dev"]
