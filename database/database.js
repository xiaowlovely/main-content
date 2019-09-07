const mysql = require('mysql');
const db = mysql.createConnection({
  host: '172.17.0.2',
  user: 'root',
  password: 'student',
  database: 'nearby'
});

db.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to database!');
  }
});

module.exports = db
