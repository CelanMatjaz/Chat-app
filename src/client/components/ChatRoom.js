import React from 'react';
import { Link } from 'react-router-dom';

const ChatRoom = props => {
    const { id, maxUsers, name, numOfUsers } = props.data;
    return (
        <Link to={`/chat/${id}`} className="home-chat-room">
            <div className="room-name left">{name}</div>
            <div className="room-name right">{numOfUsers}/{maxUsers}</div>
        </Link>
    );
};

export default ChatRoom;