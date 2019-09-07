FROM node:latest

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install -g nodemon

RUN npm install -g webpack

RUN npm install

EXPOSE 3000
CMD [ "npm", "run", "nodemon" ]
CMD [ "npm", "run", "fake-places" ]
CMD [ "npm", "run", "fake-todos" ]
CMD [ "npm", "run", "react-dev" ]