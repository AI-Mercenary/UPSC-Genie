import React from "react";

const chatmessage = ({ message, isUser }) => {
  return (
    <div
      className={`flex mb-3 ${
        isUser ? "justify-end" : "justify-start"
      } items-start`}
    >
      <div
        className={`max-w-xs px-4 py-2 rounded-lg shadow-lg ${
          isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
        }`}
      >
        {message}
      </div>
    </div>
  );
};

export default chatmessage;
