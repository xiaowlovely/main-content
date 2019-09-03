const request = require('request');
const server = require('../../../server/server.js');
describe('test for api call on places',()=>{
  request('./api/place', (err, res, body) => {
    test("get request on api '/api/place' is not undefined", ()=>{
      expect(body).not.ToBeUndefined;
    });
  })
});
