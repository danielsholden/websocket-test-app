
import { createSelector } from '@reduxjs/toolkit';

import { TOAST_REDUCER_NAME } from 'src/reducers/toast';
import { IToastState } from 'src/types';

const selectState = (state) => state[TOAST_REDUCER_NAME];

export const selectToastText = createSelector(selectState, (state: IToastState) => state.text);
