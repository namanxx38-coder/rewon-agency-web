'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { AuroraBackground } from './ui/AuroraBackground';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020203] text-white pt-20">
      {/* 1. Cinematic Aurora Background (Three.js) */}
      <AuroraBackground />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 z-[1] bg-black/20" />

      {/* 2. Hero Content (Centered) */}
      <div className="relative z-20 text-center px-6 max-w-7xl pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >


          {/* Top Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-12 inline-flex items-center gap-2.5 group hover:border-white/20 transition-all cursor-default"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] shadow-[0_0_10px_#7C3AED] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">AI Powered Agency</span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-7xl md:text-[9.5rem] font-black mb-12 tracking-tighter leading-[0.8] uppercase select-none">
            YOU THINK.<br />
            <span className="premium-gradient">WE BUILD.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-400 mb-16 max-w-2xl mx-auto leading-relaxed font-medium opacity-70">
            We create AI-powered websites, cinematic marketing systems, AI automation, and premium digital experiences for modern businesses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-40">
            <Link href="#contact">
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-12 py-5 rounded-full bg-white text-black font-black text-lg transition-all shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:shadow-[0_0_80px_rgba(255,255,255,0.4)]"
              >
                Start Your Project
              </motion.button>
            </Link>
            <a href="https://wa.me/919812584843" target="_blank" rel="noopener noreferrer">
              <motion.button 
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.08)', y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-12 py-5 rounded-full border border-white/20 text-white font-black text-lg backdrop-blur-md transition-all hover:border-white/40"
              >
                Chat on WhatsApp
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .premium-gradient {
          background: linear-gradient(to right, #fff 20%, #7C3AED 50%, #3B82F6 80%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% auto;
          animation: shine 8s linear infinite;
        }
        @keyframes shine {
          to { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
