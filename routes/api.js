const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

//get a list of ninjas from the db
router.get('/ninjas',function(req, res, next){
  res.send({type: 'GET'}); //when we run the browser: localhost:4000/api/ninjas => the webpage will appear {type: 'GET'}
});

//add a new ninjas to the db
router.post('/ninjas',function(req, res, next){ //Use Postman to POST info to Body (under Raw and JSON)
    // var ninja = new Ninja(req.body);
    // ninja.save();
    Ninja.create(req.body).then(function(ninja){ //Ninja.create is a mongoose method
        res.send(ninja);
    })//the .then(function(ninja)) return data from DB (under name ninja)
    .catch(next);
  }); //res.send will send the data I posted on Postman back to Client (ex: { type: 'POST', nationality: 'Vietnam', relationship: 'married' })


//update a ninja in the db
router.put('/ninjas/:id',function(req, res, next){
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Ninja.findOne({_id: req.params.id}).then(function(ninja){
            res.send(ninja);
        })
    })
  });

//delete a ninja from the db
router.delete('/ninjas/:id', function(req, res, next){
    Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
      res.send(ninja);
    });
});

module.exports = router;