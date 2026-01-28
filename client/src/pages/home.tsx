import { MobileContainer } from "@/components/layout/mobile-container";
import { DialogNav } from "@/components/dialog-nav";
import { TypingEffect } from "@/components/ui/typing-effect";
import { motion } from "framer-motion";
import AvatarImage from "@/assets/agent-avatar.png";

export default function Home() {
  return (
    <MobileContainer className="relative flex flex-col">
      <main className="flex-1 flex flex-col p-6 z-10 overflow-y-auto no-scrollbar justify-center">
        {/* Avatar Section */}
        {/* <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center mt-8 mb-12"
        >
          <div className="relative w-24 h-24">
             // Hidden avatar for cleaner "Copilot" look as per screenshot, 
             // but keeping the structure if user wants it back later.
             // Or we can use a very subtle logo.
          </div>
        </motion.div> */}

        {/* Dialog Header */}
        <div className="space-y-6 text-center mb-12 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-white/40 border border-white/50 text-xs font-semibold text-gray-500 tracking-wider uppercase shadow-sm"
          >
            Wow Agent
          </motion.div>
          
          <h1 className="text-4xl font-display font-medium text-gray-900 leading-tight">
            <TypingEffect text="Добрый день. Я — ваш новый лучший сотрудник." speed={40} />
          </h1>
        </div>

        {/* Agent Message */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center max-w-[90%] mx-auto mb-12"
        >
          <p className="text-gray-500 text-lg leading-relaxed font-light">
            Я встречаю клиентов, провожу презентации и закрываю сделки. 
            <span className="text-gray-900 font-medium block mt-2">Работаю 24/7. Без выгорания.</span>
          </p>
        </motion.div>

        {/* Navigation / Choices */}
        <div className="mt-auto">
          <DialogNav />
        </div>
      </main>
    </MobileContainer>
  );
}
