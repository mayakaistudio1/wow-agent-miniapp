import { useState, useEffect } from "react";
import { MobileContainer } from "@/components/layout/mobile-container";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { ArrowLeft, ArrowRight, X, ChevronDown, CheckCircle2, AlertCircle, Zap, Clock, Users } from "lucide-react";
import { cn } from "@/lib/utils";

// Content Data based on slides
const SLIDES = [
  {
    id: 'pain',
    title: "Why Money Is Lost",
    subtitle: "The Silence Problem",
    icon: AlertCircle,
    color: "text-red-400",
    content: (
      <div className="space-y-4">
        <p className="text-white/80">Business loses leads where silence happens:</p>
        <ul className="space-y-3">
          {[
            "Visitor visits site → Doesn't understand → Leaves",
            "Watches presentation → Has questions → Quits",
            "Attends webinar → No follow-up → No purchase",
            "Team answers same questions → Burnout"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
              <X size={16} className="text-red-400 mt-1 shrink-0" />
              <span className="text-sm text-white/90">{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-center">
          <p className="font-display font-bold text-red-200">No Dialog = No Trust = No Sales</p>
        </div>
      </div>
    )
  },
  {
    id: 'solution',
    title: "The Solution",
    subtitle: "Closing the Gap",
    icon: CheckCircle2,
    color: "text-green-400",
    content: (
      <div className="space-y-6">
        <p className="text-lg font-medium text-white">Wow Agent closes the "silence between touches".</p>
        
        <div className="relative pl-6 border-l-2 border-primary/30 space-y-6 my-8">
          <div className="relative">
            <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-black" />
            <h4 className="text-primary font-bold">Question</h4>
          </div>
          <div className="relative">
            <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-primary/80 ring-4 ring-black" />
            <h4 className="text-primary/80 font-bold">Understanding</h4>
          </div>
          <div className="relative">
            <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-primary/60 ring-4 ring-black" />
            <h4 className="text-primary/60 font-bold">Trust</h4>
          </div>
          <div className="relative">
            <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-white ring-4 ring-black" />
            <h4 className="text-white font-bold text-xl">Action (Sale/Zoom)</h4>
          </div>
        </div>

        <p className="text-center text-white/60 italic">"Like a human. But consistent. No weekends off."</p>
      </div>
    )
  },
  {
    id: 'killer-feature',
    title: "Killer Feature",
    subtitle: "Not A Chatbot",
    icon: Zap,
    color: "text-yellow-400",
    content: (
      <div className="space-y-5">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/5 border border-yellow-500/20 text-center">
          <h3 className="font-display font-bold text-2xl text-yellow-100 mb-2">Live Logic</h3>
          <p className="text-sm text-yellow-200/80">It's not a script. It's a sales mind.</p>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {[
            "Understands context & goals",
            "Adapts to the person",
            "Holds attention",
            "Speaks your brand voice",
            "Leads to the next step"
          ].map((feat, i) => (
            <div key={i} className="glass-panel p-3 rounded-xl flex items-center gap-3">
              <Zap size={16} className="text-yellow-400" />
              <span className="text-sm font-medium">{feat}</span>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 'launch',
    title: "Launch in 72h",
    subtitle: "Speed to Market",
    icon: Clock,
    color: "text-blue-400",
    content: (
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold shrink-0">1</div>
            <div>
              <h4 className="font-bold text-white">Concept & Goal</h4>
              <p className="text-sm text-white/60">Briefing (30-60 min). We define who we are selling to and what needs to happen.</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold shrink-0">2</div>
            <div>
              <h4 className="font-bold text-white">Digital Employee</h4>
              <p className="text-sm text-white/60">We configure the voice, logic, and sales skills.</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold shrink-0">3</div>
            <div>
              <h4 className="font-bold text-white">Launch</h4>
              <p className="text-sm text-white/60">Mini-app or Widget goes live. Traffic starts converting.</p>
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-white/5 border border-white/10 text-xs text-center text-white/50 uppercase tracking-widest">
          Limited launch slots per week
        </div>
      </div>
    )
  },
  {
    id: 'scale',
    title: "One Agent, 6 Roles",
    subtitle: "Scale Without Hiring",
    icon: Users,
    color: "text-purple-400",
    content: (
      <div className="grid grid-cols-2 gap-3">
        {[
          { title: "Mini-Landing", desc: "Engagement & Leads" },
          { title: "Sales Pres.", desc: "Sells via script" },
          { title: "Webinar Asst.", desc: "Warmup & Registration" },
          { title: "24/7 Q&A", desc: "Post-event support" },
          { title: "Onboarding", desc: "Step-by-step guide" },
          { title: "Support", desc: "Fast answers" }
        ].map((role, i) => (
          <div key={i} className="glass-panel p-3 rounded-xl flex flex-col justify-center h-24">
            <h4 className="font-bold text-white text-sm leading-tight mb-1">{role.title}</h4>
            <p className="text-[10px] text-white/50">{role.desc}</p>
          </div>
        ))}
      </div>
    )
  }
];

export default function PresentationPage() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [location, setLocation] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const requestedSlide = searchParams.get('slide');

  useEffect(() => {
    if (requestedSlide) {
      const index = SLIDES.findIndex(s => s.id === requestedSlide);
      if (index !== -1) setCurrentSlideIndex(index);
    }
  }, [requestedSlide]);

  const nextSlide = () => {
    if (currentSlideIndex < SLIDES.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    } else {
      setLocation('/contact');
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  };

  const slide = SLIDES[currentSlideIndex];

  return (
    <MobileContainer className="flex flex-col h-screen overflow-hidden">
      {/* Header */}
      <header className="p-4 flex items-center justify-between z-20">
        <Link href="/">
          <button className="p-2 rounded-full bg-black/20 hover:bg-white/10 text-white/70 transition-colors">
            <X size={20} />
          </button>
        </Link>
        <div className="flex gap-1">
          {SLIDES.map((_, i) => (
            <div 
              key={i} 
              className={cn(
                "h-1 rounded-full transition-all duration-300",
                i === currentSlideIndex ? "w-6 bg-white" : "w-1 bg-white/20"
              )}
            />
          ))}
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 relative flex flex-col p-6 z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="flex-1 flex flex-col"
          >
            <div className="mb-6">
              <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider mb-4", slide.color)}>
                <slide.icon size={14} />
                {slide.subtitle}
              </div>
              <h2 className="text-4xl font-display font-bold text-white leading-tight mb-2">
                {slide.title}
              </h2>
            </div>

            <div className="flex-1 overflow-y-auto no-scrollbar pb-20">
              {slide.content}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Controls */}
      <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/90 to-transparent z-20 flex justify-between items-center">
        <button 
          onClick={prevSlide}
          disabled={currentSlideIndex === 0}
          className="text-white/40 hover:text-white disabled:opacity-0 transition-colors flex items-center gap-2 text-sm font-medium"
        >
          <ArrowLeft size={16} /> Back
        </button>

        <button 
          onClick={nextSlide}
          className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-gray-200 transition-colors shadow-lg shadow-white/10"
        >
          {currentSlideIndex === SLIDES.length - 1 ? "Get Started" : "Next"} <ArrowRight size={16} />
        </button>
      </div>
    </MobileContainer>
  );
}
