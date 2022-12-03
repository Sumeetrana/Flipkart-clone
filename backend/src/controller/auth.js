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