# Utilizar uma imagem base do Node.js
FROM node:18

# Definir o diretório de trabalho no container
WORKDIR /app

# Copiar o arquivo package.json e package-lock.json para instalar as dependências
COPY package*.json ./

# Instalar as dependências da aplicação
RUN npm install

# Copiar todo o código da API para o container
COPY . .

# Expor a porta 3000 no container
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]
