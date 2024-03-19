const http=require("http");
const host="localhost";
const server=http.createServer((req,res)=>{
    res.statusCode=200,
    res.setHeader("Content-Type","text/plain");
    res.end("haii hello");
})

server.listen(3000,host,()=>{
console.log("app listing on 3000")
})

