const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const bcrypt = require('bcryptjs');
const User = require('./user');

const GOOGLE_CLIENT_ID =
  '751248971010-kqeh18484jbjcc798ighjrfp50itrf7q.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

const FACEBOOK_APP_ID = '2218291421683805';
const FACEBOOK_APP_SECRET = 'a8d10ea17e3293f0bd56b33884a4c257';

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) throw err;
      if (!user) return done(null, false);
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) throw err;
        if (result === true) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    });
  })
);
passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: '/auth/facebook/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      User.findOne({ password: profile.id }).then((currentUser) => {
        if (currentUser) {
          console.log('user is', currentUser);
          done(null, currentUser);
        } else {
          new User({
            username: profile.displayName,
            password: profile.id,
          })
            .save()
            .then((newUser) => {
              console.log('new user was created ' + newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});
