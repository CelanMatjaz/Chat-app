import React, { useEffect } from 'react';
import { Query } from 'react-apollo';

//Components
import Message from './Message';
import Loader from './layout/Loader';

//Queries
import { getChatRoomData } from '../queries/queries';

const ChatRoom = props => {
    const { id } = props.match.params;
    const { push } = props.history;

    const handleSubmit = e => {
        e.preventDefault();
    }

    const leaveRoom = () => {
        props.history.push('/');
    } 

    return (
        <div className="chat-room">
            <Query query={getChatRoomData} variables={{ id }}>
                {({ loading, error, data }) => {
                    if(loading) return <Loader/>
                    const { maxUsers, name, numOfUsers } = data.ChatRoom;
                    if(numOfUsers >= maxUsers) push('/');
                    return (
                        <>
                            <button onClick={() => leaveRoom()} style={{marginBottom: '10px'}}>Leave room</button>
                            <h2>{'Default chat room name'}</h2>
                            <div className="messages">
                                <Message/>
                                <Message/>
                                <Message/>
                                <Message/>
                                <Message/>
                                <Message/>
                                <Message/>
                                <Message/>
                                <Message/>
                                <Message/>
                                <Message/>
                            </div>
                            <form onSubmit={e => handleSubmit(e)}>
                                <button>Send</button>
                                <input type="text"/>
                            </form>
                        </>
                    )
                }}
            </Query>
            
        </div>
    );
};

export default ChatRoom;