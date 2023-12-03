import React from 'react';
import { Provider } from 'react-redux';

import { Layout } from './components/Layout';
import { Chat } from './components/Chat';

import { store } from '../../reducers/store';

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
