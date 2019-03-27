const mongoose = require('mongoose');

const DB_NAME = process.env.DB_NAME || 'martinna';
const MONGO_URI = `mongodb://localhost:27017/${DB_NAME}`;

mongoose.connect(MONGO_URI,{ useNewUrlParser: true })
  .then(() => {
    console.log(`Connected to database: ${MONGO_URI}`)
  })
  .catch(error => {
    console.error('Database connection error: ', error);
  });
