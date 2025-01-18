/* 
import { Message, User } from "./type";

async function fetchMessagesFromApi(): Promise<any> {
  try {
    const response = await fetch(
      "https://otus-js-chat-4ed79-default-rtdb.firebaseio.com/messages.json"
    );

    if (!response.ok) {
      throw new Error(`Ошибка API: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Произошла ошибка при получении сообщений:", error);
    return null;
  }
}

function parseDate(dateValue: string): string {
  const parsedDate = new Date(dateValue);
  if (!isNaN(parsedDate.getTime())) {
    return parsedDate.toISOString();
  } else {
    console.warn("Некорректное значение даты:", dateValue);
    return "Неизвестная дата"; // Значение по умолчанию
  }
}

function parseMessage(messageObj: any): Message | null {
  if (
    !messageObj ||
    !messageObj.date ||
    !messageObj.message ||
    !messageObj.nickname
  ) {
    console.warn("Некорректное сообщение:", messageObj);
    return null;
  }

  const parsedDate = parseDate(messageObj.date);
  if (parsedDate === "Неизвестная дата") {
    return null;
  }

  return {
    date: parsedDate,
    message: messageObj.message,
    nickname: messageObj.nickname,
  };
}

export async function getMessagesList(): Promise<Message[]> {
  const rawMessages = await fetchMessagesFromApi();
  const messages: Message[] = [];

  if (rawMessages && typeof rawMessages === "object") {
    for (const message of Object.values(rawMessages)) {
      const parsedMessage = parseMessage(message);
      if (parsedMessage) {
        messages.push(parsedMessage);
      }
    }
  } else {
    console.warn("Полученные сообщения некорректны:", rawMessages);
  }

  return messages;
}

export async function getUsersList(): Promise<User[]> {
  try {
    const response = await fetch(
      "https://otus-js-chat-4ed79-default-rtdb.firebaseio.com/users.json"
    );

    if (!response.ok) {
      throw new Error(`Ошибка API: ${response.statusText}`);
    }

    const data: Record<string, User> = await response.json();
    if (data && typeof data === "object") {
      return Object.values(data);
    }

    console.warn("Полученные данные пользователей некорректны:", data);
    return [];
  } catch (error) {
    console.error(
      "Произошла ошибка при получении списка пользователей:",
      error
    );
    return [];
  }
}

export async function sendMessage(data: Message) {
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
 */
