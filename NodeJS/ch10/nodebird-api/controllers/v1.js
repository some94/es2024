const { User, Domain, Post, Hashtag } = require('../models');
const jwt = require('jsonwebtoken');

exports.createToken = async (req, res) => {
    const { clientSecret } = req.body;
    try {
        const domain = await Domain.findOne({
            where: { clientSecret },
            include: [{
                model: User,
                attributes: ['id', 'nick'],
            }]
        });
        if (!domain) {
            return res.status(401).json({
                code: 401,
                message: '등록되지 않은 도메인입니다. 먼저 도메인을 등록하세요.'
            })
        }
        const token = jwt.sign({
           id: domain.User.id,
           nick: domain.User.nick,
        }, process.env.JWT_SECRET, {
            expiresIn: '1m',    // 유효기간
            issuer: 'nodebird',     // 발급자
        });
        return res.json({
            code: 200,
            message: '토근이 발급되었습니다.',
            token,
        })
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            code: 500,
            message: 'Server Error',
        })
    }
};

exports.tokenTest = async (req, res) => {
    res.json(res.locals.decoded);
};

exports.getMyPosts = async (req, res) => {
    try {
        const posts = await Post.findAll({ where: { userId: res.locals.decoded.id } });
        if (!posts) {
            return res.status(404).json({
                code: 404,
                message: '작성한 게시글이 없습니다.',
            });
        }
        return res.json({
            code: 200,
            payload: posts,
        });
    } catch (err) {
        return res.status(500).json({
            code: 500,
            message: 'Server Error'
        })
    }
};

exports.getPostsByHashtag = async (req, res) => {
  try {
      const hashtag = await Hashtag.findOne({ where: { title: req.params.title } });
      if (!hashtag) {
          return res.status(404).json({
              code: 404,
              message: '검색 결과가 없습니다.',
          });
      }
      const posts = await hashtag.getPosts();
      if (posts.length === 0) {
          return res.status(404).json({
              code: 404,
              message: '검색 결과가 없습니다.',
          });
      }
      return res.json({
          code: 200,
          payload: posts,
      });
  } catch (err) {
      console.error(err);
      return res.status(500).json({
          code: 500,
          message: 'Server Error',
      })
  }
};