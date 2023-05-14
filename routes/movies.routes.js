// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here
// const Celebrities = Celebrity.find()


router.get('/movies/create', (req, res, next) => {
    res.render('movies/new-movie');
})

router.post('/movies/create', (req, res, next)=>{
    
    let {title, genre, plot, cast} = req.body;
    let newMovie = {
        title,
        genre,
        plot,
        cast
    }
    Movie.create(newMovie)
    .then(movie => {
        res.redirect("/movies");
    })
    .catch(err => {
        console.log(err)
        res.render('movies/new-movie');
    })
})



module.exports = router;