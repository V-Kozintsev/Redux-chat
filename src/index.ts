//файл index.ts
import "./styles.css";

import { configureStore, createSlice } from "@reduxjs/toolkit";

// Redux slice
const initialState = {
  messages: [],
  error: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setMessages(state, action) {
      state.messages = action.payload;
    },
    addMessage(state, action) {
      state.messages.push(action.payload);
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    chat: chatSlice.reducer,
  },
});

// API functions
async function getMessagesList() {
  const response = await fetch(
    "https://otus-js-chat-4ed79-default-rtdb.firebaseio.com/messages.json"
  );
  const data = await response.json();
  return Object.values(data).map((el) => ({
    ...el,
    date: new Date(el.date),
  }));
}

async function sendMessage(data) {
  await fetch(
    "https://otus-js-chat-4ed79-default-rtdb.firebaseio.com/messages.json",
    {
      method: "POST",
      body: JSON.stringify({
        ...data,
        date: new Date().toISOString(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

// UI Functions
function displayMessages(messages) {
  const messagesDiv = document.getElementById("messages");
  messagesDiv.innerHTML = ""; // Clear current messages
  messages.forEach((msg) => {
    const msgElement = document.createElement("div");
    msgElement.classList.add("message");
    msgElement.innerHTML = `<span class="nickname">${msg.nickname}: </span>${msg.message}<br/>`;
    messagesDiv.appendChild(msgElement);
  });
  messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll down
}

// Event Listeners
document.getElementById("send-button").addEventListener("click", async () => {
  const messageInput = document.getElementById("message-input");
  const nicknameInput = document.getElementById("nickname-input");
  const message = messageInput.value;
  const nickname = nicknameInput.value || "Anonymous";

  if (message.trim() === "") return;

  await sendMessage({ message, nickname });
  messageInput.value = ""; // Clear input
});

// Initialize chat
async function initChat() {
  const messages = await getMessagesList();
  store.dispatch(chatSlice.actions.setMessages(messages));
  displayMessages(messages);

  // Subscribe to new messages
  observeWithEventSource((newMessage) => {
    store.dispatch(chatSlice.actions.addMessage(newMessage));
    displayMessages(store.getState().chat.messages);
  });
}

function observeWithEventSource(callback) {
  const evtSource = new EventSource(
    "https://otus-js-chat-4ed79-default-rtdb.firebaseio.com/messages.json"
  );
  evtSource.addEventListener("put", (event) => {
    const data = JSON.parse(event.data);
    callback(data.data);
  });
}

// Start the chat application
initChat();
