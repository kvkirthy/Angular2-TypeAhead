'use strict';

var _ = require('underscore');
var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

function readApiData() {
    return require('./api.data.json');
}

function search(term, data) {
    return _.filter(data, function (record) {
        return _.reduce(record, function (found, value) {
            var re = new RegExp("\\b" + term + "\\b", "i");
            return found || !!re.exec(value);
        }, false);
    });
}

app.get('/api/search', function(req, res){
    res.json(search(req.query.term, readApiData()));
});

app.get('/index.html', function(req, res) {
    var index = fs.readFileSync('index.html', 'utf8');
    res.send(200, index);
});

app.use('/node_modules', express.static('node_modules'));
app.use('/app', express.static('app'));

// app.get('/node_modules/angular2/bundles/angular2-polyfills.js',function(req, res) {

//     var reqPath = req.path;
//     console.log(reqPath);
//     var fileName = path.basename(reqPath);
//     console.log(fileName);

//     var newPath = "." + reqPath;
//     var staticPage = fs.readFileSync(reqPath, 'utf8');
//     res.send(200, staticPage);
// });

app.listen(3001, function(){
   console.log('node express server started'); 
});



