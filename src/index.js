const express = require('express');

//set up express app
const app = express();

app.get('/',function(){
  console.log('GET request');
});

//listen for request
app.listen(process.env.port || 4000, function(){
  console.log('now listening for requests');
});