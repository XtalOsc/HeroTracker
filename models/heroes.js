console.log('in heroes.js');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var heroSchema = new Schema({
  alias: String,
  first_name: String,
  last_name: String,
  city: String,
  power_name: String
});

var Hero = mongoose.model('heroes', heroSchema);

module.exports = Hero;
