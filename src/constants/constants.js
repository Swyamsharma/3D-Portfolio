import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  music_app,
  Threejs,
  nextjs,
  express,
  jwt,
  nextauth,
  PostgreSQL
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Programmer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
    position: [0, 0, 0],
  },
  {
    name: "Next JS",
    icon: nextjs,
    position: [2, 0, 0],
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "PostgreSQL",
    icon: PostgreSQL,
    size: "large",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: Threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JWT",
    icon: jwt,
  },
  {
    name: "NextAuth",
    icon: nextauth,
  },
];

const projects = [
  {
    name: "Music Streaming App",
    description:
      "A dynamic full-stack music streaming web application with Next.js 13 and Postgresql.",
    features: [
      "User authentication using NextAuth.js with JWT and OAuth providers.",
      "Redux to Manage app state effectively.",
      "Play, pause, skip, and control the playback of songs.",
      "Users can Create, update and delete their own playlists.",
      "Add songs to favorites in one click.",
      "Auto adds similar songs to the queue.",
      "Swipe and touch gestures for touch-responsive devices.",
      "Display song details such as title, artist, album, and album artwork.",
      "PWA (Progressive Web App) support. ",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nextjs",
        color: "orange-text-gradient",
      },
      {
        name: "nextauth",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
    ],
    image: music_app,
    // source_code_link: "",
    // live_link: "",
  },
];

export {
  services,
  technologies,
  projects,
};
