import app from "../src/app.js";
import http from 'http';

const ser = http.Server(app);
import io from 'socket.io';

const ioServer = io(ser);

ioServer.on('connection', function(socket) {
  socket.emit('listen')
})


const port = app.get('port');

const server = app.listen(port, function (){
    console.log(`Hotels is running on ${port}`);
})

export default server;
