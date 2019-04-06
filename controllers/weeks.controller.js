const Week = require('../models/week.model');
const Brand = require('../models/brand.model');

const createError = require('http-errors');

module.exports.list = (req, res, next) => {
  Brand.find()
    .populate('cards')
    .then(weeks => res.json(weeks))
    .catch(next);
}

module.exports.create = (req, res, next) => {
  const week = new Week(req.body);

  week.save()
    .then(week => res.status(201).json(week))
    .catch(next);
}