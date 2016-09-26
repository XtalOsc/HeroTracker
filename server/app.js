var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(bodyParser.json());


app.listen('4242', function(){
  console.log("I'm listening on port 4242");
});//end server spinup

app.get( '/', function(req,res){
  console.log('base url hit');
  res.sendFile( path.resolve('public/index.html'));
}); // end base url
