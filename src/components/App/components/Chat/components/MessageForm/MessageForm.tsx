import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectConnectionStatus } from 'src/selectors/chat';
import { WebSocketAPI } from 'src/services/webSocket';
import { addMessage } from 'src/actions/chat';

import styles from './MessageForm.module.scss';

const MessageForm: React.FC = () => {
  const [text, setText] = React.useState('');
  const wsIsConnected = useSelector(selectConnectionStatus);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => setText(e.target.value);

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    if (wsIsConnected) {
      WebSocketAPI.sendMessage(text);
      dispatch(addMessage(text));
      setText('');
    } else {
      // toast is here
    }
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea
          className={styles.textarea}
          onChange={handleChange}
          value={text}
          placeholder='Write a message..'
          disabled={!wsIsConnected}
        />
        <div className={styles.actions}>
          <button disabled={!wsIsConnected}>Submit</button>
        </div>
      </form>
    </div>
  )
};

export default React.memo(MessageForm);
