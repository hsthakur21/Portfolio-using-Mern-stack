const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
});

const RegisterModel = mongoose.model('user', RegisterSchema);

module.exports = RegisterModel;
