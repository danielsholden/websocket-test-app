import React from 'react';

import { MessageForm } from './components/MessageForm';
import { ChatHeader } from './components/ChatHeader';
import { MessageList } from './components/MessageList';

import styles from './Chat.module.scss';

const Chat: React.FC = () => {
  return (
    <div className={styles.chatContainer}>
      <ChatHeader />
      <MessageList />
      <MessageForm />
    </div>
  )
};

export default React.memo(Chat);