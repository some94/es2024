const express = require('express');
const { renderMain, renderJoin, renderProfile } = require('../controllers/page');

const router = express.Router();

router.get('/', renderMain);
router.get('/join', renderJoin);
router.get('/profile', renderProfile);

module.exports = router;