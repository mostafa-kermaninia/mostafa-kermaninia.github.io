import { Code, Database, Globe, Brain, Cpu, BookOpen } from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "C/C++", "Java", "JavaScript", "SQL", "MATLAB", "Verilog"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Distributed Systems & Databases",
    icon: Database,
    skills: ["HBase", "ClickHouse", "PostgreSQL", "MongoDB", "ElasticSearch", "Memcached", "PuppyGraph"],
    color: "from-emerald-500 to-green-500",
  },
  {
    title: "Web Development & DevOps",
    icon: Globe,
    skills: ["Next.js", "HTML/CSS", "Supabase", "Prometheus", "Git", "Trello", "LaTeX"],
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Machine Learning",
    icon: Brain,
    skills: ["TensorFlow", "scikit-learn", "Pandas", "NumPy", "Matplotlib", "Deep Learning", "Computer Vision"],
    color: "from-rose-500 to-pink-500",
  },
];

const researchInterests = [
  {
    title: "Scalable & Dependable Distributed Systems",
    description: "Interested in the architectural challenges of building robust, high-throughput decentralized platforms. My hands-on experience scaling Web3 infrastructure (ONTON) motivates my interest in optimizing reliability and performance in large-scale networks.",
    icon: Cpu,
  },
  {
    title: "Machine Learning in Dynamic Environments",
    description: "Leveraging a strong statistical foundation to apply techniques like Reinforcement Learning and Deep Learning to complex, interactive systems—from optimizing game agents to developing real-time anti-cheat security mechanisms.",
    icon: Brain,
  },
  {
    title: "Computational Social Science & HCI",
    description: "Utilizing large-scale data analysis to understand user behavior within social networks and gaming platforms. Interested in designing data-driven incentive mechanisms and improving user interaction in complex sociotechnical systems.",
    icon: BookOpen,
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading">Skills & Expertise</h2>
          <p className="section-subheading mx-auto">
            Technical proficiencies and research interests
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="glass-card p-6 group hover:shadow-card-hover transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full bg-secondary/80 text-foreground font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Research Interests */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="gradient-text">Research Interests</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {researchInterests.map((interest, index) => (
              <div 
                key={index}
                className="glass-card p-6 hover:shadow-card-hover transition-all duration-500 group"
              >
                <div className="p-3 rounded-xl bg-primary/10 inline-block mb-4 group-hover:bg-primary/20 transition-colors">
                  <interest.icon size={24} className="text-primary" />
                </div>
                
                <h4 className="font-semibold text-foreground mb-3 leading-tight">
                  {interest.title}
                </h4>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
