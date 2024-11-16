const router = require("express").Router();
// linking movies 
const movieRoutes = require ('./routes/movies.routes');
// linking celebs 
const celebRoutes = require ('./routes/celebrities.routes');

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});


module.exports = router;
