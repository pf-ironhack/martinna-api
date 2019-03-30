require('../configs/db.config');

const Brand = require('../models/brand.model');

const brands = require('./stores.json');



Brand.create(brands)
  .then(console.info)
  .catch(console.error);
