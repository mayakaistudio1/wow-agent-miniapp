import { MobileContainer } from "@/components/layout/mobile-container";
import { DialogNav } from "@/components/dialog-nav";
import { TypingEffect } from "@/components/ui/typing-effect";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage, LANGUAGES } from "@/lib/language-context";

function WelcomeScreen() {
  const { selectLanguage } = useLanguage();

  return (
    <MobileContainer className="relative flex flex-col">
      <main className="flex-1 flex flex-col p-6 z-10 overflow-y-auto no-scrollbar justify-center">
        <div className="space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-white/40 border border-white/50 text-xs font-semibold text-gray-500 tracking-wider uppercase shadow-sm"
          >
            Wow Agent
          </motion.div>
          
          <div className="space-y-3">
            {LANGUAGES.map((lang, index) => (
              <motion.div
                key={lang.code}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.15 }}
                className="text-xl font-display font-medium text-gray-900 leading-tight"
              >
                <span className="mr-2">{lang.flag}</span>
                {lang.tagline}
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-gray-500 text-sm mt-8"
          >
            Choose your language
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="grid grid-cols-2 gap-3 mt-6"
          >
            {LANGUAGES.map((lang, index) => (
              <motion.button
                key={lang.code}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + index * 0.1 }}
                onClick={() => selectLanguage(lang.code)}
                className="flex items-center justify-center gap-3 p-4 bg-white rounded-2xl border border-black/5 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
                data-testid={`button-language-${lang.code}`}
              >
                <span className="text-2xl">{lang.flag}</span>
                <span className="font-medium text-gray-900">{lang.name}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </main>
    </MobileContainer>
  );
}

function MainHome() {
  const { t } = useLanguage();

  return (
    <MobileContainer className="relative flex flex-col">
      <main className="flex-1 flex flex-col p-6 z-10 overflow-y-auto no-scrollbar justify-center">
        <div className="space-y-6 text-center mb-12 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-white/40 border border-white/50 text-xs font-semibold text-gray-500 tracking-wider uppercase shadow-sm"
          >
            {t.home.badge}
          </motion.div>
          
          <h1 className="text-4xl font-display font-medium text-gray-900 leading-tight">
            <TypingEffect text={t.home.greeting} speed={40} />
          </h1>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center max-w-[90%] mx-auto mb-12"
        >
          <p className="text-gray-500 text-lg leading-relaxed font-light">
            {t.home.description}
            <span className="text-gray-900 font-medium block mt-2">{t.home.highlight}</span>
          </p>
        </motion.div>

        <div className="mt-auto">
          <DialogNav />
        </div>
      </main>
    </MobileContainer>
  );
}

export default function Home() {
  const { isLanguageSelected } = useLanguage();

  return (
    <AnimatePresence mode="wait">
      {!isLanguageSelected ? (
        <motion.div
          key="welcome"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <WelcomeScreen />
        </motion.div>
      ) : (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <MainHome />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
