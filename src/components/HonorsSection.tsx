import { Trophy, Medal, Star, Award } from 'lucide-react';

const honors = [
  {
    title: "Top Student",
    description: "Ranked 1st among all Computer Engineering B.Sc students of the 2022 entry cohort",
    detail: "Maintained top rank for 6 consecutive semesters",
    icon: Trophy,
    color: "from-amber-500 to-yellow-500",
  },
  {
    title: "National University Entrance Exam",
    description: "Ranked in the Top 0.6% in Nation-wide Iranian University Entrance Exam",
    detail: "Summer 2022",
    icon: Star,
    color: "from-primary to-teal-400",
  },
  {
    title: "Physics Olympiad",
    description: "Silver Medal at Iranian National Olympiad in Physics",
    detail: "Summer 2021",
    icon: Medal,
    color: "from-slate-400 to-slate-300",
  },
];

export const HonorsSection = () => {
  return (
    <section id="honors" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading">Honors & Awards</h2>
          <p className="section-subheading mx-auto">
            Recognition of academic excellence and achievements
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {honors.map((honor, index) => (
            <div 
              key={index}
              className="group glass-card p-6 text-center hover:shadow-card-hover transition-all duration-500 relative overflow-hidden"
            >
              {/* Background glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${honor.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Icon with gradient background */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${honor.color} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <honor.icon size={32} className="text-white" />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2">
                  {honor.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                  {honor.description}
                </p>
                
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  {honor.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
