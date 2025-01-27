//type.ts
export type DateTimeString = string;

export type Message = {
  date: DateTimeString;
  message: string;
  nickname: string;
};

export interface ChatState {
  messages: Message[];
  users: string[];
  error: string | null;
  searchTerm: string; // Добавляем поисковую строку в состояние
}

export const initialChatState: ChatState = {
  messages: [],
  users: [],
  error: null,
  searchTerm: "",
};
