'use client';
import { motion } from 'framer-motion';
import { Send, MessageSquare, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] -z-10" />
      
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#7C3AED] font-bold tracking-[0.3em] uppercase mb-4"
            >
              Get in touch
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter"
            >
              READY TO <br />
              <span className="premium-gradient">START?</span>
            </motion.h2>
            <p className="text-xl text-slate-400 mb-12 max-w-md leading-relaxed">
              Have a project in mind? Let's build something extraordinary together.
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#7C3AED]/50 transition-colors">
                  <Mail className="text-slate-400 group-hover:text-[#7C3AED]" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-black tracking-widest">Email Us</p>
                  <p className="text-white font-bold">hello@rewon.in</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#2962FF]/50 transition-colors">
                  <MessageSquare className="text-slate-400 group-hover:text-[#2962FF]" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-black tracking-widest">WhatsApp</p>
                  <a href="https://wa.me/919812584843" className="text-white font-bold hover:text-purple-400 transition-colors">+91 98125 84843</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors">
                  <MapPin className="text-slate-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-black tracking-widest">Office</p>
                  <p className="text-white font-bold">Rajasthan, Hanumangarh</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass-card p-10"
          >
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-2">Name</label>
                  <input type="text" placeholder="John Doe" className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#7C3AED] transition-colors" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-2">Email</label>
                  <input type="email" placeholder="john@example.com" className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#7C3AED] transition-colors" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-2">Service</label>
                <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#7C3AED] transition-colors appearance-none">
                  <option>Website Systems</option>
                  <option>Digital Marketing</option>
                  <option>Video Editing</option>
                  <option>AI Chatbots</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-2">Message</label>
                <textarea rows={4} placeholder="Tell us about your project..." className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#7C3AED] transition-colors resize-none"></textarea>
              </div>
              <button className="w-full py-5 rounded-xl bg-white text-black font-black hover:bg-[#7C3AED] hover:text-white transition-all flex items-center justify-center gap-3">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      <style jsx>{`
        .grid { display: grid; }
        .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        @media (min-width: 768px) {
          .md\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .md\:text-7xl { font-size: 4.5rem; }
        }
        @media (min-width: 1024px) {
          .lg\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        .gap-6 { gap: 1.5rem; }
        .gap-16 { gap: 4rem; }
      `}</style>
    </section>
  );
};

export default Contact;
