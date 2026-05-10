'use client';
import { motion } from 'framer-motion';
import { Layout, Megaphone, Video, Bot, ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Website Design',
    desc: 'Bespoke, high-converting digital experiences with Apple-level polish.',
    icon: Layout,
    color: '#7C3AED'
  },
  {
    title: 'Digital Marketing',
    desc: 'Data-driven campaigns that scale your business and dominate your niche.',
    icon: Megaphone,
    color: '#2962FF'
  },
  {
    title: 'Video Editing',
    desc: 'Cinematic content that tells your story and captivates your audience.',
    icon: Video,
    color: '#EC4899'
  },
  {
    title: 'AI Chat Bots',
    desc: 'Intelligent automation systems that handle leads and support 24/7.',
    icon: Bot,
    isSpecial: true,
    color: '#10B981'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#7C3AED] font-bold tracking-[0.3em] uppercase mb-4"
          >
            Capabilities
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-white"
          >
            SOLUTIONS THAT <br />
            <span className="premium-gradient">DRIVE RESULTS.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-8 group relative overflow-hidden ${service.isSpecial ? 'border-[#7C3AED]/50' : ''}`}
            >
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all group-hover:scale-110"
                style={{ backgroundColor: `${service.color}20`, border: `1px solid ${service.color}40` }}
              >
                <service.icon size={28} style={{ color: service.color }} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-between">
                {service.title}
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-500" />
              </h3>
              
              <p className="text-slate-400 leading-relaxed">
                {service.desc}
              </p>

              {/* Special Glow for AI Chatbots */}
              {service.isSpecial && (
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#7C3AED]/20 blur-3xl rounded-full" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .mx-auto { margin-left: auto; margin-right: auto; }
        .max-w-7xl { max-width: 80rem; }
        .grid { display: grid; }
        .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        @media (min-width: 768px) {
          .md\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .md\:text-6xl { font-size: 3.75rem; }
        }
        @media (min-width: 1024px) {
          .lg\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        }
        .gap-8 { gap: 2rem; }
        .p-8 { padding: 2rem; }
        .mb-20 { margin-bottom: 5rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-8 { margin-bottom: 2rem; }
      `}</style>
    </section>
  );
};

export default Services;
