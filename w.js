app.post("/find",function(req,res){
  console.log(req.body.search)
  //console.log(req.body.Field)
  var hi = req.body.value
  console.log(hi)
  Student.find({Teamname:req.body.search},function(err,user){
    if(err){
      console.log("Cannot find Query element in any record");
    }
    else{
      res.render("Home.ejs",{name:friends,student:user});
    }
  })
})





////////////////////////

app.post("/find",function(req,res){
  if (err) throw err;
  var dbo = db.db("test");
  dbo.collection("students").find({req.body.search}).toArray(function(err, result) {
    if(err){
      console.log("Cannot find Query element in any record");
    }
    else{
      res.render("Home.ejs",{name:friends,student:user});
    }
  })
})


var myquery = { Name : hi };
dbo.collection("students").deleteOne(myquery, function(err, obj) {
  if(err){
    console.log("Cannot delete record");
  }
  else{
    res.render("Home.ejs",{student:obj});
  }
});
