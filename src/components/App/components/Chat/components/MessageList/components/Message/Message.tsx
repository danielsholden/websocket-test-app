import React from 'react';

import { SafeHtmlParser } from 'src/components/App/components/SafeHtmlParser';

import styles from './Message.module.scss';

type Props = {
  text: string;
};

const Message: React.FC<Props> = (props) => {
  console.log('re-render message - ', props.text);
  return (
    <div className={styles.msgText}>
      <SafeHtmlParser>{props.text}</SafeHtmlParser>
    </div>
  );
};

export default React.memo(Message);