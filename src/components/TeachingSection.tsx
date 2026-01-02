import { BookOpen, Calendar, Users, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const teachingExperiences = [
  {
    course: "Engineering Probability and Statistics",
    role: "Chief Teaching Assistant",
    period: "July 2025 – Present",
    supervisors: "Prof. Abdol-Hossein Vahabie and Prof. Behnam Bahrak",
    description: "Managed and coordinated TA activities under joint supervision.",
    isCurrent: true,
    isLeadership: true,
  },
  {
    course: "Machine Learning",
    role: "Teaching Assistant",
    period: "Sept 2024 – Present",
    supervisors: "Prof. B. Najjar Araabi, Dr. M. Abolghasemi, & Dr. M. Tavassolipour",
    description: "Serving as Final Project TA for joint UGrad/Grad course; previously designed and graded the SVM assignment for Grad course.",
    isCurrent: true,
    isLeadership: false,
  },
  {
    course: "Compiler and Programming Languages (PLC)",
    role: "Teaching Assistant",
    period: "Sept 2025 – Present",
    supervisors: "Dr. Fatemeh Ghassemi Esfahani",
    description: "Responsible for designing and grading assignments.",
    isCurrent: true,
    isLeadership: false,
  },
  {
    course: "Operating Systems (OS)",
    role: "Teaching Laboratory Assistant & Teaching Assistant",
    period: "Sept 2025 – Present",
    supervisors: "Prof. Mehdi Kargahi",
    description: "Designed two assignments, and designed and graded one lab project.",
    isCurrent: true,
    isLeadership: false,
  },
  {
    course: "Machines and Language Theory",
    role: "Teaching Assistant",
    period: "Sept 2024 – Present",
    supervisors: "Dr. Hossein Hojjat and Dr. Hassan Mousavi",
    description: "Responsible for designing and grading assignments; previously TA under supervision of Dr. Mousavi.",
    isCurrent: true,
    isLeadership: false,
  },
  {
    course: "ACM Student Chapter",
    role: "Core Member",
    period: "July 2024 – Sept 2025",
    supervisors: "University of Tehran",
    description: "Managed collaborative projects and programming competitions such as ICPC, enhancing teamwork.",
    isCurrent: false,
    isLeadership: true,
  },
  {
    course: "Probability and Statistics",
    role: "Teaching Assistant",
    period: "July 2024 – Feb 2025",
    supervisors: "Prof. Abdol-Hossein Vahabie and Dr. Mostafa Tavassolipour",
    description: "Supported course instruction and student mentoring.",
    isCurrent: false,
    isLeadership: false,
  },
  {
    course: "Introduction to Computing Systems and Programming",
    role: "Teaching Laboratory Assistant",
    period: "Sept 2023 – Feb 2025",
    supervisors: "Prof. Hadi Moradi and Dr. Mahmoud Reza Hashemi",
    description: "Facilitated lab sessions and guided students in hands-on projects.",
    isCurrent: false,
    isLeadership: false,
  },
  {
    course: "Fundamentals of Programming",
    role: "Teaching Assistant",
    period: "Jan 2024 – July 2024",
    supervisors: "Dr. Mohammad Javad Dousti",
    description: "Supported theoretical lectures and practical lab sessions.",
    isCurrent: false,
    isLeadership: false,
  },
  {
    course: "Discrete Mathematics",
    role: "Teaching Assistant",
    period: "Jan 2024 – July 2024",
    supervisors: "Prof. Siamak Mohammadi",
    description: "Clarified complex concepts through tutorials and mentoring.",
    isCurrent: false,
    isLeadership: false,
  },
];

export const TeachingSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedExperiences = showAll ? teachingExperiences : teachingExperiences.slice(0, 6);

  return (
    <section id="teaching" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading">Academic & Teaching Experience</h2>
          <p className="section-subheading mx-auto">
            Contributing to education at the University of Tehran
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
              <Users size={16} />
              {teachingExperiences.length}+ Courses
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm">
              <BookOpen size={16} />
              {teachingExperiences.filter(e => e.isCurrent).length} Current Positions
            </span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {displayedExperiences.map((exp, index) => (
              <div 
                key={index}
                className={`glass-card p-5 hover:shadow-card-hover transition-all duration-300 relative ${
                  exp.isLeadership ? 'border-l-4 border-l-primary' : ''
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {exp.isCurrent && (
                        <span className="px-2 py-0.5 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                          Active
                        </span>
                      )}
                      {exp.isLeadership && (
                        <span className="px-2 py-0.5 text-xs font-medium bg-accent text-accent-foreground rounded-full">
                          Leadership
                        </span>
                      )}
                    </div>
                    <h3 className="font-semibold text-foreground leading-tight">
                      {exp.course}
                    </h3>
                  </div>
                </div>

                <p className="text-primary font-medium text-sm mb-2">
                  {exp.role}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
                  <Calendar size={12} />
                  <span>{exp.period}</span>
                </div>

                <p className="text-xs text-muted-foreground mb-2">
                  <span className="font-medium">Supervised by:</span> {exp.supervisors}
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>

          {teachingExperiences.length > 6 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors"
              >
                {showAll ? 'Show Less' : `Show All ${teachingExperiences.length} Experiences`}
                <ChevronRight size={18} className={`transition-transform ${showAll ? 'rotate-90' : ''}`} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
