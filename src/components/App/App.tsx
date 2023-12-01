import React from 'react';
import { Chat } from './components/Chat';
import { WebSocketAPI } from 'src/services/webSocket';
import { Provider } from 'react-redux';

import { store } from '../../reducers/store';

import styles from './App.module.scss';

const App: React.FC = () => {
  const webSocketConnect = async () => {
    await WebSocketAPI.createConnection();
    // connection.send('data test id wss conntection');
  };

  React.useEffect(() => {
    webSocketConnect();
  }, []);

  return (
    <Provider store={store}>
      <div>
        <h3 className={styles.header}>Messages</h3>
        <main className={styles.main}>
          <Chat />
        </main>
      </div>
    </Provider>
  );
}

export default App;
