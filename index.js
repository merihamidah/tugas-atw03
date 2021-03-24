var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('halaman/halaman1');
});

app.get('/halaman2', function (req, res) {
    res.render('halaman/halaman2');
});

app.get('/users', function (req, res) {
    res.render('Get User');
});

app.post('/users', function (res, res) {
    res.render('Post User');
});

app.put('/users', function (res, res) {
    res.render('Put User');
});

app.delete('/users', function (res, res) {
    res.render('Delete User');
});
app.listen(8000);
console.log('server is okay');