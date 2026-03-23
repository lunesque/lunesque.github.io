import type { Project } from "../../types";

export const projects: Project[] = [
  // ── Web Dev ──────────────────────────────────────────────
  {
    id: "planet",
    category: "webdev",
    imgPath: "",
    tags: ["R3F", "React", "Three.js"],
    title: {
      en: "(In progress) 3D Planet simulation in service of workshop",
      fr: "(En cours) 3D simulation planète au service d'un atelier",
    },
    desc: {
      en: "",
      fr: "",
    },
    year: "2026",
    link: "https://github.com/BomberQLF/sauve-ta-planete",
  },
  {
    id: "zombie-lockdown",
    category: "webdev",
    imgPath: "",
    tags: ["Unity", "C#", "Chataigne"],
    title: {
      en: "(In progress) 3D Escape game with unconventional controls",
      fr: "(En cours) Jeu 3D Escape game avec contrôles inconventionnel",
    },
    desc: {
      en: "Made in collaboration with Delphine Quach and Sophie Mukengeshayi, Zombie Lockdown is an escape room Unity game where your objectif is to find the antidote.",
      fr: "Réalisé en collaboration avec Delphine Quach and Sophie Mukengeshayi, Zombie Lockdown est un jeu Unity d'escape room  dont l'objectif est de trouver l'andidote",
    },
    year: "2026",
    link: "https://github.com/lunesque/ZombieLockdown",
  },
  {
    id: "interactive-pond",
    category: "webdev",
    imgPath: "pond.png",
    tags: ["R3F", "TypeScript", "React"],
    title: {
      en: "(In progress) 3D interactive pond",
      fr: "(En cours) Bassin 3D interactif",
    },
    desc: {
      en: "",
      fr: "",
    },
    year: "2026",
    link: "https://github.com/lunesque/interactive-pond",
  },
  {
    id: "notes",
    category: "webdev",
    imgPath: "",
    tags: ["Express.js", "React Native", "MongoDB", "REST API"],
    title: {
      en: "Note taking mobile app",
      fr: "Application mobile pour prise de notes",
    },
    desc: {
      en: "",
      fr: "",
    },
    year: "2025",
    link: "https://github.com/lunesque/notes-app",
  },
  {
    id: "newton",
    category: "webdev",
    imgPath: "newton.png",
    tags: ["PHP", "MySQL", "REST API", "JWT tokens", "Chart.js"],
    title: {
      en: "Back-office + API for immersive exhibition",
      fr: "Back-office + API pour exposition immersive",
    },
    desc: {
      en: "",
      fr: "",
    },
    year: "2025",
    link: "https://github.com/lunesque/isaac-newton-expo",
  },
  {
    id: "hangman",
    category: "webdev",
    imgPath: "hangman.jpeg",
    tags: ["React"],
    title: {
      en: "Hangman game",
      fr: "Jeu de hangman",
    },
    desc: {
      en: "",
      fr: "",
    },
    year: "2025",
    link: "https://github.com/lunesque/hangman-game",
  },
  {
    id: "ecoviz",
    category: "webdev",
    imgPath: "ecoviz.jpeg",
    tags: ["JavaScript", "D3.js", "HTML/CSS", "Git"],
    title: {
      en: "Ecoviz - Data visualization",
      fr: "Ecoviz - Visualisation de données",
    },
    desc: {
      en: "Interactive graphic (choropleth map) from raw data.",
      fr: "Graphique interactif (carte choroplèthe) à partir des données brutes.",
    },
    year: "2024",
    link: "https://github.com/Delphine-Q/Ecoviz",
  },
  {
    id: "combat",
    category: "webdev",
    imgPath: "/minigame.jpeg",
    tags: ["PHP", "MVC", "OOP"],
    title: {
      en: "Simple combat game",
      fr: "Jeu de combat simple",
    },
    desc: {
      en: "",
      fr: "",
    },
    year: "2024",
    link: "https://github.com/lunesque/minigame",
  },

  // ── Graphic Design ───────────────────────────────────────
  {
    id: "sixsaviors-poster",
    category: "graphic",
    imgPath: "affiche_sixsaviors.png",
    tags: ["Branding", "Print"],
    title: {
      en: "Promotional poster",
      fr: "Affiche promotionnelle",
    },
    desc: {
      en: "",
      fr: "",
    },
    year: "2024",
  },
  {
    id: "pictogram",
    category: "graphic",
    imgPath: "picto.jpeg",
    tags: ["Pictogram", "Design system"],
    title: {
      en: "Pictograms system for municipality",
      fr: "Système de pictogrammes d'une municipalité",
    },
    desc: {
      en: "",
      fr: "",
    },
    year: "2024",
  },
  {
    id: "museum",
    category: "graphic",
    imgPath: "affiche_antique.jpg",
    tags: ["Poster", "Typography"],
    title: {
      en: "Exhibition poster series",
      fr: "Série d'affiches d'exposition",
    },
    desc: {
      en: "",
      fr: "",
    },
    year: "2023",
  },
  {
    id: "autoportrait",
    category: "graphic",
    imgPath: "autoportrait.jpeg",
    tags: ["Adobe Illustrator", "Vectorial design"],
    title: {
      en: "Self portrait",
      fr: "Autoportrait",
    },
    desc: {
      en: "",
      fr: "",
    },
    year: "2023",
  },

  // ── UX/UI ────────────────────────────────────────────────
  {
    id: "atelier",
    category: "uxui",
    imgPath: "",
    tags: ["Prototyping"],
    title: {
      en: '(In progress) "Edutainment" workshop : The environmental impact of our digital habits',
      fr: "(En cours) Atelier ludo-pédagogiques : L'Impact de nos habitudes numériques sur l'environnement",
    },
    desc: {
      en: "",
      fr: "",
    },
    year: "2025",
  },
  {
    id: "newton",
    category: "uxui",
    imgPath: "",
    tags: ["Prototyping"],
    title: {
      en: "Immersive digital exhibition on Isaac Newton",
      fr: "Exposition digitale immersive sur Isaac Newton",
    },
    desc: {
      en: "",
      fr: "",
    },
    year: "2025",
  },
  {
    id: "ent",
    category: "uxui",
    imgPath: "",
    tags: ["UX strategy", "Prototyping", "User tests"],
    title: {
      en: "University digital workspace - student interface",
      fr: "Espace numérique de travail (ENT) - interface étudiant",
    },
    desc: {
      en: "",
      fr: "",
    },
    year: "2024",
  },
  {
    id: "sixsaviors-website",
    category: "uxui",
    imgPath: "",
    tags: ["Figma", "Design System"],
    title: {
      en: "Website mockups",
      fr: "Maquettes site web",
    },
    desc: {
      en: "Creation of website mockups following a predefined graphic chart.",
      fr: "Conception des maquettes d'un site vitrine en suivant une charte graphique prédefinie.",
    },
    year: "2024",
  },
];
