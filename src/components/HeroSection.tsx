import { ArrowDown, Download, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import profileImage from '@/assets/profile.jpg';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-primary font-medium mb-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              👋 Hello, I am
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Mostafa{' '}
              <span className="gradient-text">Kermani Nia</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              Computer Engineering Student
            </p>
            <p className="text-primary font-semibold mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.35s' }}>
              Ranked 1st · GPA: 19.76/20 · University of Tehran
            </p>
            <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              Passionate about AI, Machine Learning, and Distributed Systems. 
              Co-founder of ONTON with 900K+ users. Chief TA for Probability & Statistics.
              Building the future of technology.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <Button variant="hero" size="lg" asChild>
                <a href="https://mostafa-kermaninia.github.io/assets/download/CV.pdf" target="_blank" rel="noopener noreferrer">
                  <Download size={18} />
                  Download CV
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="https://mostafa-kermaninia.github.io/assets/download/transcript.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText size={18} />
                  Transcript
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <a 
                href="https://github.com/mostafa-kermaninia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/mostafakermaninia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:mkermani1383@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center opacity-0 animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow">
                <img 
                  src={profileImage} 
                  alt="Mostafa Kermani Nia" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-lg animate-float">
                <span className="text-2xl">🏆</span>
              </div>
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                <span className="text-xl">🎓</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-sm">Scroll Down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
