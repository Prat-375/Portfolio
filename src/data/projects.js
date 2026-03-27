export const dataAnalysisProjects = [
  {
    title: "Lion Vocalization Classification using Machine Learning",
    description:
      "Master’s thesis project focused on classifying lion vocalizations such as roars and grunts from real wildlife audio recordings. The workflow included audio preprocessing, feature extraction, manual labeling, and model comparison.",
    tech: ["Python", "Librosa", "NumPy", "Scikit-learn", "TensorFlow", "Pandas"],
    github: "#",
    demo: "#",
    category: "data",
  },
  {
    title: "Sales Data Analysis Dashboard",
    description:
      "Data analysis project built to explore sales trends, category performance, and key business KPIs. The project focused on transforming raw data into clear insights through analysis and dashboard-style reporting.",
    tech: ["Python", "Pandas", "SQL", "Matplotlib", "Power BI"],
    github: "#",
    demo: "#",
    category: "data",
  },
  {
    title: "Customer Churn Analysis",
    description:
      "Analytical project to identify patterns behind customer churn and highlight factors influencing retention. Included data cleaning, exploratory analysis, feature evaluation, and business-oriented interpretation of results.",
    tech: ["Python", "Pandas", "Scikit-learn", "SQL", "Jupyter Notebook"],
    github: "#",
    demo: "#",
    category: "data",
  },
];

export const softwareProjects = [
  {
    title: "Portfolio Website",
    slug: "portfolio",
    category: "software",
    description:
      "A responsive portfolio website built with React and React Router",
    longDescription:
      "A multi-page portfolio website built using React and React Router. The project demonstrates component-based architecture, client-side routing, and responsive design principles. It serves as an online resume and showcase of projects.",
    tech: ["React", "JavaScript", "CSS", "React Router", "Vite"],
    highlights: [
      "Built as a multi-page React application",
      "Used reusable components for clean structure",
      "Designed for portfolio and resume sharing",
      "Deployed online for live access",
    ],
    image: "images/portfolio.png",
    github: "https://github.com/Prat-375/portfolio",
    demo: "https://portfolio-sandy-seven-vacokmuqoo.vercel.app/",
  },
  {
    title: "Green Basket",
    slug: "green-basket",
    category: "software",
    description:
      "A React-based web application for browsing products and managing a shopping cart.",
    longDescription:
      "A React-based web application for browsing products, viewing product details, and managing a shopping cart. The project demonstrates routing, state management, and component-based architecture.",
    tech: ["React", "JavaScript", "CSS", "React Router", "Context API"],
    highlights: [
      "Implemented product listing and product detail pages",
      "Used React Router for navigation",
      "Built cart functionality using shared state",
      "Created a scalable component-based structure",
    ],
    image: "images/green-basket.png",
    github: "https://github.com/Prat-375/Green-Basket",
    demo: "https://green-basket-three.vercel.app/",
  },
  {
    title: "ThinkBoard",
    slug: "think-board",
    category: "software",
    description:
      "A full-stack web application for creating, updating, and managing notes.",
    longDescription:
      "A full-stack web application for creating, updating, and managing notes. The project demonstrates complete CRUD functionality with frontend-backend integration, showcasing the interaction between frontend and backend components.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
    highlights: [
      "Built full CRUD operations for notes management",
      "Developed REST APIs with Node.js and Express",
      "Integrated MongoDB for data persistence",
      "Connected frontend and backend for end-to-end app flow",
    ],
    image: "images/think-board.png",
    github: "https://github.com/Prat-375/ThinkBoard",
    demo: "https://think-board-alpha.vercel.app/",
  },
];

export const personalProjects = [
  {
    title: "AI Chatbot (LangChain + Gemini)",
    slug: "ai-chatbot",
    category: "personal",
    description:
      "An AI-powered chatbot that provides contextual conversations using Google Gemini and LangChain.",
    longDescription:
      "Developed an intelligent chatbot using LangChain and Google Gemini API to enable context-aware conversations. Implemented prompt engineering and message history handling to simulate human-like responses. Designed an interactive user interface using Gradio and deployed the application on Hugging Face Spaces for real-time access.",
    tech: ["Python", "LangChain", "Google Gemini API", "Gradio", "LLM"],
    highlights: [
      "Built context-aware chatbot using LangChain message history",
      "Integrated Google Gemini API for real-time AI responses",
      "Applied prompt engineering for personality-driven responses",
      "Designed interactive UI using Gradio",
      "Deployed live on Hugging Face Spaces",
    ],
    image: "images/chatbot.png",
    github: "https://github.com/Prat-375/Chatbot-Prateek",
    demo: "https://huggingface.co/spaces/prateekChetan/chatbot_prateek",
  },
  {
    title: "Todo WebApp",
    slug: "todo-webapp",
    category: "personal",
    description:
      "A simple productivity web app for creating, tracking, and managing daily tasks.",
    longDescription:
      "Developed a task management web application using Python and Streamlit to help users organize daily activities. Implemented features to add, display, and remove todos with persistent file-based storage. Designed a clean and interactive interface for quick task updates and improved personal productivity.",
    tech: ["Python", "Streamlit", "File Handling"],
    highlights: [
      "Built an interactive task management interface using Streamlit",
      "Implemented add and remove functionality for todos",
      "Used file handling for persistent task storage",
      "Managed application state with Streamlit session state",
      "Designed a simple productivity-focused user experience",
    ],
    image: "images/todos.png",
    github: "https://github.com/Prat-375/todo_webapp",
    demo: "https://prat-375-todo-webapp-web-ksvcxa.streamlit.app/",
  },
  {
    title: "Mini Data Tools and Experiments",
    description:
      "Small hands-on projects created to test new ideas, explore tools, and build practical understanding through quick implementation and experimentation.",
    category: "personal",
    tech: ["Python", "APIs", "React", "SQL"],
    github: "#",
    demo: "#",
  },
];

export const allProjects = [
  ...dataAnalysisProjects,
  ...softwareProjects,
  ...personalProjects,
];