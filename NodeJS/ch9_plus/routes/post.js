const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { isLoggedIn } = require("../middlewares");
const { afterUploadImage, uploadPost, like, unlike } = require('../controllers/post');

const router = express.Router();

try {
    fs.readdirSync('uploads');
} catch (err) {
    console.error('uploads 폴더가 없으므로 uploads 폴더를 생성합니다.');
    fs.mkdirSync('uploads');
}

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads/');
        },
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: {fileSize: 20 * 1024 * 1024},
});

router.post('/img', isLoggedIn, upload.single('img'), afterUploadImage);

const upload2 = multer();
router.post('/', isLoggedIn, upload2.none(), uploadPost);

router.post('/:id/like', isLoggedIn, like);
router.delete('/:id/unlike', isLoggedIn, unlike);

module.exports = router;