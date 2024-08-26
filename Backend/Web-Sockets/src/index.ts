import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 }); // creating an instance of webserver

// 'connection' is the event
wss.on('connection', (ws) => {
  console.log('Server is connected by a new client'); // from client
  // handshake
  // ws is the new oppened web socket connection to client
  ws.on('message', (message: string) => {
    console.log(`message received from de client: ${message}`); // from client
    ws.send(`I received your message that was saying: ${message}`); // to client
  });
  ws.on('close', () => {
    console.log('Server is closed by client');
  });
});
