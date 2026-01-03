import { ArrowLeft, Gamepad2, Users, Trophy, Shield, Code, Zap, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CaseStudyMomis = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-background pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          <Link 
            to="/#case-studies" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-start gap-6 mb-8">
            <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 shrink-0">
              <Gamepad2 size={40} className="text-purple-400" />
            </div>
            <div>
              <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Case Study</span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2">
                Momis Gaming Ecosystem
              </h1>
              <p className="text-xl text-muted-foreground mt-3">
                A Secure, Scalable, and Community-Driven Gaming Platform on Telegram Mini-Apps
              </p>
            </div>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Studio', value: 'Momis Studio' },
              { label: 'Status', value: 'Live & Scaling' },
              { label: 'Role', value: 'Co-Founder & Tech Lead' },
              { label: 'Advisory', value: 'Pomegroup Studio' },
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
              Momis Gaming is a proprietary GameFi ecosystem developed to demonstrate the potential of Telegram Mini-Apps 
              as a serious gaming platform. Moving beyond simple web-views, we engineered a suite of high-performance games 
              integrated with a centralized economy system. The project encompasses an end-to-end product lifecycle: from 
              game design and full-stack development to community orchestration and tournament management via Web3 protocols.
            </p>
          </section>

          {/* Metrics */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Users, value: '842', label: 'Registered Users' },
                { icon: Trophy, value: '37', label: 'Tournaments Hosted' },
                { icon: Gamepad2, value: '4+', label: 'Games Built' },
                { icon: Zap, value: '50', label: 'Peak Concurrent Players' },
              ].map((metric) => (
                <div key={metric.label} className="glass-card p-6 text-center">
                  <metric.icon size={32} className="text-purple-400 mx-auto mb-3" />
                  <p className="text-3xl font-bold text-foreground">{metric.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{metric.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* My Role */}
          <section className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">My Role & Responsibilities</h2>
            <div className="glass-card p-6">
              <h3 className="font-semibold text-lg text-foreground mb-4">Co-Founder, Principal Software Engineer & Technical Lead</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Code size={20} className="text-primary shrink-0 mt-1" />
                  <span>System Architecture, Database Schema Design (SQL), Security Protocols (Anti-Cheat), and Lead Full-Stack Development</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users size={20} className="text-primary shrink-0 mt-1" />
                  <span>Led the entire community lifecycle, managing direct user support, conducting UX research polls, and translating user feedback into technical roadmaps</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield size={20} className="text-primary shrink-0 mt-1" />
                  <span>Stakeholder Management and Web3 Integration with ONTON Protocol</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Technical Architecture & Stack</h2>
            <p className="text-muted-foreground mb-6">
              We prioritized security and performance to solve the common issue of "cheating" in web-based games.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'Frontend Engine', desc: 'JavaScript (ES6+) optimized for Telegram Webview, ensuring 60fps on mobile' },
                { title: 'Backend Logic', desc: 'Python & Node.js (Hybrid approach for heavy logic processing)' },
                { title: 'Database', desc: 'Structured SQL Architecture with ACID compliance for transactions' },
                { title: 'Authentication', desc: 'Telegram Native Auth (Seamless/Passwordless login via initData)' },
                { title: 'Design System', desc: 'Custom Brand Kit designed in Figma & Canva' },
                { title: 'Web3 Integration', desc: 'ONTON Protocol for tournaments and SBT/NFT prize distribution' },
              ].map((item) => (
                <div key={item.title} className="glass-card p-5">
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Game Portfolio */}
          <section className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Game Portfolio & Engineering Highlights</h2>
            <div className="space-y-4">
              {[
                { name: 'Math Battle', focus: 'Security Focus', desc: 'Speed-math game with server-side heuristic analysis to detect non-human input patterns, rendering web-inspection cheats useless.' },
                { name: '2048 Remastered', focus: 'UI/UX Focus', desc: 'Complete modernization of the classic algorithm with custom sound engines and responsive UI that adapts to Telegram\'s theme.' },
                { name: 'Color Memory', focus: 'Latency Focus', desc: 'Optimized data transmission to ensure sequence synchronization across varied network speeds.' },
                { name: 'Lumberjack', focus: 'Graphics Focus', desc: 'High-intensity graphical rendering handling rapid user inputs.' },
                { name: 'Quiz Engine', focus: 'Dynamic CMS', desc: 'Scalable architecture allowing admins to deploy custom quizzes and competitions instantly.' },
              ].map((game) => (
                <div key={game.name} className="glass-card p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-foreground">{game.name}</h4>
                    <span className="px-2 py-0.5 text-xs rounded-full bg-purple-500/20 text-purple-400">{game.focus}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{game.desc}</p>
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
                  <Shield className="text-purple-400" size={24} />
                  Zero-Trust Security Architecture
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• <strong>Server-Side Validation:</strong> All scores are calculated or validated on the backend</li>
                  <li>• <strong>Anti-Cheat Logic:</strong> Custom algorithms to flag "impossible actions" (e.g., answering a complex math query in &lt;200ms)</li>
                  <li>• <strong>Secure Auth:</strong> Utilizing Telegram's cryptographic signature to prevent identity spoofing</li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Users className="text-purple-400" size={24} />
                  Community-Driven Product Development
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• <strong>Direct Support Loop:</strong> Managed 24/7 support channel with zero friction for users</li>
                  <li>• <strong>Data-Driven Updates:</strong> User Polls to decide on new features, resulting in high retention</li>
                  <li>• <strong>High Availability:</strong> Maintained 99.9% uptime during peak tournament hours</li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Zap className="text-purple-400" size={24} />
                  Gamification & Economy
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• <strong>Centralized Wallet:</strong> Unified SQL database tracks "Momis Coins" across all games</li>
                  <li>• <strong>Retention Loops:</strong> Daily Reward streaks and Referral System with automatic reward distribution</li>
                  <li>• <strong>Web3 Tournaments:</strong> Winners receive rewards via SBTs/NFTs on TON blockchain</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Conclusion</h2>
            <div className="glass-card p-6 bg-gradient-to-br from-purple-500/5 to-pink-500/5">
              <p className="text-muted-foreground leading-relaxed">
                The Momis Gaming project serves as a testament to our team's ability to deliver Full-Cycle Software Solutions. 
                This project highlights not just technical proficiency in Full-Stack development and Security, but also the soft 
                skills required to lead a product: Empathy for the user, Crisis Management, and Community Leadership.
              </p>
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

export default CaseStudyMomis;
