const { User, Post, Hashtag } = require('../models');

exports.renderMain = async (req, res, next) => {
  try {
      const posts = await Post.findAll({
          include: [{
              model: User,
              attributes: ['id', 'nick'],
          }, {
              model: User,
              attributes: ['id', 'nick'],
              as: 'Liker',
          }],
          order: [['createdAt', 'DESC']],
      });
      res.render('main', {
          title: 'NodeBird_Plus',
          twits: posts,
          likes: posts.map((v) => v.Liker.map((v) => v.id)),
      });
  } catch (err) {
      console.error(err);
      next(err);
  }
};

exports.renderJoin = (req, res) => {
    res.render('join', { title: '회원가입 - NodeBird Plus'});
};

exports.renderProfile = (req, res) => {
    res.render('profile', {title: '내 정보 - NodeBird Plus'});
};

exports.renderHashtag = async (req,res, next) => {
    const query = req.query.hashtag;
    if (!query) {
        return res.redirect('/');
    }
    try {
        const hashtag = await Hashtag.findOne({ where: { title: query } });
        let posts = [];

        if (hashtag) {
            posts = await hashtag.getPosts({ include: [{
                    model: User,
                    attributes: ['id', 'nick'],
                }, {
                    model: User,
                    attributes: ['id', 'nick'],
                    as: 'Liker',
                }],
                order: [['createdAt', 'DESC']],
            });
        }

        return res.render('main', {
            title: `${query} | NodeBird Plus`,
            twits: posts,
            likes: posts.map((v) => v.Liker ? v.Liker.map((v) => v.id) : []),
        });
    } catch (err) {
        console.error(err);
        return next(err);
    }
};