import { createAction } from '@reduxjs/toolkit';

export const addMessage = createAction<{ message: string, id: number }>('ADD_MESSAGE');
export const changeConnectionStatus = createAction<boolean>('CHANGE_CONNECTION_STATUS');
