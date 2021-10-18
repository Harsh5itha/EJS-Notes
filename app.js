//jshint esversion:6
const express = require("express");
// const https = require("https");
// const request = require("request");
const bodyparser = require("body-parser");

const app = express();
var items = ["Buy","Cook","Eat"];

app.set("view engine", "ejs");

app.use(bodyparser.urlencoded({extended: true}));

app.get ("/", function(req, res){
  // res.sendFile(__dirname+"/signup.html");

  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  var day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    kindOfday: day,
    newlistitems: items
  });
});

app.post("/", function(req, res){
  var item = req.body.newitem;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
