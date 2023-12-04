import { AnyAction, Dispatch } from '@reduxjs/toolkit';

import { config } from '../../config';
import { changeConnectionStatus, addMessage } from 'src/actions/chat';
import { updateToast } from 'src/actions/toast';

const MAX_CONNECTION_ATTEMPTS = 1;

export class WebSocketAPI {
  static socket: WebSocket = null;
  static failedAttempts = 0;

  static createConnection = (dispatch: Dispatch<AnyAction>): Promise<WebSocket> =>
    new Promise((resolve, reject) => {
      WebSocketAPI.socket = new WebSocket(config.websocketURL);
      let { socket } = WebSocketAPI;

      socket.onopen = () => {
        dispatch(changeConnectionStatus(true));
        resolve(socket);
      };

      socket.onmessage = (messageEvent: MessageEvent) => {
        dispatch(addMessage(JSON.parse(messageEvent.data)));
      };

      socket.onerror = (message: MessageEvent) => {
        reject(message);
        WebSocketAPI.reconnectWS(dispatch);
      };

      socket.onclose = () => {
        WebSocketAPI.reconnectWS(dispatch);
      };
    });

  static reconnectWS = async (dispatch: Dispatch<AnyAction>) => {
    dispatch(changeConnectionStatus(false));

    if (WebSocketAPI.failedAttempts < MAX_CONNECTION_ATTEMPTS) {
      WebSocketAPI.failedAttempts += 1;
      try {
        await WebSocketAPI.createConnection(dispatch);
      } catch (error) {
        dispatch(updateToast('Reconnection attempt failed'));
      }
    }
  };

  static sendMessage = (text: string): void => {
    const { socket } = WebSocketAPI;
    if (socket) {
      socket.send(text);
    }
  };

  static closeConnection = (): void => {
    let { socket } = WebSocketAPI;
    if (socket) {
      socket.close();
      socket = null;
    }
  };
}
