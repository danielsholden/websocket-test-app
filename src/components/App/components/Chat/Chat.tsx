import React from 'react';
import { useDispatch } from 'react-redux';

import { Messages } from './components/Messages';
import { MessageForm } from './components/MessageForm';
import { addMessage } from 'src/actions/chat';

import styles from './Chat.module.scss';

const Chat: React.FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = (text: string): void => {
    dispatch(addMessage(text));
  }

  return (
    <div className={styles.chatContainer}>
      <Messages />
      <MessageForm onSumbit={handleSubmit} />
    </div>
  )
};

export default React.memo(Chat);