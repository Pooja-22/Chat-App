/**
 * Created by pooja on 24/10/16.
 */
import SocketIo from 'socket.io';

module.exports = function (server) {
    const io = new SocketIo(server);
    io.on('connection', function (socket) {
        socket.on('chat', function (data) {
            socket.broadcast.emit('chat', data);
        });
        socket.on('typing', function (data) {
            socket.broadcast.emit('typing', data.user);
        });
        socket.on('stop typing', function (data) {
            socket.broadcast.emit('stop typing', data.user);
        });
    });
}
