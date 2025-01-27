import { Message } from "./types";
import smiley from "./assets/images/smiley.png";
import sadSmiley from "./assets/images/sad.png";
import laugh from "./assets/images/laugh.png";

export function displayMessages(
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
