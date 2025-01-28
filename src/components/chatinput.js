import React from "react";

const chatinput = ({ input, setInput, handleSend }) => 
{
  return (
    <div className="flex items-center p-4 bg-white border-t">
      <input
        type="text"
        className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleSend}
        className="ml-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Send
      </button>
    </div>
  );
};

export default chatinput;
