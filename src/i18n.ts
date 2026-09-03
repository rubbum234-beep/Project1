export type Locale = "en" | "ru";

export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      basedIn: "Based in",
      viewProjects: "View projects",
      writeMe: "Write me",
    },
    theme: {
      light: "Light",
      dark: "Dark",
      toLight: "Switch to light theme",
      toDark: "Switch to dark theme",
    },
    about: {
      title: "About",
    },
    skills: {
      title: "Skills",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools",
    },
    projects: {
      title: "Projects",
      lead: "Three shipped tools. Each card is what I built, not a generic screenshot.",
      role: "What I did",
      demo: "Live demo",
      code: "GitHub",
    },
    contact: {
      title: "Contact",
      lead: "Open to product work and interesting side projects. Send a note below or use email.",
      email: "Email",
      github: "GitHub",
      telegram: "Telegram",
      formName: "Name",
      formEmail: "Your email",
      formMessage: "Message",
      formSend: "Send message",
      formSent: "Mail app opened. If nothing happened, write to the address on the left.",
      formError: "Fill in name, a valid email, and a short message.",
    },
    footer: {
      rights: "Test portfolio data. Not a real person.",
    },
  },
  ru: {
    nav: {
      about: "Обо мне",
      skills: "Навыки",
      projects: "Проекты",
      contact: "Контакты",
    },
    hero: {
      basedIn: "Живу в",
      viewProjects: "К проектам",
      writeMe: "Написать",
    },
    theme: {
      light: "Светлая",
      dark: "Тёмная",
      toLight: "Включить светлую тему",
      toDark: "Включить тёмную тему",
    },
    about: {
      title: "Обо мне",
    },
    skills: {
      title: "Навыки",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Инструменты",
    },
    projects: {
      title: "Проекты",
      lead: "Три готовых инструмента. На карточке — что сделал я, а не общая картинка.",
      role: "Что сделал я",
      demo: "Демо",
      code: "GitHub",
    },
    contact: {
      title: "Контакты",
      lead: "Открыт к продуктовой работе и интересным пет-проектам. Напишите ниже или на почту.",
      email: "Почта",
      github: "GitHub",
      telegram: "Telegram",
      formName: "Имя",
      formEmail: "Ваша почта",
      formMessage: "Сообщение",
      formSend: "Отправить",
      formSent: "Открылось почтовое приложение. Если нет — напишите на адрес слева.",
      formError: "Заполните имя, корректную почту и короткое сообщение.",
    },
    footer: {
      rights: "Тестовые данные портфолио. Не реальный человек.",
    },
  },
} as const;
