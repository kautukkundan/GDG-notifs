var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = express();

//comment

var ref = firebase.database().ref()

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/admin", function (req, res) {
  res.render("admin");
});

app.post("/login",urlencodedParser, function (req, res) {
	console.log(req.body);
	if (req.body.Username==='Kautuk' && req.body.Password==='gdgbvp'){
		res.redirect('/admin');
	}
	else {
		res.redirect('/login');
	}
 });

app.post("/admin",urlencodedParser, function (req, res) {
	console.log(req.body);
	res.redirect('/admin');
 });

app.listen(3000, "0.0.0.0");
console.log("listening to port 3000");
