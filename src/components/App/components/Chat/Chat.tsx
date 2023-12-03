import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Messages } from './components/Messages';
import { MessageForm } from './components/MessageForm';
import { selectMessages } from 'src/selectors/chat';
import { addMessage } from 'src/actions/chat';

import styles from './Chat.module.scss';

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