import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const _filename = fileURLToPath(import.meta.url);
const _dirName = path.dirname(_filename);

const app = express();
app.get('/', (req, res) => {
  // send file to the connected client
  res.sendFile(_dirName + '/client.html');
});

app.listen(3000, () => {
  console.log('Client is running on port 3000...');
})