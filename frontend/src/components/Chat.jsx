// src/components/Chat.jsx
import { useEffect } from 'react';
import io from 'socket.io-client';

import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../store/chatSlice';

const socket = io('http://localhost:5000');

function Chat() {
    useEffect(() => {
        socket.on('message', (message) => {
            console.log(message);
        });

        return () => {
            socket.off('message');
        };
    }, []);

    return <div>Chat Component</div>;
}

export default Chat;
