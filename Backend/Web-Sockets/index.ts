import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 }); // creating an instance of webserver

wss.on('connection', (ws) => {
  // handshake
  ws.on('message', (message: string) => {
    console.log('message received from de client: ', message); // from client
    ws.send(`I received your message that was saying: ${message}`); // to client
  });
  ws.on('close', () => {
    console.log('Server is closed by client.');
  });
});
