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
    title: "Interview Workflow Automation",
    description:
      "Process automation project designed to streamline candidate communication and tracking using forms, spreadsheet updates, and automated email notifications.",
    tech: ["Power Automate", "Excel", "Forms", "Outlook"],
    github: "#",
    demo: "#",
    category: "personal",
  },
  {
    title: "DevOps Automation Utilities",
    description:
      "Collection of automation-oriented tasks and environment setup work focused on deployment support, Linux administration, and configuration management.",
    category: "personal",
    tech: ["Ansible", "Docker", "Linux", "Git"],
    github: "#",
    demo: "#",
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