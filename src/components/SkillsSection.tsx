import { useEffect, useState, useRef } from 'react';

const technicalSkills = [
  { name: 'Python', level: 95 },
  { name: 'C/C++', level: 95 },
  { name: 'Jupyter Notebook', level: 96 },
  { name: 'Matlab', level: 90 },
  { name: 'Data Science Tools', level: 90 },
  { name: 'System Verilog', level: 85 },
  { name: 'LaTeX', level: 75 },
  { name: 'HTML/CSS/JS', level: 70 },
];

const softSkills = [
  { name: 'Teamwork & Leadership', level: 97 },
  { name: 'Teaching & Communication', level: 90 },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setWidth(level), delay);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-foreground">{name}</span>
        <span className="text-primary font-semibold">{level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-bar-fill" 
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading">Skills</h2>
          <p className="section-subheading mx-auto">
            Technical expertise and professional competencies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Technical Skills */}
          <div className="glass-card p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Technical Skills
            </h3>
            {technicalSkills.map((skill, index) => (
              <SkillBar 
                key={skill.name} 
                name={skill.name} 
                level={skill.level} 
                delay={index * 100}
              />
            ))}
          </div>

          {/* Soft Skills */}
          <div className="glass-card p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Soft Skills
            </h3>
            {softSkills.map((skill, index) => (
              <SkillBar 
                key={skill.name} 
                name={skill.name} 
                level={skill.level} 
                delay={index * 100}
              />
            ))}

            {/* Additional Info */}
            <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/10">
              <h4 className="font-semibold text-foreground mb-3">Areas of Interest</h4>
              <div className="flex flex-wrap gap-2">
                {['Artificial Intelligence', 'Machine Learning', 'Data Science', 'Computer Vision', 'Quantum Computing'].map((interest) => (
                  <span 
                    key={interest}
                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
