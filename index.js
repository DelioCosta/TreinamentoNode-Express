const http = require('http');
const url = require("url");
const queryString = require("query-string");


const hostname ='127.0.0.1';

const port = 3000;

const server = http.createServer((req, res) => {
    const params = queryString.parse(url.parse(req.url).search);
    res.statusCode = 200;
    res.setHeader('Content-Type','text/json');
    res.end(JSON.stringify(params));
});

server.listen(port, hostname, () => {
console.log(`Server running at http: /${hostname}:${port}/`)
});