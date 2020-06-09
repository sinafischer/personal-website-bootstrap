const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  const { url } = request;
  if (url === "/") {
    response.writeHead(200, { "Content-Type": "text(html" });
    const index = fs.readFileSync("./index.html");
    response.end(index);
  }

  response.writeHead(404, { "Content-Type": "text/plain" });
  response.end("Sorry, page not found");
});

server.listen("2020", () => console.log("server listens"));
