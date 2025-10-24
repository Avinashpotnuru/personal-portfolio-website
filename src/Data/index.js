import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiReact } from "react-icons/di";
import { FaFigma, FaBootstrap } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

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
  { id: 3, tab: "React", category: "react" },
  { id: 4, tab: "Full Stack", category: "fullstack" },
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
  "Shadcn"
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
