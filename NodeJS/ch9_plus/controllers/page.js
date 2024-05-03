const { User, Post } = require('../models');

exports.renderMain = async (req, res, next) => {
  try {
      const posts = await Post.findAll({
          include: {
              model: User,
              attributes: ['id', 'nick'],
          },
          order: [['createdAt', 'DESC']],
      });
      res.render('main', {
          title: 'NodeBird_Plus',
          twits: posts,
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