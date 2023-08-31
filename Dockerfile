FROM node:20-alpine3.17
WORKDIR /backend
COPY . .
RUN npm install

EXPOSE 8080

CMD ["node", "index.js"]

