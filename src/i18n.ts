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
      demo: "Live demo",
      code: "GitHub",
    },
    contact: {
      title: "Contact",
      lead: "Open to product work and interesting side projects. The fastest way is email.",
      email: "Email",
      github: "GitHub",
      telegram: "Telegram",
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
      demo: "Демо",
      code: "GitHub",
    },
    contact: {
      title: "Контакты",
      lead: "Открыт к продуктовой работе и интересным пет-проектам. Быстрее всего — почта.",
      email: "Почта",
      github: "GitHub",
      telegram: "Telegram",
    },
    footer: {
      rights: "Тестовые данные портфолио. Не реальный человек.",
    },
  },
} as const;
