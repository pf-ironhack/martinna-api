const express = require('express');
const router = express.Router();

const secure = require('../middlewares/secure.mid');
// const weeksController = require('../controllers/columns.controller');

router.get('/', secure.isAuthenticated, columnsController.list);
router.post('/', secure.isAuthenticated, columnsController.create);

module.exports = router;
