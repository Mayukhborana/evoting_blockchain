const PORT = process.env.PORT || 8099;
const path = require("path");
const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.engine("html", require("ejs").renderFile);
const staticpath= path.join(__dirname,"/public");
app.use(express.static(staticpath));
//app.use(favicon(path.join(__dirname,'public','favicon.ico'))); //Use of favicon in future
console.log("Hii E-voting");



//Home page
app.get("/", function (req, res) {
    res.render("mainpage.ejs");
  });
  
  app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
  });// http://localhost:8099

