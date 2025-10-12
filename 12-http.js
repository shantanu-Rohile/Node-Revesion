const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('This is our home page.')
    }
    if(req.url === '/about'){
        res.end('Know thyself know thy enemy 100 battles 100 victories')
    }

    res.end('<h1>Oops!</h1> <p>we do not have page your are looking for</p> <a href="/">Back Home</a>')

})

server.listen(5000)