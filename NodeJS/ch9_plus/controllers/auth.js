const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.join = async (req, res, next) => {
    const { email, nick, password } = req.body;
    try {
        const exUser = await User.findOne({ where: { email } });
        if (exUser) {
            return res.redirect('/join?error=exist');
        }
        const hash = await bcrypt.hash(password, 12);
        await User.create({
            email,
            nick,
            password: hash,
        });
        return res.redirect('/');
    } catch (err) {
        console.error(err);
        return next(err);
    }
};

exports.login = async (req, res, next) => {
    passport.authenticate('local', (authError, user, info) => {
        if (authError) {
            console.error(authError);
            return next(authError);
        }
        if (!user) {
            return res.redirect(`/?error=${info.message}`);
        }
        return req.login(user, (loginError) => {
            if (loginError) {
                console.error(loginError);
                return next(loginError);
            }
            return res.redirect('/');
        });
    }) (req, res, next);
};

exports.logout = async (req, res, next) => {
    req.logout(() => {
        res.redirect('/');
    });
};