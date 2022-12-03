const express = require('express');
const UserModal = require('../model/user.js');

const router = express.Router();

router.post('/signin', (req, res) => {

})

router.post('/signup', (req, res) => {
  const { email, firstName, lastName, password } = req.body;
  console.log("Request Body: ", req.body);
  UserModal.findOne({ email })
    .exec((error, user) => {
      if (user) {
        return res.status(400).json({
          message: 'User already registered'
        })
      }

      const _user = new UserModal({
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
})

module.exports = router;