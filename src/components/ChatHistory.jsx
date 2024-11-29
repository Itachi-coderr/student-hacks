import React from "react";

const ChatHistory = ({ chats, onChatSelect, onNewChat }) => {
  return (
    <div className="w-1/4 bg-white bg-opacity-80 p-4">
      <h3 className="text-lg font-semibold mb-4">Chat History</h3>
      <button
        onClick={onNewChat}
        className="w-full p-2 mb-4 text-white font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg shadow-lg transition-transform transform hover:scale-105"
      >
        New Chat
      </button>
      <ul className="space-y-2">
        {chats.map((chat, idx) => (
          <li
            key={idx}
            onClick={() => onChatSelect(chat.title)}
            className="p-2 bg-gray-200 bg-opacity-90 rounded-lg cursor-pointer hover:bg-gray-300"
          >
            {chat.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatHistory;
