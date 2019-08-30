const faker = require('faker');
const db = require('./database.js')

const createFakeTodos = (imageUrl) => {
  const result = {};
  result.imageUrl = imageUrl;
  result.liked = Math.round(Math.random());
  result.description = faker.lorem.sentence();
  result.kind = faker.commerce.department();
  result.price = faker.commerce.price();
  result.rating = Math.round(Math.random() * 5);
  return result;
}

const setFakeTodos = (imageUrl) => {
  const newFakeData = createFakeTodos(imageUrl);
  db.query(`INSERT INTO todos SET ?;`, newFakeData, (err) => {
    if (err) {
      console.log(err);
    }
  })
}

db.query("TRUNCATE TABLE todos");
for (let i = 0; i < 100; i++){
  let url = `https://nearbyentertainment.s3-us-west-1.amazonaws.com/${i}.jpg`
  setFakeTodos(url);
  console.log(i);
}