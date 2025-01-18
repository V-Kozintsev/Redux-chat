import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChatState, Message } from "../src/type";

const initialChatState: ChatState = {
  messages: [],
  users: [],
  error: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState: initialChatState,
  reducers: {
    setMessage(state, action: PayloadAction<Message[]>) {
      state.messages = action.payload;
    },
    addMessage(state, action: PayloadAction<Message>) {
      state.messages.push(action.payload);
    },
    setUsers(state, action: PayloadAction<string[]>) {
      // Adjust type as necessary
      state.users = action.payload; // Corrected from state.messages to state.users
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload; // Corrected from state.messages to state.error
    },
    searchMessage(state, action: PayloadAction<string>) {
      const searchTerm = action.payload.toLowerCase();
      state.messages = state.messages.filter(
        (msg) =>
          msg.message.toLowerCase().includes(searchTerm) ||
          msg.nickname.toLowerCase().includes(searchTerm),
      );
    },
  },
});

// Create the Redux store
const store = configureStore({
  reducer: {
    chat: chatSlice.reducer,
  },
});

// Export actions for use in components
export const { setMessage, addMessage, setUsers, setError, searchMessage } =
  chatSlice.actions;

export default store;
