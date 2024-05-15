const express = require('express');
const { verifyToken } = require('../middlewares');
const { createToken, tokenTest } = require('../controllers/v1');

const router = express.Router();

// /v1/token
router.get('/test', verifyToken, tokenTest);    // req.body.clientSecret
router.post('/token', createToken);

module.exports = router;