'use client';
import { motion } from 'framer-motion';

const brands = [
  'AI REVOLUTION', 'PREMIUM DESIGN', 'MODERN WEB', 'CINEMATIC VIDEO', 'STRATEGIC ADS', 
  'REWON ELITE', 'DIGITAL GROWTH', 'SMART SYSTEMS', 'AI CHATBOTS', 'LUXURY UI'
];

const Sparkles = () => {
  return (
    <div className="py-12 border-y border-white/5 bg-black/20 backdrop-blur-sm overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex items-center gap-16 px-8"
        >
          {Array(4).fill(brands).flat().map((brand, i) => (
            <span 
              key={i} 
              className="text-2xl md:text-4xl font-black text-white/20 tracking-tighter hover:text-[#7C3AED]/40 transition-colors cursor-default uppercase"
            >
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Sparkles;
