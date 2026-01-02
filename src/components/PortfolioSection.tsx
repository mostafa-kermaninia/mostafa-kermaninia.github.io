import { ExternalLink, Github, Code, Brain, Database, Cpu, Eye, Bot } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

const projects = [
  {
    title: "Speaker ID and Gender Classification",
    description: "Machine learning project for speaker identification, gender classification, and voice clustering using audio feature extraction and models like SVM, KNN, XGBoost.",
    tags: ["Python", "ML", "Audio Processing"],
    github: "https://github.com/mostafa-kermaninia",
    icon: Brain,
    category: "ml",
  },
  {
    title: "RL, RNN, and Search Algorithms",
    description: "Implemented Deep Q-Learning (DQN), RNN/LSTMs, and foundational search algorithms (A*, Minimax, BFS/DFS).",
    tags: ["Deep Learning", "RL", "Search"],
    github: "https://github.com/mostafa-kermaninia",
    icon: Bot,
    category: "ml",
  },
  {
    title: "Quantum NNs and Unsupervised Learning",
    description: "Compared unsupervised (K-means, DBSCAN) and supervised (DT, RF) methods; built a foundational Quantum Neural Network.",
    tags: ["Quantum", "ML", "Clustering"],
    github: "https://github.com/mostafa-kermaninia",
    icon: Cpu,
    category: "ml",
  },
  {
    title: "Deep Learning Model Initialization",
    description: "Xavier Glorot and Kaiming He initialization schemes comparison based on their original papers.",
    tags: ["Deep Learning", "Research"],
    github: "https://github.com/mostafa-kermaninia",
    icon: Brain,
    category: "ml",
  },
  {
    title: "Web Data Analyst",
    description: "Connect web socket to a website, receive and analyze its data and save them in MongoDB.",
    tags: ["MongoDB", "Python", "WebSocket"],
    github: "https://github.com/mostafa-kermaninia",
    icon: Database,
    category: "systems",
  },
  {
    title: "Steganography And Classification",
    description: "Developed algorithms for image steganography, IC recognition in PCBs, and ML-based diabetes prediction.",
    tags: ["MATLAB", "Image Processing", "ML"],
    github: "https://github.com/mostafa-kermaninia",
    icon: Eye,
    category: "vision",
  },
  {
    title: "Pretrained CNNs and GAN Implementation",
    description: "VGG16 and ResNet50 pre-trained CNNs with and without data augmentation. Created a DCGAN for CIFAR-10 dataset.",
    tags: ["CNN", "GAN", "Deep Learning"],
    github: "https://github.com/mostafa-kermaninia",
    icon: Brain,
    category: "ml",
  },
  {
    title: "License Plate Detection",
    description: "Identified numbers and letters on license plates in English and Farsi from video, calculating average car speed.",
    tags: ["MATLAB", "Computer Vision", "OCR"],
    github: "https://github.com/mostafa-kermaninia",
    icon: Eye,
    category: "vision",
  },
  {
    title: "XV6 System Projects",
    description: "Five-part OS project: Kernel Basics, Syscall Development, Process Scheduling, Threading Mechanisms, and Memory Management.",
    tags: ["C", "Assembly", "Operating Systems"],
    github: "https://github.com/mostafa-kermaninia",
    icon: Cpu,
    category: "systems",
    multiPart: true,
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "ml", label: "Machine Learning" },
  { id: "vision", label: "Computer Vision" },
  { id: "systems", label: "Systems" },
];

export const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading">Projects</h2>
          <p className="section-subheading mx-auto">
            A showcase of my technical projects and implementations
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="group glass-card p-6 hover:shadow-card-hover transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                  <project.icon size={24} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors leading-tight">
                    {project.title}
                  </h3>
                  {project.multiPart && (
                    <span className="text-xs text-accent font-medium">5-Part Project</span>
                  )}
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-2.5 py-1 text-xs rounded-full bg-secondary text-foreground font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline mt-auto"
              >
                <Github size={16} />
                View on GitHub
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="heroOutline" size="lg" asChild>
            <a href="https://github.com/mostafa-kermaninia?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
              Explore All Repositories
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
