var express = require("express");
var expressHandlebars = require("express-handlebars");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cheerio = require("cheerio");
var request = require("request");
var mongodb = require("mongodb");
var bootbox = require("bootbox");
mongoose.Promise = Promise; 


var PORT = process.env.PORT || 3000;
var app = express();
//var router = express.Router();

app.use(express.static("public"));

require("./config/routes.js")(app);

app.use(bodyParser.urlencoded({
    extended: true
}));

app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");


app.get("/", function(req, res) {
    res.render("index", { });
});


//app.use(router);

var db = process.env.MONGODB_URI  || "mongodb://heroku_pgxlsqzq:t7rebk0mdhl80hditpiekhihdp@ds135750.mlab.com:35750/heroku_pgxlsqzq"



mongoose.Promise = Promise;

mongoose.connect(db, function(error) {
    if (error) {
        console.log(error);
    }

else {
    console.log("mongoose connection is successful");
}

});

app.listen(PORT, function() {
    console.log("Listening on port: " + PORT);



});
