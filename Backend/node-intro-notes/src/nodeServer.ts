import http from 'http'
import { port } from './config.js'
// I can 'import' instead of 'require', but it must have the file extension.
// I cannot import from .ts since all of the TS in Node is compiled to JS. 
import { consoleMessage, getExampleMessage } from './helper.js'
import { logServerMessage } from './logger.js'

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end(getExampleMessage())
}).listen(port, () => {
  console.log(consoleMessage);
  logServerMessage('This server is logging at: ');
})