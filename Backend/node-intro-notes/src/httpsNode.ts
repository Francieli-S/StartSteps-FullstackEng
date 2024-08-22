import * as https from 'https';
import * as fs from 'fs';

const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert'),
};

const server = https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('Hello HTTPS!');
});

server.listen(443, () => {
  console.log('The https server is running');
});
