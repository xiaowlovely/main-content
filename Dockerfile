FROM node:latest

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 3000
CMD [ "npm", "run", "nodemon" ,'&&',  "npm", "run", "fake-places", '&&',
"npm", "run", "fake-todos", '&&', "npm", "run", "react-dev" ]