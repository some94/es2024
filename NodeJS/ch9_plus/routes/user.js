const express = require('express');
const {isLoggedIn} = require("../middlewares");
const {renderPassword, follow, unfollow, updateNick, updatePassword } = require('../controllers/user');

const router = express.Router();

router.get('/update/password', renderPassword);

router.post('/:id/follow', isLoggedIn, follow);
router.post('/:id/unfollow', isLoggedIn, unfollow);

router.post('/update/nick', isLoggedIn, updateNick);
router.post('/update/password', isLoggedIn, updatePassword);

module.exports = router;