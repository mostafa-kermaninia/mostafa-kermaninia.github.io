import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';
import portfolio4 from '@/assets/portfolio-4.jpg';
import portfolio5 from '@/assets/portfolio-5.jpg';

const projects = [
  {
    title: "AI / ML Codes",
    image: portfolio1,
    description: "Machine learning algorithms and AI implementations",
    tags: ["Python", "TensorFlow", "Scikit-learn"],
    link: "https://github.com/mostafa-kermaninia",
  },
  {
    title: "C / C++ Codes",
    image: portfolio2,
    description: "System-level programming and algorithms in C/C++",
    tags: ["C", "C++", "Algorithms"],
    link: "https://github.com/mostafa-kermaninia",
  },
  {
    title: "Computer Vision & Image Processing",
    image: portfolio3,
    description: "Image processing and computer vision projects",
    tags: ["OpenCV", "Python", "Deep Learning"],
    link: "https://github.com/mostafa-kermaninia",
  },
  {
    title: "Quantum Machine Learning",
    image: portfolio4,
    description: "Exploring quantum computing for ML applications",
    tags: ["Qiskit", "Quantum", "ML"],
    link: "https://github.com/mostafa-kermaninia",
  },
  {
    title: "Verilog Hardware Codes",
    image: portfolio5,
    description: "Digital logic design and hardware implementations",
    tags: ["Verilog", "FPGA", "Hardware"],
    link: "https://github.com/mostafa-kermaninia",
  },
];

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading">Portfolio</h2>
          <p className="section-subheading mx-auto">
            Explore my projects and contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group glass-card overflow-hidden hover:shadow-card-hover transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <Button variant="hero" size="sm" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      View Project
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="heroOutline" size="lg" asChild>
            <a href="https://github.com/mostafa-kermaninia" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
