import React from "react";

const ChatSection = () => {
  return (
    <section className="flex flex-col flex-1 bg-gray-100 p-4 relative">
      <div className="flex-1 overflow-y-auto p-4 mb-20 bg-white rounded shadow-sm">
        <h2 className="text-gray-600">Chat will appear here...</h2>
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex gap-2">
        <input
          type="text"
          placeholder="Enter your message..."
          className="flex-1 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
        />
        <button className="px-5 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
          Send
        </button>
      </div>
    </section>
  );
};

export default ChatSection;
