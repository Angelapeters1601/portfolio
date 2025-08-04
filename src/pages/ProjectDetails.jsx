import React from "react";
import { useParams } from "react-router-dom";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaCode,
  FaLightbulb,
  FaTools,
  FaListUl,
  FaBookOpen,
  FaExclamationTriangle,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiRedux,
  SiNextdotjs,
  SiFirebase,
  SiReact,
} from "react-icons/si";
import { MdDescription, MdOutlineFeaturedPlayList } from "react-icons/md";
import RateItImg from "../assets/rate-it.png";
import PizzaImg from "../assets/pizza.jpeg";
import ChefImg from "../assets/chefImg.gif";
import BrainBusterImg from "../assets/brain-buster.png";
import MeImg from "../assets/me.jpg";
import CorleyImg from "../assets/corley-legal.png";
import JiffyfoxImg from "../assets/jiffyfox.jpg";

// Custom animations
const customFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const customFadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const customFadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const customScaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const ProjectDetails = () => {
  const { id } = useParams();

  // Project data array
  const projects = [
    {
      id: "fast-react-pizza",
      title: "Fast React Pizza Co.",
      description:
        "FastReactPizza is a dynamic pizza ordering web application inspired by Jonas Schmedtmann's ReactJS course on Udemy. The app allows users to browse a curated pizza menu, place orders, and customize delivery details. Users can enter their names which are managed globally using Redux Toolkit and submit delivery information through an intuitive form. A high-priority delivery option is available at an extra cost, allowing faster order processing. The platform also features a pizza search functionality by order number or ID, and displays detailed order summaries including user information, address, location, and estimated delivery time.",
      tags: [
        "React",
        "JavaScript",
        "Redux Toolkit",
        "Tailwindcss",
        "Vite",
        "React-router v6.4",
        "Geolocation API",
      ],
      image: PizzaImg,
      links: {
        live: "https://angelapeters1601.github.io/fast-react-pizza",
        code: "https://github.com/angelapeters1601/fast-react-pizza",
      },
      accentColor: "bg-[#E34F26]/20",
      icon: <FaReact className="text-[#61DAFB]" />,
      challenges:
        "One of the initial challenges was managing user state efficiently across multiple components, especially for storing the customer's name and delivery preferences. Learning to structure Redux Toolkit slices and handle side effects with actions took some adjustment. Implementing the high-priority option required dynamically updating pricing logic and reflecting it across the UI in real time. Additionally, ensuring that the search function worked smoothly with order IDs and numbers involved careful handling of route parameters and conditional rendering, Implementing real-time cart updates without page refresh while maintaining performance with 50+ menu items.",
      learnings:
        "This project deepened my understanding of Redux Toolkit and how to manage global application state cleanly and predictably. I gained experience working with React Router to create a multi-page user experience, and improved my form-handling skills including validation, controlled inputs, and dynamic calculations. I also practiced thinking through real-world UX flows, like prioritizing orders, calculating delivery times, and showing personalized order summaries. Overall, it strengthened my ability to build full-featured, state-driven React applications.",
      features: [
        "Interactive pizza menu with customizable selection and real-time updates",
        "Global state management using Redux Toolkit for user and order data",
        "User input form to capture delivery address, name, and location details",
        "High-priority order option with added percentage-based cost",
        "Search functionality to find pizzas by order number or pizza ID",
        "Dynamic order summary displaying user info, delivery address, and estimated delivery time",
        "Responsive and mobile-friendly UI designed for seamless ordering experience",
        "Form validation and feedback to enhance user interaction",
        "Local routing with React Router for a multi-page app feel",
        "Optimized checkout flow",
      ],
    },
    {
      id: "rate-it",
      title: "RateIt",
      description:
        "A beauty product review web application inspired by Good Housekeeping, designed to help users make informed decisions about beauty products. The platform features expert and editor-curated reviews and ratings, along with user-generated feedback. Users can rate and review products, view real-time prices, and shop directly via Amazon integration. Additional features include the ability to save favorite products for later, a searchable product catalog, and a personalized saved-items section for easy access.",
      tags: [
        "React.js",
        "JavaScript",
        "Redux toolkit",
        "Tailwindcss",
        "Email.Js",
        "Swiper.js",
        "React-count-up",
        "React-awesome-reveal",
        "Optimized images",
        "Lazy loading",
        "Cloudinary",
        "Vite",
        "Custom API",
      ],
      image: RateItImg,
      links: {
        live: "https://rate-it-one.vercel.app/",
        code: "https://github.com/angelapeters1601/rate-it",
      },
      accentColor: "bg-[#007FFF]/20",
      icon: <SiNextdotjs className="text-black dark:text-white" />,
      challenges:
        "One of the major challenges I encountered while building this application was sourcing high-quality product images. Since I couldn't find an API that provided the exact product data and images I needed, I manually gathered visuals from various websites and hosted them on Cloudinary to obtain usable URLs. Additionally, due to the lack of a suitable external API, I created a custom API hosted on GitHub to manage product data, a significant learning curve as a front-end developer. This experience deepened my understanding of data structuring and working with fetch() for remote access. I also implemented a contact form using EmailJS, which was my first time integrating it into a project, enabling users to reach out directly through the platform.",
      learnings:
        "Through this project, I gained valuable experience in handling image sourcing and external hosting using Cloudinary. I also learned how to structure and serve data by building a custom API hosted on GitHub, which improved my understanding of working with JSON and API consumption using the fetch method. Integrating EmailJS for the first time expanded my skill set in handling form submissions and third-party communication tools. Overall, the project strengthened my ability to think beyond front-end limitations and adapt quickly to challenges.",
      features: [
        "Expert and editor-curated beauty product reviews",
        "Real-time product pricing with Amazon shopping integration",
        "Save-to-favorites feature with persistent access",
        "Product search functionality",
        "Responsive dashboard UI",
        "Custom-built API hosted on GitHub",
        "Cloudinary-hosted product images",
        "Contact form powered by EmailJS for direct user communication",
        "Polished user interface with subtle animations using Tailwind CSS, swiper.js, React-loading-skeleton, React-awesome-reaveal, React countup and Framer Motion.",
      ],
    },
    {
      id: "brain-buster",
      title: "Brain Buster",
      description:
        "BrainBuster is an interactive quiz web application built with ReactJS, designed to challenge users across a variety of topics and difficulty levels. Users can select their preferred subject, the number of questions, and the desired difficulty before starting the quiz. The app provides real-time feedback with visual cues  a green buzz for correct answers and a red buzz for incorrect ones. Progress is tracked throughout, and users receive a final score with a performance remark at the end. There's also an option to restart the quiz for a fresh attempt. State is managed using React's built-in hooks, ensuring a smooth and responsive experience. This project was rated and positively reviewed by a top Udemy React instructor and a course teaching assistant, recognizing its clean UI and strong implementation of core React principles.",
      tags: ["React", "JavaScript", "useReducer", "Framer motion", "Vite"],
      image: BrainBusterImg,
      links: {
        live: "https://brain-buster-six.vercel.app",
        code: "https://github.com/angelapeters1601/brain-buster",
      },
      accentColor: "bg-[#FFCA28]/20",
      icon: <SiFirebase className="text-[#FFCA28]" />,
      challenges:
        "One of the primary challenges was implementing real-time feedback for each quiz question while ensuring state updates were accurate and smooth. Managing user progress across multiple states including selected options, score tracking, and conditional rendering required thoughtful structuring of component logic. Designing a flexible quiz configuration system (for topics, difficulty, and question count) also added complexity. Additionally, maintaining UI responsiveness and preventing re-renders from disrupting the experience took fine-tuning.Managing quiz state across multiple levels and storing user results in real-time.",
      learnings:
        "Building BrainBuster deepened my understanding of how to manage state transitions in React effectively using the useReducer hook. I learned how to architect a multi-step quiz flow using hooks and conditional logic, and how to create intuitive user interactions with instant feedback. I also practiced building reusable components for questions, results, and navigation logic. This project strengthened my problem-solving skills and gave me experience building a user-focused, state-driven application from scratch.",
      features: [
        "Topic selection across multiple subjects before starting a quiz",
        "Dynamic configuration of question count and difficulty level",
        "Immediate feedback for each question, green buzz for correct, red buzz for incorrect",
        "Progress tracking with visual indicators during the quiz",
        "Final result summary with personalized performance remark",
        "Option to restart the quiz and try again",
        "State management handled using React's built-in hooks",
        "Responsive and mobile-friendly UI with subtle animations",
        "Rated and reviewed by a top Udemy React instructor and course assistant",
      ],
    },
    {
      id: "corley-legal",
      title: "Corley Legal",
      description:
        "Corley Legal is a paralegal service platform designed to assist individuals in connecting with qualified legal professionals across various domains, including business law, family law, criminal law, intellectual property, estate planning, and personal injury.The platform includes a custom-built admin dashboard that tracks visitor activity and captures contact submissions via a dynamic contact form. Admins can also upload video content, manage legal briefings, and handle document uploads, all of which reflect in real time on the front end. A unique feature is the prisoner messaging panel, enabling internal communication for specific use cases. The frontend is well-routed and enhanced with smooth animations and transitions. A chatbot assistant is integrated to guide users and escalate to a live agent on request. While the project is still in development, it already demonstrates full-stack capabilities and a deep understanding of legal services workflows.",
      tags: [
        "React",
        "JavaScript",
        "NodeJs",
        "Nodemailer",
        "Tailwind CSS",
        "Supabase",
        "Twillio",
        "Livechat",
        "Resend",
        "Posthog",
        "Google Cloud Services",
        "React-Router-Dom",
        "Lazy-loading & Suspense",
        "Swiper.js",
        "Chart.js",
        "Geolocation",
        "React-Awesome-Reveal",
        "React-fast-marquee",
        "React-countup",
        "Framer motion",
        "Plesk",
      ],
      image: CorleyImg,
      links: {
        live: "https://corley.legal",
        code: "https://github.com/angelapeters1601/corley-legal",
      },
      accentColor: "bg-[#764ABC]/20",
      icon: <SiRedux className="text-[#764ABC]" />,
      challenges:
        "Designing and integrating a multi-functional admin dashboard that handles contact tracking, content uploads, prisoner messaging, and legal documents, all in a single panel. Implementing real-time video upload visibility from the backend (admin) to the frontend multimedia section. Architecting a secure and scalable backend structure with Supabase, especially for sensitive legal content. Building a chatbot-to-live-agent escalation logic with routing, while keeping the UI consistent and fluid. Maintaining clean navigation across numerous routes and components within a growing, evolving codebase.",
      learnings:
        "Gained in-depth experience in creating admin dashboards that support real-time content management and user interaction. Learned how to integrate Supabase for authentication, data storage, and real-time database syncing in a production-like app. Improved skills in routing complex applications using React Router and building modular UI/UX flows. Explored chatbot integration and live agent triggers,combining frontend logic with asynchronous messaging behavior. Understood the importance of user roles, especially in applications dealing with legal or confidential data workflows.",
      features: [
        "Multi-domain legal service support including business, family, criminal, IP, estate, and injury law",
        "Admin dashboard for managing user contact submissions and visitor activity tracking",
        "Video upload functionality from the admin panel, synced to the frontend multimedia page",
        "Secure prisoner messaging system managed through the dashboard",
        "Legal briefing and document upload management for streamlined internal use",
        "Integrated chatbot assistant with optional live agent handoff for real-time help",
        "API Integration for real-time legal data fetching",
        "Structured Client Resource Pages with categorized access to: Portal Guides, Case Results, All in-one Resource Hub",
        "Apply for Legal Roles & Internship Opportunities through an embedded job board",
        "Client & Peer Reviews Section where users can read or submit feedback/testimonials",
        "Embedded Legal Video Resources (e.g., rights education, FAQs, walkthroughs)",
        "Downloadable Documents like contracts, case forms, legal policies (PDF, DOCX)",
        "Meet the Team Page featuring bios, roles, and contact info of legal experts",
        "Progress Tracking System to view real-time case status or client progress metrics",
        "Responsive UI with animated transitions using Framer Motion, Marquees, React-awesome-reveal and CSS",
        "Well-structured routing using React Router for a smooth navigation experience",
        "Contact form with automated email delivery.",
      ],
    },
    {
      id: "chefspal",
      title: "Chef's Pal",
      description:
        "Chef's Pal is a dynamic recipe discovery and meal-planning web application inspired by simple and intuitive cooking experiences. It allows users to explore recipes based on categories such as mealtime, meal type, and dietary preferences (vegan or non-vegan). Users can search for specific meals, save their favorite recipes for quick access, and generate a shopping list automatically populated with essential ingredients. The app also includes a personal to-do list feature for meal preparation planning and integrates smooth, polished animations for an enjoyable user experience. Chef's Pal is built using ReactJS with Context API for state management, and incorporates lazy loading, Framer Motion animations, and API data fetching using both Axios and native fetch.",
      tags: [
        "React.js",
        "JavaScript",
        "CSS modules",
        "Bootstrap",
        "React Hooks",
        "ContextAPI",
        "Framer motion",
        "React Router",
        "Memoisation",
        "Email.js",
      ],
      image: ChefImg,
      links: {
        live: "https://chef-s-pal.vercel.app/",
        code: "https://github.com/angelapeters1601/chef-sPal",
      },
      accentColor: "bg-[#47A248]/20",
      icon: <SiMongodb className="text-[#47A248]" />,
      challenges:
        "One of the major challenges was implementing a dynamic filtering system that could categorize recipes by meal type, time of day, and dietary needs while keeping the user experience smooth. Managing global state across the application using Context API, especially for saved recipes and shopping lists, also required careful structuring. Additionally, ensuring that animations and lazy loading worked harmoniously without disrupting performance or user flow was technically demanding. Designing an automated shopping list that accurately reflected each recipe's ingredients posed further complexity.",
      learnings:
        "Through this project, I gained hands-on experience using Context API to manage complex, shared state across multiple components. I also improved my skills in data fetching with both Axios and Fetch API, and learned how to implement performance enhancements using lazy loading and resource splitting. I developed a better understanding of building user-friendly features like automated lists and recipe bookmarking. Most importantly, I became more comfortable creating polished, animated interfaces using Framer Motion and modular, maintainable styles with CSS Modules.",
      features: [
        "Search and filter meals by mealtime, category, and dietary type (vegan/non-vegan)",
        "Save favorite recipes for quick access and reference",
        "Automated shopping list generation with preloaded ingredients",
        "Personal to-do list for meal prep and organization",
        "Responsive and animated UI with Framer Motion and CSS transitions",
        "Global state management with React's Context API",
        "Data fetching using Axios and Fetch API from external recipe sources",
        "Lazy loading of components for optimized performance",
      ],
    },
    {
      id: "portfolio",
      title: "Portfolio",
      description:
        "A personal portfolio site built to showcase my projects, skills, and developer journey. Designed with a focus on responsiveness, accessibility, and smooth user experience.",
      tags: [
        "React.js",
        "JavaScript",
        "Tailwindcss",
        "Hooks",
        "Framer motion",
        "React awesome reveal",
        "React-typewriter",
        "React loading skeleton",
        "Email.js",
        "Three.js",
      ],
      image: MeImg,
      links: {
        live: "https://portfolio-2d4m.vercel.app/",
        code: "https://github.com/angelapeters1601/portfolio",
      },
      accentColor: "bg-[#FFCA28]/20",
      icon: <SiFirebase className="text-[#FFCA28]" />,
      challenges:
        "One of the main challenges I faced while building this portfolio was crafting a cohesive and visually appealing user interface. Choosing the right color palette, ensuring good contrast, and maintaining consistency across sections required several design iterations. Since UI/UX design isn't my primary background, aligning the visual style with a clean developer aesthetic took extra effort and experimentation. Balancing animation, layout structure, and readability without overwhelming the user was also a key design challenge.",
      learnings:
        "Throughout this project, I gained a deeper appreciation for design fundamentals especially around color theory, visual hierarchy, and spacing. I learned how to work more confidently with Tailwind CSS to quickly test and apply layout changes, and how to use animation libraries like Framer Motion to enhance interactivity without cluttering the interface. This project also helped me understand the importance of maintaining brand consistency across pages while still showcasing creativity and personality.",
      features: [
        "Smooth scroll navigation and route-based project pages using React Router",
        "Responsive layout and custom components styled with Tailwind CSS",
        "Framer Motion animations for interactive transitions and section reveals",
        "Project data managed via JSON/JS and dynamically rendered",
        "Theme toggling between dark and light mode",
        "Contact form integration for direct messaging.",
      ],
    },
    {
      id: "jiffyfox",
      title: "JiffyFox",
      description:
        "JiffyFox is a full-featured, scalable service-booking web application designed to connect users with reliable local professionals from handymen and electricians to event support and smart home specialists. Inspired by platforms like TaskRabbit, JiffyFox streamlines the process of finding, hiring, and managing service providers through a beautifully designed, interactive interface.",
      tags: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Material UI",
        "Framer Motion",
        "Supabase",
        "React Beautiful DnD",
        "Chart.js",
        "React-Router-Dom",
        "Vite",
        "Netlify",
      ],
      image: JiffyfoxImg,
      links: {
        live: "https://jiffyfox.com",
        code: "https://github.com/angelapeters1601/jiffyfox",
      },
      accentColor: "bg-[#10B981]/20",
      icon: <SiReact className="text-[#10B981]" />,
      challenges:
        "Designing an intuitive task management interface that works smoothly across desktop and mobile. Ensuring real-time task syncing with Supabase and managing drag-and-drop edge cases. Building dynamic charts that update with user behavior. Managing complex component state and transitions while keeping UI performant and responsive.",
      learnings:
        "Learned how to combine Supabase real-time features with local state management for task syncing. Gained experience using React Beautiful DnD for intuitive task handling. Enhanced knowledge of creating responsive dashboard layouts with Tailwind CSS. Improved animation sequencing using Framer Motion. Understood how to use Chart.js to turn user behavior into insights.",
      features: [
        "Real-time Authentication & User Sessions using Supabase",
        "Role-based Dashboards for both users and administrators",
        "Admin Analytics Panel with bookings, users, and service metrics visualized using Chart.js",
        "Dynamic Routing & Route Protection with React Router",
        "Booking System allowing users to schedule and view services",
        "Live Feedback Notifications using toast pop-ups",
        "Animated transitions using Framer Motion",
        "Modular Architecture for future integration (payments, messaging, notifications)",
        "Mobile-first responsive layout with intuitive UX",
        "Scroll-to-Top Button & Page Sections for improved navigation UX",
        "Secure login and personalized user data management",
        "Clean Git Workflow & GitHub Hosting with organized commits",
      ],
    },
  ];

  const project = projects.find((p) => p.id === id);

  if (!project) return <div>Project not found</div>;

  return (
    <div
      className="min-h-screen overflow-x-hidden mt-20 md:mt-20 bg-gradient-to-br
     from-amber-900 via-black to-amber-900 py-8 px-4 sm:py-15 
     sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal keyframes={customScaleIn} duration={800} triggerOnce>
          <div className="bg-white/10 backdrop-blur-sm border border-amber-800/30 rounded-2xl p-6 sm:p-8 shadow-xl">
            {/* Header */}
            <div className="mb-6 sm:mb-8">
              <Reveal keyframes={customFadeIn} duration={800} triggerOnce>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-amber-100 mb-2 sm:mb-3">
                  {project.title}
                </h1>
              </Reveal>
              <Reveal
                keyframes={customFadeIn}
                duration={800}
                delay={200}
                triggerOnce
              >
                <div className="flex flex-wrap gap-4">
                  {project.links.code && (
                    <a
                      href={project.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm sm:text-base text-amber-300 hover:text-amber-200 transition-colors"
                    >
                      <FaGithub className="mr-2 text-lg" /> Code
                    </a>
                  )}
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm sm:text-base text-amber-300 hover:text-amber-200 transition-colors"
                  >
                    <FaExternalLinkAlt className="mr-2 text-lg" /> Live Demo
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Project content */}
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <Reveal keyframes={customFadeInLeft} duration={800} triggerOnce>
                  <div className="relative overflow-hidden rounded-xl bg-amber-900/10 p-2">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="h-auto w-full object-cover rounded-lg"
                      style={{ minHeight: "280px" }}
                    />
                  </div>
                </Reveal>

                <div className="mt-6">
                  <Reveal
                    keyframes={customFadeInLeft}
                    duration={800}
                    delay={200}
                    triggerOnce
                  >
                    <h2 className="text-xl sm:text-2xl font-bold text-amber-100 mb-3 sm:mb-4 flex items-center">
                      <FaTools className="mr-2 text-amber-300" /> Tech Stack
                    </h2>
                  </Reveal>
                  <Reveal
                    keyframes={customFadeInLeft}
                    duration={800}
                    delay={300}
                    triggerOnce
                  >
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="flex items-center rounded-full bg-amber-900/30 px-2 sm:px-3 py-1 text-xs sm:text-sm text-amber-200"
                        >
                          {tag === "React" && (
                            <FaReact className="mr-1 text-[#61DAFB]" />
                          )}
                          {tag === "Redux Toolkit" && (
                            <SiRedux className="mr-1 text-[#764ABC]" />
                          )}
                          {tag === "Tailwindcss" && (
                            <SiTailwindcss className="mr-1 text-[#38BDF8]" />
                          )}
                          {tag === "Next.js" && (
                            <SiNextdotjs className="mr-1" />
                          )}
                          {tag === "Firebase" && (
                            <SiFirebase className="mr-1 text-[#FFCA28]" />
                          )}
                          {tag === "MongoDB" && (
                            <SiMongodb className="mr-1 text-[#47A248]" />
                          )}
                          {tag === "Node.js" && (
                            <FaNodeJs className="mr-1 text-[#68A063]" />
                          )}
                          {tag === "Figma" && (
                            <FaFigma className="mr-1 text-[#F24E1E]" />
                          )}
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Reveal>
                </div>
              </div>

              <div>
                <div className="mb-6">
                  <Reveal
                    keyframes={customFadeInRight}
                    duration={800}
                    triggerOnce
                  >
                    <h2 className="text-xl sm:text-2xl font-bold text-amber-100 mb-3 sm:mb-4 flex items-center">
                      <MdDescription className="mr-2 text-amber-300" />
                      Description
                    </h2>
                  </Reveal>
                  <Reveal
                    keyframes={customFadeInRight}
                    duration={800}
                    delay={200}
                    triggerOnce
                  >
                    <p className="text-sm sm:text-base text-amber-100/80">
                      {project.description}
                    </p>
                  </Reveal>
                </div>

                <div className="mb-6">
                  <Reveal
                    keyframes={customFadeInRight}
                    duration={800}
                    delay={300}
                    triggerOnce
                  >
                    <h2 className="text-xl sm:text-2xl font-bold text-amber-100 mb-3 sm:mb-4 flex items-center">
                      <MdOutlineFeaturedPlayList className="mr-2 text-amber-300" />
                      Key Features
                    </h2>
                  </Reveal>
                  <Reveal
                    keyframes={customFadeInRight}
                    duration={800}
                    delay={400}
                    triggerOnce
                  >
                    <ul className="space-y-2 sm:space-y-3 pl-5 text-sm sm:text-base text-amber-100/80">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <FaListUl className="mr-2 mt-1 flex-shrink-0 text-amber-300/80" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>

                <div className="space-y-4 sm:space-y-5">
                  <Reveal
                    keyframes={customFadeInRight}
                    duration={800}
                    delay={500}
                    triggerOnce
                  >
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-amber-200 mb-2 sm:mb-3 flex items-center">
                        <FaExclamationTriangle className="mr-2 text-amber-300" />
                        Challenges
                      </h3>
                      <p className="text-sm sm:text-base text-amber-100/80 flex items-start">
                        <FaCode className="mr-2 mt-1 flex-shrink-0 text-amber-300/80" />
                        {project.challenges}
                      </p>
                    </div>
                  </Reveal>
                  <Reveal
                    keyframes={customFadeInRight}
                    duration={800}
                    delay={600}
                    triggerOnce
                  >
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-amber-200 mb-2 sm:mb-3 flex items-center">
                        <FaLightbulb className="mr-2 text-amber-300" />
                        Learnings
                      </h3>
                      <p className="text-sm sm:text-base text-amber-100/80 flex items-start">
                        <FaBookOpen className="mr-2 mt-1 flex-shrink-0 text-amber-300/80" />
                        {project.learnings}
                      </p>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default ProjectDetails;
