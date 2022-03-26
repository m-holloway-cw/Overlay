const express = require('express');
const mustacheExpress = require("mustache-express");
const bodyParser = require('body-parser');
const app = express();
const request = require('request');
var path = require('path');

exports.app = app;


app.engine('html', mustacheExpress());
app.use(express.static(path.join(__dirname, './controllers')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs')
app.set('views', './views');


app.get('/', function (req, res) {
  var testData = '123 ABC';
  res.render('overlay', {serverData: testData});
});



app.listen(8080, function () {

});
