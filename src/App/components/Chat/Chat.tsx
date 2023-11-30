import React from 'react';

import { Messages } from './components/Messages';
import { MessageForm } from './components/MessageForm';

import styles from './Chat.module.scss';

const Chat: React.FC = () => {
  const [messages, setMessages] = React.useState([]);

  const handleSubmit = (text: string): void => setMessages([...messages, text]);

  return (
    <div className={styles.chatContainer}>
      <Messages messages={messages} />
      <MessageForm onSumbit={handleSubmit} />
    </div>
  )
};

export default React.memo(Chat);