export const content = {
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
  projects: [
    {
      id: "harbor-notes",
      title: "Harbor Notes",
      stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      demo: "https://example.com/harbor-notes",
      github: "https://github.com/example/harbor-notes",
      description: {
        en: "Personal notes with tags and full-text search. Keep snippets in one place and find them in seconds.",
        ru: "Заметки с тегами и полнотекстовым поиском. Все сниппеты в одном месте — и находятся за секунды.",
      },
    },
    {
      id: "pulse-board",
      title: "Pulse Board",
      stack: ["React", "TypeScript", "REST"],
      demo: "https://example.com/pulse-board",
      github: "https://github.com/example/pulse-board",
      description: {
        en: "A metrics dashboard with charts for product health: traffic, errors, and the numbers the team actually watches.",
        ru: "Дашборд метрик с графиками: трафик, ошибки и те цифры, на которые команда реально смотрит.",
      },
    },
    {
      id: "quiet-queue",
      title: "Quiet Queue",
      stack: ["React", "Node.js", "PostgreSQL", "Docker"],
      demo: "https://example.com/quiet-queue",
      github: "https://github.com/example/quiet-queue",
      description: {
        en: "A small-team task queue with statuses, assignees, and a calm board instead of a noisy chat thread.",
        ru: "Очередь задач для маленькой команды: статусы, исполнители и спокойная доска вместо шумного чата.",
      },
    },
  ],
  contacts: {
    email: "alex.novikov@example.com",
    github: "https://github.com/example",
    telegram: "https://t.me/alexnovikov_demo",
    telegramHandle: "@alexnovikov_demo",
  },
} as const;
