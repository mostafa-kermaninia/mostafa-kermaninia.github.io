import { Github, Linkedin, Instagram, Send, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';

const socialLinks = [
  { 
    name: 'GitHub', 
    icon: Github, 
    url: 'https://github.com/mostafa-kermaninia',
    color: 'hover:bg-[#333] hover:text-[#fff]'
  },
  { 
    name: 'LinkedIn', 
    icon: Linkedin, 
    url: 'https://www.linkedin.com/in/mostafakermaninia',
    color: 'hover:bg-[#0A66C2] hover:text-[#fff]'
  },
  { 
    name: 'Telegram', 
    icon: Send, 
    url: 'https://t.me/',
    color: 'hover:bg-[#0088CC] hover:text-[#fff]'
  },
  { 
    name: 'Instagram', 
    icon: Instagram, 
    url: 'https://instagram.com/',
    color: 'hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:text-[#fff]'
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading">Get In Touch</h2>
          <p className="section-subheading mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info Card */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:mkermani1383@gmail.com" className="font-medium text-foreground hover:text-primary transition-colors">
                      mkermani1383@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">University Email</p>
                    <a href="mailto:kermaninia@ut.ac.ir" className="font-medium text-foreground hover:text-primary transition-colors">
                      kermaninia@ut.ac.ir
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a href="tel:+989309659983" className="font-medium text-foreground hover:text-primary transition-colors">
                      (+98) 930-965-9983
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <a href="mailto:mkermani1383@gmail.com">
                    <Mail size={18} />
                    Send Email
                  </a>
                </Button>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-4 rounded-xl bg-secondary transition-all duration-300 ${social.color}`}
                  >
                    <social.icon size={24} />
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>

              <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/10">
                <p className="text-center text-muted-foreground">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
