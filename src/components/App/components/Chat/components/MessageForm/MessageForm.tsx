import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectConnectionStatus } from 'src/selectors/chat';
import { WebSocketAPI } from 'src/services/webSocket';
import { changeConnectionStatus } from 'src/actions/chat';

import styles from './MessageForm.module.scss';

type Props = {
  onSumbit: (str: string) => void
}

const MessageForm: React.FC<Props> = ({
  onSumbit
}) => {
  const [text, setText] = React.useState('');
  const wsIsConnected = useSelector(selectConnectionStatus);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => setText(e.target.value);

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    if (wsIsConnected) {
      WebSocketAPI.sendMessage(text);
      onSumbit(text);
      setText('');
    } else {
      // message here
    }
  };

  const handleReconnect = (): void => {
    WebSocketAPI.createConnection(dispatch);
  };

  const handleCloseConnect = (): void => {
    WebSocketAPI.closeConnection();
    dispatch(changeConnectionStatus(false));
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
          <button type='button' onClick={handleCloseConnect}>
            Close connection
          </button>
          <button type='button' onClick={handleReconnect}>
            Reconnect
          </button>
          <button disabled={!wsIsConnected}>Submit</button>
        </div>
      </form>
    </div>
  )
};

export default React.memo(MessageForm);
