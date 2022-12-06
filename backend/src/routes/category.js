const express = require('express');

const { createCategory, getCategories } = require('../controller/category');
const { requireSignin, adminMiddleware } = require('../middleware');

const router = express.Router();

router.post("/category/create", requireSignin, adminMiddleware, createCategory);
router.get("/category/getCategory", getCategories);

module.exports = router;