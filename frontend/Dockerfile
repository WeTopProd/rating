FROM node:18.1.0-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY .. .

RUN npm run build
CMD cp -r build result_build
ENV NODE_ENV=production

CMD ["npm", "start"]
