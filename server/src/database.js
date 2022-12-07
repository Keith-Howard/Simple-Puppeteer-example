const mongoose = require('mongoose');
const User = require('./models/user.model');

const connection = 'mongodb://127.0.0.1:27017/dockerize-me';

const connectDb = () => {
  return mongoose.connect(connection);
};

module.exports = connectDb;
