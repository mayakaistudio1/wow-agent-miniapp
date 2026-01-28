import { useState } from "react";
import { MobileContainer } from "@/components/layout/mobile-container";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Check, Sparkles } from "lucide-react";
import AvatarImage from "@/assets/agent-avatar.png";

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 2000);
  };

  return (
    <MobileContainer className="flex flex-col h-screen">
      <header className="p-4 z-20">
        <Link href="/">
          <button className="p-2 rounded-full hover:bg-black/5 text-gray-500 transition-colors">
            <ArrowLeft size={24} />
          </button>
        </Link>
      </header>

      <div className="flex-1 p-6 flex flex-col z-10 overflow-y-auto no-scrollbar">
        <div className="text-center mb-10 mt-4">
          {/* <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border border-black/10 shadow-xl mb-6">
             <img src={AvatarImage} alt="Agent" className="w-full h-full object-cover" />
          </div> */}
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-3">Готовы к запуску?</h1>
          <p className="text-gray-500 text-base">Создайте своего цифрового сотрудника за 72 часа.</p>
        </div>

        {formState === 'success' ? (
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="bg-white border border-black/5 shadow-xl p-8 rounded-3xl text-center flex flex-col items-center justify-center flex-1 mb-8"
           >
             <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
               <Check size={32} />
             </div>
             <h3 className="text-xl font-bold text-gray-900 mb-3">Заявка отправлена!</h3>
             <p className="text-gray-500 text-sm mb-8">Наша команда свяжется с вами в ближайшее время для брифинга.</p>
             <Link href="/">
               <button className="text-black font-semibold text-sm hover:underline">Вернуться к агенту</button>
             </Link>
           </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Имя</label>
              <input 
                required
                type="text" 
                placeholder="Иван Иванов"
                className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-gray-900 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all placeholder:text-gray-300"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Telegram / Контакт</label>
              <input 
                required
                type="text" 
                placeholder="@username"
                className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-gray-900 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all placeholder:text-gray-300"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Бизнес-цель</label>
              <div className="relative">
                <select className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-gray-900 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all appearance-none">
                    <option>Увеличить продажи</option>
                    <option>Автоматизировать поддержку</option>
                    <option>Вебинары и дожим</option>
                    <option>Другое</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
              </div>
            </div>

            <button 
              type="submit"
              disabled={formState === 'submitting'}
              className="w-full bg-black text-white font-bold py-5 rounded-2xl mt-6 shadow-xl shadow-black/10 hover:scale-[1.02] transition-all active:scale-[0.98] flex items-center justify-center gap-2 text-lg"
            >
              {formState === 'submitting' ? (
                "Отправка..."
              ) : (
                <>
                  <Sparkles size={20} /> Получить Wow Agent
                </>
              )}
            </button>

            <p className="text-[11px] text-center text-gray-400 mt-4 px-8 leading-tight">
              Нажимая кнопку, вы соглашаетесь трансформировать свой бизнес.
            </p>
          </form>
        )}
      </div>
    </MobileContainer>
  );
}
