import { MapPin, Phone, Mail, GraduationCap } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading">About Me</h2>
          <p className="section-subheading mx-auto">
            Computer Engineering student passionate about AI and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* About Text */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold">Who I Am</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I am a Computer Engineering student at the University of Tehran. I like to explore 
              new technologies and develop software solutions and quick hacks.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm currently on track for learning more about Artificial Intelligence and related 
              topics. In my free time, I pursue mountaineering and ecotourism as hobbies.
            </p>
          </div>

          {/* Contact Info */}
          <div className="glass-card p-8">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <a href="tel:+989309659983" className="text-muted-foreground hover:text-primary transition-colors">
                    (+98) 930-965-9983
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a href="mailto:mkermani1383@gmail.com" className="text-muted-foreground hover:text-primary transition-colors block">
                    mkermani1383@gmail.com
                  </a>
                  <a href="mailto:kermaninia@ut.ac.ir" className="text-muted-foreground hover:text-primary transition-colors block">
                    kermaninia@ut.ac.ir
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">Tehran, Iran</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
