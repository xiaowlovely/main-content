const faker = require('faker');
const db = require('./database.js')

const createFakeTodos = () => {
  const result = {};
  result.imageUrl = faker.image.nature();
  result.liked = Math.round(Math.random());
  result.description = faker.lorem.sentence();
  result.kind = faker.commerce.department();
  result.price = faker.commerce.price();
  result.rating = Math.round(Math.random() * 5);
  return result;
}

const setFakeTodos = () => {
  const newFakeData = createFakeTodos();
  db.query(`INSERT INTO todos SET ?;`, newFakeData, (err) => {
    if (err) {
      console.log(err);
    }
  })
}

db.query("TRUNCATE TABLE todos");
for (let i = 0; i < 100; i++){
  setFakeTodos();
}