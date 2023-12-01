import { config } from '../../config';

export class WebSocketAPI {
  private static readonly url = config.websocketURL;

  static createConnection = (): Promise<WebSocket> =>
    new Promise((resolve, reject) => {
      const socket = new WebSocket(WebSocketAPI.url);

      socket.onopen = () => {
        resolve(socket);
      };

      socket.onerror = (message: MessageEvent) => {
        reject(message);
      };

      socket.onmessage = (event: MessageEvent) => {
        console.log('received message', event);
      };

      socket.onclose = () => {
        console.log('ws connection is closed');
      };
    });
}
