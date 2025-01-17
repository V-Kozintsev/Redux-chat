// Определение типов
type DateTimeString = string;

export type Message = {
  date: DateTimeString;
  message: string;
  name: string;
};

export interface ChatState {
  messages: Message[];
  users: string[];
  currentUserId: string | null;
  isLoading: boolean;
  error: string | null;
  searchQuery: string;
}
