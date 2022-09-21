const express = require('express');
const cors = require('cors');
const passportSetup = require('./passport');
const passport = require('passport');
const authRoute = require('./routes/auth');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
const User = require('./user');

//----------------------------------------- END OF IMPORTS---------------------------------------------------

mongoose
  .connect(
    'mongodb+srv://zura19966:zGv99MT59rD5BC6Z@cluster0.qccz92b.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('database connected succesfully');
  })
  .catch(() => {
    console.log('database error');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  })
);
app.use(
  session({
    secret: 'secretcode',
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser('secretcode'));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoute);
app.listen('5000', () => {
  console.log('Server is running!');
});
