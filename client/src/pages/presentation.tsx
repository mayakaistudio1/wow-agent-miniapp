import { useState, useEffect } from "react";
import { MobileContainer } from "@/components/layout/mobile-container";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { ArrowLeft, ArrowRight, X, CheckCircle2, AlertCircle, Zap, Clock, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";

export default function PresentationPage() {
  const { t } = useLanguage();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [location, setLocation] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const requestedSlide = searchParams.get('slide');

  const SLIDES = [
    {
      id: 'pain',
      title: t.presentation.slides.pain.title,
      subtitle: t.presentation.slides.pain.subtitle,
      icon: AlertCircle,
      color: "text-red-500",
      bg: "bg-red-500/10",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">{t.presentation.slides.pain.intro}</p>
          <ul className="space-y-3">
            {t.presentation.slides.pain.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-black/5 shadow-sm">
                <X size={16} className="text-red-500 mt-1 shrink-0" />
                <span className="text-sm text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 p-4 rounded-xl bg-red-50 border border-red-100 text-center">
            <p className="font-display font-bold text-red-800">{t.presentation.slides.pain.conclusion}</p>
          </div>
        </div>
      )
    },
    {
      id: 'solution',
      title: t.presentation.slides.solution.title,
      subtitle: t.presentation.slides.solution.subtitle,
      icon: CheckCircle2,
      color: "text-green-600",
      bg: "bg-green-500/10",
      content: (
        <div className="space-y-6">
          <p className="text-lg font-medium text-gray-900">{t.presentation.slides.solution.intro}</p>
          
          <div className="relative pl-6 border-l-2 border-black/10 space-y-8 my-8">
            {t.presentation.slides.solution.steps.map((step, i) => (
              <div key={i} className="relative">
                <span className={cn(
                  "absolute -left-[31px] top-0 w-4 h-4 rounded-full ring-4 ring-white",
                  i === 0 ? "bg-gray-300" : i === 1 ? "bg-gray-400" : i === 2 ? "bg-gray-800" : "bg-black"
                )} />
                <h4 className={cn(
                  "font-bold",
                  i === 0 ? "text-gray-500" : i === 1 ? "text-gray-600" : i === 2 ? "text-gray-900" : "text-black text-xl"
                )}>{step}</h4>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 italic font-serif">{t.presentation.slides.solution.quote}</p>
        </div>
      )
    },
    {
      id: 'killer-feature',
      title: t.presentation.slides.killerFeature.title,
      subtitle: t.presentation.slides.killerFeature.subtitle,
      icon: Zap,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      content: (
        <div className="space-y-5">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 text-center shadow-sm">
            <h3 className="font-display font-bold text-2xl text-amber-900 mb-2">{t.presentation.slides.killerFeature.heading}</h3>
            <p className="text-sm text-amber-800/80">{t.presentation.slides.killerFeature.subheading}</p>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {t.presentation.slides.killerFeature.items.map((feat, i) => (
              <div key={i} className="bg-white border border-black/5 p-4 rounded-xl flex items-center gap-3 shadow-sm">
                <Zap size={16} className="text-amber-500" />
                <span className="text-sm font-medium text-gray-800">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'launch',
      title: t.presentation.slides.launch.title,
      subtitle: t.presentation.slides.launch.subtitle,
      icon: Clock,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            {t.presentation.slides.launch.steps.map((step, i) => (
              <div key={i} className="flex gap-4 items-start p-4 rounded-xl bg-white border border-black/5 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold shrink-0">{i + 1}</div>
                <div>
                  <h4 className="font-bold text-gray-900">{step.title}</h4>
                  <p className="text-sm text-gray-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 rounded-lg bg-black/5 border border-black/5 text-xs text-center text-gray-500 uppercase tracking-widest font-semibold">
            {t.presentation.slides.launch.note}
          </div>
        </div>
      )
    },
    {
      id: 'scale',
      title: t.presentation.slides.scale.title,
      subtitle: t.presentation.slides.scale.subtitle,
      icon: Users,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      content: (
        <div className="grid grid-cols-2 gap-3">
          {t.presentation.slides.scale.roles.map((role, i) => (
            <div key={i} className="bg-white border border-black/5 p-4 rounded-xl flex flex-col justify-center h-28 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-gray-900 text-sm leading-tight mb-2">{role.title}</h4>
              <p className="text-[11px] text-gray-500 leading-snug">{role.desc}</p>
            </div>
          ))}
        </div>
      )
    }
  ];

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
      <header className="p-6 flex items-center justify-between z-20">
        <Link href="/">
          <button className="p-2 -ml-2 rounded-full hover:bg-black/5 text-gray-500 transition-colors">
            <X size={24} />
          </button>
        </Link>
        <div className="flex gap-1.5">
          {SLIDES.map((_, i) => (
            <div 
              key={i} 
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === currentSlideIndex ? "w-8 bg-black" : "w-1.5 bg-gray-300"
              )}
            />
          ))}
        </div>
      </header>

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
              <div className={cn("inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5", slide.bg, slide.color)}>
                <slide.icon size={14} />
                {slide.subtitle}
              </div>
              <h2 className="text-4xl font-display font-bold text-gray-900 leading-[1.1] mb-2">
                {slide.title}
              </h2>
            </div>

            <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
              {slide.content}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-white via-white/90 to-transparent z-20 flex justify-between items-center">
        <button 
          onClick={prevSlide}
          disabled={currentSlideIndex === 0}
          className="text-gray-400 hover:text-gray-800 disabled:opacity-0 transition-colors flex items-center gap-2 text-sm font-medium"
        >
          <ArrowLeft size={18} /> {t.presentation.back}
        </button>

        <button 
          onClick={nextSlide}
          className="bg-black text-white px-8 py-3.5 rounded-full font-bold text-sm flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-black/20"
        >
          {currentSlideIndex === SLIDES.length - 1 ? t.presentation.start : t.presentation.next} <ArrowRight size={18} />
        </button>
      </div>
    </MobileContainer>
  );
}
