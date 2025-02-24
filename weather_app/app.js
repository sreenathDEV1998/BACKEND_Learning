const request = require('postman-request');

const url =  'http://api.weatherstack.com/current?access_key=c0e4e448e92e0391c18fbf8ef2529f31&query=';

request({ url: url }, (error, response)=>{
    console.log(error)
    console.log(JSON.parse(response.body))
});