const { query } = require('express');
const express=require('express')
const axios=require('axios')
const bodyParser = require('body-parser')
const app=express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.get("/intro",(req,res)=>{res.send({msg:"response received"})})
app.get("/products",(req,res)=>{res.send({pname:"iphone",price:60000})})
//route is for get method using querydata 
app.get("/search",(req,res)=>{
    const querydata=req.query
    console.log(querydata)
    if(querydata.q=="redmi"&&querydata.price<=12000){
        res.send({pname:"redmi notepro 8",features:"16gb ram"})
    }
    if(querydata.q=="apple"){
        res.send({price:200000})
    }
    else{
        res.send("the product is not found")
    }
})
//route get method - params
app.get("/checkout/:ischeckout",(req,res)=>{
console.log(req.params)
const paramater=req.params
if(paramater.ischeckout==="true")
{
    res.send("successfully placed the order")
}
else{
    res.send("payment failure , please try again")
}
})
//route get method - params
app.get("/searchnew/:productname/:price",(req,res)=>{
    console.log(req.params)
    res.send("soem data")
})
app.post("/intro",(req,res)=>{
        console.log(req.body.mobile)
        res.send("received the post request")
})
app.get("/todo",async (req,res)=>{
try{
const result1=await axios.get("https://jsonplaceholder.typicode.com/todos")
const result2=await axios.get("https://jsonplaceholder.typicode.com/comments")
res.status(200).send({res1:result1.data,res2:result2.data})
}
catch(err){
    res.status(404).send("wrong api address")
}
})
app.listen(3000)

//