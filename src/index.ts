import "./styles.css";
import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import smiley from "./assets/images/smiley.png";
import sadSmiley from "./assets/images/sad.png";
import laugh from "./assets/images/laugh.png";

type DateTimeString = string;

type Message = {
  date: DateTimeString;
  message: string;
  nickname: string;
};

export interface ChatState {
  messages: Message[];
  originalMessages: Message[];
  users: string[];
  error: string | null;
}

const initialChatState: ChatState = {
  messages: [],
  originalMessages: [],
  users: [],
  error: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState: initialChatState,
  reducers: {
    setMessages(state, action: PayloadAction<Message[]>) {
      state.messages = action.payload;
      state.originalMessages = action.payload;
    },
    addMessage(state, action: PayloadAction<Message>) {
      state.messages.push(action.payload);
      state.originalMessages.push(action.payload);
    },
    setUsers(state, action: PayloadAction<string[]>) {
      state.users = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    searchMessage(state, action: PayloadAction<string>) {
      const searchTerm = action.payload.toLowerCase();
      if (!searchTerm) {
        state.messages = [...state.originalMessages];
        return;
      }
      state.messages = state.originalMessages.filter((msg) => {
        if (
          msg &&
          typeof msg.message === "string" &&
          typeof msg.nickname === "string"
        ) {
          return (
            msg.message.toLowerCase().includes(searchTerm) ||
            msg.nickname.toLowerCase().includes(searchTerm)
          );
        }
        return false;
      });
    },
  },
});

const store = configureStore({
  reducer: {
    chat: chatSlice.reducer,
  },
});

async function getMessagesList() {
  try {
    const response = await fetch(
      "https://otus-js-chat-4ed79-default-rtdb.firebaseio.com/messages.json"
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
      }
    );
    if (!response.ok) throw new Error("Failed to send message");
  } catch (error) {
    console.error("Error sending message:", error);
  }
}

function displayMessages(
  messages: Message[],
  newMessage: Message | null = null
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
              `<img src="${laugh}" alt=":-D" class="emoji ${newMessage && msg === newMessage ? "bouncing" : ""}"/>`
            )
            .replace(
              /:-\)/g,
              `<img src="${smiley}" alt=":-)" class="emoji ${newMessage && msg === newMessage ? "bouncing" : ""}"/>`
            )
            .replace(
              /:-\(/g,
              `<img src="${sadSmiley}" alt=":-(" class="emoji ${newMessage && msg === newMessage ? "bouncing" : ""}"/>`
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
    "message-input"
  ) as HTMLInputElement;
  const nicknameInput = document.getElementById(
    "nickname-input"
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
  store.dispatch(chatSlice.actions.searchMessage(searchTerm));
  displayMessages(store.getState().chat.messages);
});

// Инициализация чата
async function initChat() {
  const messages = await getMessagesList();
  store.dispatch(chatSlice.actions.setMessages(messages));
  displayMessages(messages);

  // Наблюдение за новыми сообщениями
  observeWithEventSource((newMessage: Message) => {
    store.dispatch(chatSlice.actions.addMessage(newMessage));
    displayMessages(store.getState().chat.messages, newMessage);
  });
}
function observeWithEventSource(callback: (message: Message) => void) {
  const evtSource = new EventSource(
    "https://otus-js-chat-4ed79-default-rtdb.firebaseio.com/messages.json"
  );
  evtSource.addEventListener("put", (event) => {
    const data = JSON.parse(event.data);
    callback(data.data);
  });
}

initChat();
