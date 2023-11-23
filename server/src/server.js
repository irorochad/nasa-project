const http = require('http');

const app = require('./express')


const PORT = process.env.PORT || 5000;

const server = http.createServer(app)


server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})