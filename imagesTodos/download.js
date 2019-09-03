const fs = require('fs');
const request = require('request');
let number = 0;
const store = [];
const downloadImages = () => {
  if (number < 100) {
    request('https://loremflickr.com/json/1280/720/entertainment', (err, res, body) => {
      const data = JSON.parse(body);
      if (store.includes(data.file)) {
        downloadImages()
      } else {
        request(data.file).pipe(fs.createWriteStream(`./imagesTodos/${number}.jpg`)).on('close', ()=>{
          downloadImages();
          number += 1;
          console.log(number);
        })
      }
    })
  } else {
    return console.log('done')
  }
}

downloadImages();