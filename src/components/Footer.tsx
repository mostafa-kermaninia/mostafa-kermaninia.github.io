import { Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-heading text-lg font-bold">
              <span className="text-primary">M</span>ostafa<span className="text-primary">.</span>
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {currentYear} Mostafa Kermani Nia. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Portfolio
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
