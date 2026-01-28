import { useState, useRef, useEffect } from "react";
import { MobileContainer } from "@/components/layout/mobile-container";
import { motion, AnimatePresence } from "framer-motion";
import { Send, ArrowLeft, Mic, Sparkles, MessageSquare, ChevronRight } from "lucide-react";
import { Link, useLocation } from "wouter";
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
    content: "Добрый день. Я — ваш новый лучший сотрудник." 
  },
  {
    id: '2',
    role: 'agent',
    content: "Я встречаю клиентов, провожу презентации и закрываю сделки. Работаю 24/7. Без выгорания."
  }
];

export default function Home() {
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
    if (count < 3) return "Понимаю. Именно здесь я и помогаю. Я мгновенно реагирую на каждый лид, чтобы вы не теряли клиентов из-за «тишины».";
    if (count < 5) return "В отличие от кнопочного чат-бота, я поддерживаю живой диалог. Я понимаю контекст, отрабатываю возражения и веду к продаже.";
    return "Хотите посмотреть, как мы можем запустить это для вашего бизнеса всего за 72 часа?";
  };

  return (
    <MobileContainer className="flex flex-col h-screen bg-[#FDFCFB] relative">
      <main className="flex-1 flex flex-col p-6 z-10 overflow-y-auto no-scrollbar">
        
        {/* First Block: Hero Section (Restored style) */}
        <div className="text-center mt-8 mb-8 space-y-6">
           <h1 className="text-4xl font-display font-medium text-gray-900 leading-tight">
             Ваш новый лучший <br/>
             <span className="font-bold">сотрудник.</span>
           </h1>
           
           <div className="space-y-4">
             <p className="text-gray-500 text-lg leading-relaxed font-light">
               Я встречаю клиентов, провожу презентации и закрываю сделки.
             </p>
             <p className="text-gray-900 font-medium text-lg">
               Работаю 24/7. Без выгорания.
             </p>
           </div>
        </div>

        {/* Action Area */}
        <div className="flex flex-col gap-4 mt-2">
            {/* Start Live Dialog "Header" + Chat Interface */}
            <div className="flex items-center gap-3 px-4 mb-2 opacity-80">
                <MessageSquare size={18} className="text-gray-800" />
                <span className="text-sm font-semibold text-gray-800 uppercase tracking-wide">Начать живой диалог</span>
            </div>

            {/* Inline Chat Container */}
            <div className="bg-white/60 border border-black/5 rounded-3xl p-4 shadow-sm min-h-[300px] flex flex-col">
                 <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto max-h-[300px] no-scrollbar mb-4 pr-2">
                    <AnimatePresence>
                      {messages.map((msg) => (
                        <motion.div
                          key={msg.id}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div 
                            className={`
                              max-w-[90%] px-4 py-3 rounded-2xl text-[14px] leading-relaxed
                              ${msg.role === 'user' 
                                ? 'bg-black text-white rounded-br-none' 
                                : 'bg-white text-gray-800 rounded-bl-none shadow-sm border border-black/5'}
                            `}
                          >
                            {msg.role === 'agent' ? (
                              <TypingEffect text={msg.content} speed={10} />
                            ) : (
                              msg.content
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                    {isAgentTyping && (
                      <div className="flex justify-start">
                        <div className="bg-white px-3 py-2 rounded-2xl rounded-bl-none border border-black/5 flex gap-1 items-center">
                          <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></span>
                          <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce delay-75"></span>
                          <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                        </div>
                      </div>
                    )}
                 </div>

                 {/* Inline Input */}
                 <form 
                    onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                    className="relative flex items-center bg-white border border-black/10 rounded-2xl transition-all focus-within:shadow-md focus-within:border-black/20"
                  >
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Напишите сообщение..."
                      className="flex-1 bg-transparent border-none py-3 px-4 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-0"
                    />
                    <button 
                      type="submit"
                      disabled={!inputValue.trim()}
                      className="p-2 mr-1 bg-black rounded-xl text-white hover:bg-black/80 transition-all disabled:opacity-30"
                    >
                      <Send size={16} />
                    </button>
                  </form>
            </div>

            {/* How It Works Button */}
            <Link href="/presentation">
              <button className="w-full bg-white p-4 rounded-2xl flex items-center justify-between hover:bg-gray-50 transition-all active:scale-[0.98] border border-black/5 shadow-sm group mt-2">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-full bg-black/5 group-hover:bg-black/10 transition-colors">
                    <Sparkles size={20} className="text-gray-800" />
                  </div>
                  <span className="font-medium text-gray-900">Как это работает</span>
                </div>
                <ChevronRight className="text-black/20 group-hover:text-black/60 transition-colors" size={18} />
              </button>
            </Link>

             {/* Footer Info */}
             <div className="mt-4 text-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold uppercase rounded-full tracking-wider border border-green-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"/> Online • 24/7
                </span>
             </div>
        </div>
      </main>
    </MobileContainer>
  );
}
