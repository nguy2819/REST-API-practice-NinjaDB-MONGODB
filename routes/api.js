const express = require('express');
const router = express.Router();

//get a list of ninjas from the db
router.get('/ninjas',function(req, res){
  res.send({type: 'GET'}); //when we run the browser: localhost:4000/api/ninjas => the webpage will appear {type: 'GET'}
});

//add a new ninjas to the db
router.post('/ninjas',function(req, res){ //Use Postman to POST info to Body (under Raw and JSON)
    console.log(req.body);
    res.send({
        type: 'POST',
        nationality: req.body.nationality,
        relationship: req.body.relationship
    });
  }); //res.send will send the data I posted on Postman back to Client (ex: { type: 'POST', nationality: 'Vietnam', relationship: 'married' })

//update a ninja in the db
router.put('/ninjas/:id',function(req, res){
    res.send({type: 'PUT'});
  });

//delete a ninja from the db
router.delete('/ninjas/:id',function(req, res){
    res.send({type: 'DELETE'});
  });

module.exports = router;