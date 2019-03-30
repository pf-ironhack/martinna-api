const express = require('express');
const router = express.Router();

const fields = [
  { name: 'logo', maxCount: 1 },
  { name: 'gallery', maxCount: 5 }
]

const uploader = require('../configs/storage.config');
const brandController = require('../controllers/brand.controller');

router.get('/', brandController.list);
router.post('/', uploader.fields(fields), brandController.create);
router.post('/:id/like', brandController.like);


module.exports = router;



//secure.isAuthenticated