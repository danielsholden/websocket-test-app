import React from 'react';

import { MessageList } from './components/MessageList';

import { ChatHeader } from './components/ChatHeader';

const Messages: React.FC = () => {
  return (
    <div>
      <ChatHeader />
      <MessageList />
    </div>
  )
};

export default React.memo(Messages);
