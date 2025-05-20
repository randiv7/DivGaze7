
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ChatbotWidget from "../chatbot/ChatbotWidget";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
};

export default Layout;
