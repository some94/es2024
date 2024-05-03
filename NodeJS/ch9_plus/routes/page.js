const express = require('express');
const { renderMain, renderJoin, renderProfile } = require('../controllers/page');

const router = express.Router();

router.use((req, res, next) => {
    res.locals.user = req.user;
    res.locals.follwerCount = 0;
    res.locals.follwingCount = 0;
    res.locals.follwingIdList = [];
})

router.get('/', renderMain);
router.get('/join', renderJoin);
router.get('/profile', renderProfile);

module.exports = router;