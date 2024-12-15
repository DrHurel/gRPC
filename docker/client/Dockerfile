FROM node:20.18.1-alpine

WORKDIR /app

COPY ./services/client/ .

RUN npm install -g @angular/cli

RUN npm install

EXPOSE 4200

CMD [ "ng","serve", "--host","0.0.0.0" ]