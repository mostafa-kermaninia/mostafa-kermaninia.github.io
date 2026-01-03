import { ArrowLeft, Calendar, Database, Globe, CreditCard, Bot, Zap, Code, Users, Image } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CaseStudyMajara = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-background pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          <Link 
            to="/#case-studies" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-start gap-6 mb-8">
            <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 shrink-0">
              <Calendar size={40} className="text-amber-400" />
            </div>
            <div>
              <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Case Study</span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2">
                Majara Ecosystem
              </h1>
              <p className="text-xl text-muted-foreground mt-3">
                A Scalable, AI-Enhanced Event Management & Ticketing Platform
              </p>
            </div>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Client', value: 'Pikan Ventures AB (Sweden)' },
              { label: 'Status', value: 'Production (Active)' },
              { label: 'Role', value: 'Principal Engineer & Tech Lead' },
              { label: 'Agency', value: 'Pomegroup Studio' },
            ].map((item) => (
              <div key={item.label} className="glass-card p-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                <p className="font-semibold text-foreground mt-1">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Overview */}
          <section className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Project Overview</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Majara is a comprehensive event management ecosystem designed to bridge the gap between event organizers and 
              attendees in Sweden. Unlike traditional web-based platforms, Majara leverages the accessibility of Telegram 
              to provide a seamless, app-like experience without requiring external downloads.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mt-4">
              The system handles end-to-end operations: from event creation and AI-driven asset generation to ticketing, 
              payments, and automated multi-channel broadcasting.
            </p>
          </section>

          {/* My Role */}
          <section className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">My Role & Responsibilities</h2>
            <div className="glass-card p-6">
              <h3 className="font-semibold text-lg text-foreground mb-4">Principal Software Engineer & Technical Lead</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Database size={20} className="text-primary shrink-0 mt-1" />
                  <span>System architecture design and sprint planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users size={20} className="text-primary shrink-0 mt-1" />
                  <span>Task delegation and stakeholder communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <Code size={20} className="text-primary shrink-0 mt-1" />
                  <span>Core backend implementation and AI integration</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Technical Architecture & Stack</h2>
            <p className="text-muted-foreground mb-6">
              The system utilizes a modern, event-driven architecture focusing on scalability and low maintenance costs.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'Backend Logic', desc: 'Python (~90%), focusing on asynchronous operations' },
                { title: 'Data Processing', desc: 'JavaScript (utilized within n8n nodes for complex data cleaning/sanitization)' },
                { title: 'Database', desc: 'Supabase (PostgreSQL) with RLS for data integrity' },
                { title: 'Automation & ETL', desc: 'n8n for scraping, scheduled tasks, and cross-platform sync' },
                { title: 'AI Integration', desc: 'Fine-tuned Nano Banana model for image generation' },
                { title: 'Frontend/Interface', desc: 'Telegram Bot API + Web Apps (Mini-Apps for Ticket Validation)' },
              ].map((item) => (
                <div key={item.title} className="glass-card p-5">
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Key Features & Implementation</h2>
            
            <div className="space-y-6">
              <div className="glass-card p-6">
                <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Database className="text-amber-400" size={24} />
                  A. Advanced Database Design (Supabase)
                </h3>
                <p className="text-muted-foreground text-sm mb-4">We architected a robust PostgreSQL schema to manage complex relationships:</p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• <strong>Role-Based Access Control (RBAC):</strong> Distinct permissions for Super Admins, Organization Admins, and Standard Users</li>
                  <li>• <strong>Event Lifecycle Management:</strong> Tracking events from Draft → Published → Sold Out → Archived</li>
                  <li>• <strong>Transactional Integrity:</strong> Ensuring atomic transactions for ticket purchases and refunds</li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Globe className="text-amber-400" size={24} />
                  B. Dual-Interface System (UX/UI)
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-2">User Panel</h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Multi-Language Support (EN, SE, FA)</li>
                      <li>• Booking Flow with QR code tickets</li>
                      <li>• Automated event reminders</li>
                      <li>• Complete payment & refund handling</li>
                    </ul>
                  </div>
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h4 className="font-medium text-foreground mb-2">Organizer/Admin Panel</h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• CMS Capabilities within Telegram</li>
                      <li>• Event creation and management</li>
                      <li>• Web App scanner for ticket validation</li>
                      <li>• QR Code scanning at venue entrance</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Image className="text-amber-400" size={24} />
                  C. AI & Automation Workflows (n8n)
                </h3>
                <div className="space-y-4">
                  <div className="pl-4 border-l-2 border-amber-500/40">
                    <h4 className="font-medium text-foreground">Data Aggregation Pipeline (ETL)</h4>
                    <p className="text-sm text-muted-foreground">n8n workflow scrapes external websites/channels for relevant events. JavaScript nodes clean and standardize data, preserving backlinks to original sources.</p>
                  </div>
                  <div className="pl-4 border-l-2 border-amber-500/40">
                    <h4 className="font-medium text-foreground">Generative AI (Asset Creation)</h4>
                    <p className="text-sm text-muted-foreground">Custom workflow detects if an event lacks a cover image, then triggers a fine-tuned Nano Banana model to generate a contextually relevant, high-quality image automatically.</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Zap className="text-amber-400" size={24} />
                  D. Automated Broadcasting & Marketing
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• <strong>Cross-Channel Posting:</strong> System automatically formats and posts content to English & Persian channels simultaneously</li>
                  <li>• <strong>Weekly Digests:</strong> Automated scheduler compiles professional summary of upcoming events and broadcasts to community</li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Bot className="text-amber-400" size={24} />
                  E. Observability & Logging
                </h3>
                <p className="text-muted-foreground text-sm mb-4">To ensure enterprise-grade reliability, we built a dedicated Logger Bot:</p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• <strong>Real-time Monitoring:</strong> Streams logs from n8n workflows and Python backend execution</li>
                  <li>• <strong>Error Tracking:</strong> Instant alerts for exceptions or payment failures</li>
                  <li>• <strong>Live Metrics:</strong> Real-time feeds of new user registrations and ticket sales</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Conclusion & Impact</h2>
            <div className="glass-card p-6 bg-gradient-to-br from-amber-500/5 to-orange-500/5">
              <p className="text-muted-foreground leading-relaxed">
                The Majara project demonstrates the ability to deliver a complex, full-stack product that integrates 
                <strong className="text-foreground"> Database Engineering, AI pipelines, and Financial Systems</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This project serves as a testament to our capability to handle high-level architectural decisions and 
                intricate code implementation, delivering a scalable product for the European market.
              </p>
            </div>
          </section>

          {/* Links Section */}
          <section className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Project Links</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a 
                href="https://t.me/MajaraAppBot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card p-5 flex items-center gap-4 hover:border-amber-500/50 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-amber-500/20">
                  <Bot size={24} className="text-amber-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-amber-400 transition-colors">Majara Bot</h4>
                  <p className="text-sm text-muted-foreground">@MajaraAppBot on Telegram</p>
                </div>
                <Globe size={18} className="text-muted-foreground ml-auto" />
              </a>
              
              <a 
                href="https://t.me/MajaraApp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card p-5 flex items-center gap-4 hover:border-amber-500/50 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-amber-500/20">
                  <Users size={24} className="text-amber-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-amber-400 transition-colors">Majara Channel (FA)</h4>
                  <p className="text-sm text-muted-foreground">@MajaraApp Persian Channel</p>
                </div>
                <Globe size={18} className="text-muted-foreground ml-auto" />
              </a>
              
              <a 
                href="https://t.me/MajaraAppEn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card p-5 flex items-center gap-4 hover:border-amber-500/50 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-amber-500/20">
                  <Users size={24} className="text-amber-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-amber-400 transition-colors">Majara Channel (EN)</h4>
                  <p className="text-sm text-muted-foreground">@MajaraAppEn English Channel</p>
                </div>
                <Globe size={18} className="text-muted-foreground ml-auto" />
              </a>
              
              <a 
                href="https://docs.google.com/document/d/1La-sDhG_b_kZWym7PLBY38WeqFdKeoI5jSVaJeeNqtk/edit?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card p-5 flex items-center gap-4 hover:border-amber-500/50 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-amber-500/20">
                  <Calendar size={24} className="text-amber-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-amber-400 transition-colors">Original Case Study Document</h4>
                  <p className="text-sm text-muted-foreground">View the complete documentation</p>
                </div>
                <Globe size={18} className="text-muted-foreground ml-auto" />
              </a>
            </div>
          </section>

          {/* Back Button */}
          <div className="flex justify-center">
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/#case-studies">
                <ArrowLeft size={20} />
                Back to All Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CaseStudyMajara;
