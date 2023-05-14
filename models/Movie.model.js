//  Add your code here
const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const movieSchema = new Schema({
    title: String,
    genre: String,
    plot: String,
    cast: []
  });

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;