const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;



const brandSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: true,
    maxlength: 40
  },
  logo: {
    type: String,
  },
  description: {
    type: String,
    maxlength: 260
  },
  city: {
    type: String,
    maxlength: 260
  },
  country: {
    type: String,
    maxlength: 260
  },
  tags: {
    type: Array,
  },
  gallery: {
    type: Array,
  },
  links: {
    type: Array
  },
  creators: {
    type: Array
  },
  creatorsFirstComment: {
    type: String
  },
  launchingDeals: {
    type: String,
    maxlength: 260
  }


},{ timestamps: true })

const Brand = mongoose.model("Brand", brandSchema);
module.exports = Brand;
