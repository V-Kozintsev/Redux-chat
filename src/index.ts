/* import "./styles.css";

import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getDatabase, ref, onValue } from "firebase/database";
type DateTimeString = string;

type Message = {
  date: DateTimeString;
  message: string;
  nickname: string;
};

export interface ChatState {
  messages: Message[]; // Filtered messages
  originalMessages: Message[]; // Original unfiltered messages
  users: string[];
  error: string | null;
}

export interface User {
  id: string;
  name: string;
}

const initialChatState: ChatState = {
  messages: [],
  originalMessages: [], // Initialize original messages
  users: [],
  error: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState: initialChatState,
  reducers: {
    setMessages(state, action: PayloadAction<Message[]>) {
      state.messages = action.payload; // Set messages
      state.originalMessages = action.payload; // Store original messages as well
    },
    addMessage(state, action: PayloadAction<Message>) {
      state.messages.push(action.payload);
      state.originalMessages.push(action.payload); // Add to original messages
    },
    setUsers(state, action: PayloadAction<string[]>) {
      state.users = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    searchMessage(state, action: PayloadAction<string>) {
      const searchTerm = action.payload.toLowerCase();
      console.log("Search term:", searchTerm);

      // Check if the search term is an empty string
      if (!searchTerm) {
        // Reset messages to original when the search term is empty
        state.messages = [...state.originalMessages];
        return; // Exit the function early
      }

      // Proceed to filter messages when there's a search term
      state.messages = state.originalMessages.filter((msg) => {
        console.log("Current message:", msg);
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
        return false; // Exclude these items from the filtered array
      });
    },
  },
});

// Create the Redux store
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
    const data = await response.json();
    return Object.values(data).map((el) => ({
      ...el,
      date: el.date, // Keep this as a string
    }));
  } catch (error) {
    console.error("Error fetching messages:", error);
    store.dispatch(chatSlice.actions.setError(error.message));
  }
}

async function sendMessage(data, date = new Date().toISOString()) {
  try {
    const response = await fetch(
      "https://otus-js-chat-4ed79-default-rtdb.firebaseio.com/messages.json",
      {
        method: "POST",
        body: JSON.stringify({ ...data, date }), // date is already a string here
        headers: { "Content-Type": "application/json" },
      }
    );
    if (!response.ok) throw new Error("Failed to send message");
  } catch (error) {
    console.error("Error sending message:", error);
  }
}

// UI Functions
function displayMessages(messages) {
  const messagesDiv = document.getElementById("messages");
  messagesDiv.innerHTML = ""; // Clear current messages
  messages.forEach((msg) => {
    const msgDate = new Date(msg.date);
    const formattedDate = msgDate.toLocaleString(); // Format date as needed
    const msgElement = document.createElement("div");
    msgElement.classList.add("message");
    msgElement.innerHTML = `
<span class="nickname">${msg.nickname}:</span>
<span>${msg.message}</span>
<span class="date">${formattedDate}</span>
`;
    messagesDiv.appendChild(msgElement);
  });
  messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to bottom
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
document.getElementById("search-input").addEventListener("input", () => {
  const searchTerm = document.getElementById("search-input").value;
  store.dispatch(chatSlice.actions.searchMessage(searchTerm));
  displayMessages(store.getState().chat.messages);
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

function observeMessages() {
  const db = getDatabase();
  const messagesRef = ref(db, "messages");

  onValue(messagesRef, (snapshot) => {
    const data = snapshot.val();
    const messages = data ? Object.values(data) : [];
    store.dispatch(chatSlice.actions.setMessages(messages));
    displayMessages(messages);
  });
}
// Start the chat application
initChat();
// Export actions for use in components

export default store;
 */
