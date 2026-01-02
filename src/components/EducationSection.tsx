import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: "Bachelor of Computer Engineering",
    institution: "University of Tehran",
    location: "Tehran, Iran",
    period: "Sept 2022 – Present",
    description: "Currently studying Computer Engineering with focus on AI and Machine Learning.",
    isCurrent: true,
  },
  {
    degree: "Diploma in Mathematics and Physics",
    institution: "National Organization for Development of Exceptional Talents (NODET)",
    location: "Karaj, Iran",
    period: "Sept 2018 – May 2022",
    description: "Completed high school education with focus on Mathematics and Physics.",
    isCurrent: false,
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading">Education</h2>
          <p className="section-subheading mx-auto">
            My academic journey and qualifications
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

            {education.map((edu, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-glow -translate-x-1/2 mt-8" />

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="glass-card p-6 hover:shadow-card-hover transition-shadow duration-300">
                    {edu.isCurrent && (
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                        Current
                      </span>
                    )}
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {edu.degree}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-primary font-medium mb-2">
                      <GraduationCap size={16} />
                      <span>{edu.institution}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <MapPin size={14} />
                      <span>{edu.location}</span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
