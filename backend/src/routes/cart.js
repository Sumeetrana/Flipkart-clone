const express = require('express');

const { addToCart } = require('../controller/cart.js');
const { requireSignin, userMiddleware } = require('../middleware');

const router = express.Router();

router.post("/user/addtocart", requireSignin, userMiddleware, addToCart);

module.exports = router;