import { useState, useRef, useEffect } from "react";
import { MobileContainer } from "@/components/layout/mobile-container";
import { motion, AnimatePresence } from "framer-motion";
import { Send, ArrowLeft, Bot, User } from "lucide-react";
import { Link } from "wouter";
import { TypingEffect } from "@/components/ui/typing-effect";
import AvatarImage from "@/assets/agent-avatar.png";

type Message = {
  id: string;
  role: 'agent' | 'user';
  content: string;
  isTyping?: boolean;
};

const INITIAL_MESSAGES: Message[] = [
  { 
    id: '1', 
    role: 'agent', 
    content: "Hi there! I'm the Wow Agent demo. I can replace your entire first-line sales team." 
  },
  {
    id: '2',
    role: 'agent',
    content: "What is the biggest challenge your sales team is facing right now?"
  }
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isAgentTyping, setIsAgentTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isAgentTyping]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsAgentTyping(true);

    // Simulate Agent Response Logic
    setTimeout(() => {
      const responseContent = getAgentResponse(messages.length);
      const agentMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'agent',
        content: responseContent
      };
      setMessages(prev => [...prev, agentMsg]);
      setIsAgentTyping(false);
    }, 1500);
  };

  const getAgentResponse = (count: number) => {
    // Simple mock logic for demo purposes
    if (count < 3) return "I understand. That's exactly where I help. I engage every single lead instantly, so you never lose a potential customer to 'silence'.";
    if (count < 5) return "Unlike a chatbot with buttons, I hold a real conversation. I understand context, handle objections, and guide them to a sale.";
    return "Would you like to see how we can set this up for your business in just 72 hours?";
  };

  return (
    <MobileContainer className="flex flex-col h-screen">
      {/* Header */}
      <header className="glass-panel p-4 flex items-center gap-3 z-20 shrink-0">
        <Link href="/">
          <button className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors">
            <ArrowLeft size={20} />
          </button>
        </Link>
        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20">
          <img src={AvatarImage} alt="Agent" className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="font-display font-semibold text-white">Wow Agent</h3>
          <p className="text-xs text-primary animate-pulse">● Online</p>
        </div>
      </header>

      {/* Chat Area */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar bg-gradient-to-b from-transparent to-black/20"
      >
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`
                  max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed shadow-lg
                  ${msg.role === 'user' 
                    ? 'bg-primary text-white rounded-br-none' 
                    : 'glass-panel text-white/90 rounded-bl-none border-l-2 border-l-primary'}
                `}
              >
                {msg.role === 'agent' ? (
                  <TypingEffect text={msg.content} speed={15} />
                ) : (
                  msg.content
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {isAgentTyping && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="glass-panel px-4 py-3 rounded-2xl rounded-bl-none flex gap-1 items-center">
              <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce"></span>
            </div>
          </motion.div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 glass-panel border-t border-white/10 shrink-0 z-20">
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          className="flex gap-2 items-center"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask anything..."
            className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-white/30"
          />
          <button 
            type="submit"
            disabled={!inputValue.trim()}
            className="p-3 bg-primary rounded-full text-white shadow-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </MobileContainer>
  );
}
