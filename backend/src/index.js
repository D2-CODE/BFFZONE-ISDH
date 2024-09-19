// src/index.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './chatSlice';

export const store = configureStore({
    reducer: {
        chat: chatReducer,
    },
});


io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('sendMessage', (message) => {
        io.emit('message', message);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

server.listen(5000, () => {
    console.log('Backend server running on http://localhost:5000');
});
