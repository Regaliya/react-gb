import React from "react";
import PropTypes from 'prop-types';
import { Message } from '../messages/Message';
import { MessageList } from '../messages/MessageList';
import { ChatForm } from '../Chat/ChatForm';

export const Chat = ({ messages, onSendMessage }) => {
    return (<div>
        <MessageList messages={messages} />
        <ChatForm onSendMessage={onSendMessage} />
    </div>);
}

Chat.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
    onSendMessage: PropTypes.func.isRequired,
}