const mysql = require('mysql');
const faker = require('faker');
const db = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'nearby'
});

db.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected!');
  }
});

const createFakePlaces = () => {
  const result = {};
  result.imageUrl = faker.image.imageUrl();
  result.liked = Math.round(Math.random());
  result.description = faker.lorem.sentence();
  result.location = faker.address.city();
  result.kind = faker.commerce.department();
  result.price = faker.commerce.price();
  result.rating = Math.round(Math.random() * 5);
  return result;
}
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

const setFakePlaces = (table) => {
  const newFakeData = createFakePlaces();
  db.query(`INSERT INTO places SET ?;`, newFakeData, (err) => {
    if (err) {
      console.log(err);
    }
  })
}

const setFakeTodos = () => {
  const newFakeData = createFakeTodos();
  db.query(`INSERT INTO todos SET ?;`, newFakeData, (err) => {
    if (err) {
      console.log(err);
    }
  })
}
module.exports = {
  con: db,
  setFakePlaces: setFakePlaces,
  setFakeTodos: setFakeTodos
};

