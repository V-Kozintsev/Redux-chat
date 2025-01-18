//UI.ts
/* import { chatSlice, store } from "./chatSlice";

function displayMessages(messages) {
  const messagesDiv = document.getElementById("messages") as HTMLDivElement;
  messagesDiv.innerHTML = ""; // Очищаем предыдущие сообщения
  messages.forEach((msg) => {
    const msgElement = document.createElement("div");
    msgElement.classList.add("message");
    msgElement.innerHTML = `<span class="nickname">${msg.nickname}:</span> ${msg.message}<br/>`;
    messagesDiv.appendChild(msgElement);
  });
  messagesDiv.scrollTop = messagesDiv.scrollHeight; // Скроллим вниз
}

document.getElementById("search-input").addEventListener("input", (e) => {
  const searchTerm = e.target.value;
  store.dispatch(chatSlice.actions.searchMessages(searchTerm));
  displayMessages(store.getState().chat.messages);
}); */
