FROM node:6.11

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "start" ]
CMD [ "npm", "run", "fake-places" ]
CMD [ "npm", "run", "fake-todos" ]