import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { config } from '../../config';

import { changeConnectionStatus, addMessage } from 'src/actions/chat';

export class WebSocketAPI {
  static socket: WebSocket = null;

  static createConnection = (dispatch: Dispatch<AnyAction>): Promise<WebSocket> =>
    new Promise((resolve, reject) => {
      WebSocketAPI.socket = new WebSocket(config.websocketURL);
      let { socket } = WebSocketAPI;

      socket.onopen = () => {
        dispatch(changeConnectionStatus(true));
        resolve(socket);
      };

      socket.onerror = (message: MessageEvent) => {
        console.log('error');
        reject(message);
      };

      socket.onmessage = (messageEvent: MessageEvent) => {
        dispatch(addMessage(messageEvent.data));
      };

      socket.onclose = () => {
        console.log('ws connection is closed');
      };
    });

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
