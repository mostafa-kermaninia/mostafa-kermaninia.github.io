import { ArrowLeft, Brain, Database, Zap, Code, Search, Bot, Server, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CaseStudyGrantia = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-teal-500/10 via-cyan-500/5 to-background pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          <Link 
            to="/#case-studies" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-start gap-6 mb-8">
            <div className="p-5 rounded-2xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 shrink-0">
              <Brain size={40} className="text-teal-400" />
            </div>
            <div>
              <span className="text-teal-400 font-semibold text-sm uppercase tracking-wider">Case Study</span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2">
                Grantia
              </h1>
              <p className="text-xl text-muted-foreground mt-3">
                AI-Powered Grant Matching Platform for European Startups
              </p>
            </div>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Client', value: 'Pikan Ventures AB' },
              { label: 'Status', value: 'Production (Active)' },
              { label: 'Role', value: 'Principal Engineer & Tech Lead' },
              { label: 'Supervision', value: 'Pomegroup Studio' },
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
              Grantia is an end-to-end, automated platform designed to revolutionize how startups secure non-dilutive funding (grants). 
              By aggregating data from fragmented European sources and utilizing advanced Large Language Models (LLMs) and Vector 
              Semantic Search, the system identifies high-probability funding matches with unprecedented accuracy.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mt-4">
              The project was executed from zero to one by a two-person core team, handling everything from ETL pipeline architecture 
              to frontend development and AI model fine-tuning. The platform currently serves as the operational backbone for 
              Pikan Ventures' grant consultancy business model.
            </p>
          </section>

          {/* My Role */}
          <section className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">My Role & Responsibilities</h2>
            <div className="glass-card p-6">
              <h3 className="font-semibold text-lg text-foreground mb-4">Principal Software Engineer & Technical Lead</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Layers size={20} className="text-primary shrink-0 mt-1" />
                  <span>Project management, task delegation, and stakeholder coordination with Pomegroup</span>
                </li>
                <li className="flex items-start gap-3">
                  <Database size={20} className="text-primary shrink-0 mt-1" />
                  <span>System architecture design (Database schema, API gateways)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Brain size={20} className="text-primary shrink-0 mt-1" />
                  <span>Development of the AI Matching Pipeline and LLM integration strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <Code size={20} className="text-primary shrink-0 mt-1" />
                  <span>Frontend architecture and UX implementation</span>
                </li>
              </ul>
            </div>
          </section>

          {/* System Architecture */}
          <section className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">System Architecture</h2>
            <p className="text-muted-foreground mb-6">
              The Grantia ecosystem is built on four pillars: Data Ingestion, Data Hygiene, Intelligent Matching, and Visualization.
            </p>
            
            <div className="space-y-6">
              <div className="glass-card p-6">
                <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Database className="text-teal-400" size={24} />
                  A. Autonomous Data ETL (Extract, Transform, Load)
                </h3>
                <p className="text-muted-foreground text-sm mb-4">The foundation of the platform is a "Live Database" of funding opportunities.</p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• <strong>Scraping Orchestration:</strong> n8n workflows + custom Python modules to scrape diverse grant portals (EU Funding & Tenders, Vinnova, etc.) daily</li>
                  <li>• <strong>Normalization:</strong> Incoming data (unstructured HTML/JSON) parsed and mapped to unified Supabase schema</li>
                  <li>• <strong>Startup Ingestion:</strong> Automated pipelines fetch startup profiles, structuring financial data, TRL, and sectors</li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Zap className="text-teal-400" size={24} />
                  B. Automated Database Hygiene
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• <strong>Python Cron Jobs:</strong> Custom scripts run nightly to detect and purge expired grants</li>
                  <li>• <strong>Deduplication:</strong> Logic to identify and merge duplicate listings across different sources</li>
                  <li>• <strong>Status Updates:</strong> Automatic verification of grant status (Open/Closed/Forthcoming)</li>
                </ul>
              </div>

              <div className="glass-card p-6 border-2 border-teal-500/20">
                <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Brain className="text-teal-400" size={24} />
                  C. The AI Matching Pipeline (The Core Engine)
                </h3>
                <p className="text-muted-foreground text-sm mb-4 italic">
                  This is the intellectual property (IP) heart of the project. We moved beyond simple keyword matching to a multi-stage RAG (Retrieval-Augmented Generation) pipeline.
                </p>
                
                <div className="space-y-4">
                  <div className="pl-4 border-l-2 border-teal-500/40">
                    <h4 className="font-medium text-foreground">1. Vectorization & Extraction</h4>
                    <p className="text-sm text-muted-foreground">Raw text processed to extract key metadata (Budget, Countries, TRL). Text converted into Semantic Vectors (Embeddings) to capture meaning.</p>
                  </div>
                  <div className="pl-4 border-l-2 border-teal-500/40">
                    <h4 className="font-medium text-foreground">2. Hard Filtering (SQL Layer)</h4>
                    <p className="text-sm text-muted-foreground">Immediate exclusion based on absolute constraints (Country mismatch, Budget constraints).</p>
                  </div>
                  <div className="pl-4 border-l-2 border-teal-500/40">
                    <h4 className="font-medium text-foreground">3. Semantic Search (Vector Layer)</h4>
                    <p className="text-sm text-muted-foreground">Cosine similarity search between startup profile vector and grant description vector to find conceptual matches.</p>
                  </div>
                  <div className="pl-4 border-l-2 border-teal-500/40">
                    <h4 className="font-medium text-foreground">4. LLM Reasoning (Verification Layer)</h4>
                    <p className="text-sm text-muted-foreground">Top candidates sent to Google Gemini 2.0 Flash. Model acts as "Senior Consultant," providing binary verification + specific reasoning.</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Code className="text-teal-400" size={24} />
                  D. The Admin Dashboard (Frontend)
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• <strong>Tech Stack:</strong> React, Vite, Lovable, Tailwind CSS</li>
                  <li>• <strong>Bi-Directional Mapping:</strong> Click a startup → See all matched grants with AI reasoning. Click a grant → See all eligible startups.</li>
                  <li>• <strong>Business Logic:</strong> Designed to facilitate the revenue model (Success Fee)</li>
                </ul>
              </div>

              <div className="glass-card p-6">
                <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Bot className="text-teal-400" size={24} />
                  E. Reliability & DevOps (The Logger Bot)
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• <strong>Telegram Logger Bot:</strong> Custom bot integrated into CI/CD and runtime environment</li>
                  <li>• <strong>Daily Reports:</strong> Detailed summary post-execution (e.g., "50 new grants scraped, 10 expired removed")</li>
                  <li>• <strong>Critical Alerting:</strong> Real-time push notifications if any pipeline part fails</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Technology Stack</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { domain: 'Backend & Database', tech: 'Supabase (PostgreSQL + pgvector), Python, Node.js' },
                { domain: 'Automation & ETL', tech: 'n8n, Custom JavaScript Scrapers' },
                { domain: 'AI & LLM', tech: 'Google Gemini 2.0 Flash, Vector Embeddings (Semantic Search)' },
                { domain: 'Frontend', tech: 'React.js, Vite, Lovable, Tailwind CSS, HTML5' },
                { domain: 'DevOps & Monitoring', tech: 'Telegram Bot API, PM2, Cron Jobs' },
              ].map((item) => (
                <div key={item.domain} className="glass-card p-5">
                  <h4 className="font-semibold text-foreground mb-2">{item.domain}</h4>
                  <p className="text-sm text-muted-foreground">{item.tech}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Challenges */}
          <section className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Key Challenges Solved</h2>
            <div className="space-y-4">
              {[
                { 
                  title: 'Data Fragmentation', 
                  desc: 'EU grant data is notoriously messy. We created a unified schema that standardized budget currencies, deadlines, and eligibility criteria from 5+ disparate sources.' 
                },
                { 
                  title: 'False Positives in Matching', 
                  desc: 'Traditional keyword matching fails when a startup describes "AI" but a grant asks for "Machine Learning." Our Vector Semantic Search solved this, increasing match relevance.' 
                },
                { 
                  title: 'Scalability', 
                  desc: 'The system processes thousands of comparisons daily. By implementing a "Hard Filter" stage before "Vector Search" and "LLM" stages, we optimized token usage and reduced processing costs significantly.' 
                },
              ].map((challenge) => (
                <div key={challenge.title} className="glass-card p-5">
                  <h4 className="font-semibold text-foreground mb-2">{challenge.title}</h4>
                  <p className="text-sm text-muted-foreground">{challenge.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-16">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Conclusion & Impact</h2>
            <div className="glass-card p-6 bg-gradient-to-br from-teal-500/5 to-cyan-500/5">
              <p className="text-muted-foreground leading-relaxed">
                Grantia has successfully transformed a manual, labor-intensive consulting process into an automated, AI-driven workflow. 
                The system reduces the time required to find relevant grants for a startup from <strong className="text-foreground">hours to seconds</strong>, 
                directly impacting Pikan Ventures' ability to scale their client portfolio and revenue.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This project demonstrates our ability to deliver complex, full-stack AI solutions that solve real-world business problems, 
                from architectural design to production deployment.
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

export default CaseStudyGrantia;
