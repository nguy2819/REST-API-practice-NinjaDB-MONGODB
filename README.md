### Step 1: Download MongoDB
- If you use macOS, in your terminal, typed "cd/"
- It will go to "/ borlandtien$" (your home based on your personal computer's name)
- In your home base, then "mkdir data" or "sudo mkdir data" (force to make a directory - named data)
- ["mongod --dbpath data/"](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#specify-the-path-of-the-data-directory)
- When you see ["[initandlisten] waiting for connections on port 27017"](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#verify-that-mongodb-has-started-successfully) - which means MongoDB has started in your computer successfully

### Step 2: Create a package.json
- Terminal => rest-api-practice => npm init -y

### Step 3: Install express.nodejs
- Terminal => rest-api-practice => npm install express --save
- It will show in your package.json, "dependencies": {"express": "^4.16.3"}

### Step 4: Create a file "index.js"
- Since inside package.json, "main": "index.js" => which means the base will start from index.js
Inside index.js:
```
const express = require('express');

//set up express app
const app = express();

app.get('/api',function(req, res){
  console.log('GET request');
  res.send({name: 'Tien'})
});

//listen for request
app.listen(process.env.port || 4000, function(){
  console.log('now listening for requests');
})
```
### Step 5: Create a directory - named "routes" with a file - named "api.js"


## Install nodemon (to limit the extra steps running node src/index.js and localhost:4000/api) - if you want
- npm install nodemon --save-dev

## API: Application Programming Interface
## REST: REpresentational State Transfer 
- REST: - architechtual style of the web 
- REST: - a standard/ set of guidelines by which we can structure & create API's
- REST: - REST API's have identifiable properties

## REST properties: HTTP methods: GET POST PUT DELETE (CRUD)
- GET: Used to retrieve data from the server (Reading/ retrieving a list of data)
- POST: Used to send data to the server (Create a new data and store it)
- PUT: Used to update data (Update/ edit an existing data)
- DELETE: Used to delete data (Delete a data from database)

## HTTP Status Codes:
- Ex: 200 means OK; 404 means Resource Not Found; 500 means server error

* REST-API TUTORIAL from [The Net Ninja](https://www.youtube.com/watch?v=BRdcRFvuqsE&list=PL4cUxeGkcC9jBcybHMTIia56aV21o2cZ8)