const express = require('express');
const { isLoggedIn } = require('../middlewares');
const { renderLogin, createDomain } = require('../controllers');
const router = express.Router();

router.get('/', renderLogin);
router.post('/domain', createDomain);

module.exports = router;