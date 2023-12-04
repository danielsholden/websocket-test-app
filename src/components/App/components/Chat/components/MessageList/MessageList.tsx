import React from 'react';
import { useSelector } from 'react-redux';


import { selectMessages } from 'src/selectors/chat';
import { Message } from './components/Message';

import styles from './MessageList.module.scss';

const MessageList: React.FC = () => {
  const messages = useSelector(selectMessages);
  const containerRef = React.useRef(null)

  const scrollToBottom = (): void =>
    containerRef.current?.scrollIntoView({ behavior: 'smooth' });

  React.useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className={styles.messages}>
      {messages.map((m) => <Message key={m.id} text={m.message} />)}
      {!messages.length && <p className={styles.noMessages}>No messages yet</p>}
      <div ref={containerRef} />
    </div>
  )
};

export default React.memo(MessageList);
