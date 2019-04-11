import React from 'react';

const Message = props => {
    const { text, author } = props;
    return (
        <div className="message">
            {text || 'some random text'} <br/>
            <small>{author || 'author'}</small>
        </div>
    );
};

export default Message;