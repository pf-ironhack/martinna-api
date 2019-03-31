const mongoose = require('mongoose');


const brandSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 200
  },
  logo: {
    type: String
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
  webLink: {
    type: String
  },
  socialLinks: {
    type: String
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
  },
  userLikes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]


},{
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      ret.id = doc._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
})

brandSchema.virtual('likes').get(function() {
  return this.userLikes.length;
})

const Brand = mongoose.model("Brand", brandSchema);
module.exports = Brand;
