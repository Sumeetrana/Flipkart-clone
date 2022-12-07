const express = require('express');
const env = require('dotenv');
const { default: mongoose } = require('mongoose');

const app = express();

//routes 
const authRoutes = require('./routes/auth.js');
const cartRoutes = require('./routes/cart.js');
const productRoutes = require('./routes/product.js');
const categoryRoutes = require('./routes/category.js');
const adminAuthRoutes = require('./routes/admin/auth.js');

// environment variable
env.config();

// mongodb connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected successfully");
  })

app.use(express.json());

// routes middleware
app.use('/api', authRoutes);
app.use('/api', adminAuthRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', cartRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
})