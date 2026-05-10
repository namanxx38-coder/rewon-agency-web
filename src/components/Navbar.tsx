'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`flex items-center justify-between px-8 py-3 rounded-full border border-white/5 backdrop-blur-2xl bg-black/40 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-500`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-12 h-12">
              <Image 
                src="/logo.png" 
                alt="REWON Logo" 
                fill 
                className="object-contain drop-shadow-[0_0_15px_rgba(124,58,237,0.3)]"
              />
            </div>
            <div className="text-2xl font-black tracking-tighter">
              <span className="text-white transition-colors group-hover:text-purple-400">RE</span>
              <span className="premium-gradient">WON</span>
            </div>
          </Link>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-[13px] font-bold text-slate-400 hover:text-white transition-all uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-4">
            <Link href="#contact">
              <button className="hidden sm:block px-6 py-2.5 rounded-full bg-white text-black font-black text-sm hover:bg-slate-200 transition-all active:scale-95">
                Start Project
              </button>
            </Link>
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="md:hidden absolute top-24 left-6 right-6 p-8 rounded-[2rem] border border-white/10 bg-black/95 backdrop-blur-3xl shadow-2xl z-[90]"
          >
            <div className="flex flex-col gap-8 items-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-xl font-black text-slate-300 hover:text-white uppercase tracking-widest"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button className="w-full py-4 rounded-full bg-white text-black font-black text-lg">
                Start Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .premium-gradient {
          background: linear-gradient(to right, #fff 0%, #7C3AED 50%, #3B82F6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
