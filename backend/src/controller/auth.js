const jwt = require('jsonwebtoken');

const UserModel = require('../model/user.js');

exports.signup = (req, res) => {
  const { email, firstName, lastName, password } = req.body;
  UserModel.findOne({ email })
    .exec((error, user) => {
      if (user) {
        return res.status(400).json({
          message: 'User already registered'
        })
      }

      const _user = new UserModel({
        firstName,
        lastName,
        email,
        password,
        username: Math.random().toString()
      })

      _user.save((error, data) => {
        if (error) {
          return res.status(400).json({
            message: 'Something went wrong!'
          })
        }

        return res.status(201).json({
          user: data
        })
      })
    })
}

exports.signin = (req, res) => {
  UserModel.findOne({ email: req.body.email })
    .exec((error, user) => {
      if (error) return res.status(400).json({ error });

      if (user) {
        if (user.authenticate(req.body.password)) {
          const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
          const { _id, firstName, lastName, email, role, fullName } = user;
          return res.status(200).json({
            token,
            user: { _id, firstName, lastName, email, role, fullName }
          })
        } else {
          return res.status(400).json({
            message: 'Invalid password'
          })
        }
      } else {
        return res.status(400).json({
          message: "Email is not registered!"
        })
      }
    })
}

exports.requireSignin = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const user = jwt.verify(token, process.env.JWT_SECRET);
  req.user = user;
  next();
}