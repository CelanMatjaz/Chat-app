import React from 'react';

//Components
import ChatRooms from './ChatRooms';

const Home = props => {
    return (
        <div className="home">
            <h2>Chat rooms:</h2>
            <ChatRooms/>
        </div>
    );
};

export default Home;