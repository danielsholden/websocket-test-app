import React from 'react';
import { Chat } from './components/Chat';

import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <div>
      <h3 className={styles.header}>Messages</h3>
      <main className={styles.main}>
        <Chat />
      </main>
    </div>
  );
}

export default App;
