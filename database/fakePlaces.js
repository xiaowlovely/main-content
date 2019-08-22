const db = require('./database.js')

db.con.query("TRUNCATE TABLE places");
for (let i = 0; i < 100; i++){
  db.setFakePlaces();
}