const path = require('path');
const multer = require('multer');
const express = require('express');
const shortId = require('shortid');

const { createProduct } = require('../controller/product');
const { requireSignin, adminMiddleware } = require('../middleware');

const router = express.Router();

const storage = multer.diskStorage({
  // specifying in which folder we will store uploaded images
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), 'uploads'))
  },
  filename: function (req, file, cb) {
    cb(null, shortId.generate() + "-" + file.originalname)
  }
})

const upload = multer({ storage })

router.post("/product/create", requireSignin, adminMiddleware, upload.single('productPicture'), createProduct);
// router.get("/category/getCategory", getCategories);

module.exports = router;