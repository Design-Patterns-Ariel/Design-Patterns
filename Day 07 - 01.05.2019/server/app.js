const countryManager=require('./CountryManager');
const express=require('express');
const app=express();

let sub=new countryManager.CountryManager();
app.use(express.static(__dirname));

app.get("/read",(req,res)=>{
   res.send(sub.getBestCountry())
});

app.get("/set/:c",(req,res)=>{
    sub.setBestCountry(req.params.c);
    res.send(sub.getBestCountry());
});

app.listen(4000);