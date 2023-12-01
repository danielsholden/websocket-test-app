import React from 'react';

import { Messages } from './components/Messages';
import { MessageForm } from './components/MessageForm';
import { useSelector, useDispatch } from 'react-redux';
import { selectMessages } from 'src/selectors/chat';

import styles from './Chat.module.scss';
import { addMessage } from 'src/actions/chat';

const Chat: React.FC = () => {
  const messages = useSelector(selectMessages);
  const dispatch = useDispatch();

  const handleSubmit = (text: string): void => {
    dispatch(addMessage(text));
  }

  return (
    <div className={styles.chatContainer}>
      <Messages messages={messages} />
      <MessageForm onSumbit={handleSubmit} />
    </div>
  )
};

export default React.memo(Chat);