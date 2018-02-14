var express = require('express');
var http = require("http");

var app = express();

var port= http.port;

app.get("/", (req,res) => {
    res.send("<h1> Mini Project 3! </h1> <h2> Guided by : Prof Vivek Prasad </h2> <h2> 15bce078: Ronak Panchal </h2> <h2> 15bce086: Harsh Patel</h2>");
}).listen(port, (err) =>{
    if(err){
        console.log("Server not started");
    }else{
        console.log("server Started");
    }
});