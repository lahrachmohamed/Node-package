const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url==='/'){
        res.end(`<h1>welcome to our server home </h1>
        `)
    }
    if (req.url==='/about'){
        res.end("this is our company's history")
    }
    res.end(`
        <h1>Oops!!</h1>   
        <p>we can't find this page you looking for</p>
        <a href='/' >back to menu</a>
    `)
})
server.listen(5000)