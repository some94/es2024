const express = require('express');
const path = require("path");
const app = express();

app.set('port', process.env.PORT || 3000);

// 모든 요청에 실행되는 미들웨어
app.use((req, res, next) => {
    console.log('모든 요청에 실행하고 싶어요.');
    next();     // 다음 미들웨어로 넘어가기(반드시 next가 있어야 다음 라우터로 넘어감)
})

app.get('/', (req, res) => {
    //res.send('Hello, Express');
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/', (req, res) => {
    res.send('hello express!');
});

app.get('/category/Javascript', (req, res) => {
    res.send('hello JavaScript!');
});

// 라우터 매개변수. 하단에 위치해야 함(위에 위치하면 다른 라우터가 실행되지 않음)
app.get('/category/:name', (req, res) => {
    res.send(`hello ${req.params.name}!`);
});

// 모든 get 요청에 실행됨. 따라서 하단에 위치해야 함(*)
app.get('*', (req, res) => {
    res.send('hello everybody!');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});0