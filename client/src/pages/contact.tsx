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
       {/* Background Gradient Spotlights */}
       <div className="absolute top-[-20%] right-[-20%] w-[80%] h-[50%] bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

      <header className="p-4 z-20">
        <Link href="/">
          <button className="p-2 rounded-full hover:bg-white/10 text-white/70 transition-colors">
            <ArrowLeft size={20} />
          </button>
        </Link>
      </header>

      <div className="flex-1 p-6 flex flex-col z-10 overflow-y-auto no-scrollbar">
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-primary shadow-[0_0_30px_rgba(var(--primary),0.3)] mb-4">
             <img src={AvatarImage} alt="Agent" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-3xl font-display font-bold text-white mb-2">Ready to Launch?</h1>
          <p className="text-white/60 text-sm">Create your own Digital Employee in 72 hours.</p>
        </div>

        {formState === 'success' ? (
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="glass-panel p-8 rounded-2xl text-center flex flex-col items-center justify-center flex-1"
           >
             <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 mb-4">
               <Check size={32} />
             </div>
             <h3 className="text-xl font-bold text-white mb-2">Request Sent!</h3>
             <p className="text-white/60 text-sm mb-6">Our team will contact you shortly to schedule your briefing.</p>
             <Link href="/">
               <button className="text-primary text-sm font-medium hover:underline">Back to Agent</button>
             </Link>
           </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-medium text-white/60 ml-1">Name</label>
              <input 
                required
                type="text" 
                placeholder="John Doe"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-medium text-white/60 ml-1">Telegram / Contact</label>
              <input 
                required
                type="text" 
                placeholder="@username"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-white/60 ml-1">Business Goal</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none">
                <option className="bg-black text-white">Increase Sales</option>
                <option className="bg-black text-white">Automate Support</option>
                <option className="bg-black text-white">Webinar Success</option>
                <option className="bg-black text-white">Other</option>
              </select>
            </div>

            <button 
              type="submit"
              disabled={formState === 'submitting'}
              className="w-full bg-primary text-white font-bold py-4 rounded-xl mt-4 shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              {formState === 'submitting' ? (
                "Processing..."
              ) : (
                <>
                  <Sparkles size={18} /> Get My Wow Agent
                </>
              )}
            </button>

            <p className="text-[10px] text-center text-white/30 mt-4">
              By clicking above, you agree to transform your business.
            </p>
          </form>
        )}
      </div>
    </MobileContainer>
  );
}
