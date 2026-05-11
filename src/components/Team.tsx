'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const team = [
  {
    name: 'NAVDEEP SHARMA',
    role: 'Founder & Website Systems Developer',
    img: '/images/team/navdeep.png',
    desc: 'Founder & Website Systems Developer. Builds high-converting websites and complete digital systems that help businesses generate leads, trust, and long-term growth.',
    highlight: true,
  },
  {
    name: 'AMIT KUMAR',
    role: 'UI/UX Designer',
    img: '/images/team/amit.png',
    desc: 'Designs clean, modern, and conversion-focused user experiences that make brands look premium and trustworthy.',
  },
  {
    name: 'AJAY',
    role: 'Ads & Performance Marketing Specialist',
    img: '/images/team/ajay.png',
    desc: 'Runs high-performance ad campaigns focused on lead generation, customer acquisition, and business scaling.',
  },
  {
    name: 'UMESH',
    role: 'Social Media & Content Manager',
    img: '/images/team/umesh.png',
    desc: 'Manages content systems, audience engagement, and social media growth strategies for brands.',
  },
  {
    name: 'KHUSHI',
    role: 'Client Support & Communication Manager',
    img: '/images/team/khushi.png',
    desc: 'Handles client communication, updates, coordination, and support to ensure smooth project delivery.',
  },
  {
    name: 'TANISHQ',
    role: 'Lead Generation & Outreach Specialist',
    img: '/images/team/tanishq.png',
    desc: 'Finds business opportunities, manages outreach systems, and helps generate high-quality client leads.',
  }
];

const Team = () => {
  // Order: Amit, NAVDEEP, Ajay, Umesh, Khushi, Tanishq
  const orderedTeam = [
    team[1], // Amit
    team[0], // Navdeep (Center)
    team[2], // Ajay
    team[3], // Umesh
    team[4], // Khushi
    team[5], // Tanishq
  ];

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden bg-[#050505]">
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#7C3AED] font-black tracking-[0.4em] uppercase mb-4 text-sm">
              The Execution Team
            </p>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
              MEET THE <span className="premium-gradient">EXPERTS.</span>
            </h2>
            <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
              A premium modern execution team with real identities and trustworthy presentation. We don't just work; we scale your vision.
            </p>
          </motion.div>
        </div>

        {/* Premium Team Layout */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-4 xl:gap-8 mb-32">
          {orderedTeam.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -15, 
                scale: member.highlight ? 1.05 : 1.03,
                transition: { duration: 0.3 }
              }}
              className={`relative group ${
                member.highlight 
                  ? 'w-[320px] md:w-[380px] z-30' 
                  : 'w-[280px] md:w-[300px] z-20 opacity-90 hover:opacity-100'
              }`}
            >
              {/* Card Container */}
              <div className={`relative aspect-[4/5] rounded-[2rem] overflow-hidden border-2 transition-all duration-500 shadow-2xl ${
                member.highlight 
                  ? 'border-[#7C3AED] shadow-purple-500/20' 
                  : 'border-white/10 group-hover:border-white/30'
              } glass-card`}>
                
                {/* Image */}
                <Image 
                  src={member.img} 
                  alt={member.name} 
                  fill 
                  className={`object-cover transition-all duration-700 ${
                    member.highlight ? 'scale-105 group-hover:scale-110' : 'scale-100 group-hover:scale-105'
                  }`}
                  priority={member.highlight}
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#7C3AED]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-2">
                    {member.highlight && (
                      <span className="px-3 py-1 bg-[#7C3AED] text-white text-[10px] font-black rounded-full uppercase tracking-widest">
                        FOUNDER
                      </span>
                    )}
                    <p className="text-[#7C3AED] text-[10px] font-black uppercase tracking-[0.2em]">
                      {member.role}
                    </p>
                  </div>
                  <h3 className={`text-white font-black leading-tight ${
                    member.highlight ? 'text-3xl' : 'text-2xl'
                  }`}>
                    {member.name}
                  </h3>
                  
                  {/* Subtle reveal on hover */}
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }}
                    whileHover={{ opacity: 1, height: 'auto' }}
                    className="text-slate-400 text-sm mt-4 leading-relaxed line-clamp-3 overflow-hidden"
                  >
                    {member.desc}
                  </motion.p>
                </div>

                {/* Lighting Effect */}
                <div className="absolute -inset-full bg-gradient-to-tr from-white/0 via-white/5 to-white/0 transform -rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
              </div>

              {/* Glow for highlight */}
              {member.highlight && (
                <div className="absolute -inset-4 bg-[#7C3AED]/20 blur-3xl -z-10 rounded-full opacity-50 group-hover:opacity-80 transition-opacity" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile View: Stacked Cards (Handled by flex-wrap above, but we can refine it) */}
        
        {/* Personalized Benefits Grid */}
        <div className="mt-40 relative">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black text-white uppercase tracking-tighter">
              HOW WE <span className="text-[#7C3AED]">POWER</span> YOUR GROWTH
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 group hover:border-[#7C3AED]/40 transition-colors"
              >
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-[#7C3AED]/50 transition-all shadow-xl">
                    <Image 
                      src={member.img} 
                      alt={member.name} 
                      width={64} 
                      height={64} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-lg mb-1 group-hover:text-[#7C3AED] transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-[#7C3AED] text-[10px] font-black uppercase tracking-widest mb-3">
                      {member.role}
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {member.name === 'NAVDEEP SHARMA' && "Architects your digital ecosystem, ensuring every line of code translates into business growth and authority."}
                      {member.name === 'AMIT KUMAR' && "Crafts the visual identity and user journeys that make your brand impossible to ignore and easy to trust."}
                      {member.name === 'AJAY' && "Deploys high-precision marketing systems that turn clicks into customers and data into profit."}
                      {member.name === 'UMESH' && "Engineers your social narrative, building an engaged community around your brand's core values."}
                      {member.name === 'KHUSHI' && "The backbone of project delivery, ensuring seamless communication and 24/7 support for your vision."}
                      {member.name === 'TANISHQ' && "Bridges the gap between your solutions and your ideal clients through sophisticated outreach systems."}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
