// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here
const mongoose = require('mongoose');
const Celebrity = require("../models/Celebrity.model");

//Creating new celebrities
router.get('/create', (req, res, next) => {
    res.render('celebrities/new-celebrity');
})

router.post('/create', (req, res, next)=>{

    let {celebrityName, occupation, catchPhrase} = req.body;
    let newCelebrity = {
        name:celebrityName,
        occupation: occupation,
        catchphrase: catchPhrase
    }
    Celebrity.create(newCelebrity)
    .then(celebrity => {
        res.redirect("/");
    })
    .catch(err => {
        console.log(err)
        res.render("/new-celebrity.hbs");
    })
  })

//Iteration 4, Displaying all celebrities
//Issues with the path of the view, issues with displaying the data correctly
router.get('/', (req, res, next) => {
    Celebrity.find()
    .then(celebrities => {
        let data = celebrities;
        // console.log(data)
        res.render('/Users/lisaschwetlick/Desktop/Ironhack/W4/lab-movies-celebrities/views/celebrities/celebrities.hbs', data);
    })
    .catch(err => {
        console.log(err);
    })
})

module.exports = router;