//  Add your code here
const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const celebritySchema = new Schema({
    name: String,
    occupation: String,
    catchphrase: String,
  });

const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;