
import { createSelector } from '@reduxjs/toolkit';

import { CHAT_REDUCER_NAME } from 'src/reducers/chat';
import { IChatState } from 'src/types';

const selectState = (state) => state[CHAT_REDUCER_NAME];

export const selectMessages = createSelector(selectState, (state: IChatState) => state.messages);
export const selectConnectionStatus = createSelector(selectState, (state: IChatState) => state.connectionStatus);