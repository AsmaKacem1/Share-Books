const http= require('http')

const server = http.createServer((req,res)=>{
    res.write("welcome")
    res.write(" welcome")
    res.end()
})

server.listen(3000,()=>{console.log('server running')})