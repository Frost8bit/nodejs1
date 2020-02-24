// index.js
var express = require('express');
var app = express();

const dotenv = require('dotenv');
dotenv.config();

app.get('/', function (req, res){
	res.send(`${process.env.TEXT1}`);
});
app.listen(5000, function(){
	console.log('Приклад застосунку, який прослуховує 5000-ий порт!');
});
module.exports.app = app;

