const http = require('http');
const port = process.env.PORT || 8080;
const server = http.createServer((req, res) => {
  res.end('Hello from Google Cloud Build - Here!');
});
server.listen(port, () => console.log(`App running on port ${port}`));