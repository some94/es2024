const express = require('express');
const { renderMain, renderJoin, renderProfile } = require('../controllers/page');

const router = express.Router();

router.use((req, res, next) => {
    res.locals.user = req.user;
    res.locals.follwerCount = req.user ? req.user.Followers.length : 0;
    res.locals.follwingCount = req.user ? req.user.Followings.length : 0;
    res.locals.follwingIdList = req.user ? req.user.Followings.map(f => f.id) : [];
    next();
})

router.get('/', renderMain);
router.get('/join', renderJoin);
router.get('/profile', renderProfile);

module.exports = router;