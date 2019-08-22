const faker = require('faker');
const db = require('./database.js')
const createFakeData = () =>{
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

const setFakeDatabase = ()=>{
  const newFakeData = createFakeData();
  db.query(`INSERT INTO places SET ?;`, newFakeData, (err)=>{
             if (err){
               console.log(err);
             }
           })
}
db.query("TRUNCATE TABLE places");
for (let i = 0; i < 100; i++){
  setFakeDatabase()
}