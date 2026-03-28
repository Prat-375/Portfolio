export const dataAnalysisProjects = [
  {
  title: "Lion Vocalization Classification",
  slug: "lion-vocalization-classification",
  category: "data",
  image: "/images/lion_roar.png",
  github: "https://github.com/Prat-375/Audio-Classification-of-Lion-Sounds",
  subtitle:
    "Analyzing lion vocalizations from real audio recordings and comparing machine learning and deep learning approaches for classifying Roar, IRoar, and Grunt sounds.",
  tags: [
    "Audio Analysis",
    "Machine Learning",
    "Deep Learning",
    "Librosa",
    "SVM",
    "LSTM"
  ],
  metrics: [
    { label: "Domain", value: "Bioacoustics" },
    { label: "Classes", value: "Roar, IRoar, Grunt" },
    { label: "Focus", value: "Audio Classification" }
  ],
  sections: [
    {
      type: "text",
      title: "Project Overview",
      content:
        "This project focused on classifying lion vocalizations from real-world wildlife recordings. The main goal was to distinguish between Roar, IRoar, and Grunt sounds by analyzing acoustic patterns and evaluating multiple machine learning and deep learning approaches."
    },
    {
      type: "text",
      title: "Audio Data Exploration",
      content:
        "The raw recordings contained multiple lion vocalizations with varying duration, intensity, and acoustic structure. Initial analysis was performed by inspecting the waveforms of representative sound samples, which helped in understanding how the vocalization classes differ in temporal behavior."
    },
    {
      type: "image",
      image: "/images/sample_sounds_lion.png",
      alt: "Sample lion sound waveforms"
    },
    {
      type: "text",
      title: "Waveform and Spectrogram Overview",
      content:
        "A combined waveform and spectrogram view was used to study how lion sounds evolve over time and across frequency bands. This made it possible to identify repeated vocal bursts, energy concentration, and class-specific sound patterns directly from the recordings."
    },
    {
      type: "image",
      image: "/images/lion_audio_overview.png",
      alt: "Waveform and spectrogram overview of lion audio"
    },
    {
      type: "text",
      title: "Feature Extraction and Representation",
      content:
        "The audio signals were processed using Python-based audio analysis tools to transform raw recordings into structured representations suitable for classification. This step was important for capturing meaningful acoustic information and preparing the data for model training and comparison."
    },
    {
      type: "text",
      title: "Model Experiments",
      content:
        "Multiple classification approaches were explored to understand how well different models can separate lion vocalization classes. The experiments included both classical machine learning methods and deep learning models, allowing a comparison between structured feature-based learning and sequence-based neural approaches."
    },
    {
      type: "text",
      title: "Multi-Class Classification Performance",
      content:
        "The confusion matrix below summarizes the final multi-class classification performance across Roar, IRoar, and Grunt. It highlights how well the model distinguished between the three vocalization classes and where confusion between similar sounds occurred."
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
        "Training and validation curves were used to monitor learning progress, convergence, and generalization. These plots made it easier to evaluate whether performance improvements came from meaningful learning or from overfitting to the training data."
    },
    {
      type: "image",
      image: "/images/lstm_training.png",
      alt: "Training accuracy and loss curves for lion audio classification"
    },
    {
      type: "cards",
      title: "Key Insights",
      items: [
        {
          title: "Audio Patterns Are Distinct",
          content:
            "Waveform and spectral analysis showed that Roar, IRoar, and Grunt differ in both temporal structure and energy distribution."
        },
        {
          title: "Model Comparison Was Valuable",
          content:
            "Comparing classical machine learning methods with deep learning models helped reveal which approaches were most effective for structured wildlife audio data."
        },
        {
          title: "Real Audio Is Challenging",
          content:
            "The project highlighted how variation in recording conditions, noise, and overlapping signal behavior can affect classification quality."
        }
      ]
    },
    {
      type: "text",
      title: "Outcome",
      content:
        "This project strengthened my understanding of bioacoustic data analysis, audio representation, and comparative model evaluation. It also showed how meaningful insights can be extracted from real animal recordings by combining signal analysis with machine learning."
    }
  ]
},
  {
  title: "Urban Sound Classification",
  slug: "urban-sound-classification",
  category: "data",
  image: "/images/urban_sound.png",
  github: "https://github.com/Prat-375/AudioAnalysis-UrbanSound8K",
  subtitle:
    "End-to-end analysis and classification of urban audio using waveform exploration, spectral features, and deep learning models (ANN & LSTM).",
  tags: [
    "Audio Analysis",
    "Deep Learning",
    "UrbanSound8K",
    "Librosa",
    "ANN",
    "LSTM"
  ],
  metrics: [
    { label: "Dataset", value: "UrbanSound8K" },
    { label: "Samples", value: "8732 Audio Clips" },
    { label: "Classes", value: "10 Urban Sounds" }
  ],
  sections: [
    {
      type: "text",
      title: "Project Overview",
      content:
        "This project focused on classifying real-world urban sounds using deep learning techniques. The dataset includes 10 different environmental sound classes such as air conditioner, car horn, children playing, dog bark, drilling, engine idling, gun shot, jackhammer, siren, and street music."
    },

    {
      type: "text",
      title: "Dataset",
      content:
        "The UrbanSound8K dataset contains 8732 labeled audio clips of up to 4 seconds each. The recordings are collected from real-world environments and organized into 10 folds to support reproducible training and evaluation. Metadata for each clip is also provided."
    },

    {
      type: "list",
      title: "Dataset Highlights",
      items: [
        "8732 labeled audio clips",
        "10 urban sound categories",
        "Maximum duration of 4 seconds",
        "Real-world noisy recordings",
        "Predefined 10-fold split",
        "Metadata available in CSV format"
      ]
    },

    // 🔊 WAVEFORM
    {
      type: "text",
      title: "Waveform Analysis",
      content:
        "Initial exploration was performed using waveform visualizations of audio samples from all 10 classes. This helped in understanding differences in amplitude patterns, signal intensity, and temporal structure across different urban sounds."
    },
    {
      type: "image",
      image: "/images/urban_sound_waveshow.png",
      alt: "Combined waveform visualization of urban sound classes"
    },

    // 🌈 SPECTROGRAM
    {
      type: "text",
      title: "Spectral Analysis",
      content:
        "Spectrogram representations were used to analyze how sound energy is distributed across frequencies over time. These visualizations revealed distinctive frequency patterns for different sound categories, which are critical for classification tasks."
    },
    {
      type: "image",
      image: "/images/urban_sound_specshow.png",
      alt: "Combined spectrogram of urban sound classes"
    },

    // 🧠 MODEL SECTION
    {
      type: "text",
      title: "Model Experiments",
      content:
        "To evaluate different learning approaches, both Artificial Neural Networks (ANN) and LSTM-based models were implemented. The goal was to compare how well each model captures patterns in environmental audio data."
    },

    // 📊 ANN
    {
      type: "text",
      title: "ANN Training vs Test Performance",
      content:
        "The ANN model was evaluated using training and test accuracy and loss curves. These plots show how the model learns over time and how well it generalizes to unseen data."
    },
    {
      type: "image",
      image: "/images/ann_performance.png",
      alt: "ANN training and test accuracy and loss"
    },

    // 🔁 LSTM
    {
      type: "text",
      title: "LSTM Optimizer Comparison",
      content:
        "For the LSTM model, multiple optimizers including Adam, SGD, Nadam, RMSprop, RAdam, and Yogi were compared over 100 epochs. Their performance was analyzed using both training and validation accuracy and loss curves to understand convergence behavior and stability."
    },
    {
      type: "image",
      image: "/images/lstm-training-combined.png",
      alt: "LSTM optimizer comparison across training and validation metrics"
    },

    // 💡 INSIGHTS
    {
      type: "cards",
      title: "Key Insights",
      items: [
        {
          title: "Signal Representation Matters",
          content:
            "Waveform and spectrogram analysis helped reveal important differences in temporal and frequency characteristics of urban sounds."
        },
        {
          title: "Model Architecture Matters",
          content:
            "ANN provided a strong baseline, while LSTM improved the ability to capture temporal dependencies in audio signals."
        },
        {
          title: "Optimizer Choice Is Critical",
          content:
            "Different optimizers showed clear differences in convergence speed, stability, and validation performance."
        }
      ]
    },

    {
      type: "text",
      title: "Outcome",
      content:
        "This project provided a complete pipeline from raw audio exploration to deep learning model evaluation. It strengthened my understanding of audio feature representation, model comparison, and real-world environmental sound classification."
    }
  ]
},
  {
  title: "Image Classification with Neural Networks",
  slug: "image-classification-neural-networks",
  category: "data",
  image: "/images/image_analysis.png",
  github: "https://github.com/Prat-375/DeepLearningAssignment/blob/main/Assignment%20_1_MNIST.ipynb",
  subtitle:
    "Built neural networks from scratch to classify handwritten digits and fashion images, with additional experiments to improve model performance.",
  tags: [
    "Deep Learning",
    "Computer Vision",
    "TensorFlow",
    "ANN",
    "MNIST",
    "Fashion MNIST"
  ],
  metrics: [
    { label: "Datasets", value: "MNIST + Fashion MNIST" },
    { label: "Best Accuracy", value: "97%" },
    { label: "Focus", value: "From-Scratch Implementation" }
  ],
  sections: [
    {
      type: "text",
      title: "Project Overview",
      content:
        "This project explores image classification using neural networks implemented from scratch. The work was carried out across two datasets: MNIST for handwritten digits and Fashion MNIST for clothing classification. The goal was to understand how neural networks learn visual features and how model performance changes with dataset complexity."
    },

    {
      type: "text",
      title: "Datasets",
      content:
        "MNIST consists of handwritten digits (0–9), while Fashion MNIST contains 10 clothing categories such as shirts, sneakers, and bags. Both datasets use 28×28 grayscale images, allowing a controlled comparison of model behavior across different levels of classification difficulty."
    },

    {
      type: "list",
      title: "Dataset Highlights",
      items: [
        "Two benchmark datasets: MNIST and Fashion MNIST",
        "28×28 grayscale images",
        "10 classes per dataset",
        "Training and test splits provided",
        "Fashion MNIST introduces higher visual complexity"
      ]
    },

    {
      type: "text",
      title: "Model Architecture",
      content:
        "A feedforward neural network was implemented from scratch using TensorFlow operations. The model included two hidden layers with manually initialized weights and biases. Training was performed using GradientTape, allowing full control over forward and backward propagation."
    },

    {
      type: "list",
      title: "Model Details",
      items: [
        "Input: 784 features (28×28 image)",
        "Hidden Layer 1: 128 neurons",
        "Hidden Layer 2: 256 neurons",
        "Activations: Sigmoid and Tanh",
        "Output: 10 classes (Softmax)",
        "Loss: Cross-Entropy",
        "Optimizer: Stochastic Gradient Descent"
      ]
    },
    {
      type: "text",
      title: "MNIST Baseline Performance",
      content:
        "The model was first trained on MNIST to validate the architecture and training pipeline. The network successfully learned digit representations and achieved strong accuracy, demonstrating that the custom implementation was functioning correctly."
    },
    {
      type: "image",
      image: "/images/mnist-predictions-combined.png",
      alt: "MNIST predictions from neural network"
    },
    {
      type: "text",
      title: "Fashion MNIST Classification",
      content:
        "The same architecture was applied to Fashion MNIST, which is more challenging due to similarities between clothing categories. This experiment highlighted how model performance drops when visual distinctions become more subtle."
    },
    {
      type: "image",
      image: "/images/fashion_mnist_input.png",
      alt: "Fashion MNIST sample images"
    },

    {
      type: "text",
      title: "Fashion MNIST Performance",
      content:
        "The model achieved moderate performance on Fashion MNIST, demonstrating that simple feedforward networks struggle with more complex visual features. This emphasized the importance of model selection for real-world image classification tasks."
    },
    {
      type: "image",
      image: "/images/fashion-predictions-combined.png",
      alt: "Fashion MNIST predictions"
    },
    {
      type: "text",
      title: "Model Experimentation and Improvement",
      content:
        "To improve performance, additional experiments were conducted on the MNIST dataset by modifying hyperparameters such as learning rate, number of neurons, and training steps. Different activation functions and layer configurations were tested to observe their impact on convergence and accuracy."
    },

    {
      type: "text",
      title: "Improved Training Results",
      content:
        "With the updated configuration, the model achieved significantly better performance, reaching approximately 97% test accuracy. The training logs show stable convergence and high accuracy across multiple training steps."
    },

    {
      type: "image",
      image: "/images/mnist-experiment-results.png",
      alt: "Improved MNIST training accuracy and loss after experimentation"
    },

    // 💡 INSIGHTS
    {
      type: "cards",
      title: "Key Insights",
      items: [
        {
          title: "From Scratch Builds Deep Understanding",
          content:
            "Implementing neural networks manually provided a clear understanding of gradients, weight updates, and training dynamics."
        },
        {
          title: "Dataset Complexity Matters",
          content:
            "MNIST is relatively easy due to clear patterns, while Fashion MNIST introduces ambiguity that challenges simple models."
        },
        {
          title: "Hyperparameter Tuning Is Critical",
          content:
            "Adjusting learning rate, architecture, and training steps significantly improved model performance."
        }
      ]
    },

    {
      type: "text",
      title: "Outcome",
      content:
        "This project demonstrates a complete learning pipeline: building neural networks from scratch, evaluating performance across datasets, and improving results through experimentation. It strengthened my understanding of both theoretical and practical aspects of deep learning."
    }
  ]
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