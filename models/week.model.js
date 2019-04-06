const mongoose = require('mongoose');

const Brand = require('../models/brand.model');

const weekSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  position: {
    type: Number,
    required: true,
    unique: true
  }
}, {
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
  });

  weekSchema.virtual('brands', {
  ref: Brand.modelName,
  localField: '_id',
  foreignField: 'week',
  options: { sort: { position: -1 } }
})

const Week = mongoose.model('Week', weekSchema);

module.exports = Week;