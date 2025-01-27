export function renderChatUI() {
  document.body.innerHTML = `
      <div id="chat-container">
        <h1>Чат Приложение</h1>
        <div id="messages"></div>
        <input type="text" class="inputVal" id="nickname-input" placeholder="Введите никнейм..." />
        <input type="text" class="inputVal" id="message-input" placeholder="Введите сообщение..." />
        <input type="text" class="inputVal" id="search-input" placeholder="Поиск по сообщениям..." />
        <button id="send-button">Отправить</button>
      </div>
    `;
}
