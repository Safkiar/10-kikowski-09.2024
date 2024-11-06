import CSS from '/src/assets/Courses/CSS.jpg';
import JavaScript from '/src/assets/Courses/JavaScript.jpg';
import ReactImg from '/src/assets/Courses/React.jpg';
import TS from '/src/assets/Courses/TS.jpg';
import Node from '/src/assets/Courses/NODE.jpg';
import Python from '/src/assets/Courses/Python.jpg';
import Dyplom from '/src/assets/Courses/Dyplom.jpg';
import Github from '/src/assets/Courses/Github.jpg';
import Marketing from '/src/assets/Courses/Marketing.jpg';
import Microsoft from '/src/assets/Courses/Microsoft.png';
import SQL from '/src/assets/Courses/SQL.jpg';
import RFULL from '/src/assets/Courses/RFULL.jpg';
import TS2 from '/src/assets/Courses/TS2.jpg';
import WP from '/src/assets/Courses/WP.jpg';
import JSADV from '/src/assets/Courses/JSADV.jpg';
import CSSADV from '/src/assets/Courses/CSSADV.jpg';
import ANG from '/src/assets/Courses/ANG.jpg';

import Chess from '/src/assets/Project/CHESS.jpg';
import Daily from '/src/assets/Project/DAILY.jpg';
import Forkify from '/src/assets/Project/FORKIFY.jpg';
import Mix from '/src/assets/Project/MIX.jpg';
import Oaza from '/src/assets/Project/OAZA.jpg';
import Pizza from '/src/assets/Project/PIZZA.jpg';
import Schedule from '/src/assets/Project/SCHEDULE.jpg';
import Smart from '/src/assets/Project/SMART.jpg';
import Safkiar from '/src/assets/Project/SAFKIAR.jpg';
import Card from '/src/assets/Project/CARD.jpg';
import Kikowski from '/src/assets/Project/KIKOWSKI.jpg';
import Bet from '/src/assets/Project/BET.jpg';

export const frontendCourses = [
  CSS,
  CSSADV,
  JavaScript,
  JSADV,
  ReactImg,
  TS,
  TS2,
  ANG,
];
export const backendCourses = [Node, SQL];
export const generalCourses = [
  Dyplom,
  Github,
  WP,
  Python,
  Marketing,
  Microsoft,
];
export const fullstackCourses = [RFULL];

export const projectImages = {
  Betang: {
    dataCreated: 'November 2024',
    description:
      'Betangu is an Angular app connected to Firebase, allowing users to track bets with secure authentication. Users can add bets through a simple form, and the app calculates statistics and rankings to encourage friendly competition. With modern SCSS styling, Betangu offers a sleek and responsive user experience.',
    technologyUsed: {
      frontEnd: ['Angular', 'TypeScript'],
      backend: ['Firebase'],
      styles: ['SCSS'],
    },
    title: 'Betangu',
    image: Bet,
    path: 'https://betangu.netlify.app/',
  },
  Card: {
    dataCreated: 'October 2024',
    description:
      'This app uses Webpack with advanced SCSS animations and Pug templates. It updates the card preview dynamically as the user types, including smooth flip animations when interacting with fields like the CVV. The setup provides a responsive, interactive experience for entering card details',
    technologyUsed: {
      frontEnd: ['JavaScript', 'PUG'],
      backend: ['Webpack'],
      styles: ['SCSS'],
    },
    title: 'Animated Card',
    image: Card,
    path: 'https://safkiar-animated-card.netlify.app/',
  },
  Smart: {
    dataCreated: 'September 2024',
    description:
      'The Search Tool is a React-Redux-based feature designed to help users filter and retrieve data efficiently from a table of user information. The tool provides dynamic filtering, performance optimizations, and seamless user interactions, making data retrieval both fast and flexible.',
    technologyUsed: {
      frontEnd: ['React', 'Redux', 'TypeScript'],
      backend: [],
      styles: ['Styled-components'],
    },
    title: 'Smart Searching Tool',
    image: Smart,
    path: 'https://smartst.netlify.app/',
  },
  Daily: {
    dataCreated: 'August 2024',
    description:
      'Daily Quest is a React-based application designed to help users manage their tasks and goals efficiently. Users can add and track quests that are daily, one-time, or recurring on specific days. The app also includes features for adding and editing notes, providing detailed information about each quest. Additionally, it offers a calendar view for an organized overview of upcoming tasks and progress tracking. This comprehensive tool ensures users stay on top of their quests and improve productivity.',
    technologyUsed: {
      frontEnd: ['React'],
      backend: ['Supabase'],
      styles: ['Styled-components'],
    },
    title: 'Daily Quest',
    image: Daily,
    path: 'https://dailyquest.netlify.app/login/',
  },
  Oaza: {
    dataCreated: 'June 2024',
    description:
      'The booking management app built with React, React Query, and Supabase offers comprehensive features including booking and cabin management with editable details. It provides real-time statistics and interactive charts, supports dark mode, and is fully responsive. User authentication and settings are securely handled through Supabase, demonstrating proficiency in modern frontend technologies and effective backend integration.',
    technologyUsed: {
      frontEnd: ['React'],
      backend: ['Supabase'],
      styles: ['Styled-components'],
    },
    title: 'The Wild Oasis',
    image: Oaza,
    path: 'https://safkiar-the-wild-oasis.netlify.app/login',
  },
  Schedule: {
    dataCreated: 'August 2024',
    description:
      'The Well-Schedule website is a user-friendly platform for managing events, allowing for detailed customization, such as setting occurrences for specific weeks of the month. Adding events is straightforward—just a simple click is required. The platform provides a clear view of your schedule with daily, weekly, and monthly calendar options. Additionally, it integrates seamlessly with Firebase and utilizes the React Scheduler library for robust performance and functionality.',
    technologyUsed: {
      frontEnd: ['React'],
      backend: ['Firebase'],
      styles: ['Styled-components'],
    },
    title: 'Well-Schedule',
    image: Schedule,
    path: 'https://well-shedule.netlify.app/Weekly',
  },
  Pizza: {
    dataCreated: 'May 2024',
    description:
      'Pizza ordering app, developed with Tailwind CSS, offers a seamless user experience for ordering pizza online. Users can easily browse through a variety of pizzas, add them to their cart and securely checkout using their preferred payment method',
    technologyUsed: {
      frontEnd: ['React'],
      backend: [],
      styles: ['Tailwind'],
    },
    title: 'Fast React Pizza',
    image: Pizza,
    path: 'https://safkiar-fast-react-pizza.netlify.app/',
  },
  Mix: {
    dataCreated: 'May 2024',
    description:
      "Mix React project is a dynamic web application that offers a variety of interface solutions. It encompasses a wide range of features such as informational cards, interactive quizzes, a finance management module resembling online banking, a currency converter facilitating quick calculations, as well as tools for handling dates. It's a comprehensive environment that combines diverse interface components, providing users with a rich experience in utilizing various functions all in one place.",
    technologyUsed: {
      frontEnd: ['React'],
      backend: [],
      styles: ['CSS', 'Styled-components'],
    },
    title: 'Mix React',
    image: Mix,
    path: 'https://safkiar-mix-react.netlify.app/',
  },
  Safkiar: {
    dataCreated: 'April 2024',
    description:
      'My first personal website built using JavaScript, featuring smooth animations, translations, and interactive sliders. The design is simple yet dynamic, with elements transitioning smoothly to enhance user interaction.',
    technologyUsed: {
      frontEnd: ['JavaScript'],
      backend: [],
      styles: ['CSS'],
    },
    title: 'Safkiar',
    image: Safkiar,
    path: 'https://safkiar.github.io/index.html',
  },
  Chess: {
    dataCreated: 'March 2024',
    description:
      'Mini Chess is an innovative 6x8 adaptation of traditional chess, incorporating full game rules including castling, en passant, and pawn promotion. This streamlined version amplifies strategic intricacies by condensing the battlefield, compelling players to engage in complex tactics and maneuvers within a compact space. It stands as a testament to skillful game design and programming, ideal for those seeking to refine their chess strategy in a novel format.',
    technologyUsed: {
      frontEnd: ['JavaScript'],
      backend: [],
      styles: ['CSS'],
    },
    title: 'Mini Chess',
    image: Chess,
    path: 'https://safkiar.github.io/minichess.github.io/',
  },
  Forkify: {
    dataCreated: 'March 2024',
    description:
      'Forkify is your culinary companion, bringing a world of flavors right to your fingertips. This elegant recipe finder allows food enthusiasts to explore over a million recipes with ease. Utilizing a comprehensive API, Forkify not only helps users search for recipes but also provides features to save and organize favorite dishes into a personal collection. Its intuitive interface and robust functionality cater to the modern cook’s needs, making it simple to discover new meals and master culinary skills. Built with an MVC structure, Forkify exemplifies streamlined design and efficient data management for an optimal user experience',
    technologyUsed: {
      frontEnd: ['JavaScript'],
      backend: [],
      styles: ['SCSS'],
    },
    title: 'Forkify',
    image: Forkify,
    path: 'https://safkiar-forkify.netlify.app/',
  },
  Kikowski: {
    dataCreated: 'September 2024',
    description:
      'Modern one-page React application with a sleek, responsive design and smooth scrolling. It features dark/light mode, efficient state management, and optimized performance for fast load times. Subtle animations enhance the user experience.',
    technologyUsed: {
      frontEnd: ['React'],
      backend: [],
      styles: ['Styled-components'],
    },
    title: 'Current Website',
    image: Kikowski,
    path: '',
  },
};
