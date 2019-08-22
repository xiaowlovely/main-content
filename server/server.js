const express = require('express');
const app = express();
const fakeData = require('./fakeData.js')
app.use(express.static("../client/dist"));
app.listen(3000, ()=>{console.log('Now listening port 3000.')});

