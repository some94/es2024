const express = require('express');
const { verifyToken, apiLimiter } = require('../middlewares');
const { createToken, tokenTest, getMyPosts, getPostsByHashtag } = require('../controllers/v2');

const router = express.Router();

router.use(apiLimiter);

router.post('/token', createToken);
router.get('/test', verifyToken, tokenTest);    // req.body.clientSecret

router.get('/posts/my', verifyToken, getMyPosts);
router.get('/posts/hashtag/:title', verifyToken, getPostsByHashtag);

module.exports = router;