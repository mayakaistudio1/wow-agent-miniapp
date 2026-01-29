import { useState, useRef, useEffect } from "react";
import { MobileContainer } from "@/components/layout/mobile-container";
import { motion, AnimatePresence } from "framer-motion";
import { Send, ArrowLeft, Mic } from "lucide-react";
import { Link } from "wouter";
import { TypingEffect } from "@/components/ui/typing-effect";
import { useLanguage } from "@/lib/language-context";

type Message = {
  id: string;
  role: 'agent' | 'user';
  content: string;
  isTyping?: boolean;
};

export default function ChatPage() {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isAgentTyping, setIsAgentTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      setMessages([
        { id: '1', role: 'agent', content: t.chat.initialMessages[0] },
        { id: '2', role: 'agent', content: t.chat.initialMessages[1] },
      ]);
    }
  }, [t]);

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
    if (count < 3) return t.chat.responses[0];
    if (count < 5) return t.chat.responses[1];
    return t.chat.responses[2];
  };

  return (
    <MobileContainer className="flex flex-col h-screen bg-[#FDFCFB]">
      <header className="p-4 flex items-center justify-between z-20 shrink-0 bg-white/50 backdrop-blur-md sticky top-0">
        <div className="flex items-center gap-3">
            <Link href="/">
            <button className="p-2 -ml-2 rounded-full hover:bg-black/5 text-gray-500 transition-colors">
                <ArrowLeft size={22} />
            </button>
            </Link>
            <h3 className="font-display font-semibold text-gray-900 text-lg">{t.chat.title}</h3>
        </div>
        <div className="flex gap-2">
            <div className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold uppercase rounded-full tracking-wider border border-green-200">
                {t.chat.online}
            </div>
        </div>
      </header>

      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-6 no-scrollbar"
      >
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`
                  max-w-[85%] px-5 py-3.5 rounded-2xl text-[15px] leading-relaxed shadow-sm
                  ${msg.role === 'user' 
                    ? 'bg-black text-white rounded-br-none shadow-md' 
                    : 'bg-white text-gray-800 rounded-bl-none shadow-sm border border-black/5'}
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
            <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-none flex gap-1 items-center shadow-sm border border-black/5">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
            </div>
          </motion.div>
        )}
      </div>

      <div className="p-4 pt-2 shrink-0 z-20">
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          className="relative flex items-center shadow-xl shadow-black/5 rounded-[2rem] bg-white border border-black/5 transition-all focus-within:shadow-2xl focus-within:scale-[1.01]"
        >
          <button 
            type="button"
            className="p-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
             <Mic size={22} />
          </button>
          
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={t.chat.placeholder}
            className="flex-1 bg-transparent border-none py-4 text-gray-900 text-[16px] placeholder:text-gray-400 focus:outline-none focus:ring-0"
          />
          
          <button 
            type="submit"
            disabled={!inputValue.trim()}
            className="p-2 mr-2 bg-black rounded-full text-white hover:bg-black/80 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </MobileContainer>
  );
}
