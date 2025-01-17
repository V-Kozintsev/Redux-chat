//initialState
import { ChatState } from "./type";
export const initialState: ChatState = {
  messages: [], // Для хранения списка сообщений
  users: [], // Для хранения списка пользователей
  currentUserId: null, // ID текущего пользователя
  isLoading: false, // Статус загрузки
  error: null, // Строка для хранения сообщений об ошибках
  searchQuery: "", // Для поиска сообщений по тексту
};
