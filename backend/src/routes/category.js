const express = require('express');

const { createCategory, getCategories } = require('../controller/category');

const router = express();

router.post("/category/create", createCategory);
router.get("/category/getCategory", getCategories);

module.exports = router;