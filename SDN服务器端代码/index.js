var express = require('express');
var fs = require('fs');
var path = require('path');
var cors = require('cors');

// body-parser是单独安装的
var bodyParser = require('body-parser');

var app = express();

// 解决跨域
app.use(cors());

app.set('port', process.env.PORT || 3000);

// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// parse application/json
app.use(bodyParser.json());

// 视图的路由
app.use(express.static(path.join(__dirname, 'dist')));

// static中间件
app.use(express.static(__dirname + '/public'));

// // 响应初次访问
// app.get('/', function (req, res) {
//     res.sendfile('./public/pages/login.html');
// });

// // 响应登录页面
// app.post('/login', function (req, res) {
//     var userName = req.body.userName;
//     var password = req.body.password;
//     var response = {
//         "url": "http://localhost:3000/pages/homePage.html",
//         "key": "xiaoge"
//     };
//     if (userName == 'admin' && password == 'xiaogezhenshuai') {
//         res.end(JSON.stringify(response));
//     }
// })

// 响应test页面
app.post('/test', function(req, res) {
  fs.readFile(__dirname + '/' + 'test.json', 'utf8', function(err, dataJson) {
    var key = req.body.key;
    var response;
    dataJson = JSON.parse(dataJson);
    if (key != 'xiaoge') {
      response = {
        statusNow: 'notLogged',
        url: 'http://localhost:3000/pages/forbidden.html'
      };
    }
    response = {
      statusNow: 'ok',
      textObject: dataJson.textObject
    };
    res.end(JSON.stringify(response));
  });
});

// app.get('/about', function (req, res) {
//     res.render('about', {
//         // 调用了自定义模块的方法
//         fortune: fortune.getFortune()
//     });
// });

/*
// 404 catch-all 处理器（中间件）
app.use(function (req, res, next) {
    res.status(404);
    res.render('404');
});

// 500 错误处理器（中间件）
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});
*/

// 设置好端口并文字提示
app.listen(app.get('port'), function() {
  console.log(
    'Express started on http://localhost:' +
      app.get('port') +
      '; press Ctrl-C to terminate.'
  );
});
