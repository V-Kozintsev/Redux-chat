import { createSelector } from "@reduxjs/toolkit";
import { ChatState } from "./types";

export const selectFilteredMessages = createSelector(
  (state: { chat: ChatState }) => state.chat.messages,
  (state: { chat: ChatState }) => state.chat.searchTerm,
  (messages, searchTerm) => {
    if (!searchTerm) {
      return messages; // Возвращаем все сообщения, если поисковый запрос пустой
    }
    return messages.filter((msg) => {
      if (
        msg &&
        typeof msg.message === "string" &&
        typeof msg.nickname === "string"
      ) {
        return (
          msg.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
          msg.nickname.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      return false;
    });
  },
);
