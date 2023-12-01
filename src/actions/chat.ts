import { createAction } from '@reduxjs/toolkit';

export const addMessage = createAction<string>('ADD_MESSAGE');
export const changeConnectionStatus = createAction<boolean>('CHANGE_CONNECTION_STATUS');
