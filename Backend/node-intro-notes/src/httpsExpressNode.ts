import * as https from 'https';
import * as fs from 'fs';
import express from 'express'
import router from './routers.js';

const app = express()

app.use(router)

const options = {
  key: fs.readFileSync('../cert/server.key'),
  cert: fs.readFileSync('../cert/server.cert'),
};

// app as a second argument means all incoming requests to the HTTPS server are routed through
// the Express app. The same applies to an HTTP server.
// Essentially, the HTTP or HTTPS server acts as the entry point for the application, and the Express app
// processes the requests.
const expressServer = https.createServer(options, app)

expressServer.listen(443, () => {
  console.log('The https server is running');
});
