import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialChatState, Message, ChatState } from "../types";

export const chatSlice = createSlice({
  name: "chat",
  initialState: initialChatState,
  reducers: {
    setMessages(state, action: PayloadAction<Message[]>) {
      state.messages = action.payload;
    },
    addMessage(state, action: PayloadAction<Message>) {
      state.messages.push(action.payload);
    },
    setUsers(state, action: PayloadAction<string[]>) {
      state.users = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    searchMessage(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload; // Устанавливаем поисковую строку в стейт
    },
  },
});

export const { setMessages, addMessage, setUsers, setError, searchMessage } =
  chatSlice.actions;
export const store = configureStore({
  reducer: {
    chat: chatSlice.reducer,
  },
});

export const selectChatState = (state: { chat: ChatState }) => state.chat;
