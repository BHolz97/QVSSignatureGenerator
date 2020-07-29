//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/signature", function(req, res){

    let tel = '0';

    if(req.body.tel == null){
        console.log("Null");
        tel = '0000000000';
    }

    res.render("signature", {
        name: req.body.name,
        position: req.body.job1,
        cell: req.body.cell,
        tel: req.body.tel,
        email: req.body.email
    });
});







let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
  console.log("Server running on port 3000");
}
app.listen(port);