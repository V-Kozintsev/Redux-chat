//type.ts
// Определение типов
type DateTimeString = string;

export type Message = {
  date: DateTimeString;
  message: string;
  nickname: string;
};

export interface ChatState {
  messages: Message[];
  users: string[];
  error: string | null;
}

export interface User {
  id: string;
  name: string;
}
