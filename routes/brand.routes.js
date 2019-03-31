const express = require('express');
const router = express.Router();
const secure = require('../middlewares/secure.mid');

const fields = [
  { name: 'logo', maxCount: 1 },
  { name: 'gallery', maxCount: 5 }
]

const uploader = require('../configs/storage.config');
const brandController = require('../controllers/brand.controller');

router.get('/', brandController.list);
router.get('/categories', brandController.listCategories);
router.get('/sneakers', brandController.listSneakers);
router.post('/new', secure.isAuthenticated, uploader.fields(fields), brandController.create);
router.post('/:id/like', secure.isAuthenticated, brandController.like);
router.put('/:id', secure.isAuthenticated, uploader.fields(fields), brandController.update);
router.delete('/:id', secure.isAuthenticated, brandController.delete);


module.exports = router;