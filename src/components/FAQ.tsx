'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'How long does a project take?',
    a: 'Typically, a premium website system takes 3-6 weeks, while complete digital systems with marketing can take 8-12 weeks depending on complexity.'
  },
  {
    q: 'Do you offer custom AI solutions?',
    a: 'Yes, we build bespoke AI chatbots and automation systems tailored specifically to your business workflows and data.'
  },
  {
    q: 'What makes REWON different?',
    a: 'We are not just freelancers. We are an execution-focused agency that builds complete systems, not just components. Every member of our team is a specialist in growth.'
  },
  {
    q: 'Can we start with a small project?',
    a: 'Absolutely. Many of our clients start with a single landing page or a basic marketing setup and then scale into our Premium AI Systems.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-white"
          >
            GOT <span className="premium-gradient">QUESTIONS?</span>
          </motion.h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-bold text-white">{faq.q}</span>
                {openIndex === i ? <Minus size={20} className="text-[#7C3AED]" /> : <Plus size={20} className="text-slate-500" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
