import { createAction } from '@reduxjs/toolkit';

export const updateToast = createAction<string>('UPDATE_TOAST_TEXT');