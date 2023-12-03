import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../reducers/store';

import { Layout } from './components/Layout';
import { Chat } from './components/Chat';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Chat />
      </Layout>
    </Provider>
  );
}

export default App;
