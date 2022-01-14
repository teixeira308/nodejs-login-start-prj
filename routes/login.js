
const express = require('express');
const router = express.Router();
const passport = require('passport');
 
/* GET login page. */
router.get('/', (req, res, next) => {
    if (req.query.fail)
        res.render('login', { message: 'Usuário e/ou senha incorretos!' });
    else
        res.render('login', { message: null });
});
 
router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/login");
  });

/* POST login page */
 router.post('/',
    passport.authenticate('local', { 
        successRedirect: '/', 
        failureRedirect: '/login?fail=true' 
    })
);

 
module.exports = router;