// Создаем функцию для создания HTML структуры
export function renderChatUI() {
  const chatContainer = document.createElement("div");
  chatContainer.id = "chat-container";

  const title = document.createElement("h1");
  title.textContent = "Чат Приложение";
  chatContainer.appendChild(title);

  const messagesDiv = document.createElement("div");
  messagesDiv.id = "messages";
  chatContainer.appendChild(messagesDiv);

  const nicknameInput = document.createElement("input");
  nicknameInput.type = "text";
  nicknameInput.classList.add("inputVal");
  nicknameInput.id = "nickname-input";
  nicknameInput.placeholder = "Введите никнейм...";
  chatContainer.appendChild(nicknameInput);

  const messageInput = document.createElement("input");
  messageInput.type = "text";
  messageInput.classList.add("inputVal");
  messageInput.id = "message-input";
  messageInput.placeholder = "Введите сообщение...";
  chatContainer.appendChild(messageInput);

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.classList.add("inputVal");
  searchInput.id = "search-input";
  searchInput.placeholder = "Поиск по сообщениям...";
  chatContainer.appendChild(searchInput);

  const sendButton = document.createElement("button");
  sendButton.id = "send-button";
  sendButton.textContent = "Отправить";
  chatContainer.appendChild(sendButton);

  // Добавляем созданный контейнер в body (или другое место)
  document.body.appendChild(chatContainer);
}
