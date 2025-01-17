// chatSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";


const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    //Получения списка сообщений
    setMessages(state, action) {
      state.messages = action.payload;
    },
    //Получение одного сообщения
    addMessage(state, action) {
      state.messages.push(action.payload);
    },
    // Отправка сообщения
    sendMessage(state, action) {
      state.messages.unshift(action.payload);
    },
    // Получение списка пользователей
    setUsers(state, action) {
      state.users = action.payload;
    },
    // Поиск по чату
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    // Изменение статуса загрузки
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    // Установка ошибки
    setError(state, action) {
      state.error = action.payload;
    },
    // Очистка ошибок
    clearError(state) {
      state.error = null;
    },
  },
});

// Экспорты экшенов
export const {
  setMessages,
  addMessage,
  sendMessage,
  setUsers,
  setSearchQuery,
  setLoading,
  setError,
  clearError,
} = chatSlice.actions;

// Экспорт редьюсера
export default chatSlice.reducer;
