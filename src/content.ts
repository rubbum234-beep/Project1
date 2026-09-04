export type LocaleText = {
  en: string;
  ru: string;
};

export type PortfolioProject = {
  id: string;
  title: string;
  cover: "notes" | "dashboard" | "board";
  stack: string[];
  demo: string;
  github: string;
  contribution: LocaleText;
  description: LocaleText;
};

export type PortfolioContent = {
  name: LocaleText;
  role: LocaleText;
  location: LocaleText;
  intro: LocaleText;
  about: { en: string[]; ru: string[] };
  skills: {
    frontend: string[];
    backend: string[];
    tools: string[];
  };
  stackLine: string[];
  projects: PortfolioProject[];
  contacts: {
    email: string;
    github: string;
    telegram: string;
    telegramHandle: string;
  };
};

export const content: PortfolioContent = {
  name: {
    en: "Alex Novikov",
    ru: "Алекс Новиков",
  },
  role: {
    en: "Fullstack Developer",
    ru: "Fullstack-разработчик",
  },
  location: {
    en: "Berlin",
    ru: "Берлине",
  },
  intro: {
    en: "Five years building web apps with React, TypeScript, and Node.js. I care about clear UI and tidy APIs.",
    ru: "Пять лет делаю веб-приложения на React, TypeScript и Node.js. Люблю понятный интерфейс и аккуратные API.",
  },
  about: {
    en: [
      "I learned by shipping: courses, side projects, then product teams. I like turning a messy idea into something people can actually use.",
      "Day to day I work across the stack — React on the front, Node and PostgreSQL on the back, Docker when it needs to run the same everywhere.",
      "Right now I focus on web apps and small tools that stay simple: search that works, dashboards you can read, queues a team can trust.",
    ],
    ru: [
      "Учился на практике: курсы, пет-проекты, потом продуктовые команды. Нравится превращать сырую идею в то, чем реально пользуются.",
      "В работе закрываю весь стек — React на клиенте, Node и PostgreSQL на сервере, Docker, чтобы окружение не ломалось.",
      "Сейчас делаю веб-приложения и небольшие инструменты без лишнего: поиск, который находит, дашборды, которые читаются, очереди, которым команда доверяет.",
    ],
  },
  skills: {
    frontend: ["React", "TypeScript", "CSS"],
    backend: ["Node.js", "PostgreSQL", "REST"],
    tools: ["Docker", "Git"],
  },
  stackLine: ["React", "TypeScript", "Node.js"],
  projects: [
    {
      id: "harbor-notes",
      title: "Harbor Notes",
      cover: "notes",
      stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      demo: "https://example.com/harbor-notes",
      github: "https://github.com/example/harbor-notes",
      contribution: {
        en: "I built search, tags, and the notes API from scratch.",
        ru: "Собрал поиск, теги и API заметок с нуля.",
      },
      description: {
        en: "A notes app where snippets stay tagged and full-text search finds them in seconds.",
        ru: "Приложение заметок: сниппеты с тегами и поиск, который находит нужное за секунды.",
      },
    },
    {
      id: "pulse-board",
      title: "Pulse Board",
      cover: "dashboard",
      stack: ["React", "TypeScript", "REST"],
      demo: "https://example.com/pulse-board",
      github: "https://github.com/example/pulse-board",
      contribution: {
        en: "I designed the charts and wired live product metrics.",
        ru: "Спроектировал графики и подключил живые продуктовые метрики.",
      },
      description: {
        en: "A health dashboard for traffic, errors, and the numbers a team actually watches.",
        ru: "Дашборд здоровья продукта: трафик, ошибки и цифры, на которые смотрит команда.",
      },
    },
    {
      id: "quiet-queue",
      title: "Quiet Queue",
      cover: "board",
      stack: ["React", "Node.js", "PostgreSQL", "Docker"],
      demo: "https://example.com/quiet-queue",
      github: "https://github.com/example/quiet-queue",
      contribution: {
        en: "I owned statuses, assignees, and the Docker setup.",
        ru: "Сделал статусы, исполнителей и сборку в Docker.",
      },
      description: {
        en: "A small-team task queue with a calm board instead of a noisy chat thread.",
        ru: "Очередь задач для маленькой команды — спокойная доска вместо шумного чата.",
      },
    },
  ],
  contacts: {
    email: "alex.novikov@example.com",
    github: "https://github.com/example",
    telegram: "https://t.me/alexnovikov_demo",
    telegramHandle: "@alexnovikov_demo",
  },
};
