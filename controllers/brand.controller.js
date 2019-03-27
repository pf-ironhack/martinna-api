const Brand = require('../models/brand.model');

module.exports.list = (req, res, next) => {
  Brand.find()
    .then(brands => res.json(brands))
    .catch(next)
}


module.exports.create = (req, res, next) => {
  const brand = new Brand(req.body);

  brand.save()
    .then(brand => res.status(201).json(brand))
    .catch(next);
}

