const Brand = require('../models/brand.model');

module.exports.list = (req, res, next) => {
  Brand.find()
    .then(brands => res.json(brands))
    .catch(next)
}

module.exports.like = (req, res, next) => {
  Brand.findById(req.params.id)
    .then(brand => {
      const likes = brand.userLikes.map(x => x.toString())

      if (likes.includes(req.user._id.toString())) {
        brand.userLikes = likes.filter(x => x !== req.user._id.toString())
      } else {
        brand.userLikes.push(req.user._id)
      }

      return brand.save()
    })
    .then(brand => res.json(brand))
    .catch(next)
}

module.exports.create = (req, res, next) => {

  const brand = new Brand(req.body);

  console.log(req.file);

  if(req.file) {
    brand.logo = req.file.logo
  }


  brand.save()
    .then(brand => res.status(201).json(brand))
    .catch(next);
}

