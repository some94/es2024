const express = require('express');
const { verifyToken, apiLimiter, corsWhenDomainMatches } = require('../middlewares');
const { createToken, tokenTest, getMyPosts, getPostsByHashtag, getMyFollowing, getMyFollower } = require('../controllers/v3');

const router = express.Router();

router.use(corsWhenDomainMatches);

router.post('/token', apiLimiter, createToken);
router.get('/test', verifyToken, apiLimiter, tokenTest);

router.get('/posts/my', verifyToken, apiLimiter, getMyPosts);
router.get('/posts/hashtag/:title', verifyToken, apiLimiter, getPostsByHashtag);

router.get('/following/my', verifyToken, apiLimiter, getMyFollowing);
router.get('/follower/my', verifyToken, apiLimiter, getMyFollower);

module.exports = router;