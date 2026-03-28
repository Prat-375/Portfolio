export const dataAnalysisProjects = [
  {
    title: "Lion Vocalization Classification",
    slug: "lion-vocalization-classification",
    category: "data",
    image: "/images/lion_roar.png",
    github: "https://github.com/Prat-375/Audio-Classification-of-Lion-Sounds",
    subtitle:
      "Classifying lion vocalizations such as roars and grunts using audio signal processing and machine learning.",
    tags: ["Audio Analysis", "Machine Learning", "Librosa", "SVM", "CNN", "LSTM"],
    metrics: [
      { label: "Domain", value: "Bioacoustics" },
      { label: "Data Type", value: "Audio Recordings" },
      { label: "Models Used", value: "SVM, CNN, LSTM, BiLSTM" },
    ],
    sections: [
      {
        type: "text",
        title: "Project Overview",
        content:
          "This project focused on classifying lion vocalizations such as Roar, IRoar, and Grunt from recorded audio data. The work involved analyzing long wildlife recordings, extracting meaningful acoustic information, and comparing multiple machine learning approaches."
      },
      {
        type: "image",
        image: "/images/lion_audio_overview.png",
        alt: "Waveform and spectrogram of lion audio recording"
      },
      {
        type: "text",
        title: "Audio Signal Exploration",
        content:
          "To better understand differences between vocalization classes, individual sound samples were examined in the time domain. These examples helped reveal how roar, IRoar, and grunt signals differ in intensity, repetition, and temporal structure."
      },
      {
        type: "image",
        image: "/images/sample_sounds_lion.png",
        alt: "Sample lion sound waveforms"
      },
      {
        type: "text",
        title: "Model Performance",
        content:
          "Multiple machine learning and deep learning models were evaluated on the processed dataset. The confusion matrix below shows the final multi-class classification performance across the main lion vocalization categories."
      },
      {
        type: "image",
        image: "/images/confusion_matrix_multiclass.png",
        alt: "Confusion matrix for lion vocalization classification"
      },
      {
        type: "text",
        title: "Training Behaviour",
        content:
          "Training and validation curves were used to monitor convergence and compare model generalization. These plots helped assess whether performance gains came from meaningful learning or overfitting."
      },
      {
        type: "image",
        image: "/images/lstm_training.png",
        alt: "Training accuracy and loss curves"
      },
      {
        type: "text",
        title: "Key Takeaways",
        content:
          "This project showed that audio preprocessing and class-specific signal patterns strongly influence classification performance. It also highlighted that traditional methods such as SVM can remain highly competitive alongside deep learning approaches on structured acoustic features."
      }
    ],
  },
  {
    title: "Urban Sound Classification",
    slug: "urban-sound-classification",
    category: "data",
    image: "/images/urban_sound.png",
    github: "https://github.com/yourusername/urban-sound-classification",
    sections: [
      {
        type: "text",
        title: "Project Overview",
        content:
          "This project focused on analyzing lion vocalizations using machine learning techniques. The aim was to classify different lion sounds such as roars and grunts from recorded audio data.",
      },
      {
        type: "image",
        image: "/images/lion-overview.jpg",
        alt: "Lion project overview",
      },
      {
        type: "text",
        title: "Data and Feature Extraction",
        content:
          "Audio samples were processed using Librosa, and features such as MFCCs were extracted to prepare the data for model training and evaluation.",
      },
      {
        type: "image",
        image: "/images/lion-mfcc.jpg",
        alt: "MFCC visualization",
      },
      {
        type: "text",
        title: "Models and Results",
        content:
          "Multiple machine learning and deep learning approaches were compared, including SVM, CNN, and LSTM-based models, to evaluate classification performance.",
      },
    ],
  },
  {
    title: "Image Classification",
    slug: "image-classification",
    category: "data",
    image: "/images/image_analysis.png",
    github: "https://github.com/yourusername/lion-project",
    sections: [
      {
        type: "text",
        title: "Project Overview",
        content:
          "This project focused on analyzing lion vocalizations using machine learning techniques. The aim was to classify different lion sounds such as roars and grunts from recorded audio data.",
      },
      {
        type: "image",
        image: "/images/lion-overview.jpg",
        alt: "Lion project overview",
      },
      {
        type: "text",
        title: "Data and Feature Extraction",
        content:
          "Audio samples were processed using Librosa, and features such as MFCCs were extracted to prepare the data for model training and evaluation.",
      },
      {
        type: "image",
        image: "/images/lion-mfcc.jpg",
        alt: "MFCC visualization",
      },
      {
        type: "text",
        title: "Models and Results",
        content:
          "Multiple machine learning and deep learning approaches were compared, including SVM, CNN, and LSTM-based models, to evaluate classification performance.",
      },
    ],
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
    title: "Weather Forecast WebApp",
    slug: "weather-forecast-webapp",
    category: "personal",
    description:
      "An interactive weather application for exploring short-term temperature and sky forecasts by city.",
    longDescription:
      "Built a weather forecast web application using Python, Streamlit, and Plotly to provide city-based forecast insights for the upcoming days. Users can select the forecast range, view temperature trends through interactive charts, and explore sky conditions with weather icons alongside time labels. The project combines API-driven weather data retrieval with a clean visual interface for a better user experience.",
    tech: ["Python", "Streamlit", "Plotly", "Weather API"],
    highlights: [
      "Developed a city-based weather forecast application using Streamlit",
      "Created interactive temperature visualizations with Plotly",
      "Added time-based sky condition display with custom weather icons",
      "Integrated backend weather data retrieval and filtering",
      "Built a clean dashboard-style interface for forecast exploration",
    ],
    image: "images/weather.png",
    github: "https://github.com/Prat-375/Weather-Forecast-Data-Webapp",
    demo: "https://weather-forecast-data-webapp-3hvxvuj7dun6knjitpdss4.streamlit.app/",
  },
];

export const allProjects = [
  ...dataAnalysisProjects,
  ...softwareProjects,
  ...personalProjects,
];