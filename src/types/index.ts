export interface IChatState {
  connectionStatus: boolean;
  messages: Message[];
}

export type Message = {
  id: number;
  message: string;
};

export interface IToastState {
  text: string;
}
