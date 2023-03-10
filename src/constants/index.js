import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Обо мне",
  },
  {
    id: "work",
    title: "Опыт работы",
  },
  {
    id: "contact",
    title: "Контакты",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Тут может быть Ваша компания",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Тут будет дата",
    points: ["Будьте первыми!", "Количество мест ограничено."],
  },
  {
    title: "React Native Developer",
    company_name: "Тут может быть Ваша компания",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Тут будет дата",
    points: ["Будьте первыми!", "Количество мест ограничено."],
  },
  {
    title: "Web Developer",
    company_name: "Тут может быть Ваша компания",
    icon: shopify,
    iconBg: "#383E56",
    date: "Тут будет дата",
    points: ["Будьте первыми!", "Количество мест ограничено."],
  },
  {
    title: "Frontend Developer",
    company_name: "Тут может быть Ваша компания",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Тут будет дата",
    points: ["Будьте первыми!", "Количество мест ограничено."],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ресторан Траттория",
    description:
      "Сайт для ознакомления с рестораном, бронированием столика и подпиской на рассылку новостей и акций. Присутствует промо видео и слайдер с фото блюд. Чистое демо с собственной фантазией.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      // {
      //   name: "mongodb",
      //   color: "green-text-gradient",
      // },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://endo0m.github.io/restoran/",
  },
  {
    name: "Админ панель",
    description:
      "Админ панель, состоит из светлого и темного режимов, 4 различных диаграмм, 3 различных страниц таблицы данных, страницы часто задаваемых вопросов, страницы формы и интеграции с календарем.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "Data Grid",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://endo0m.github.io/dashboard/",
  },
  {
    name: "Каршеринг",
    description: "Лендинг по бронированию авто",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "jquery",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: " https://endo0m.github.io/luxcars/",
  },
];

export { services, technologies, experiences, testimonials, projects };
