const slugify = require('slugify');

const Product = require('../model/product.js');

exports.createProduct = (req, res) => {
  const { name, price, description, category, quantity } = req.body;
  console.log("Files: ", req.files);
  const productPictures = req.files.map(file => {
    return { img: file.filename }
  })
  console.log("ProductPictures: ", productPictures);
  const product = new Product({
    name,
    slug: slugify(name),
    price,
    description,
    productPictures,
    category,
    quantity,
    createdBy: req.user._id
  })

  product.save((error, productDetail) => {
    if (error) return res.status(400).json({ error })
    return res.status(201).json({ productDetail })
  })
}