# Usa imagem oficial do Node.js
FROM node:18

# Cria diretório da aplicação
WORKDIR /app

# Copia os arquivos
COPY package*.json ./
RUN npm install
COPY . .

# Expõe a porta do backend
EXPOSE 3001

# Comando para iniciar a API
CMD ["node", "server.js"]
