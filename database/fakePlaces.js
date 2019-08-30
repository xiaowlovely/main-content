const faker = require('faker');
const db = require('./database.js');
const request = require('request');

const createFakePlaces = (imageUrl) => {
  const result = {};
  result.imageUrl = imageUrl;
  result.liked = 0;
  result.description = faker.lorem.sentence();
  result.location = faker.address.city();
  result.kind = faker.commerce.department();
  result.price = faker.commerce.price();
  result.review = Math.floor(Math.random() * 1000);
  result.rating = Math.floor(Math.random() * 5);
  return result;
}

const setFakePlaces = (imageUrl) => {
  const newFakeData = createFakePlaces(imageUrl);
  db.query(`INSERT INTO places SET ?;`, newFakeData, (err) => {
    if (err) {
      console.log(err);
    }
  })
}

db.query("TRUNCATE TABLE places");
for (let i = 0; i < 100; i++){
  let url = `https://nearbyimages.s3-us-west-1.amazonaws.com/${i}.jpg`
  setFakePlaces(url);
  console.log(i);
}