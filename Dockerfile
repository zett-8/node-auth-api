FROM node:10-alpine

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn cache clean

RUN yarn install

COPY . .

RUN npx sequelize-cli db:migrate

CMD ["node", "."]

EXPOSE 3333
