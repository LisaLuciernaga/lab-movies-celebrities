//  Add your code here
const Schema = require("mongoose");

const Celebrity = new Schema({
    name: String,
    occupation: String,
    catchphrase: String,
  });

module.exports = Celebrity;