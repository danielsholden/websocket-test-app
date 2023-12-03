import { createReducer } from '@reduxjs/toolkit';

import { addMessage, changeConnectionStatus } from 'src/actions/chat';
import { IChatState } from 'src/types';

export const CHAT_REDUCER_NAME = 'chat';

const initialState: IChatState = {
  connectionStatus: false,
  messages: [],
};

const updateConnectionStatus = (state, event) => {
  return ({ ...state, connectionStatus: event.payload });
 }

const updateMessages = (state, event) => {
 return ({ ...state, messages: [...state.messages, event.payload] });
}

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(addMessage, updateMessages).addCase(changeConnectionStatus, updateConnectionStatus);
});
