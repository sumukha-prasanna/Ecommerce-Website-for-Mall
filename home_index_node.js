var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
    fs.readFile('account.html',(err,data)=>{
        if(err)throw err;
        res.write(data);
    })
}).listen(8080);