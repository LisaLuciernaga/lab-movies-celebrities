// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here

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
    .then(result => {
        res.redirect("/");
    })
    .catch(err => res.send(err))
  })

module.exports = router;