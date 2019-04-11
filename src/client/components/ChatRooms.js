import React from 'react';
import { Query } from 'react-apollo';

//Components
import Loader from './layout/Loader';
import ChatRoom from './ChatRoom';

//Queries
import { getChatRooms } from '../queries/queries';

const ChatRooms = props => {
    return (
        <div>
            <Query query={getChatRooms} pollInterval={10000}>
                {({ data, loading, error }) => {
                    if(loading) return <Loader/>
                    const { ChatRooms } = data;
                    return ChatRooms.map(room => 
                        <ChatRoom 
                            key={room.id}
                            data={room}
                        />
                    )
                }}
            </Query>
        </div>
    );
};

export default ChatRooms;