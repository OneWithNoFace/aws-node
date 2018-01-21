var express = require('express');
var http = require("http");

var app = express();

var port= 9000;

app.get("/", (req,res) => {
    res.send("Mini Project 3!");
}).listen(port);