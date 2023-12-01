import React from 'react';

import styles from './MessageForm.module.scss';

type Props = {
  onSumbit: (str: string) => void
}

const MessageForm: React.FC<Props> = ({
  onSumbit
}) => {
  const [text, setText] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => setText(e.target.value);

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    onSumbit(text);
    setText('');
  }

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea
          className={styles.textarea}
          onChange={handleChange}
          value={text}
          placeholder='Write a message..'
        />
        <div className={styles.actions}>
          <button type='button'>Close connection</button>
          <button type='button'>Reconnect</button>
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
};

export default React.memo(MessageForm);
