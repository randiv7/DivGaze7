import React, { useState } from "react";
import { MessageSquare, X, Send, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Define language translations for static content
const translations = {
  en: {
    welcome: "Hello! I'm Divgaze's assistant. How can I help you today?",
    placeholder: "Type your message...",
    autoReply: "Thank you for your message! Our team will get back to you soon.",
    langSwitch: "සිංහල"
  },
  si: {
    welcome: "ආයුබෝවන්! මම දිව්ගේස් සහායකයා. මට ඔබට උදව් කළ හැක්කේ කෙසේද?",
    placeholder: "ඔබේ පණිවිඩය ටයිප් කරන්න...",
    autoReply: "ඔබේ පණිවිඩයට ස්තූතියි! අපගේ කණ්ඩායම ඉක්මනින් ඔබ වෙත ළඟා වනු ඇත.",
    langSwitch: "English"
  }
};

const ChatbotWidget: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "si">("en");
  const [messages, setMessages] = useState<{type: "user" | "bot", content: string}[]>([
    { type: "bot", content: translations[language].welcome }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  
  // Toggle language between English and Sinhala
  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "si" : "en";
    setLanguage(newLanguage);
    
    // Update welcome message based on new language
    setMessages(prev => {
      const updatedMessages = [...prev];
      // Only update the first bot message (welcome message)
      if (updatedMessages[0]?.type === "bot") {
        updatedMessages[0] = { type: "bot", content: translations[newLanguage].welcome };
      }
      return updatedMessages;
    });
  };
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;
    
    // Add user message
    const userMessage = { type: "user" as const, content: inputMessage.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    
    // Simulate bot response (would be replaced with actual API call)
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        type: "bot" as const, 
        content: translations[language].autoReply
      }]);
    }, 1000);
  };

  return (
    <>
      {/* Chat toggle button */}
      <Button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className={`fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50 ${
          isChatOpen 
            ? "bg-cyber-pink hover:bg-cyber-pink/80 shadow-[0_0_15px_rgba(255,46,245,0.5)]" 
            : "bg-neon-blue hover:bg-neon-blue/80 shadow-[0_0_15px_rgba(0,255,255,0.5)]"
        }`}
        size="icon"
      >
        {isChatOpen ? <X className="text-deep-navy-blue" /> : <MessageSquare className="text-deep-navy-blue animate-pulse" />}
      </Button>

      {/* Chat window */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 bg-grid-purple border border-neon-blue/20 rounded-lg shadow-lg z-40 flex flex-col h-96 animate-fade-in">
          <div className="p-4 border-b border-neon-blue/20 flex justify-between items-center bg-grid-purple/80">
            <h3 className="font-semibold text-neon-blue">Divgaze Assistant</h3>
            <div className="flex items-center gap-2">
              {/* Language toggle button */}
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={toggleLanguage} 
                className="hover:bg-neon-blue/20 p-1"
              >
                <Globe size={18} className="text-soft-blue-gray mr-1" />
                <span className="text-xs text-soft-blue-gray">{translations[language].langSwitch}</span>
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsChatOpen(false)} 
                className="hover:bg-cyber-pink/20"
              >
                <X size={18} className="text-soft-blue-gray" />
              </Button>
            </div>
          </div>

          <div className="flex-grow p-4 overflow-y-auto flex flex-col gap-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`${
                  message.type === "user" 
                    ? "ml-auto bg-neon-blue text-deep-navy-blue" 
                    : "mr-auto bg-grid-purple border border-neon-blue/20 text-soft-blue-gray"
                } rounded-lg p-3 max-w-[80%] animate-fade-in shadow-sm`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {message.content}
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t border-neon-blue/20 flex gap-2 bg-grid-purple/80">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder={translations[language].placeholder}
              className="flex-grow border-neon-blue/20 focus-visible:ring-neon-blue bg-grid-purple/50 text-soft-blue-gray"
            />
            <Button 
              type="submit" 
              size="icon" 
              className="bg-neon-blue text-deep-navy-blue hover:bg-cyber-pink transition-colors duration-300 shadow-[0_0_8px_rgba(138,43,226,0.5)]"
            >
              <Send size={18} />
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;