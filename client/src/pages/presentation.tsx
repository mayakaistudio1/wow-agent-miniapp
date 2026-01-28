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
    title: "Почему теряются деньги",
    subtitle: "Проблема тишины",
    icon: AlertCircle,
    color: "text-red-500",
    bg: "bg-red-500/10",
    content: (
      <div className="space-y-4">
        <p className="text-gray-600">Бизнес теряет заявки там, где наступает тишина:</p>
        <ul className="space-y-3">
          {[
            "Зашел на сайт → Не понял → Ушел",
            "Посмотрел презентацию → Остались вопросы → Слился",
            "Был на вебинаре → Нет дожима → Нет покупки",
            "Команда отвечает одно и то же → Выгорает"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-black/5 shadow-sm">
              <X size={16} className="text-red-500 mt-1 shrink-0" />
              <span className="text-sm text-gray-800">{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 p-4 rounded-xl bg-red-50 border border-red-100 text-center">
          <p className="font-display font-bold text-red-800">Нет диалога = Нет доверия = Нет продаж</p>
        </div>
      </div>
    )
  },
  {
    id: 'solution',
    title: "Решение",
    subtitle: "Заполняем пробелы",
    icon: CheckCircle2,
    color: "text-green-600",
    bg: "bg-green-500/10",
    content: (
      <div className="space-y-6">
        <p className="text-lg font-medium text-gray-900">Wow Agent закрывает «тишину между касаниями».</p>
        
        <div className="relative pl-6 border-l-2 border-black/10 space-y-8 my-8">
          <div className="relative">
            <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-gray-300 ring-4 ring-white" />
            <h4 className="text-gray-500 font-bold">Вопрос</h4>
          </div>
          <div className="relative">
            <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-gray-400 ring-4 ring-white" />
            <h4 className="text-gray-600 font-bold">Понимание</h4>
          </div>
          <div className="relative">
            <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-gray-800 ring-4 ring-white" />
            <h4 className="text-gray-900 font-bold">Доверие</h4>
          </div>
          <div className="relative">
            <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-black ring-4 ring-white" />
            <h4 className="text-black font-bold text-xl">Шаг (Сделка/Zoom)</h4>
          </div>
        </div>

        <p className="text-center text-gray-400 italic font-serif">«Как человек. Только стабильно. И без выходных.»</p>
      </div>
    )
  },
  {
    id: 'killer-feature',
    title: "Killer Feature",
    subtitle: "Это не чат-бот",
    icon: Zap,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    content: (
      <div className="space-y-5">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 text-center shadow-sm">
          <h3 className="font-display font-bold text-2xl text-amber-900 mb-2">Живая логика</h3>
          <p className="text-sm text-amber-800/80">Это не скрипт. Это интеллект продаж.</p>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {[
            "Понимает контекст и цель",
            "Адаптируется под человека",
            "Удерживает внимание",
            "Говорит голосом бренда",
            "Сам ведет к следующему шагу"
          ].map((feat, i) => (
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
    title: "Запуск за 72ч",
    subtitle: "Скорость",
    icon: Clock,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    content: (
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex gap-4 items-start p-4 rounded-xl bg-white border border-black/5 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold shrink-0">1</div>
            <div>
              <h4 className="font-bold text-gray-900">Смысл и Цель</h4>
              <p className="text-sm text-gray-500">Брифинг (30-60 мин). Определяем, кому продаем и что должно произойти.</p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start p-4 rounded-xl bg-white border border-black/5 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold shrink-0">2</div>
            <div>
              <h4 className="font-bold text-gray-900">Цифровой сотрудник</h4>
              <p className="text-sm text-gray-500">Настраиваем голос, логику и навыки продаж.</p>
            </div>
          </div>

          <div className="flex gap-4 items-start p-4 rounded-xl bg-white border border-black/5 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold shrink-0">3</div>
            <div>
              <h4 className="font-bold text-gray-900">Запуск</h4>
              <p className="text-sm text-gray-500">Mini-app или виджет начинают работу. Трафик конвертируется.</p>
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-black/5 border border-black/5 text-xs text-center text-gray-500 uppercase tracking-widest font-semibold">
          Ограниченное количество запусков
        </div>
      </div>
    )
  },
  {
    id: 'scale',
    title: "Один агент, 6 ролей",
    subtitle: "Масштаб без найма",
    icon: Users,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    content: (
      <div className="grid grid-cols-2 gap-3">
        {[
          { title: "Mini-Landing", desc: "Вовлечение и заявки" },
          { title: "Sales Pres.", desc: "Продает по скрипту" },
          { title: "Webinar Asst.", desc: "Прогрев и регистрация" },
          { title: "24/7 Q&A", desc: "Ответы после эфиров" },
          { title: "Onboarding", desc: "Пошаговый запуск" },
          { title: "Support", desc: "Мгновенные ответы" }
        ].map((role, i) => (
          <div key={i} className="bg-white border border-black/5 p-4 rounded-xl flex flex-col justify-center h-28 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-bold text-gray-900 text-sm leading-tight mb-2">{role.title}</h4>
            <p className="text-[11px] text-gray-500 leading-snug">{role.desc}</p>
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

  // Logic: if user clicks "How it works" on Home, they land here.
  // We don't have different "buttons" leading to different slides anymore, just one button.
  // So standard start at 0 is correct.

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
    } else {
      setLocation('/');
    }
  };

  const slide = SLIDES[currentSlideIndex];

  return (
    <MobileContainer className="flex flex-col h-screen overflow-hidden">
      {/* Header */}
      <header className="p-6 flex items-center justify-between z-20">
        <button 
          onClick={() => setLocation('/')}
          className="p-2 -ml-2 rounded-full hover:bg-black/5 text-gray-500 transition-colors"
        >
          <X size={24} />
        </button>
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

      {/* Footer Controls */}
      <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-white via-white/90 to-transparent z-20 flex justify-between items-center">
        <button 
          onClick={prevSlide}
          className="text-gray-400 hover:text-gray-800 transition-colors flex items-center gap-2 text-sm font-medium"
        >
          <ArrowLeft size={18} /> {currentSlideIndex === 0 ? "Главная" : "Назад"}
        </button>

        <button 
          onClick={nextSlide}
          className="bg-black text-white px-8 py-3.5 rounded-full font-bold text-sm flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-black/20"
        >
          {currentSlideIndex === SLIDES.length - 1 ? "Начать" : "Далее"} <ArrowRight size={18} />
        </button>
      </div>
    </MobileContainer>
  );
}
