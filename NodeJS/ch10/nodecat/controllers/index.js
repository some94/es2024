const axios = require('axios');

const URL = process.env.API_URL;
axios.defaults.headers.origin = process.env.ORIGIN;
// 토큰 발급 및 요청
const request = async (req, api) => {
    try {
        if (!req.session.jwt) {     // 세션이 없다면
            const tokenResult = await axios.post(`${URL}/token`, {  // 새로운 토큰 발급 요청
                clientSecret: process.env.CLIENT_SECRET,
            });
            req.session.jwt = tokenResult.data.token;   // 세션에 토큰 저장
        }
        // 토큰이 있다면 토큰으로 API 요청
        return await axios.get(`${URL}${api}`, {
            headers: { authorization: req.session.jwt },
        });
    } catch (err) {
        if (err.response?.status === 419) { // 토큰 만료 시
            delete req.session.jwt;     // 기존 토큰을 삭제하고
            return request(req, api);   // 재발급 요청
        }
        return err.response;
    }
};
// 로그인 한 유저가 작성한 게시글 불러오기
exports.getMyPosts = async (req, res, next) => {
    try {
        const result = await request(req, '/posts/my');
        res.json(result.data);
    } catch (err) {
        console.error(err);
        next(err);
    }
};
// 해시태그 검색하기
exports.searchByHashtag = async (req, res, next) => {
    try {
        const result = await request(
            req, `/posts/hashtag/${encodeURIComponent(req.params.hashtag)}`
        );
        res.json(result.data);
    } catch (err) {
        if (err.code) {
            console.error(err);
            next(err);
        }
    }
};

exports.renderMain = (req, res) => {
    res.render('main', { key: process.env.CLIENT_SECRET });
};

/*
exports.test = async (req, res, next) => {
    try {
        if (!req.session.jwt) {
            const tokenResult = await axios.post('http://localhost:8002/v1/token', {
                clientSecret: process.env.CLIENT_SECRET,
            });
            if (tokenResult.data?.code === 200) {
                req.session.jwt = tokenResult.data.token;
            } else {
                return res.status(tokenResult.data?.code).json(tokenResult.data);
            }
        }
        const result = await axios.get('http://localhost:8002/v1/test', {
            headers: { authorization: req.session.jwt },
        });
        return res.json(result.data);
    } catch (err) {
        console.error(err);
        if (err.response?.status === 419) {
            return res.json(err.response.data);
        }
        return next(err);
    }
};
*/