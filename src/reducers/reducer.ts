import { CHAT_REDUCER_NAME, reducer as chatReducer } from './chat';
import { TOAST_REDUCER_NAME, reducer as toastReducer } from './toast';

export const reducer = {
  [CHAT_REDUCER_NAME]: chatReducer,
  [TOAST_REDUCER_NAME]: toastReducer,
};
