const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const UserSchema = new mongoose.Schema({
  title: {},
  logo: {},
  description: {},
  tags: {},
  gallery: {},
  

})