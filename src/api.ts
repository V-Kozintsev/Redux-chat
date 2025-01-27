import { Message } from "./types";
import { store, chatSlice } from "./store/chatSlice";
export async function getMessagesList() {
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

export async function sendMessage(
  data: Message,
  date = new Date().toISOString(),
) {
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
