FROM node:22.5-slim

WORKDIR /app

COPY . .

WORKDIR /app/next-app

RUN npm install

CMD ["npm", "run", "dev"]

EXPOSE 3000