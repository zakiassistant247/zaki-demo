const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3456;
const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(html);
});

server.listen(PORT, () => {
  console.log(`Zaki demo running on http://localhost:${PORT}`);
});
