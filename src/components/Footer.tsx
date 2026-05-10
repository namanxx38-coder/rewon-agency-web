"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Camera,
  Share,
  Globe,
} from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";

function Footer() {
  // Footer link data
  const footerLinks = [
    {
      title: "Services",
      links: [
        { label: "Web Development", href: "#services" },
        { label: "AI Automation", href: "#services" },
        { label: "UI/UX Design", href: "#services" },
        { label: "Marketing", href: "#services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Meet the Team", href: "#about" },
        { label: "Pricing", href: "#pricing" },
        { label: "FAQs", href: "#faq" },
        {
          label: "Live Chat",
          href: "https://wa.me/919812584843",
          pulse: true,
        },
      ],
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#7C3AED]" />,
      text: "hello@rewon.in",
      href: "mailto:hello@rewon.in",
    },
    {
      icon: <Phone size={18} className="text-[#7C3AED]" />,
      text: "+91 9812584843",
      href: "tel:+919812584843",
    },
    {
      icon: <MapPin size={18} className="text-[#7C3AED]" />,
      text: "Rajasthan, Hanumangarh",
    },
  ];

  // Social media icons
  const socialLinks = [
    { icon: <Share size={20} />, label: "Facebook", href: "#" },
    { icon: <Camera size={20} />, label: "Instagram", href: "#" },
    { icon: <Send size={20} />, label: "Twitter", href: "#" },
    { icon: <Globe size={20} />, label: "Website", href: "https://rewon.in" },
  ];

  return (
    <footer className="bg-[#020203] relative h-fit rounded-[3rem] overflow-hidden m-8 border border-white/5 shadow-2xl">
      <div className="max-w-7xl mx-auto p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-6">
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
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Building the future of digital experiences with AI-powered systems and premium creative solutions.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-lg font-bold mb-6 uppercase tracking-widest text-xs">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative w-fit">
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
                    >
                      {link.label}
                    </a>
                    {link.pulse && (
                      <span className="absolute top-0 -right-4 w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse shadow-[0_0_10px_#7C3AED]"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 uppercase tracking-widest text-xs">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3 group">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:border-[#7C3AED]/30 transition-colors">
                    {item.icon}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-slate-400 text-sm font-medium">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-white/5 my-12" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-6 md:space-y-0">
          {/* Social icons */}
          <div className="flex space-x-8 text-slate-500">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-white transition-all transform hover:scale-110"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-slate-500 font-medium">
            &copy; {new Date().getFullYear()} <span className="text-white font-bold">REWON</span> Agency. All rights reserved.
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36 opacity-30 select-none pointer-events-none">
        <TextHoverEffect text="REWON" className="z-50" />
      </div>

      <FooterBackgroundGradient />

      <style jsx>{`
        .premium-gradient {
          background: linear-gradient(to right, #fff 0%, #7C3AED 50%, #3B82F6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
