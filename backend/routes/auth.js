const router = require('express').Router();
const passport = require('passport');
const bcrypt = require('bcryptjs');
const User = require('../user');

const CLIENT_URL = 'http://localhost:5173';

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) throw err;
    if (!user) res.send('No User Exists');
    else {
      req.logIn(user, (err) => {
        if (err) {
          res.status(401).json({
            success: false,
            message: 'failure',
          });
        } else {
          res.status(200).json({
            success: true,
            message: 'Successfully Authenticated',
            user,
            //   cookies: req.cookies
          });
        };
      });
    }
  })(req, res, next);
});

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

router.post('/register', (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    console.log(doc)
    if (err) throw err;
    if (doc) {
    res.send('User Already Exists')}
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send('User Created');
    }
  });
});

router.get('/login/success', isLoggedIn,(req, res) => {
  if (req.user) {
    res.send(req.user);
    // res.status(200).json({
    //   success: true,
    //   message: 'successfull',
    //   user: req.user,
    //   //   cookies: req.cookies
    // });
  }
});

router.get('/login/failed', (req, res) => {
  res.status(401).json({
    success: false,
    message: 'failure',
  });
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);

});

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));
router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: CLIENT_URL,
    failureRedirect: '/login/failed',
  })
);

router.get(
  '/facebook',
  passport.authenticate('facebook', { scope: ['profile'] })
);
router.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: CLIENT_URL,
    failureRedirect: '/login/failed',
  })
);
module.exports = router;
