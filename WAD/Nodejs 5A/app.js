let path = require ('path')
let fs = require('fs')
let http = require('http')

http.createServer((req,res)=>{
    //console.log(req);
    if (req.url=='/'){
        let indfile=path.join(__dirname,"index.html");
        fs.readFile(indfile,"utf-8",(err,data)=>{
            if (err) throw err;
            res.write(data);
            res.end();
        })
    }

    else if (req.url=='/about'){
        let aboutfile=path.join(__dirname,"about.html");
        fs.readFile(aboutfile,"utf-8",(err,data)=>{
            if (err) throw err;
            res.write(data);
            res.end();
        })
    }

    else if (req.url=='/node'){
        let nodefile=path.join(__dirname,"node.html");
        fs.readFile(nodefile,"utf-8",(err,data)=>{
            if (err) throw err;
            res.write(data);
            res.end();
        })
    }

}).listen(3000,()=>{
    console.log("Started!");
})