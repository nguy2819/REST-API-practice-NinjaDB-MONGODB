const express = require('express');

//set up express app
const app = express();

app.get('/api',function(req, res){
  console.log('GET request'); //2nd: browser -> localhost:4000/api -> it will send back to terminal GET request
  //if you forget /api and only look for localhost:4000/ -> it will show on the page that "annot GET /"
  //res.end(); //if we do not have anything to send back to client, our localhost:4000/api will keep running, so we need to type res.end() to end the process
  res.send({name: 'Tien'}) //run again from begining, 1st node src/index.js; then 2nd localhost:4000/api => we will see on the page appears {name: 'Tien'} - this means we just requested API sent back that info {name: 'Tien'}
});

app.post('/api',function(req, res){

})

app.put('/api',function(req, res){

})

app.delete('/api',function(req, res){

})

//listen for request
app.listen(process.env.port || 4000, function(){
  console.log('now listening for requests'); //1st: in terminal, we typed node src/index.js -> it will show "now listening for requests"
});