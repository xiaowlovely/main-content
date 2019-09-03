const express = require('express');
const app = express();
const db = require('../database/database.js')
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.listen(3000, () => { console.log('Now listening port 3000.'); });
app.get('/api/place', (req, res) => {
  const arrSelect = [];
  while (arrSelect.length < 12) {
    const randomIndex = Math.round(Math.random() * 100);
    if (arrSelect.indexOf(randomIndex) === -1) {
      arrSelect.push(randomIndex);
    } else {
      continue;
    }
  }
  db.query("SELECT * FROM places WHERE place_id in (?)", [arrSelect], (err, results) => {
    if (err){
      res.sendStatus(400);
    }else{
      res.status(200).send(results);
    }
  })
})

app.get('/api/todo', (req, res) => {
  const arrSelect = [];
  while (arrSelect.length < 20) {
    const randomIndex = Math.round(Math.random() * 100);
    if (arrSelect.indexOf(randomIndex) === -1) {
      arrSelect.push(randomIndex);
    } else {
      continue;
    }
  }
  db.query("SELECT * FROM todos WHERE todo_id in (?)", [arrSelect], (err, results) => {
    if (err){
      console.log(err);
      res.sendStatus(400);
    }else{
      res.status(200).send(results);
      console.log('sucess!');
    }
  })
})