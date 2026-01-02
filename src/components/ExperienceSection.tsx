import { Briefcase, Calendar, MapPin, ExternalLink, Rocket, Users, TrendingUp } from 'lucide-react';

const experiences = [
  {
    title: "Co-Founder & Executive Manager",
    organization: "ONTON",
    subtitle: "Web3 Community Activation Layer on TON",
    location: "Remote",
    period: "Nov 2025 – Present",
    description: "Leading executive operations and strategic initiatives for a major Web3 platform on TON blockchain.",
    highlights: [
      "Directing technical infrastructure strategy",
      "Developing scalable monetization models through large-scale ticketed events",
      "Driving community revitalization strategies for over 900K users",
    ],
    isCurrent: true,
    isEntrepreneurial: true,
  },
];

const stats = [
  { label: "Users", value: "900K+", icon: Users },
  { label: "Platform", value: "TON Blockchain", icon: Rocket },
  { label: "Role", value: "Co-Founder", icon: TrendingUp },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading">Professional Experience</h2>
          <p className="section-subheading mx-auto">
            Entrepreneurial ventures and professional contributions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="glass-card p-8 relative overflow-hidden group hover:shadow-card-hover transition-all duration-500"
            >
              {/* Background decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {exp.isCurrent && (
                        <span className="px-3 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded-full">
                          Current
                        </span>
                      )}
                      {exp.isEntrepreneurial && (
                        <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-accent to-primary text-white rounded-full">
                          Entrepreneurial
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {exp.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-xl font-semibold gradient-text mb-1">
                      <Briefcase size={20} />
                      <span>{exp.organization}</span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm">
                      {exp.subtitle}
                    </p>
                  </div>

                  {/* Period and Location */}
                  <div className="text-right">
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-1 justify-end">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground justify-end">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className="space-y-3 mb-6">
                  {exp.highlights.map((highlight, i) => (
                    <div 
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/50">
                  {stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <stat.icon size={20} className="text-primary mx-auto mb-2" />
                      <p className="font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* LinkedIn Link */}
          <div className="text-center mt-8">
            <a 
              href="https://www.linkedin.com/in/mostafakermaninia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors"
            >
              View Full Profile on LinkedIn
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
