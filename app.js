//jshint esversion:6
const express = require("express");
// const https = require("https");
// const request = require("request");
const bodyparser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

// app.use(bodyparser.urlencoded({extended: true}));

app.get ("/", function(req, res){
  // res.sendFile(__dirname+"/signup.html");

  var today = new Date();
  var cuurndday =  today.getDate();
  var day = "";
  switch (cuurndday) {
    case 0:
      day = "Sunday";
    break;
    case 1:
      day = "Monday";
    break;
    case 2:
      day = "Tuesday";
    break;
    case 3:
      day = "Wednesday";
    break;
    case 4:
      day = "Thursday";
    break;
    case 5:
      day = "Friday";
    break;
    case 6:
      day = "Saturday";
    break;
    default:
    console.log("Error current day is: "+cuurndday);

  }
  res.render("list", {
    kindOfday: day
  });
});


app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
