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
      
    ],
    technologies: ["Python", " TensorFlow", " Keras", " OpenCV"],
    
  },
  // Games
  {
    id: 7,
    name: "Crimson Remorse",
    type: "Games",
    image: "CrimsonRemorse/menu.png",
    description: "Turn-based strategy game set in medieval times with resource management.",
    cardDescription: "Turn-based medieval strategy with resource and army management.",
    modalDescription: "Design and command your kingdom through seasons, balancing economy, diplomacy, and tactical battles. Built in Unity with custom AI for enemy factions and a modular map system.",
    technologies: ["Unity", "C#", "Blender", "Photoshop"],
    media: [
      "CrimsonRemorse/coming.png",
      "CrimsonRemorse/Trailer1.mp4",
      "CrimsonRemorse/menu.png",
      "CrimsonRemorse/menu.png",
    
    ],
  },
  
  // Web Projects
  {
    id: 13,
    name: "Revive 2000",
    type: "Web Projects",
    image: "/crossedswords.png",
    description: "Full-stack e-commerce solution with payment integration and admin dashboard.",
    cardDescription: "E-commerce app with Stripe payments and admin dashboard.",
    modalDescription: "A production-ready e-commerce platform: product catalog, cart, checkout with Stripe, order management, and an admin dashboard with role-based access. Includes SSR, image optimization, and SEO.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    media: []
  },
  {
    id: 14,
    name: "Portfolio Website",
    type: "Web Projects",
    image: "portfolio/p1.png",
    description: "Modern, responsive portfolio website with smooth animations and dark theme.",
    cardDescription: "Responsive portfolio with elegant dark theme and animations.",
    modalDescription: "A personal portfolio built with modern tooling, focusing on accessibility, performance, and tasteful motion. Implements responsive layouts, lazy-loading, and SEO best practices.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    media: ["portfolio/p1.png", "portfolio/p2.png", "portfolio/p3.png", "portfolio/p4.png", "portfolio/p5.png"]
  },
];

export const getProjectsByType = (type: string): Project[] => {
  return projects.filter(project => project.type === type);
};

export const getAllProjects = (): Project[] => {
  return projects;
};

