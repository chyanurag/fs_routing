const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer(function(req, res) {
    const filename = '.' + req.url + '/index.html'
    const exists = fs.existsSync(filename)
    if (exists) {
        const data = fs.readFileSync(filename)
        res.write(data.toString())
        res.end()
    } else  {
        res.statusCode = 404
        res.write('Page not found')
        res.end()
    }
    res.end()
})

server.listen(5000)
