const http = require("node:http");

const server = http.createServer((req, res) => {
  res.end("pong");
});

server.listen(8000);
