var express = require("express");
var app = express();
var path = require('path');

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/",function(req,res){
    res.render("game")
})

app.listen(process.env.PORT,process.env.IP,function(err){
    if(err){
        console.log(err)
    }else{
        console.log("running!!!")
    }
})