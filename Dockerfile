FROM node:latest

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

RUN yarn global add nodemon

EXPOSE 3000

CMD [ "npm", "run", "fake-places" ]
CMD [ "npm", "run", "fake-todos" ]
CMD [ "npm", "run", "react-dev" ]
CMD [ "npm", "run", "nodemon" ]