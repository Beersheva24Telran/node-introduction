
import http from 'node:http'
const server = http.createServer();
const port = process.env.PORT ?? 3500;
server.listen(port);
console.log (`listening on the port ${port} `)
server.on('request', async (req, res) => {
    console.log(req.method, req.url);
    res.setHeader("Content-Type", "application/json");
    res.statusCode=300;
    res.write("just bad request");
    res.end();
})



