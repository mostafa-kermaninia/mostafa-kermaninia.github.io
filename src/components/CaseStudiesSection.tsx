import { ArrowRight, Gamepad2, Brain, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 'momis',
    title: 'Momis Gaming Ecosystem',
    subtitle: 'GameFi Platform on Telegram',
    description: 'A secure, scalable gaming platform with 800+ users, 37 tournaments, and anti-cheat systems. Built end-to-end from game design to Web3 integration.',
    role: 'Co-Founder & Technical Lead',
    tags: ['GameFi', 'Telegram Mini-Apps', 'Web3', 'Anti-Cheat'],
    metrics: ['842 Users', '37 Tournaments', '4+ Games'],
    icon: Gamepad2,
    gradient: 'from-purple-500/20 to-pink-500/20',
    accentColor: 'text-purple-400',
  },
  {
    id: 'grantia',
    title: 'Grantia',
    subtitle: 'AI-Powered Grant Matching Platform',
    description: 'End-to-end platform using LLMs and Vector Search to match startups with EU grants. Reduced matching time from hours to seconds.',
    role: 'Principal Engineer & Technical Lead',
    tags: ['AI/LLM', 'RAG Pipeline', 'ETL', 'Supabase'],
    metrics: ['5+ Data Sources', 'Real-time Matching', 'Production Active'],
    icon: Brain,
    gradient: 'from-teal-500/20 to-cyan-500/20',
    accentColor: 'text-teal-400',
  },
  {
    id: 'majara',
    title: 'Majara Ecosystem',
    subtitle: 'AI-Enhanced Event Management Platform',
    description: 'Comprehensive event management system with ticketing, payments, AI asset generation, and multi-channel broadcasting for the Swedish market.',
    role: 'Principal Engineer & Technical Lead',
    tags: ['Event Management', 'AI Integration', 'Payments', 'i18n'],
    metrics: ['3 Languages', 'Full RBAC', 'Production Active'],
    icon: Calendar,
    gradient: 'from-amber-500/20 to-orange-500/20',
    accentColor: 'text-amber-400',
  },
];

export const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading">Case Studies</h2>
          <p className="section-subheading mx-auto">
            In-depth look at production systems I've architected and delivered
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              to={`/case-study/${study.id}`}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
              
              <div className="relative glass-card p-8 h-full flex flex-col hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${study.gradient} shrink-0`}>
                    <study.icon size={28} className={study.accentColor} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className={`text-sm font-medium ${study.accentColor}`}>
                      {study.subtitle}
                    </p>
                  </div>
                </div>

                {/* Role Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                    {study.role}
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {study.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="px-3 py-1.5 text-xs font-bold rounded-lg bg-secondary text-foreground"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                  <span>Read Full Case Study</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
