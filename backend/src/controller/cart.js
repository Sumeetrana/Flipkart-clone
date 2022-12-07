const Cart = require('../model/cart.js');

exports.addToCart = (req, res) => {
  Cart.findOne({ user: req.user._id })
    .exec((error, existingCart) => {
      if (error) {
        return res.status(400).json({ error });
      }

      if (existingCart) {
        // if cart exists then we will just update an exisiting cart
        const productId = req.body.cartItems.product;
        console.log("ProductId: ", productId);
        console.log("ExistingCart: ", existingCart.cartItems[0].product);
        const isItemAdded = existingCart.cartItems.find(c => c.product == productId);
        console.log("IsItemAdded: ", isItemAdded);
        if (isItemAdded) {
          Cart.findOneAndUpdate({ user: req.user._id, "cartItems.product": productId }, {
            "$set": {
              "cartItems": {
                ...req.body.cartItems,
                quantity: isItemAdded.quantity + req.body.cartItems.quantity
              }
            }
          }).exec((error, _cart) => {
            if (error) {
              return res.status(400).json({ error });
            }
            return res.status(201).json({ _cart })
          })
        } else {
          Cart.findOneAndUpdate({ user: req.user._id }, {
            "$push": {
              "cartItems": req.body.cartItems
            }
          }).exec((error, _cart) => {
            if (error) {
              return res.status(400).json({ error });
            }
            return res.status(201).json({ _cart })
          })
        }

      } else {
        // if cart doesn't exist then we will just create a new cart for user
        const newCart = new Cart({
          user: req.user._id,
          cartItems: req.body.cartItems
        })

        newCart.save((error, cart) => {
          if (error) {
            return res.status(400).json({ error });
          }

          return res.status(201).json({ cart })
        })
      }
    })

}