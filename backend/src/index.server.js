const express = require('express');
const env = require('dotenv');
const { default: mongoose } = require('mongoose');
const app = express();

// environment variable
env.config();

// mongodb connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected successfully");
  })

app.use(express.json());

app.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'hello from server'
  });
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
})