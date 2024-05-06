const express = require('express');
const {isLoggedIn} = require("../middlewares");
const {follow, unfollow, updateNick } = require('../controllers/user');

const router = express.Router();

router.post('/:id/follow', isLoggedIn, follow);
router.post('/:id/unfollow', isLoggedIn, unfollow);

router.post('/updateNick', isLoggedIn, updateNick);

module.exports = router;