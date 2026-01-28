import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageSquare, 
  Sparkles, 
  Rocket, 
  Zap, 
  User, 
  ChevronRight 
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: 'chat', label: 'Start Live Dialog', icon: MessageSquare, path: '/chat', color: 'text-blue-400' },
  { id: 'presentation', label: 'See How It Works', icon: Sparkles, path: '/presentation', color: 'text-purple-400' },
  { id: 'benefits', label: 'Why You Need This', icon: Zap, path: '/presentation?slide=benefits', color: 'text-yellow-400' },
  { id: 'launch', label: 'Launch in 72h', icon: Rocket, path: '/presentation?slide=launch', color: 'text-green-400' },
];

export function DialogNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <div className="w-full flex flex-col gap-3 mt-6">
      {NAV_ITEMS.map((item, index) => (
        <Link key={item.id} href={item.path}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.5 }}
            className="group cursor-pointer"
          >
            <div className="glass-panel p-4 rounded-2xl flex items-center justify-between hover:bg-white/5 transition-all active:scale-[0.98]">
              <div className="flex items-center gap-4">
                <div className={cn("p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors", item.color)}>
                  <item.icon size={20} />
                </div>
                <span className="font-medium text-white/90">{item.label}</span>
              </div>
              <ChevronRight className="text-white/20 group-hover:text-white/60 transition-colors" size={18} />
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
