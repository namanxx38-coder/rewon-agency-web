'use client';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$999',
    features: ['Custom Website Design', 'Responsive Layout', 'Basic SEO', '1 Month Support'],
    color: '#CBD5E1'
  },
  {
    name: 'Growth',
    price: '$2,499',
    features: ['Advanced Marketing System', 'Premium UI Design', 'Content Strategy', '3 Months Support'],
    color: '#2962FF',
    highlight: false
  },
  {
    name: 'Premium AI System',
    price: '$4,999',
    features: ['Full AI Automation', 'Cinematic Brand System', 'Performance Marketing', 'Priority 24/7 Support'],
    color: '#7C3AED',
    highlight: true
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#7C3AED] font-bold tracking-[0.3em] uppercase mb-4"
          >
            Pricing Plans
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-white"
          >
            INVEST IN <span className="premium-gradient">EXCELLENCE.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-10 relative flex flex-col ${plan.highlight ? 'border-[#7C3AED] border-2 scale-105 z-10' : ''}`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#7C3AED] text-white px-6 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-black text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black text-white">{plan.price}</span>
                <span className="text-slate-500 text-sm">/project</span>
              </div>

              <div className="flex flex-col gap-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-slate-300">
                    <Check size={18} className="text-[#7C3AED]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                className={`w-full py-4 rounded-xl font-black transition-all ${
                  plan.highlight 
                  ? 'bg-[#7C3AED] text-white shadow-xl shadow-purple-500/30 hover:bg-[#6D28D9]' 
                  : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                }`}
              >
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .grid { display: grid; }
        .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        @media (min-width: 768px) {
          .md\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        .gap-8 { gap: 2rem; }
      `}</style>
    </section>
  );
};

export default Pricing;
