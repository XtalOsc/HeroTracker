var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(bodyParser.json());

//model
var Hero = require('../models/heroes.js');

var mongoURI = "mongodb://localhost:27017/Heroes";
mongoose.connect(mongoURI);


app.listen('4242', function(){
  console.log("I'm listening on port 4242");
});//end server spinup

app.get( '/', function(req,res){
  console.log('base url hit');
  res.sendFile( path.resolve('public/views/index.html'));
}); // end base url

app.use( express.static('public'));

//add pet to database
app.post('/addHero', function(req,res){
  console.log('in addHero');

  var newHero = new Hero({
    alias: req.body.alias,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    city: req.body.city,
    power_name: req.body.power_name
  });//end newHero

  newHero.save(function(err){
    if(err){
      console.log('error occurred:', err);
      res.sendStatus(500);
    }//end if
    else{
      res.sendStatus(201);
    }//end else
  });//end newHero save
});//end addHero
