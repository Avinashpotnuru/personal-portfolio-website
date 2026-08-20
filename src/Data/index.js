import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiReact } from "react-icons/di";
import { FaFigma, FaBootstrap } from "react-icons/fa";
import {
  SiMongodb,
  SiTypescript,
  SiExpo,
  SiFirebase,
  SiAxios,
  SiReactquery,
} from "react-icons/si";


import {
  TbBrandTailwind,
  TbBrandRedux,
  TbBrandNextjs,
  TbBrandJavascript,
} from "react-icons/tb";
import { BsFacebook, BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

export const tabs = [
  { id: 1, tab: "All", category: "" },
  { id: 2, tab: "JavaScript", category: "javascript" },
  { id: 3, tab: "React/Next.js", category: "react" },
  { id: 4, tab: "Full Stack", category: "fullstack" },
  { id: 5, tab: "Android/IOS", category: "android" },
];

export const projectsData = [
  {
    id: 1,
    imgUrl: "/resturaant.webp",
    title: "Restaurant Website",
    description: `It is a restaurant's website. Along with the ability to reserve a table, this app allows users to view the meal menu,`,
    category: "react",
    Link: "/projects/restaurant",
    deploylink: "",
  },
  {
    id: 2,
    imgUrl: "/portfolio.webp",
    title: "Personal Portfolio",
    category: "react",
    description: `Developed In this project, which uses HTML,Tailwind CSS, and React,Next.js. I have contributed
    information about myself, my education, and my projects and skills. Users can view this information in the app. This app
    also has responsive features.i have created Apis by using next.js Api and i have used mangoDb atlas cloud for sorting client details which are entered in this contact form. `,
    Link: "/projects/portfolio",
    deploylink: "https://avinashpotnuruportfolio.netlify.app/",
  },
  {
    id: 3,
    imgUrl: "/movieszone.jpg",
    title: "Movies Zone",
    description: `Implemented responsive Movies Zone App where users can see movies details and trending ..`,
    category: "react",
    Link: "/projects/movies-zone",
    deploylink: "https://avinashmoviesdbapp.netlify.app",
  },
  {
    id: 4,
    imgUrl: "/moviesapp.webp",
    title: "Movies App",
    description: `Implemented responsive OTT platform app like Netflix/Amazon Clone where users can see movies ,
    `,
    category: "react",
    Link: "/projects/movies-app",
    deploylink: "https://avinashmovieapp.ccbp.tech/",
  },

  {
    id: 5,
    imgUrl: "/foodmuch.webp",
    title: "Food Munch",
    description: `Developed a responsive website for a Food Store where users can see a list of food items, detailed information`,
    category: "",
    Link: "/projects/food-munch",
    deploylink: "https://avinashfood1.ccbp.tech/",
  },
  {
    id: 6,
    imgUrl: "/typemaster.png",
    title: "Typing Speed Test",
    description: `Developed an application that measured the time he took to complete a given paragraph
    `,
    category: "javascript",
    Link: "/projects/type-master",
    deploylink: "https://avinashspeed.ccbp.tech/",
  },
  {
    id: 7,
    imgUrl: "/todo.png",
    title: "Todo App",
    description: `A comprehensive todo management tool designed to enhance productivity .
    `,
    link: "",
    category: "javascript",
    Link: "/projects/todo-list",
    deploylink: "https://avi1todolist.ccbp.tech/",
  },
  {
    id: 8,
    imgUrl: "/reacttodolist.webp",
    title: "React Todo App",
    description: `A comprehensive todo management tool designed to enhance productivity .
    `,
    link: "",
    category: "react",
    Link: "/projects/react-todolist",
    deploylink: "https://avinashtodolist.netlify.app/",
  },
  {
    id: 9,
    imgUrl: "/cinewave.jpg",
    title: "CineWave Movies Explorer App",
    description: `A cross-platform React Native movie explorer application built with Expo. Features Firebase Authentication, TMDB API integration, real-time movie and TV show search, advanced filtering and sorting, and optimized server-state management using TanStack React Query for a fast and seamless user experience.`,
    link: "",
    category: "android",
    Link: "/projects/cine-wave",
    deploylink: "",
  },
  {
    id: 10,
    imgUrl: "/rc-parish.png",
    title: "RC Parish Website & Dashboard",
    description: `A modern React.js and TypeScript-based parish management website and dashboard featuring responsive UI, dynamic parish modules, React Hook Form with Zod validation, Zustand state management, and optimized performance through code splitting and lazy loading.`,
    link: "",
    category: "react",
    Link: "/projects/rc-parish",
    deploylink: "",
  },
];

export const contactDetails = [
  {
    id: 1,
    title: "Avinash Potnuru",
  },
  {
    id: 2,
    title: "phone number",
  },
];

const rcParish = {
  imgUrl: "/rc-parish.png",
  title: "RC Parish Website & Dashboard",
  technologies: [
    { icon: <DiReact /> },
    { icon: <SiTypescript /> },
    { icon: <TbBrandTailwind /> },
    { icon: <AiFillHtml5 /> },
    { icon: <DiCss3 /> },
  ],

  description: `Developed a modern RC Parish Website and Dashboard using React.js and TypeScript, migrating from a legacy application to improve performance, scalability, and maintainability. Built responsive, reusable UI components with Tailwind CSS and Shadcn UI, implemented type-safe forms using React Hook Form and Zod, and optimized routing, code splitting, and lazy loading to deliver a fast and user-friendly experience.`,

  projectLink: "",

  keypoints: [
    "Migrated the parish website from a legacy technology stack to React.js and TypeScript.",
    "Developed a responsive and accessible user interface using Tailwind CSS and Shadcn UI.",
    "Built reusable components for Mass schedules, sacraments, events, announcements, and community updates.",
    "Implemented client-side routing using React Router with a type-safe routing structure.",
    "Developed robust forms using React Hook Form and Zod for validation and improved developer experience.",
    "Managed application state efficiently using Zustand.",
    "Optimized application performance with code splitting, lazy loading, and minimized unnecessary re-renders.",
    "Ensured responsive layouts and consistent user experience across desktop, tablet, and mobile devices.",
    "Followed modern React development practices with reusable components and scalable project architecture.",
  ],

  githubLink: "",
  category: "react",
};

const cineWave = {
  imgUrl: "/cinewave.jpg",
  title: "CineWave Movies Explorer App",
  technologies: [
    { icon: <DiReact /> },
    { icon: <SiTypescript /> },
    { icon: <SiExpo /> },
    { icon: <SiFirebase /> },
    { icon: <SiAxios /> },
    { icon: <SiReactquery /> },
  ],

  description: `Developed a cross-platform Movies & TV Shows Explorer application using React Native, Expo, and TypeScript. Integrated the TMDB API to display trending, popular, upcoming movies and TV shows with real-time search functionality. Implemented Firebase Authentication for secure user login and TanStack React Query for efficient server-state management, API caching, and background synchronization, delivering a fast and responsive mobile experience.`,

  projectLink: "",

  keypoints: [
    "Developed a cross-platform mobile application using React Native, Expo, and TypeScript.",
    "Integrated TMDB API to display trending, popular, top-rated, upcoming movies and TV shows.",
    "Implemented real-time movie and TV show search with dynamic API data fetching.",
    "Added advanced filtering and sorting based on popularity, rating, release date, revenue, title, original title, vote count, and language.",
    "Implemented Firebase Authentication for secure user login and registration.",
    "Used TanStack React Query for API caching, background data synchronization, pagination, and improved application performance.",
    "Built reusable components using React Hooks and Expo Router for scalable navigation.",
    "Integrated Axios for API communication and centralized request handling.",
    "Designed a responsive and intuitive mobile UI optimized for both Android and iOS devices.",
  ],

  githubLink: "",
  category: "react-native",
};

const portfolio = {
  imgUrl: "/portfolio.webp",
  title: "Personal Portfolio",
  technologies: [
    { icon: <AiFillHtml5 /> },
    { icon: <DiCss3 /> },
    { icon: <TbBrandTailwind /> },
    { icon: <DiReact /> },
    { icon: <TbBrandNextjs /> },
    { icon: <TbBrandRedux /> },
    { icon: <SiMongodb /> },
  ],

  description: `Developed In this project, which uses HTML,Tailwind CSS, and React,Next.js. I have contributed
    information about myself, my education, and my projects and skills. Users can view this information in the app. This app
    also has responsive features.i have created Apis by using next.js Api and i have used mangoDb atlas cloud for sorting client details which are entered in this contact form. `,
  projectLink: "https://avinashpotnuruportfolio.netlify.app/",
  keypoints: [
    `Implemented different routes for features like  home, about,projects,certificates and contact by using next.js pages routing`,
    `I have used functional components entire this project.`,
    `I have used the redux toolkit for state management for the entire project`,
    `I have used third-party packages like React icons, axios,react-hook-form.
    `,
    "I have used framer motion for animation's and scrolling effects",
  ],
  githubLink: "",
  category: "react",
};

const todolist = {
  imgUrl: "/todo.png",
  title: "Todo App",
  technologies: [
    { icon: <AiFillHtml5 /> },
    { icon: <DiCss3 /> },
    { icon: <FaBootstrap /> },
    { icon: <TbBrandJavascript /> },
  ],
  description: `User-friendly interface with HTML, CSS, and Bootstrap for ease of use.
    Effortless task management through JavaScript-based CRUD operations with dynamic UI updates.
    Your tasks are always safe with local storage methods to ensure task persistence
    `,
  keypoints: [
    `User-friendly interface with HTML, CSS, and Bootstrap for ease of use.`,
    `Effortless task management through JavaScript-based CRUD operations with dynamic UI updates`,
    `Your tasks are always safe with local storage methods to ensure task persistence.`,
  ],

  projectLink: "https://avi1todolist.ccbp.tech/",
  githubLink: "",
  category: "javascript",
};

const moviesApp = {
  imgUrl: "/moviesapp.webp",
  title: "Movies App",
  technologies: [
    { icon: <AiFillHtml5 /> },
    { icon: <DiCss3 /> },
    { icon: <FaBootstrap /> },
    { icon: <TbBrandJavascript /> },
    { icon: <DiReact /> },
    { icon: <FaFigma /> },
  ],
  description: `Implemented responsive OTT platform app like Netflix/Amazon Clone where users can see movies popular, 
  trending, and top-rated, and also can search movies and view specific movie details.`,
  keypoints: [
    `Implemented different routes for features like login, home, popular, and profile by using React Router 
  components Route, Switch, and Link`,
    `Implemented horizontal scrolling (In trending, top-rated, and originals sections) using React Third Party 
  library called React Slick`,
    `Used Figma mockups to implement UI-rich and pixel-perfect React components`,
    `Explored open-source APIs for movies database and picked TMDb APIs for authentication, movies by 
    category, and movie search APIs.`,
    `Implemented username and password authentication and persisted login state using client storage`,
    `Implemented a protected route to ensure only authenticated users can access the pages like user profile, 
    movies by category, etc.`,
  ],
  projectLink: "https://avinashmovieapp.ccbp.tech/",
  githubLink: "",
  category: "react",
};

const moviesZone = {
  imgUrl: "/movieszone.jpg",
  title: "Movies Zone",
  technologies: [
    { icon: <AiFillHtml5 /> },
    { icon: <DiCss3 /> },
    { icon: <TbBrandTailwind /> },
    { icon: <DiReact /> },
    { icon: <TbBrandNextjs /> },
    { icon: <TbBrandRedux /> },
  ],
  description: `Implemented responsive Movie Zone where users can see movies popular, 
  trending, and top-rated, and also can search movies and view specific movie details.`,
  keypoints: [
    `I used functional components entire this project.`,
    `Implemented different routes by using next.js pages`,

    `Explored open-source APIs for movies database and picked TMDb APIs, movies by
    category, and movie search APIs.`,
    `I used the redux toolkit for state management for the entire project`,
    `I have used third-party packages like React icons, React-player, and React pagination.
    `,
  ],
  projectLink: "https://avinashmoviesdbapp.netlify.app",
  githubLink: "",
  category: "react",
};

const RestaurantWebsite = {
  imgUrl: "/resturaant.webp",
  title: "Restaurant Website",
  technologies: [
    { icon: <AiFillHtml5 /> },
    { icon: <DiCss3 /> },
    { icon: <TbBrandTailwind /> },
    { icon: <DiReact /> },
    { icon: <TbBrandNextjs /> },
    { icon: <TbBrandRedux /> },
    { icon: <FaFigma /> },
  ],

  description: `It is a restaurant's website. Along with the ability to reserve a table, this app allows users to view the meal
  menu, chef information, restaurant information, and daily activity at the restaurant. With This Website, users
  can access everything easily`,
  projectLink: "",
  githubLink: "",
  category: "react",
};

const FoodMunch = {
  imgUrl: "/foodmuch.webp",
  title: "Food Munch",
  technologies: [
    { icon: <AiFillHtml5 /> },
    { icon: <DiCss3 /> },
    { icon: <FaBootstrap /> },
  ],
  description: `Developed a responsive website for Food Store where users can see a list of food items, detailed information
  about a food item, and offers.`,
  keypoints: [
    `Designed page using the following HTML structure elements like li, header, article, footer elements, and 
    different bootstrap components to show different sections in the website and different bootstrap classes 
    for responsiveness through the mobile-first approach.`,
    `Implemented product youtube videos by using Bootstrap embed and model components`,
  ],
  projectLink: "https://avinashfood1.ccbp.tech/",
  githubLink: "",
  category: "",
};

const typeMaster = {
  imgUrl: "/typemaster.png",
  title: "Typing Speed Test",
  technologies: [
    { icon: <AiFillHtml5 /> },
    { icon: <DiCss3 /> },
    { icon: <FaBootstrap /> },
  ],
  description: ` Developed an application that measured the time he took to complete a given paragraph`,
  keypoints: [
    `Maintained timer by using APIs setTimeInterval, and clearTimeInterval and Updated timer in the UI 
    dynamically using JavaScript DOM operations for every 1 second.
    `,
    `Fetched the paragraph from the server asynchronously using fetch GET HTTP API call and displayed it 
    on UI by using JavaScript DOM Operations.`,
    `Displayed time that the user took in the UI using JavaScript event listeners once the user clicked on 
    submit button, Did form validations for incomplete paragraphs`,
  ],

  projectLink: "https://avinashspeed.ccbp.tech/",
  githubLink: "",
  category: "javascript",
};

const reacttodolist = {
  imgUrl: "/reacttodolist.png",
  title: "React Todo App",
  // technologies: "HTML, CSS, JavaScript, React",
  technologies: [
    { icon: <AiFillHtml5 /> },
    { icon: <DiCss3 /> },

    { icon: <TbBrandJavascript /> },
    { icon: <DiReact /> },
  ],
  description: `User-friendly interface with HTML, CSS, and React for ease of use.
    Effortless task management through JavaScript-based CRUD operations with dynamic UI updates.
    
    `,
  projectLink: "https://avinashtodolist.netlify.app/",
  githubLink: "",
  category: "react",
};

export const pages = {
  todolist: todolist,
  moviesApp: moviesApp,
  moviesZone: moviesZone,
  RestaurantWebsite: RestaurantWebsite,
  FoodMunch: FoodMunch,
  typeMaster: typeMaster,
  portfolio: portfolio,
  reacttodolist: reacttodolist,
  cineWave: cineWave,
  rcParish: rcParish,
};

export const experienceData = [
  {
    id: 1,
    role: "React Developer",
    company: "Wavetronic Solutions Pvt Ltd ",
    duration: "June 2022 – Present",
    description: [
      "Collaborated with cross-functional teams in an Agile environment to deliver scalable web applications.",
      "Designed and developed interactive user interfaces using React.js, Next.js, and TypeScript.",
      "Built responsive and accessible websites using Tailwind CSS, Material UI, and HTML5.",
      "Managed application state efficiently using Redux Toolkit for seamless user experiences.",
      "Integrated RESTful APIs and ensured smooth data flow across components.",
      "Used Git and GitHub for version control, code reviews, and team collaboration.",
    ],
  },
  {
    id: 2,
    role: "UI Developer",
    company: "Advanced Infoscan Pvt Ltd ",
    duration: "March 2020 – April 2022",
    description: [
      "Built responsive, interactive UI components using React.js and Next.js, ensuring seamless user experience.",
      "Designed and implemented custom component libraries with Material UI and Tailwind CSS to maintain design consistency.",
      "Integrated REST APIs and React Query (useQuery) for optimized data fetching, reducing API response time by 30%.",
      "Implemented JWT-based authentication for secure user sessions and data protection.",
      "Collaborated with UI/UX designers and used Figma to ensure pixel-perfect design implementation.",
      "Optimized website performance using Webpack and Lighthouse, improving load time and rendering efficiency.",
      "Used Git and GitHub for version control, following Agile best practices for sprint planning and feature development.",
    ],
  },
  {
    id: 3,
    role: "Web Development Intern",
    company: "Internship Alerts ",
    duration: "August 2019 - September 2019",
    description: [
      "Create a user interface specification of application in an Agile environment.",
      "Implemented end-to-end UI design to provide user-friendly websites for the company ",
      "Implemented Websites using Html,CSS,JavaScript with Responsive",
      "It's is a one-month internship .in this internship I completed whatever tasks the company gave.",
    ],
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "Bootstrap",
  "Javascript",
  "ReactJs",
  "Python",
  "MySql",
  "Tailwind CSS",
  "Redux Toolkit",
  "Figma",
  "Mongo Db",
  "Git",
  "Typescript",
  "Next Js",
  "SASS/SCSS",
  "Material UI",
  "Shadcn",
];

export const educationDetails = [
  {
    id: 1,
    name: "Nxtwave Disruptive Technologies",
    duration: "2019 - 2020",
    course: "Industry Ready Certification in Full-stack Development",
    location: "Hyderabad, Telangana, India",
  },
  {
    id: 2,
    name: "Sri Sivani College of Engineering",
    duration: "2012 - 2016",
    course: "Bachelor of Technology (Mechanical Engineering)   ",
    location: "Chilkapalem,Srikakulam, Andhra Pradesh",
  },
  {
    id: 3,
    name: "Sri Chaitanya Junior Kalasala",
    duration: "2010 - 2012",
    course: "Intermediate(M.P.C)   ",
    location: "Srikakulam, Andhra Pradesh",
  },
];

export const certificateData = [
  {
    name: "Certificate of Completion",
    link: "https://certificate.givemycertificate.com/c/2f5ede0f-b267-40d0-924f-8289ef628a47",
  },
  {
    name: "Industry Ready Certificate",
    link: "https://certificates.ccbp.in/intensive/irc?id=N8KSBCC3DC",
  },
  {
    name: "React",
    link: "https://certificates.ccbp.in/intensive/react-js?id=AAGOMGFUGD",
  },
  {
    name: "Build your own Dynamic Web Application",
    link: "https://certificates.ccbp.in/intensive/dynamic-web-application?id=SZQMJZPYZE",
  },
  {
    name: "Build Your Own Responsive Website",
    link: "https://certificates.ccbp.in/intensive/responsive-website?id=NWABGNGVOQ",
  },
  {
    name: "Build Your Own Static Website",
    link: "https://certificates.ccbp.in/intensive/static-website?id=VMRRFPCHYQC",
  },

  {
    name: "Developer Foundations",
    link: "https://certificates.ccbp.in/intensive/developer-foundations?id=NRZEPVASZL",
  },
  {
    name: "Introduction to Databases",
    link: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=ZNJJAIKWKU",
  },
  {
    name: "JavaScript Essentials",
    link: "https://certificates.ccbp.in/intensive/javascript-essentials?id=USSRDIXIFR",
  },
  {
    name: "Programming Foundations with Python",
    link: "https://certificates.ccbp.in/intensive/programming-foundations?id=AZLJQDUBBR",
  },
  {
    name: "Responsive Web Design using Flex box",
    link: "https://certificates.ccbp.in/intensive/flexbox?id=DBPXFIMNPQ",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export const blogData = [
  {
    id: 1,
    slug: "react-reconciliation-explained",
    title: "React Reconciliation Explained: How the Virtual DOM Really Works",
    description:
      "A deep dive into how React diffs the virtual DOM, what keys actually do, and why reconciliation performance matters for your React applications.",
    tags: ["React", "Performance"],
    date: "June 2026",
    readTime: "6 min read",
    sections: [
      {
        heading: "What is the Virtual DOM?",
        paragraphs: [
          "The virtual DOM is a lightweight JavaScript representation of the real DOM. React keeps an in-memory tree of the UI and compares it against the previous one on every state change. Instead of touching the browser DOM directly, React computes what changed and applies the smallest number of updates.",
          "This matters because DOM manipulation is one of the slowest operations in the browser. By batching changes and minimizing direct DOM writes, React keeps updates fast even in large applications.",
        ],
      },
      {
        heading: "How Reconciliation Works",
        paragraphs: [
          "When state or props change, React runs a diffing algorithm between the previous virtual tree and the new one. It walks the trees in parallel and decides which nodes need to be created, updated, or removed.",
          "React makes two key assumptions to keep this process fast: elements of different types produce different trees, and elements with stable keys stay mounted across re-renders. These two rules let React avoid expensive full-tree comparisons.",
        ],
        code: `function TodoList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}`,
      },
      {
        heading: "Why Keys Matter",
        paragraphs: [
          "Keys give each element a stable identity. When React diffs a list, it uses keys to match items from the old list to the new list. Without keys, React falls back to index-based matching, which can cause components to be unmounted and remounted unnecessarily.",
          "This leads to lost state, broken animations, and poor performance. Always use a stable, unique key — the item's id — rather than the array index, especially when the list can be reordered or filtered.",
        ],
        code: `// Prefer this
items.map((item) => <Row key={item.id} item={item} />);

// Avoid this when items can reorder
items.map((item, index) => <Row key={index} item={item} />);`,
      },
      {
        heading: "Practical Takeaways",
        paragraphs: [
          "Keep component trees shallow, extract components thoughtfully, and memoize expensive computations. Reconciliation is fast, but it is not free. A stable tree structure with good keys will let React do the least work possible on every render.",
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "app-router-vs-pages-router",
    title: "Next.js App Router vs Pages Router: When to Use Which",
    description:
      "Comparing the App Router and Pages Router across routing, data fetching, streaming, and SEO — with practical guidance for picking the right one for your project.",
    tags: ["Next.js", "Architecture"],
    date: "April 2026",
    readTime: "7 min read",
    sections: [
      {
        heading: "The Shift in Next.js 13",
        paragraphs: [
          "Next.js 13 introduced the App Router, built on React Server Components and file-based routing with folders. It is the recommended default for new projects. The Pages Router, the long-standing model, is still fully supported and remains a great choice for many codebases.",
          "The App Router adds layouts, loading and error states per route, streaming with Suspense, and colocated server and client code. These features change how you structure data fetching and caching.",
        ],
      },
      {
        heading: "Data Fetching",
        paragraphs: [
          "In the Pages Router, data fetching happens in getServerSideProps, getStaticProps, or getInitialProps. The App Router moves this into server components, layout files, and the new fetch-based caching system. You no longer need a dedicated data-fetching method — just fetch in the server component.",
        ],
        code: `// Pages Router
export async function getServerSideProps() {
  const res = await fetch("https://api.example.com/posts");
  return { props: { posts: await res.json() } };
}

// App Router (server component)
export default async function Posts() {
  const posts = await fetch("https://api.example.com/posts").then((r) => r.json());
  return <PostList posts={posts} />;
}`,
      },
      {
        heading: "When to Choose Each",
        paragraphs: [
          "Choose the App Router for new projects: you get layouts, streaming, server components, and modern defaults. Keep the Pages Router if you have a large existing codebase, rely on middleware-heavy patterns, or use libraries that assume client-side rendering.",
          "You can even migrate gradually — both routers can coexist in the same application. Migrate page by page and retire the Pages Router once everything lives in the App Router.",
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "choosing-state-management",
    title: "Redux Toolkit vs Zustand vs React Query: Choosing State Management",
    description:
      "An honest comparison of the three most popular state management approaches in 2026, with examples and trade-offs for small, medium, and large applications.",
    tags: ["State Management", "React"],
    date: "February 2026",
    readTime: "8 min read",
    sections: [
      {
        heading: "Server State vs Client State",
        paragraphs: [
          "Before picking a library, separate your state into two buckets. Server state — data fetched from an API — is best handled by a caching layer like React Query or SWR. Client state — UI toggles, forms, theme — is what Redux, Zustand, or Context are really for.",
          "Many teams reach for Redux for everything, then wonder why caching and refetching are so painful. The right split is usually: React Query for server state, and a small store for the rest.",
        ],
      },
      {
        heading: "Redux Toolkit",
        paragraphs: [
          "Redux Toolkit is the batteries-included version of Redux. It brings slices, immutable updates with Immer, and a devtools extension. It shines in large applications with complex workflows, audits, or time-travel debugging needs.",
          "The cost is boilerplate and ceremony. For a small or medium app, that overhead often outweighs the benefits.",
        ],
      },
      {
        heading: "Zustand",
        paragraphs: [
          "Zustand is a tiny, unopinionated store. You create a store with a hook, update it with set, and selectors keep re-renders minimal. It is a favorite for medium apps that want global state without Redux's ceremony.",
        ],
        code: `import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  increment: () => set((s) => ({ count: s.count + 1 })),
}));`,
      },
      {
        heading: "A Practical Rule of Thumb",
        paragraphs: [
          "Use React Query for anything that comes from a server. Use Zustand for lightweight global UI state. Reach for Redux Toolkit when you need strict structure, middleware, or enterprise-grade debugging across a large team.",
        ],
      },
    ],
  },
  {
    id: 4,
    slug: "optimize-react-app-performance",
    title: "10 Practical Tips to Optimize React App Performance",
    description:
      "Actionable, battle-tested tips covering code splitting, memoization, lazy loading, image optimization, and bundle size reduction for faster React apps.",
    tags: ["React", "Performance"],
    date: "December 2025",
    readTime: "9 min read",
    sections: [
      {
        heading: "Measure First",
        paragraphs: [
          "Optimization without measurement is guesswork. Run a Lighthouse audit and profile with the React DevTools Profiler to find the components that actually re-render too often. Optimize the worst offenders, not the ones you assume are slow.",
        ],
      },
      {
        heading: "1. Lazy Load Routes and Components",
        paragraphs: [
          "Split your bundle so users only download what they need. React.lazy and Next.js dynamic imports load heavy components on demand.",
        ],
        code: `import dynamic from "next/dynamic";

const Chart = dynamic(() => import("@/components/Chart"), {
  loading: () => <Loader />,
});`,
      },
      {
        heading: "2. Memoize Expensive Computations",
        paragraphs: [
          "useMemo caches values and useCallback caches functions. Use them sparingly — wrapping everything in memoization can hurt more than it helps. Target genuinely expensive calculations and stable callbacks passed to memoized children.",
        ],
        code: `const total = useMemo(
  () => items.reduce((sum, item) => sum + item.price, 0),
  [items],
);`,
      },
      {
        heading: "3. Optimize Images",
        paragraphs: [
          "Serve the right size and format for every viewport. Use next/image for automatic resizing, WebP, and lazy loading instead of shipping oversized originals.",
        ],
      },
      {
        heading: "4. Avoid Anonymous Functions in Render",
        paragraphs: [
          "Inline arrow functions create a new reference every render, breaking memoized children. Extract handlers or use useCallback to keep references stable.",
        ],
      },
      {
        heading: "5. Throttle and Debounce",
        paragraphs: [
          "Search inputs and scroll handlers fire constantly. Debounce network requests and throttle expensive layout work so you are not re-rendering on every keystroke or pixel.",
        ],
      },
      {
        heading: "6. Virtualize Long Lists",
        paragraphs: [
          "Rendering thousands of rows at once is slow. Libraries like react-window render only the visible rows, keeping the DOM small and scrolling smooth.",
        ],
      },
      {
        heading: "The Remaining Tips",
        paragraphs: [
          "7. Keep component trees shallow and extract repeated UI into small reusable pieces. 8. Avoid unnecessary context updates by splitting contexts by concern. 9. Remove unused dependencies and duplicate packages to shrink the bundle. 10. Use production builds for all benchmarks — development mode is always slower than production.",
        ],
      },
    ],
  },
  {
    id: 5,
    slug: "pixel-perfect-responsive-uis-tailwind",
    title: "Building Pixel-Perfect Responsive UIs with Tailwind CSS",
    description:
      "How to use Tailwind CSS effectively — mobile-first breakpoints, reusable utilities, custom themes, and common pitfalls to avoid in real projects.",
    tags: ["Tailwind CSS", "Responsive"],
    date: "October 2025",
    readTime: "6 min read",
    sections: [
      {
        heading: "Start Mobile-First",
        paragraphs: [
          "Tailwind is mobile-first by default. Write the base styles for the smallest screen, then layer on sm:, md:, and lg: variants as the viewport grows. This keeps your CSS lean and matches how users actually browse.",
        ],
        code: `// Mobile first: the card is stacked by default
// and becomes a two-column row on larger screens
<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  <Card />
</div>`,
      },
      {
        heading: "Extract Repeated Patterns",
        paragraphs: [
          "When the same utility group appears across many components, extract it with @apply into a component class, or compose it into a small React component. This keeps your markup readable and your styles consistent.",
        ],
        code: `@layer components {
  .card {
    @apply bg-white border border-slate-200 rounded-lg shadow-sm p-6;
  }
}`,
      },
      {
        heading: "Customize the Theme",
        paragraphs: [
          "Define brand colors, fonts, and spacing once in the tailwind.config, then reference them by name. It keeps the palette consistent and makes design changes a one-line update.",
        ],
      },
      {
        heading: "Avoid Common Pitfalls",
        paragraphs: [
          "Do not fight the framework — trust its defaults until you have a reason to change them. Use breakpoint prefixes consistently, avoid magic numbers in arbitrary values unless truly needed, and test on real devices, not just the browser resizer.",
        ],
      },
    ],
  },
];

export const socialLinks = [
  { href: "https://github.com/Avinashpotnuru", icon: <BsGithub size={34} /> },
  {
    href: "https://www.linkedin.com/in/avinash-potnuru/",
    icon: <BsLinkedin size={34} />,
  },
  {
    href: "https://www.instagram.com/potnuru_avinash/",
    icon: <BsInstagram size={34} />,
  },
  {
    href: "https://www.facebook.com/avinash.potnuru.18",
    icon: <BsFacebook size={34} />,
  },
];
