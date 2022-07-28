var express = require('express')
var app = express();
var http = require('http').Server(app);

var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(express.static(__dirname + '/www'))

app.listen(3000, "127.0.0.1", function(){
    var d = new Date();
    var n = d.getHours();
    var m = d.getMinutes();
    console.log("Server has been started at:" + n + ":" + m)
})

app.get("/", function(req, res){
    res.sendFile(__dirname + "/www/form.html")
})

app.post("/api/login", function(req, res){
    if(!req.body){
        return res.sendStatus(400)
    }
    var customer = {};
    customer.email = req.body.email;
    customer.password = req.body.password;

    if (req.body.email == "abc@gmail.com" && req.body.password == "password123"){
        customer.valid = true;
    } else {
        customer.valid = false
    }

    res.send(customer);
});

app.get("/account", function(req, res){
    res.sendFile(__dirname + "/www/account.html");
});