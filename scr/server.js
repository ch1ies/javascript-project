//本地搭建一个服务器
const http = require("http");
const fs = require("fs")
const path = require("path");
const fileName = path.resolve(__dirname,"chen.html")
const readMyFile = fs.ReadStream(fileName,{
    encodeing:"utf-8",
    highWaterMark:16*1024
})
const writeMyFile = fs.WriteStream(__dirname +"test.html")
// readMyFile.pipe(writeMyFile);
let count = 0;
const server = http.createServer((req,res) => {
    res.writeHead(200,{"Content-type":"text/html"});
    readMyFile.pipe(res);
    //读取本地文件
    // readMyFile.on("data", chunk=>{
    //     console.log(chunk);
    //     readMyFile.pause()
    //       //写入本地文件
    //     res.write(chunk);
    // })
    // readMyFile.on("pause",()=>{
    //     count++;
    //     setTimeout(()=>{
    //         readMyFile.resume();
    //         console.log(count);
    //     },1000)
    // })
    // readMyFile.on("end",()=>{
    //     console.log('全部数据读取完毕');
    // })

})
server.listen("4567")