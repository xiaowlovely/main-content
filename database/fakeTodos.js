const faker = require('faker');
const db = require('./database.js')

db.con.query("TRUNCATE TABLE todos");
for (let i = 0; i < 100; i++){
  db.setFakeTodos();
}