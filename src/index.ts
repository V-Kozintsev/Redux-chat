import "./styles.css";
import { renderChatUI } from "./renderChatUI";
import { selectFilteredMessages } from "./selectors";
import { Message } from "./types";
import {
  addMessage,
  searchMessage,
  setMessages,
  store,
} from "./store/chatSlice";
import { sendMessage, getMessagesList } from "./api";
import { displayMessages } from "./utils";

// Вызываем функцию для рендеринга UI
renderChatUI();

// Обработчик отправки сообщения
document.getElementById("send-button")?.addEventListener("click", async () => {
  const messageInput = document.getElementById(
    "message-input",
  ) as HTMLInputElement;
  const nicknameInput = document.getElementById(
    "nickname-input",
  ) as HTMLInputElement;
  const message = messageInput.value;
  const nickname = nicknameInput.value || "Anonymous";

  if (message.trim() === "") return;

  await sendMessage({
    message,
    nickname,
    date: "",
  });
  messageInput.value = "";
});

// Обработчик поиска
const searchInput = document.getElementById("search-input") as HTMLInputElement;
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value;
  store.dispatch(searchMessage(searchTerm));
  // Перерисовываем сообщения, используя селектор
  displayMessages(selectFilteredMessages(store.getState()));
});

// Инициализация чата
async function initChat() {
  const messages = await getMessagesList();
  store.dispatch(setMessages(messages));
  // Перерисовываем сообщения, используя селектор
  displayMessages(selectFilteredMessages(store.getState()));

  // Наблюдение за новыми сообщениями
  observeWithEventSource((newMessage: Message) => {
    store.dispatch(addMessage(newMessage));
    displayMessages(selectFilteredMessages(store.getState()), newMessage);
  });
}
function observeWithEventSource(callback: (message: Message) => void) {
  const evtSource = new EventSource(
    "https://otus-js-chat-4ed79-default-rtdb.firebaseio.com/messages.json",
  );
  evtSource.addEventListener("put", (event) => {
    const data = JSON.parse(event.data);
    callback(data.data);
  });
}

initChat();
