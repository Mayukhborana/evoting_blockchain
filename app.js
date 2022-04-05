const PORT = process.env.PORT || 8099;
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
app.set('view engine', 'ejs');
// app.engine("html", require("ejs").renderFile);
// const staticpath= path.join(__dirname,"/public");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
//app.use(favicon(path.join(__dirname,'public','favicon.ico'))); //Use of favicon in future
console.log("Hii E-voting");



//Home page
app.get("/", function (req, res) {
    res.render("home");
});

// about page
app.get('/about', function(req, res) {
  res.render('about');
});

// registeration page
app.get("/signup", function (req, res) {
  res.render("signup");
});

// login form
app.get("/login", function (req, res) {
  res.render("login");
});
  
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});// http://localhost:8099



