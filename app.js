/**
 * Created by bwang on 8/30/2016.
 */
var angular.module('flapperNews', []);
var express = require('express');
var app = express();
app.controller('MainCtrl',[
    '$scope', function ($scope) {
        $scope.test = 'Hello world';
        $scope.posts = [
            'post 1',
            'post 2',
            'post 3',
            'post 4',
            'post 5'
        ];
    }
]);
var fs = require('fs'); // this engine requires the fs module
app.engine('ntl', function (filePath, options, callback) { // define the template engine
    fs.readFile(filePath, function (err, content) {
        if (err) return callback(new Error(err));
        // this is an extremely simple template engine
        var rendered = content.toString().replace('#title#', '<title>'+ options.title +'</title>')
            .replace('#message#', '<h1>'+ options.message +'</h1>');
        return callback(null, rendered);
    });
});
app.set('views', './views'); // specify the views directory
app.set('view engine', 'ntl'); // register the template engine
app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there by view engine!'});
});
app.get('/about', function (req, res) {
    res.send('about');
});

app.get('/random.text', function (req, res) {
    res.send('random.text');
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
