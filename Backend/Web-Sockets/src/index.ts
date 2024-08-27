import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8000 }); // creating an instance of webserver

// 'connection' is the event
wss.on('connection', (ws) => {
  console.log('Server is connected by a new client'); // from client
  // handshake - when the port is accessed and ws client instance is created
  // ws is the new oppened web socket connection to client

  ws.on('message', (message: string) => {
    // from client
    console.log(`message received from de client: ${message}`);
    // to client
    // ws.send(`I received your message that was saying: ${message}`);
    // to broadcast
    wss.clients.forEach((client) => {
      client.send(`Server received your message: ${message}`);
    });
  });

  ws.on('close', () => {
    console.log('Server is closed by client');
  });
});
