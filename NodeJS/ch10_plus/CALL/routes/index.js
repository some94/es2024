const express = require('express');
const { test, getMyPosts, searchByHashtag, renderMain, getMyFollowing, getMyFollower } = require('../controllers');

const router = express.Router();

// router.get('/test', test);

router.get('/myposts', getMyPosts);
router.get('/search/:hashtag', searchByHashtag);
router.get('/', renderMain);

router.get('/myfollowing', getMyFollowing);
router.get('/myfollower', getMyFollower);

module.exports = router;