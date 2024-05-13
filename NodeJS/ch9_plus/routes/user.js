const express = require('express');
const {isLoggedIn} = require("../middlewares");
const {renderPassword, follow, unfollow, updateNick, updatePassword, userPost  } = require('../controllers/user');

const router = express.Router();

router.get('/update/password', renderPassword);

router.post('/:id/follow', isLoggedIn, follow);
router.post('/:id/unfollow', isLoggedIn, unfollow);

router.post('/update/nick', isLoggedIn, updateNick);
router.post('/update/password', isLoggedIn, updatePassword);

router.get('/:id/posts', isLoggedIn, userPost);

module.exports = router;