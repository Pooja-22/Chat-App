/**
 * Created by pooja on 21/10/16.
 */

import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.js';
import open from 'open';
import SocketIo from 'socket.io';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

const server = app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
});

const io = new SocketIo(server);

io.on('connection', (socket) => {
    socket.on('chat', (data) => {
        socket.emit('chat', data);
    });
});
