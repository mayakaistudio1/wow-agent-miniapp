import { MobileContainer } from "@/components/layout/mobile-container";
import { DialogNav } from "@/components/dialog-nav";
import { TypingEffect } from "@/components/ui/typing-effect";
import { motion } from "framer-motion";
import AvatarImage from "@/assets/agent-avatar.png";

export default function Home() {
  return (
    <MobileContainer className="relative flex flex-col">
      {/* Background Gradient Spotlights */}
      <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[50%] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[40%] bg-accent/10 blur-[80px] rounded-full pointer-events-none" />

      <main className="flex-1 flex flex-col p-6 z-10 overflow-y-auto no-scrollbar">
        {/* Avatar Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center mt-8 mb-8"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent opacity-20 blur-xl animate-pulse" />
            <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 shadow-2xl glass-panel">
              <img 
                src={AvatarImage} 
                alt="Wow Agent" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black animate-bounce" />
          </div>
        </motion.div>

        {/* Dialog Header */}
        <div className="space-y-2 text-center mb-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary tracking-wider uppercase"
          >
            Digital Employee • Online
          </motion.div>
          
          <h1 className="text-3xl font-display font-bold text-white leading-tight">
            <TypingEffect text="Hello. I am your new top performer." speed={40} />
          </h1>
        </div>

        {/* Agent Message */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="glass-panel p-5 rounded-2xl rounded-tl-sm mb-6 border-l-4 border-l-primary"
        >
          <p className="text-white/80 leading-relaxed text-sm">
            I meet clients, explain your product, handle objections, and close deals. <br/>
            <span className="text-white font-semibold mt-2 block">I work 24/7. I never burn out.</span>
          </p>
        </motion.div>

        {/* Navigation / Choices */}
        <div className="mt-auto">
          <p className="text-xs text-white/40 text-center uppercase tracking-widest font-semibold mb-2">Select an action</p>
          <DialogNav />
        </div>
      </main>
    </MobileContainer>
  );
}
