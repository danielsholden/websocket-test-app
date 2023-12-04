import { createReducer } from '@reduxjs/toolkit';

import { updateToast,  } from 'src/actions/toast';
import { IToastState } from 'src/types';

export const TOAST_REDUCER_NAME = 'toast';

const initialState: IToastState = {
  text: '',
};

const updateToastText = (_, event) => ({ text: event.payload });

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(updateToast, updateToastText);
});
