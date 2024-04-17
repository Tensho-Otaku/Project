FROM node:21.7.3

COPY package*.json ./

WORKDIR /opt/server/backend-test

COPY . .

RUN npm install
EXPOSE 8080
CMD [ "node", "index.js" ]