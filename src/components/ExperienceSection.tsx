import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: "Teaching Assistant",
    organization: "Machine Learning, University of Tehran",
    location: "Tehran, Iran",
    period: "Sept 2024 - Present",
    description: "Assisting in lectures, lab sessions, mentoring students, and supporting course material preparation under the supervision of Prof. Mostafa Tavassolipour and Prof. Mohammadreza Abolghasemi Dehaqani.",
    isCurrent: true,
  },
  {
    title: "Teaching Assistant",
    organization: "Machines and Language Theory, University of Tehran",
    location: "Tehran, Iran",
    period: "Sept 2024 – Present",
    description: "Supporting course instruction and clarifying theoretical concepts in machines and language theory under the guidance of Prof. Hassan Mousavi.",
    isCurrent: true,
  },
  {
    title: "Core Member",
    organization: "ACM Student Chapter, University of Tehran",
    location: "Tehran, Iran",
    period: "July 2024 – Present",
    description: "Coordinating collaborative projects and organizing programming competitions (including ICPC) to foster innovation and technical skill development.",
    isCurrent: true,
  },
  {
    title: "Teaching Assistant",
    organization: "Probability and Statistics, University of Tehran",
    location: "Tehran, Iran",
    period: "July 2024 – Feb 2025",
    description: "Assisting with lectures, tutorials, and exam preparations under the supervision of Prof. Abdol‑Hossein Vahabie and Prof. Mostafa Tavassolipour.",
    isCurrent: false,
  },
  {
    title: "Teaching Laboratory Assistant",
    organization: "Introduction to Computing Systems and Programming, University of Tehran",
    location: "Tehran, Iran",
    period: "Sept 2023 – Feb 2025",
    description: "Facilitating lab sessions, guiding students in hands-on projects, and ensuring practical understanding of computing systems under the supervision of Prof. Hadi Moradi and Prof. Mahmoud Reza Hashemi.",
    isCurrent: false,
  },
  {
    title: "Teaching Assistant",
    organization: "Fundamentals of Programming, University of Tehran",
    location: "Tehran, Iran",
    period: "Jan 2024 – July 2024",
    description: "Supporting theoretical lectures and practical lab sessions, and mentoring students in programming under the supervision of Prof. Mohammad Javad Dousti.",
    isCurrent: false,
  },
  {
    title: "Teaching Assistant",
    organization: "Discrete Mathematics, University of Tehran",
    location: "Tehran, Iran",
    period: "Jan 2024 – July 2024",
    description: "Clarifying complex concepts through lectures, tutorials, and one-on-one mentoring under the supervision of Prof. Siamak Mohammadi.",
    isCurrent: false,
  },
  {
    title: "Data Collector",
    organization: "Iran's National Elites Foundation",
    location: "Tehran, Iran",
    period: "2023",
    description: "Collected and analyzed data to support research projects and strategic initiatives for talent development.",
    isCurrent: false,
  },
  {
    title: "Physics Olympiad Teacher",
    organization: "National Organization for Development of Exceptional Talents",
    location: "Tehran, Iran",
    period: "2020 – 2023",
    description: "Taught advanced mathematics and physics to high school students, preparing them for national Olympiad competitions.",
    isCurrent: false,
  },
  {
    title: "Data Analyst",
    organization: "National Organization for Development of Exceptional Talents",
    location: "Tehran, Iran",
    period: "2020 – 2021",
    description: "Analyzed academic and performance data to support decision-making and enhance student outcomes in competitive examinations.",
    isCurrent: false,
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading">Experience</h2>
          <p className="section-subheading mx-auto">
            My professional journey and contributions
          </p>
          <a 
            href="https://www.linkedin.com/in/mostafakermaninia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline mt-4"
          >
            View LinkedIn Profile <ExternalLink size={16} />
          </a>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-border" />

            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12 md:pl-20 pb-10 last:pb-0">
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-8 w-3 h-3 rounded-full -translate-x-1/2 mt-2 ${
                  exp.isCurrent ? 'bg-primary shadow-glow' : 'bg-muted-foreground'
                }`} />

                <div className="glass-card p-6 hover:shadow-card-hover transition-all duration-300">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {exp.isCurrent && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        Current
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-1 flex items-center gap-2">
                    <Briefcase size={18} className="text-primary" />
                    {exp.title}
                  </h3>
                  
                  <p className="text-primary font-medium mb-1">{exp.organization}</p>
                  
                  <p className="text-sm text-muted-foreground flex items-center gap-1 mb-3">
                    <MapPin size={12} />
                    {exp.location}
                  </p>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
