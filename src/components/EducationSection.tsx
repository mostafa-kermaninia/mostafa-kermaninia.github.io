import { GraduationCap, Calendar, MapPin, Award, TrendingUp } from 'lucide-react';

const education = [
  {
    degree: "B.Sc. in Computer Engineering",
    institution: "School of Electrical and Computer Engineering, University of Tehran",
    location: "Tehran, Iran",
    period: "Sept 2022 – Present",
    gpa: "19.76/20",
    highlights: [
      "Ranked 1st among all Computer Engineering B.Sc students",
      "Maintained top rank for 6 consecutive semesters",
    ],
    isCurrent: true,
  },
  {
    degree: "Diploma in Mathematics and Physics",
    institution: "National Organization for Development of Exceptional Talents (NODET)",
    location: "Karaj, Iran",
    period: "Sept 2018 – May 2022",
    gpa: "19.90/20",
    highlights: [
      "Silver Medal at Iranian National Olympiad in Physics (2021)",
    ],
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
            Academic excellence and continuous growth
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="relative glass-card p-8 overflow-hidden group hover:shadow-card-hover transition-all duration-500"
              >
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      {edu.isCurrent && (
                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full mb-3 animate-pulse">
                          Currently Enrolled
                        </span>
                      )}
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-semibold text-lg mb-2">
                        <GraduationCap size={20} />
                        <span>{edu.institution}</span>
                      </div>
                    </div>

                    {/* GPA Badge */}
                    <div className="flex flex-col items-center p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                      <TrendingUp size={20} className="text-primary mb-1" />
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">GPA</span>
                      <span className="text-2xl font-bold gradient-text">{edu.gpa}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  {edu.highlights.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-border/50">
                      <div className="flex flex-wrap gap-3">
                        {edu.highlights.map((highlight, i) => (
                          <div 
                            key={i}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/10 text-sm"
                          >
                            <Award size={14} className="text-accent shrink-0" />
                            <span className="text-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
