const mysql = require('mysql');
const db = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'nearby'
});
db.connect(err => {
  if (err){
    console.log(err);
  }else{
    console.log('connected!');
  }
});

module.exports = db;

