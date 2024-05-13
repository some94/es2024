const bcrypt = require('bcrypt');
const { User, Post, sequelize } = require('../models');
let { userCache } = require('../passport/userCache');

exports.renderPassword = (req, res) => {
    res.render('password', { title: '비밀번호 변경 - NodeBird Plus'});
};

exports.follow = async (req, res, next) => {
    try {
        const user = await User.findOne({ where: { id: req.user.id } });
        const followingUser = await User.findOne({ where: { id: parseInt(req.params.id, 10) } });
        if (user) {
            await user.addFollowing(parseInt(req.params.id, 10));
            userCache[req.user.id].Followings.push(followingUser);
            res.send('success');
        } else {
            res.status(404).send('No User');
        }
    } catch (err) {
        console.error(err);
        next(err);
    }
};

exports.unfollow = async (req, res, next) => {
    try {
        const user = await User.findOne({ where: { id: req.user.id } });
        if (user) {
            await user.removeFollowing(parseInt(req.params.id, 10));
            userCache[req.user.id].Followings = userCache[req.user.id].Followings.filter(f => f.id !== parseInt(req.params.id, 10));
            res.send('success');
        } else {
            res.status(404).send('No User');
        }
    } catch (err) {
        console.error(err);
        next(err);
    }
};

exports.updateNick = async (req, res, next) => {
    try {
        const user = await User.findOne({ where: { id: req.user.id } });
        if (user) {
            await User.update({ nick: req.body.nick }, {
                where: { id: req.user.id }
            })
            userCache[req.user.id].nick = req.body.nick;
            res.redirect('/');
        } else {
            res.status(404).send('No User');
        }
    } catch (err) {
        console.error(err);
        next(err);
    }
};

exports.updatePassword = async(req, res, next) => {
    const { currentPassword, newPassword, confirmPassword } = req.body;
    try {
        const user = await User.findOne({ where: { id: req.user.id } });
        if (!user) return res.status(404).send('No User');

        const current = await bcrypt.compare(currentPassword, user.password);
        if (!current) return res.redirect('/user/update/password?password=current')

        if (newPassword === confirmPassword) {
            const hash = await bcrypt.hash(newPassword, 12);
            await User.update({ password: hash }, {
                where: { id: req.user.id }
            });
            return res.redirect('/user/update/password?password=updated');
        } else {
            return res.redirect('/user/update/password?password=confirm');
        }
    } catch (err) {
        console.error(err);
        next(err);
    }
};

exports.userPost = async (req, res, next) => {
    try {
        const userProfile = await User.findOne({ where: { id: req.params.id } });
        const userFollowingCount = await sequelize.models.Follow.count({ where: { followerId: req.params.id } });
        const userFollowerCount = await sequelize.models.Follow.count({ where: { followingId: req.params.id } });
        const userPosts = await Post.findAll ({
            where: { userId: req.params.id },
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
        res.render('userPost', {
            userProfile,
            userFollowingCount,
            userFollowerCount,
            userPosts,
            likes: userPosts.map((v) => v.Liker.map((v) => v.id)),
        });
    } catch (err) {
        console.error(err);
        next(err);
    }
}