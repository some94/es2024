const { Post, Hashtag } = require("../models");

exports.afterUploadImage = (req, res) => {
    console.log(req.file);
    res.json({ url: `/img/${req.file.filename}`});
};

exports.uploadPost = async (req, res, next) => {
    try {
        const post = await Post.create({
            content: req.body.content,
            img: req.body.url,
            UserId: req.user.id,
        });
        const hashtags = req.body.content.match(/#[^\s#]*/g);
        if (hashtags) {
            const result = await Promise.all(
                hashtags.map(tag => {
                    return Hashtag.findOrCreate({
                        where: { title: tag.slice(1).toLowerCase() },
                    })
                }),
            );
            await post.addHashtags(result.map(r => r[0]));
        }
        res.redirect('/');
    } catch (err) {
        console.error(err);
        next(err);
    }
};

exports.like = async (req, res, next) => {
    try {
        const post = await Post.findOne({ where: { id: req.params.id } });
        if (!post) return res.status(404).send('No Post');

        await post.addLiker(req.user.id);
        res.send('success');
    } catch (err) {
        console.error(err);
        next(err);
    }
};

exports.unlike = async (req, res, next) => {
    try {
        const post = await Post.findOne({ where: { id: req.params.id } });
        if (!post) return res.status(404).send('No Post');

        await post.removeLiker(req.user.id);
        res.send('success');
    } catch (err) {
        console.error(err);
        next(err);
    }
};