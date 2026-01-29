export type Language = 'ru' | 'en' | 'de' | 'es';

export const LANGUAGES: { code: Language; name: string; flag: string; tagline: string }[] = [
  { code: 'ru', name: 'Русский', flag: '🇷🇺', tagline: 'Я твой лучший сотрудник' },
  { code: 'en', name: 'English', flag: '🇬🇧', tagline: "I'm your best employee" },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', tagline: 'Ich bin dein bester Mitarbeiter' },
  { code: 'es', name: 'Español', flag: '🇪🇸', tagline: 'Soy tu mejor empleado' },
];

export const translations = {
  ru: {
    home: {
      badge: 'Wow Agent',
      greeting: 'Добрый день. Я — ваш новый лучший сотрудник.',
      description: 'Я встречаю клиентов, провожу презентации и закрываю сделки.',
      highlight: 'Работаю 24/7. Без выгорания.',
    },
    nav: {
      videoChat: 'Видео-звонок с агентом',
      textChat: 'Текстовый диалог',
      howItWorks: 'Как это работает',
    },
    videoChat: {
      title: 'Видео-звонок',
      heading: 'Живой разговор с AI',
      description: 'Начните видео-звонок с цифровым сотрудником. Он ответит на ваши вопросы голосом и покажет, как работает Wow Agent.',
      startCall: 'Начать звонок',
      micRequired: 'Для работы требуется разрешение на микрофон',
      connecting: 'Подключение...',
      waiting: 'Ожидание аватара...',
      endedTitle: 'Звонок завершён',
      endedDescription: 'Спасибо за диалог! Хотите узнать больше?',
    },
    chat: {
      title: 'Wow Agent',
      online: 'Online',
      placeholder: 'Сообщение для Wow Agent...',
      initialMessages: [
        'Здравствуйте! Я — демо-версия Wow Agent. Я могу полностью заменить вашу первую линию продаж.',
        'Какая сейчас главная проблема в вашем отделе продаж?',
      ],
      responses: [
        'Понимаю. Именно здесь я и помогаю. Я мгновенно реагирую на каждый лид, чтобы вы не теряли клиентов из-за «тишины».',
        'В отличие от кнопочного чат-бота, я поддерживаю живой диалог. Я понимаю контекст, отрабатываю возражения и веду к продаже.',
        'Хотите посмотреть, как мы можем запустить это для вашего бизнеса всего за 72 часа?',
      ],
    },
    contact: {
      title: 'Готовы к запуску?',
      subtitle: 'Создайте своего цифрового сотрудника за 72 часа.',
      nameLabel: 'Имя',
      namePlaceholder: 'Иван Иванов',
      contactLabel: 'Telegram / Контакт',
      contactPlaceholder: '@username',
      goalLabel: 'Бизнес-цель',
      goals: ['Увеличить продажи', 'Автоматизировать поддержку', 'Вебинары и дожим', 'Другое'],
      submit: 'Получить Wow Agent',
      submitting: 'Отправка...',
      error: 'Ошибка отправки. Попробуйте снова.',
      successTitle: 'Заявка отправлена!',
      successMessage: 'Наша команда свяжется с вами в ближайшее время для брифинга.',
      backToAgent: 'Вернуться к агенту',
      disclaimer: 'Нажимая кнопку, вы соглашаетесь трансформировать свой бизнес.',
    },
    presentation: {
      back: 'Назад',
      next: 'Далее',
      start: 'Начать',
      slides: {
        pain: {
          title: 'Почему теряются деньги',
          subtitle: 'Проблема тишины',
          intro: 'Бизнес теряет заявки там, где наступает тишина:',
          items: [
            'Зашел на сайт → Не понял → Ушел',
            'Посмотрел презентацию → Остались вопросы → Слился',
            'Был на вебинаре → Нет дожима → Нет покупки',
            'Команда отвечает одно и то же → Выгорает',
          ],
          conclusion: 'Нет диалога = Нет доверия = Нет продаж',
        },
        solution: {
          title: 'Решение',
          subtitle: 'Заполняем пробелы',
          intro: 'Wow Agent закрывает «тишину между касаниями».',
          steps: ['Вопрос', 'Понимание', 'Доверие', 'Шаг (Сделка/Zoom)'],
          quote: '«Как человек. Только стабильно. И без выходных.»',
        },
        killerFeature: {
          title: 'Killer Feature',
          subtitle: 'Это не чат-бот',
          heading: 'Живая логика',
          subheading: 'Это не скрипт. Это интеллект продаж.',
          items: [
            'Понимает контекст и цель',
            'Адаптируется под человека',
            'Удерживает внимание',
            'Говорит голосом бренда',
            'Сам ведет к следующему шагу',
          ],
        },
        launch: {
          title: 'Запуск за 72ч',
          subtitle: 'Скорость',
          steps: [
            { title: 'Смысл и Цель', desc: 'Брифинг (30-60 мин). Определяем, кому продаем и что должно произойти.' },
            { title: 'Цифровой сотрудник', desc: 'Настраиваем голос, логику и навыки продаж.' },
            { title: 'Запуск', desc: 'Mini-app или виджет начинают работу. Трафик конвертируется.' },
          ],
          note: 'Ограниченное количество запусков',
        },
        scale: {
          title: 'Один агент, 6 ролей',
          subtitle: 'Масштаб без найма',
          roles: [
            { title: 'Mini-Landing', desc: 'Вовлечение и заявки' },
            { title: 'Sales Pres.', desc: 'Продает по скрипту' },
            { title: 'Webinar Asst.', desc: 'Прогрев и регистрация' },
            { title: '24/7 Q&A', desc: 'Ответы после эфиров' },
            { title: 'Onboarding', desc: 'Пошаговый запуск' },
            { title: 'Support', desc: 'Мгновенные ответы' },
          ],
        },
      },
    },
  },
  en: {
    home: {
      badge: 'Wow Agent',
      greeting: "Good day. I'm your new best employee.",
      description: 'I greet customers, deliver presentations, and close deals.',
      highlight: 'Working 24/7. No burnout.',
    },
    nav: {
      videoChat: 'Video call with agent',
      textChat: 'Text chat',
      howItWorks: 'How it works',
    },
    videoChat: {
      title: 'Video Call',
      heading: 'Live conversation with AI',
      description: 'Start a video call with a digital employee. They will answer your questions and show how Wow Agent works.',
      startCall: 'Start call',
      micRequired: 'Microphone permission required',
      connecting: 'Connecting...',
      waiting: 'Waiting for avatar...',
      endedTitle: 'Call ended',
      endedDescription: 'Thanks for the conversation! Want to learn more?',
    },
    chat: {
      title: 'Wow Agent',
      online: 'Online',
      placeholder: 'Message for Wow Agent...',
      initialMessages: [
        "Hello! I'm a demo version of Wow Agent. I can completely replace your first line of sales.",
        "What's the main problem in your sales department right now?",
      ],
      responses: [
        "I understand. This is exactly where I help. I respond instantly to every lead so you don't lose customers due to 'silence'.",
        "Unlike a button-based chatbot, I maintain a live dialogue. I understand context, handle objections, and lead to a sale.",
        'Want to see how we can launch this for your business in just 72 hours?',
      ],
    },
    contact: {
      title: 'Ready to launch?',
      subtitle: 'Create your digital employee in 72 hours.',
      nameLabel: 'Name',
      namePlaceholder: 'John Doe',
      contactLabel: 'Telegram / Contact',
      contactPlaceholder: '@username',
      goalLabel: 'Business goal',
      goals: ['Increase sales', 'Automate support', 'Webinars and follow-ups', 'Other'],
      submit: 'Get Wow Agent',
      submitting: 'Sending...',
      error: 'Failed to send. Please try again.',
      successTitle: 'Request sent!',
      successMessage: 'Our team will contact you shortly for a briefing.',
      backToAgent: 'Back to agent',
      disclaimer: 'By clicking, you agree to transform your business.',
    },
    presentation: {
      back: 'Back',
      next: 'Next',
      start: 'Start',
      slides: {
        pain: {
          title: 'Why money is lost',
          subtitle: 'The silence problem',
          intro: 'Businesses lose leads where silence begins:',
          items: [
            "Visited website → Didn't understand → Left",
            'Watched presentation → Had questions → Dropped off',
            'Attended webinar → No follow-up → No purchase',
            'Team answers the same things → Burns out',
          ],
          conclusion: 'No dialogue = No trust = No sales',
        },
        solution: {
          title: 'Solution',
          subtitle: 'Filling the gaps',
          intro: 'Wow Agent fills the "silence between touchpoints".',
          steps: ['Question', 'Understanding', 'Trust', 'Action (Deal/Zoom)'],
          quote: '"Like a human. Only consistent. And no days off."',
        },
        killerFeature: {
          title: 'Killer Feature',
          subtitle: "It's not a chatbot",
          heading: 'Living logic',
          subheading: "It's not a script. It's sales intelligence.",
          items: [
            'Understands context and goals',
            'Adapts to the person',
            'Maintains attention',
            'Speaks with brand voice',
            'Leads to the next step',
          ],
        },
        launch: {
          title: 'Launch in 72h',
          subtitle: 'Speed',
          steps: [
            { title: 'Purpose & Goal', desc: 'Briefing (30-60 min). We define who we sell to and what should happen.' },
            { title: 'Digital employee', desc: 'We set up voice, logic, and sales skills.' },
            { title: 'Launch', desc: 'Mini-app or widget starts working. Traffic converts.' },
          ],
          note: 'Limited launch slots',
        },
        scale: {
          title: 'One agent, 6 roles',
          subtitle: 'Scale without hiring',
          roles: [
            { title: 'Mini-Landing', desc: 'Engagement and leads' },
            { title: 'Sales Pres.', desc: 'Sells by script' },
            { title: 'Webinar Asst.', desc: 'Warm-up and registration' },
            { title: '24/7 Q&A', desc: 'Answers after streams' },
            { title: 'Onboarding', desc: 'Step-by-step launch' },
            { title: 'Support', desc: 'Instant answers' },
          ],
        },
      },
    },
  },
  de: {
    home: {
      badge: 'Wow Agent',
      greeting: 'Guten Tag. Ich bin Ihr neuer bester Mitarbeiter.',
      description: 'Ich begrüße Kunden, halte Präsentationen und schließe Geschäfte ab.',
      highlight: 'Arbeite 24/7. Ohne Burnout.',
    },
    nav: {
      videoChat: 'Videoanruf mit Agent',
      textChat: 'Text-Chat',
      howItWorks: 'Wie es funktioniert',
    },
    videoChat: {
      title: 'Videoanruf',
      heading: 'Live-Gespräch mit KI',
      description: 'Starten Sie einen Videoanruf mit einem digitalen Mitarbeiter. Er beantwortet Ihre Fragen und zeigt, wie Wow Agent funktioniert.',
      startCall: 'Anruf starten',
      micRequired: 'Mikrofonberechtigung erforderlich',
      connecting: 'Verbindung wird hergestellt...',
      waiting: 'Warte auf Avatar...',
      endedTitle: 'Anruf beendet',
      endedDescription: 'Danke für das Gespräch! Möchten Sie mehr erfahren?',
    },
    chat: {
      title: 'Wow Agent',
      online: 'Online',
      placeholder: 'Nachricht an Wow Agent...',
      initialMessages: [
        'Hallo! Ich bin eine Demo-Version von Wow Agent. Ich kann Ihre erste Verkaufslinie komplett ersetzen.',
        'Was ist derzeit das Hauptproblem in Ihrer Verkaufsabteilung?',
      ],
      responses: [
        'Verstehe. Genau hier helfe ich. Ich reagiere sofort auf jeden Lead, damit Sie keine Kunden durch "Stille" verlieren.',
        'Anders als ein Button-Chatbot führe ich einen lebendigen Dialog. Ich verstehe den Kontext, bearbeite Einwände und führe zum Verkauf.',
        'Möchten Sie sehen, wie wir das für Ihr Unternehmen in nur 72 Stunden starten können?',
      ],
    },
    contact: {
      title: 'Bereit zum Start?',
      subtitle: 'Erstellen Sie Ihren digitalen Mitarbeiter in 72 Stunden.',
      nameLabel: 'Name',
      namePlaceholder: 'Max Mustermann',
      contactLabel: 'Telegram / Kontakt',
      contactPlaceholder: '@username',
      goalLabel: 'Geschäftsziel',
      goals: ['Verkäufe steigern', 'Support automatisieren', 'Webinare und Follow-ups', 'Sonstiges'],
      submit: 'Wow Agent erhalten',
      submitting: 'Wird gesendet...',
      error: 'Fehler beim Senden. Bitte erneut versuchen.',
      successTitle: 'Anfrage gesendet!',
      successMessage: 'Unser Team wird sich in Kürze für ein Briefing bei Ihnen melden.',
      backToAgent: 'Zurück zum Agenten',
      disclaimer: 'Mit dem Klick stimmen Sie zu, Ihr Unternehmen zu transformieren.',
    },
    presentation: {
      back: 'Zurück',
      next: 'Weiter',
      start: 'Starten',
      slides: {
        pain: {
          title: 'Warum Geld verloren geht',
          subtitle: 'Das Stille-Problem',
          intro: 'Unternehmen verlieren Leads dort, wo Stille eintritt:',
          items: [
            'Website besucht → Nicht verstanden → Gegangen',
            'Präsentation angesehen → Fragen offen → Abgesprungen',
            'Webinar besucht → Kein Follow-up → Kein Kauf',
            'Team antwortet das Gleiche → Brennt aus',
          ],
          conclusion: 'Kein Dialog = Kein Vertrauen = Keine Verkäufe',
        },
        solution: {
          title: 'Lösung',
          subtitle: 'Lücken füllen',
          intro: 'Wow Agent füllt die "Stille zwischen den Berührungspunkten".',
          steps: ['Frage', 'Verständnis', 'Vertrauen', 'Aktion (Deal/Zoom)'],
          quote: '„Wie ein Mensch. Nur beständig. Und ohne freie Tage."',
        },
        killerFeature: {
          title: 'Killer Feature',
          subtitle: 'Das ist kein Chatbot',
          heading: 'Lebendige Logik',
          subheading: 'Das ist kein Skript. Das ist Verkaufsintelligenz.',
          items: [
            'Versteht Kontext und Ziele',
            'Passt sich der Person an',
            'Hält die Aufmerksamkeit',
            'Spricht mit Markenstimme',
            'Führt zum nächsten Schritt',
          ],
        },
        launch: {
          title: 'Start in 72h',
          subtitle: 'Geschwindigkeit',
          steps: [
            { title: 'Zweck & Ziel', desc: 'Briefing (30-60 Min). Wir definieren, an wen wir verkaufen und was passieren soll.' },
            { title: 'Digitaler Mitarbeiter', desc: 'Wir richten Stimme, Logik und Verkaufsfähigkeiten ein.' },
            { title: 'Start', desc: 'Mini-App oder Widget beginnt zu arbeiten. Traffic konvertiert.' },
          ],
          note: 'Begrenzte Startplätze',
        },
        scale: {
          title: 'Ein Agent, 6 Rollen',
          subtitle: 'Skalieren ohne Einstellung',
          roles: [
            { title: 'Mini-Landing', desc: 'Engagement und Leads' },
            { title: 'Sales Pres.', desc: 'Verkauft nach Skript' },
            { title: 'Webinar Asst.', desc: 'Aufwärmen und Registrierung' },
            { title: '24/7 Q&A', desc: 'Antworten nach Streams' },
            { title: 'Onboarding', desc: 'Schrittweiser Start' },
            { title: 'Support', desc: 'Sofortige Antworten' },
          ],
        },
      },
    },
  },
  es: {
    home: {
      badge: 'Wow Agent',
      greeting: 'Buenos días. Soy tu nuevo mejor empleado.',
      description: 'Recibo clientes, hago presentaciones y cierro ventas.',
      highlight: 'Trabajo 24/7. Sin agotamiento.',
    },
    nav: {
      videoChat: 'Videollamada con agente',
      textChat: 'Chat de texto',
      howItWorks: 'Cómo funciona',
    },
    videoChat: {
      title: 'Videollamada',
      heading: 'Conversación en vivo con IA',
      description: 'Inicia una videollamada con un empleado digital. Responderá tus preguntas y mostrará cómo funciona Wow Agent.',
      startCall: 'Iniciar llamada',
      micRequired: 'Se requiere permiso de micrófono',
      connecting: 'Conectando...',
      waiting: 'Esperando avatar...',
      endedTitle: 'Llamada terminada',
      endedDescription: '¡Gracias por la conversación! ¿Quieres saber más?',
    },
    chat: {
      title: 'Wow Agent',
      online: 'En línea',
      placeholder: 'Mensaje para Wow Agent...',
      initialMessages: [
        '¡Hola! Soy una versión demo de Wow Agent. Puedo reemplazar completamente tu primera línea de ventas.',
        '¿Cuál es el problema principal en tu departamento de ventas ahora mismo?',
      ],
      responses: [
        'Entiendo. Aquí es exactamente donde ayudo. Respondo instantáneamente a cada lead para que no pierdas clientes por el "silencio".',
        'A diferencia de un chatbot de botones, mantengo un diálogo vivo. Entiendo el contexto, manejo objeciones y llevo a la venta.',
        '¿Quieres ver cómo podemos lanzar esto para tu negocio en solo 72 horas?',
      ],
    },
    contact: {
      title: '¿Listo para lanzar?',
      subtitle: 'Crea tu empleado digital en 72 horas.',
      nameLabel: 'Nombre',
      namePlaceholder: 'Juan Pérez',
      contactLabel: 'Telegram / Contacto',
      contactPlaceholder: '@username',
      goalLabel: 'Objetivo de negocio',
      goals: ['Aumentar ventas', 'Automatizar soporte', 'Webinars y seguimientos', 'Otro'],
      submit: 'Obtener Wow Agent',
      submitting: 'Enviando...',
      error: 'Error al enviar. Por favor, intenta de nuevo.',
      successTitle: '¡Solicitud enviada!',
      successMessage: 'Nuestro equipo se pondrá en contacto contigo pronto para un briefing.',
      backToAgent: 'Volver al agente',
      disclaimer: 'Al hacer clic, aceptas transformar tu negocio.',
    },
    presentation: {
      back: 'Atrás',
      next: 'Siguiente',
      start: 'Comenzar',
      slides: {
        pain: {
          title: 'Por qué se pierde dinero',
          subtitle: 'El problema del silencio',
          intro: 'Los negocios pierden leads donde comienza el silencio:',
          items: [
            'Visitó sitio web → No entendió → Se fue',
            'Vio presentación → Tenía preguntas → Abandonó',
            'Asistió a webinar → Sin seguimiento → Sin compra',
            'El equipo responde lo mismo → Se agota',
          ],
          conclusion: 'Sin diálogo = Sin confianza = Sin ventas',
        },
        solution: {
          title: 'Solución',
          subtitle: 'Llenando los vacíos',
          intro: 'Wow Agent llena el "silencio entre puntos de contacto".',
          steps: ['Pregunta', 'Comprensión', 'Confianza', 'Acción (Venta/Zoom)'],
          quote: '"Como un humano. Solo que consistente. Y sin días libres."',
        },
        killerFeature: {
          title: 'Killer Feature',
          subtitle: 'No es un chatbot',
          heading: 'Lógica viva',
          subheading: 'No es un script. Es inteligencia de ventas.',
          items: [
            'Entiende contexto y objetivos',
            'Se adapta a la persona',
            'Mantiene la atención',
            'Habla con voz de marca',
            'Lleva al siguiente paso',
          ],
        },
        launch: {
          title: 'Lanzamiento en 72h',
          subtitle: 'Velocidad',
          steps: [
            { title: 'Propósito y Meta', desc: 'Briefing (30-60 min). Definimos a quién vendemos y qué debe pasar.' },
            { title: 'Empleado digital', desc: 'Configuramos voz, lógica y habilidades de venta.' },
            { title: 'Lanzamiento', desc: 'Mini-app o widget comienza a trabajar. El tráfico convierte.' },
          ],
          note: 'Plazas de lanzamiento limitadas',
        },
        scale: {
          title: 'Un agente, 6 roles',
          subtitle: 'Escalar sin contratar',
          roles: [
            { title: 'Mini-Landing', desc: 'Engagement y leads' },
            { title: 'Sales Pres.', desc: 'Vende por guión' },
            { title: 'Webinar Asst.', desc: 'Calentamiento y registro' },
            { title: '24/7 Q&A', desc: 'Respuestas después de streams' },
            { title: 'Onboarding', desc: 'Lanzamiento paso a paso' },
            { title: 'Support', desc: 'Respuestas instantáneas' },
          ],
        },
      },
    },
  },
} as const;

interface SlideStep {
  title: string;
  desc: string;
}

interface SlideRole {
  title: string;
  desc: string;
}

export interface Translations {
  home: {
    badge: string;
    greeting: string;
    description: string;
    highlight: string;
  };
  nav: {
    videoChat: string;
    textChat: string;
    howItWorks: string;
  };
  videoChat: {
    title: string;
    heading: string;
    description: string;
    startCall: string;
    micRequired: string;
    connecting: string;
    waiting: string;
    endedTitle: string;
    endedDescription: string;
  };
  chat: {
    title: string;
    online: string;
    placeholder: string;
    initialMessages: readonly string[];
    responses: readonly string[];
  };
  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    contactLabel: string;
    contactPlaceholder: string;
    goalLabel: string;
    goals: readonly string[];
    submit: string;
    submitting: string;
    error: string;
    successTitle: string;
    successMessage: string;
    backToAgent: string;
    disclaimer: string;
  };
  presentation: {
    back: string;
    next: string;
    start: string;
    slides: {
      pain: {
        title: string;
        subtitle: string;
        intro: string;
        items: readonly string[];
        conclusion: string;
      };
      solution: {
        title: string;
        subtitle: string;
        intro: string;
        steps: readonly string[];
        quote: string;
      };
      killerFeature: {
        title: string;
        subtitle: string;
        heading: string;
        subheading: string;
        items: readonly string[];
      };
      launch: {
        title: string;
        subtitle: string;
        steps: readonly SlideStep[];
        note: string;
      };
      scale: {
        title: string;
        subtitle: string;
        roles: readonly SlideRole[];
      };
    };
  };
}

export function getTranslations(lang: Language): Translations {
  return translations[lang] as Translations;
}
