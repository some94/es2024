exports.renderMain = (req, res) => {
    const twits = [];
    res.render('main', {
        title: 'NodeBird Plus',
        twits,
    })
};

exports.renderJoin = (req, res) => {
    res.render('join', { title: '회원가입 - NodeBird Plus'});
};

exports.renderProfile = (req, res) => {
    res.render('profile', {title: '내 정보 - NodeBird Plus'});
};