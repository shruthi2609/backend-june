const http=require('http')
//server creating
const server=http.createServer((req,res)=>
{ 
    console.log(req)
    res.end("response received")})
server.listen(3000,"localhost",()=>{console.log("server started")})