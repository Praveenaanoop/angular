var express=require('express');
const app=express();
var bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
var mongodb=require('mongodb');
var mongoclient=mongodb.MongoClient;
var url="mongodb://127.0.0.1:27017/mydb";
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","http://localhost:4200/");
    res.header("Access-Control-Allow-Origin","*");

    res.header("Access-control-Allow-Methods","GET,POST,PUT,DELETE");

    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
    next();
})

app.post("/insert",function(req,res){
    mongoclient.connect(url,function(err,database){
        var dtb=database.db('mydb');
        var empcol=dtb.collection('employee');
        var data={"id":req.body.Emploo.id,"name":req.body.Emploo.name,"salary":req.body.Emploo.salary}
    
        empcol.insert(data,function(err,result){
            if(err){
                res.send("something went wrong");
            }
            else{
                res.send("inserted successfully");
            }
        })
    })
})

app.get("/data",function(req,res){
    res.header("Access-Control-Allow-Origin","http://localhost:4200/");
    res.header("Access-Control-Allow-Origin","*");

    res.header("Access-control-Allow-Methods","GET,POST,PUT,DELETE");

    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
   
    mongoclient.connect(url,function(err,database){
     
      if(err){
          console.log(err)
         
      }
      else{
        var dtb=database.db('mydb');
        var empcol=dtb.collection('employee');
        empcol.find().toArray(function(err,result){
            res.send(result)
        })
      
    }
     
    })
    
    ///res.send({"msg":"success"})

})


app.listen(8000,function(){
    console.log("server is listening")
})