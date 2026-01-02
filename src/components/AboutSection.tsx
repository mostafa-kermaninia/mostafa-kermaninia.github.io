import { MapPin, Phone, Mail, GraduationCap, Music, Languages, Mountain } from 'lucide-react';

const languages = [
  { name: "Persian", level: "Native" },
  { name: "English", level: "Upper-intermediate" },
];

const interests = [
  { name: "Classical Guitar", detail: "11 years of practice; performed at local festivals & competitions", icon: Music },
  { name: "Mountaineering", detail: "Active outdoor enthusiast", icon: Mountain },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading">About Me</h2>
          <p className="section-subheading mx-auto">
            Passionate about AI, distributed systems, and building impactful technology
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Main About */}
          <div className="lg:col-span-2 glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Who I Am</h3>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a <span className="text-foreground font-medium">top-ranked Computer Engineering student</span> at the 
                University of Tehran, maintaining the <span className="text-primary font-medium">1st position</span> among 
                my cohort for 6 consecutive semesters with a GPA of 19.76/20.
              </p>
              <p>
                My academic journey is complemented by extensive <span className="text-foreground font-medium">teaching experience</span> across 
                multiple courses including Machine Learning, Operating Systems, and Probability & Statistics, where I've 
                contributed to student success as both a Teaching Assistant and Chief TA.
              </p>
              <p>
                Beyond academics, I'm actively involved in <span className="text-foreground font-medium">entrepreneurial ventures</span> in 
                the Web3 space, co-founding ONTON—a community activation platform on TON blockchain serving 900K+ users. 
                This hands-on experience has deepened my interest in scalable distributed systems and real-world AI applications.
              </p>
            </div>
          </div>

          {/* Contact & Languages */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              
              <div className="space-y-4">
                <a href="mailto:mkermani1383@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="text-primary" size={16} />
                  </div>
                  <span className="text-sm">mkermani1383@gmail.com</span>
                </a>

                <a href="tel:+989309659983" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Phone className="text-primary" size={16} />
                  </div>
                  <span className="text-sm">(+98) 930-965-9983</span>
                </a>

                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MapPin className="text-primary" size={16} />
                  </div>
                  <span className="text-sm">Tehran, Iran</span>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <Languages className="text-primary" size={20} />
                <h3 className="text-lg font-semibold">Languages</h3>
              </div>
              
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between">
                    <span className="text-foreground font-medium">{lang.name}</span>
                    <span className="text-sm text-muted-foreground px-3 py-1 rounded-full bg-secondary">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-semibold mb-4">Interests</h3>
              
              <div className="space-y-4">
                {interests.map((interest) => (
                  <div key={interest.name} className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-accent/10 shrink-0">
                      <interest.icon className="text-accent" size={16} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{interest.name}</p>
                      <p className="text-xs text-muted-foreground">{interest.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
