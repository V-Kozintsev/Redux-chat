//initChat.ts
/* import { getMessagesList, getUsersList } from "./chatApi";
import { chatSlice } from "./chatSlice";
import { displayMessages } from "./UI";
import { store } from "./store";
import { observeWithEventSource } from "./fireBaseApi";
import { Message } from "./type";

export async function initChat() {
  const messages = await getMessagesList();
  store.dispatch(chatSlice.actions.setMessage(messages));

  const users = await getUsersList();
  store.dispatch(chatSlice.actions.setUsers(users));

  observeWithEventSource((newMessage: Message) => {
    store.dispatch(chatSlice.actions.addMessage(newMessage));
    displayMessages(store.getState().chat.messages);
  });
} */
