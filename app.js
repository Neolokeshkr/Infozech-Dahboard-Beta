var express = require("express"),
    app     = express();


app.use(express.static(__dirname+"/public"));

app.set("view engine","ejs");


//Routes Configuration
app.get("/",function(req,res){
    //res.send("Welcome to Infozech's Dashboard!");
    res.render('index')
});

//Server Configuration
app.listen("3000",function(){
    console.log("Server started at port 3000!")
});
