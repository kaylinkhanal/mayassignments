import ChatSection from "@/components/ChatSection";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

const Chat = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <ChatSection />
      </div>
    </div>
  );
};

export default Chat;
