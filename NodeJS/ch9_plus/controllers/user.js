const User = require("../models/user");
let { userCache } = require('../passport/userCache');

exports.follow = async (req, res, next) => {
    try {
        const user = await User.findOne({ where: { id: req.user.id } });
        if (user) {
            await user.addFollowing(parseInt(req.params.id, 10));
            res.send('success');
        } else {
            res.status(404).send('NO USER');
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