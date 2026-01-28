import { useState } from "react";
import { MobileContainer } from "@/components/layout/mobile-container";
import { LiveAvatarChat } from "@/components/LiveAvatarChat";
import { Link } from "wouter";
import { ArrowLeft, Video, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function VideoChatPage() {
  const [isAvatarOpen, setIsAvatarOpen] = useState(false);

  return (
    <>
      <MobileContainer className="flex flex-col h-screen">
        {/* Header */}
        <header className="p-4 flex items-center justify-between z-20 shrink-0 bg-white/50 backdrop-blur-md sticky top-0">
          <div className="flex items-center gap-3">
            <Link href="/">
              <button className="p-2 -ml-2 rounded-full hover:bg-black/5 text-gray-500 transition-colors" data-testid="button-back">
                <ArrowLeft size={22} />
              </button>
            </Link>
            <h3 className="font-display font-semibold text-gray-900 text-lg">Видео-звонок</h3>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-black to-gray-800 flex items-center justify-center shadow-2xl">
              <Video className="w-12 h-12 text-white" />
            </div>
            
            <h1 className="text-2xl font-display font-bold text-gray-900 mb-3">
              Живой разговор с AI
            </h1>
            <p className="text-gray-500 text-sm mb-8 max-w-xs mx-auto leading-relaxed">
              Начните видео-звонок с цифровым сотрудником. Он ответит на ваши вопросы голосом и покажет, как работает Wow Agent.
            </p>

            <button
              onClick={() => setIsAvatarOpen(true)}
              className="px-8 py-4 bg-black text-white rounded-full font-bold flex items-center gap-3 mx-auto hover:bg-gray-800 transition-all shadow-xl shadow-black/20 active:scale-[0.98]"
              data-testid="button-start-video-call"
            >
              <Phone className="w-5 h-5" />
              Начать звонок
            </button>

            <p className="text-[11px] text-gray-400 mt-6 px-8">
              Для работы требуется разрешение на микрофон
            </p>
          </motion.div>
        </div>
      </MobileContainer>

      {/* LiveAvatar Modal */}
      <LiveAvatarChat
        isOpen={isAvatarOpen}
        onClose={() => setIsAvatarOpen(false)}
        language="ru"
        config={{
          avatarName: "Wow Agent",
          avatarInitials: "WA",
          avatarGradient: "from-black to-gray-800",
          startButtonText: "Начать звонок",
          connectingText: "Подключение...",
          waitingText: "Ожидание аватара...",
          endedTitle: "Звонок завершён",
          endedDescription: "Спасибо за диалог! Хотите узнать больше?",
        }}
      />
    </>
  );
}
