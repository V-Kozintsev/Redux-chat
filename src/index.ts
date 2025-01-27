import "./styles.css";
import { renderChatUI } from "./renderChatUI";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import smiley from "./assets/images/smiley.png";
import sadSmiley from "./assets/images/sad.png";
import laugh from "./assets/images/laugh.png";
import { selectFilteredMessages } from "./selectors";

// Вызываем функцию для рендеринга UI
renderChatUI();

type DateTimeString = string;

type Message = {
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

const initialChatState: ChatState = {
  messages: [],
  users: [],
  error: null,
  searchTerm: "",
};

const chatSlice = createSlice({
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

async function getMessagesList() {
  try {
    const response = await fetch(
      "https://otus-js-chat-4ed79-default-rtdb.firebaseio.com/messages.json",
    );
    if (!response.ok) throw new Error("Network response was not ok");

    const data: Record<string, Message> = await response.json();
    const messages = Object.values(data).map((el) => ({
      ...el,
      date: el.date || new Date().toISOString(),
    }));
    return messages;
  } catch (error) {
    console.error("Error fetching messages:", error);

    const errorMessage = error instanceof Error ? error.message : String(error);
    store.dispatch(chatSlice.actions.setError(errorMessage ?? "Unknown error"));

    return [];
  }
}

async function sendMessage(data: Message, date = new Date().toISOString()) {
  try {
    const response = await fetch(
      "https://otus-js-chat-4ed79-default-rtdb.firebaseio.com/messages.json",
      {
        method: "POST",
        body: JSON.stringify({ ...data, date }),
        headers: { "Content-Type": "application/json" },
      },
    );
    if (!response.ok) throw new Error("Failed to send message");
  } catch (error) {
    console.error("Error sending message:", error);
  }
}

function displayMessages(
  messages: Message[],
  newMessage: Message | null = null,
) {
  const messagesDiv = document.getElementById("messages") as HTMLDivElement;
  messagesDiv.innerHTML = "";

  messages.forEach((msg) => {
    const msgDate = new Date(msg.date);
    const formattedDate = msgDate.toLocaleString();

    // Обработка текста для смайлов
    const messageWithSmilies =
      typeof msg.message === "string"
        ? msg.message
            .replace(
              /XD/g,
              `<img src="${laugh}" alt=":-D" class="emoji ${newMessage && msg === newMessage ? "bouncing" : ""}"/>`,
            )
            .replace(
              /:-\)/g,
              `<img src="${smiley}" alt=":-)" class="emoji ${newMessage && msg === newMessage ? "bouncing" : ""}"/>`,
            )
            .replace(
              /:-\(/g,
              `<img src="${sadSmiley}" alt=":-(" class="emoji ${newMessage && msg === newMessage ? "bouncing" : ""}"/>`,
            )
        : "";

    const msgElement = document.createElement("div");
    msgElement.classList.add("message");
    msgElement.innerHTML = `
      <span class="nickname">${msg.nickname}:</span>
      <span>${messageWithSmilies}</span>
      <span class="date">${formattedDate}</span>
    `;
    messagesDiv.appendChild(msgElement);
  });

  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

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
