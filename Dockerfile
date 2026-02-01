From node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN NPM INSTALL  

copy . .

EXPOSE 3000

CMD ["npm", "start"]