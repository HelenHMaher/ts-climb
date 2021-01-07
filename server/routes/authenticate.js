const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const ensureAuthenticated = require('../ensureAuthenticated');

//----------AUTHENTICATE ROUTER-----------------------

//POST "/authenticate/login"
//{"username":"Admin", "password":"password"}

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user) => {
    if (err) throw err;
    if (!user)
      res
        .status(400)
        .json({ msg: 'User information does not match our records' });
    else {
      req.logIn(user, err => {
        if (err) {
          return res
            .status(400)
            .json({ msg: 'Sorry something went wrong: ', err });
        }
        res.status(201).json({
          msg: 'Successfully Authenticated',
        });
      });
    }
  })(req, res, next);
});

router.post('/register', (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    try {
      if (err) {
        return res
          .status(400)
          .json({ msg: 'Sorry something went wrong: ', err });
      }
      if (doc) return res.status(400).json({ msg: 'User Already Exists' });

      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      });
      await newUser.save();
      res.status(201).json({ msg: 'User Created' });
    } catch (error) {
      return res.status(400).json({ msg: 'Something went wrong: ', error });
    }
  });
});

router.get('/user', ensureAuthenticated, (req, res) => {
  res.status(201).json(req.user);
});

router.get('/logout', ensureAuthenticated, (req, res) => {
  const user = req.user.username;
  req.logout();
  res.status(201).json({ msg: `${user} Logged Out` });
});

module.exports = router;
