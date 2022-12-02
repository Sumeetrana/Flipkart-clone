const express = require('express');
const env = require('dotenv');
const { default: mongoose } = require('mongoose');
const app = express();


//routes 
const userRoutes = require('./routes/user.js');

// environment variable
env.config();

// mongodb connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected successfully");
  })

app.use(express.json());

// routes middleware
app.use('/api', userRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
})