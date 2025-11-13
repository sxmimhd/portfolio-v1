export interface Project {
  id: number;
  name: string;
  type: 'AI Projects' | 'Games' | 'Web Projects';
  image: string;
  description: string; // legacy/general description
  cardDescription?: string; // shorter text for card
  modalDescription?: string; // longer text for modal
  media?: string[]; // optional list of media (images/videos) for modal thumbnails
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  // AI Projects
  {
    id: 1,
    name: "Neural Network Image Classifier",
    type: "AI Projects",
    image: "/crossedswords.png",
    description: "Advanced deep learning model for image classification using TensorFlow and Python hhhhhhh hhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhh hhhhhhhhhhhhhhh hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhh hhhhh.",
    cardDescription: "Image classifier built with TensorFlow and Python. High accuracy on benchmark datasets.",
    modalDescription: "This project implements a convolutional neural network for image classification using TensorFlow and Keras. It includes data augmentation, transfer learning, training/validation pipelines, and evaluation with confusion matrices and ROC curves. The model is packaged with a minimal API for inference.",
    media: [
      "/crossedswords.png",
      "/crossedswords.png",
      "/crossedswords.png",
      "/crossedswords.png",
      "/crossedswords.png",
    ],
    technologies: ["Python", " TensorFlow", " Keras", " OpenCV"],
    
  },
  {
    id: 2,
    name: "ChatGPT API Integration",
    type: "AI Projects",
    image: "/crossedswords.png",
    description: "Custom chatbot implementation using OpenAI's GPT API with web interface.",
    cardDescription: "Custom chatbot using OpenAI's API with a sleek web UI.",
    modalDescription: "A full-stack chatbot that streams responses from the OpenAI API, supports conversation history, system prompts, and per-user rate limits. The frontend features a responsive UI with markdown rendering and code highlighting.",
    technologies: ["JavaScript", "Node.js", "OpenAI API", "React"],
    githubUrl: "https://github.com/samym/chatgpt-integration",
    liveUrl: "https://ai-chatbot-demo.com"
  },
  {
    id: 3,
    name: "Computer Vision Object Detection",
    type: "AI Projects",
    image: "/crossedswords.png",
    description: "Real-time object detection system using YOLO and OpenCV for video processing.",
    technologies: ["Python", "YOLO", "OpenCV", "Flask"],
    githubUrl: "https://github.com/samym/object-detection",
    liveUrl: "https://object-detection-demo.com"
  },
  {
    id: 4,
    name: "Sentiment Analysis API",
    type: "AI Projects",
    image: "/crossedswords.png",
    description: "Machine learning API for analyzing sentiment in text data with high accuracy.",
    technologies: ["Python", "scikit-learn", "NLTK", "FastAPI"],
    githubUrl: "https://github.com/samym/sentiment-analysis",
    liveUrl: "https://sentiment-api-demo.com"
  },
  {
    id: 5,
    name: "Recommendation Engine",
    type: "AI Projects",
    image: "/crossedswords.png",
    description: "Collaborative filtering recommendation system for e-commerce platforms.",
    technologies: ["Python", "Pandas", "NumPy", "Django"],
    githubUrl: "https://github.com/samym/recommendation-engine",
    liveUrl: "https://recommendation-demo.com"
  },
  

  // Games
  {
    id: 7,
    name: "Crimson Remorse",
    type: "Games",
    image: "/menu.png",
    description: "Turn-based strategy game set in medieval times with resource management.",
    cardDescription: "Turn-based medieval strategy with resource and army management.",
    modalDescription: "Design and command your kingdom through seasons, balancing economy, diplomacy, and tactical battles. Built in Unity with custom AI for enemy factions and a modular map system.",
    technologies: ["Unity", "C#", "Blender", "Photoshop"],
    media: [
      "/coming.png",
      "/Trailer1.mp4",
      "/menu.png",
      "/menu.png",
      "/menu.png",
    ],
  },
  {
    id: 8,
    name: "Space Adventure RPG",
    type: "Games",
    image: "/crossedswords.png",
    description: "Epic space exploration RPG with character progression and story-driven gameplay.",
    cardDescription: "Story-driven space RPG with exploration and progression.",
    modalDescription: "Explore a handcrafted galaxy with quests, ship upgrades, and tactical combat. Implemented in Unreal Engine with blueprint-driven UI and C++ gameplay systems.",
    technologies: ["Unreal Engine", "C++", "Blueprint", "Maya"],
    githubUrl: "https://github.com/samym/space-rpg",
    liveUrl: "https://space-rpg-game.com"
  },
  {
    id: 9,
    name: "Puzzle Platformer",
    type: "Games",
    image: "/crossedswords.png",
    description: "Challenging puzzle platformer with unique mechanics and beautiful pixel art.",
    technologies: ["Godot", "GDScript", "Aseprite", "Audacity"],
    githubUrl: "https://github.com/samym/puzzle-platformer",
    liveUrl: "https://puzzle-platformer-game.com"
  },
  {
    id: 10,
    name: "Racing Simulator",
    type: "Games",
    image: "/crossedswords.png",
    description: "Realistic racing simulator with physics-based driving mechanics.",
    technologies: ["Unity", "C#", "Houdini", "Substance Painter"],
    githubUrl: "https://github.com/samym/racing-simulator",
    liveUrl: "https://racing-simulator-game.com"
  },
  {
    id: 11,
    name: "Fantasy Card Game",
    type: "Games",
    image: "/crossedswords.png",
    description: "Digital card game with deck building and strategic combat mechanics.",
    technologies: ["React", "TypeScript", "Node.js", "Socket.io"],
    githubUrl: "https://github.com/samym/fantasy-cards",
    liveUrl: "https://fantasy-card-game.com"
  },
  {
    id: 12,
    name: "Retro Arcade Collection",
    type: "Games",
    image: "/crossedswords.png",
    description: "Collection of classic arcade games reimagined with modern graphics.",
    technologies: ["JavaScript", "HTML5 Canvas", "Web Audio API", "CSS3"],
    githubUrl: "https://github.com/samym/retro-arcade",
    liveUrl: "https://retro-arcade-collection.com"
  },

  // Web Projects
  {
    id: 13,
    name: "E-commerce Platform",
    type: "Web Projects",
    image: "/crossedswords.png",
    description: "Full-stack e-commerce solution with payment integration and admin dashboard.",
    cardDescription: "E-commerce app with Stripe payments and admin dashboard.",
    modalDescription: "A production-ready e-commerce platform: product catalog, cart, checkout with Stripe, order management, and an admin dashboard with role-based access. Includes SSR, image optimization, and SEO.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/samym/ecommerce-platform",
    liveUrl: "https://ecommerce-platform-demo.com"
  },
  {
    id: 14,
    name: "Portfolio Website",
    type: "Web Projects",
    image: "/crossedswords.png",
    description: "Modern, responsive portfolio website with smooth animations and dark theme.",
    cardDescription: "Responsive portfolio with elegant dark theme and animations.",
    modalDescription: "A personal portfolio built with modern tooling, focusing on accessibility, performance, and tasteful motion. Implements responsive layouts, lazy-loading, and SEO best practices.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/samym/portfolio-website",
    liveUrl: "https://portfolio-website-demo.com"
  },
  {
    id: 15,
    name: "Task Management App",
    type: "Web Projects",
    image: "/crossedswords.png",
    description: "Collaborative task management application with real-time updates and team features.",
    technologies: ["Vue.js", "Express.js", "PostgreSQL", "Socket.io"],
    githubUrl: "https://github.com/samym/task-manager",
    liveUrl: "https://task-manager-app.com"
  },
  
];

export const getProjectsByType = (type: string): Project[] => {
  return projects.filter(project => project.type === type);
};

export const getAllProjects = (): Project[] => {
  return projects;
};

