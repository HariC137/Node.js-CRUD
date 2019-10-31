//var http = require('http');

//http.createServer(function (req, res) {
  //res.writeHead(200, {'Content-Type': 'text/plain'});
  //res.end('Hello World!');
//}).listen(8080);
//above code seprrate run alone
/*const express = require('express')

const app = express()

app.get('/', function (req, res){
    res.send('welcome')
})
app.listen(3000)*/
//above same
var express = require('express')
var app = express()

app.use(express.static(__dirname+"/public"));
app.get('/',function(req,res){
  //res.Sendfile(__dirname+"/public");
  res.render("Home.ejs");
})
app.listen(3000,function(){
   console.log("server hosted");
})
app.get('/1',function(req,res){
  //res.Sendfile(__dirname+"/public");
  res.send("GUI FAIL");
})
