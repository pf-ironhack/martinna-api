const express = require('express');
const router = express.Router();

const uploader = require('../configs/storage.config');
const brandController = require('../controllers/brand.controller');

router.get('/', brandController.list);
router.post('/', brandController.create);


module.exports = router;



//secure.isAuthenticated