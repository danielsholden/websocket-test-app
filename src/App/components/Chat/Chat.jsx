import React from 'react';

import { Messages } from './components/Messages';
import { MessageForm } from './components/MessageForm';

import styles from './Chat.module.scss';

const Chat = () => {
  const [messages, setMessages] = React.useState([]);

  const handleSubmit = (text) => setMessages([...messages, text]);

  return (
    <div className={styles.chatContainer}>
      <Messages messages={messages} />
      <MessageForm onSumbit={handleSubmit} />
    </div>
  )
};

export default React.memo(Chat);