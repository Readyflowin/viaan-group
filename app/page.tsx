"use client";

import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, ArrowRight, Instagram, 
  ShieldCheck, Gem, TrendingUp, MapPin, MessageCircle, Play 
} from 'lucide-react';
import { motion } from 'framer-motion';

/* --- DATA --- */
const SOCIAL_POSTS = [
  {
    id: 1,
    title: "Grand Entrance",
    link: "https://www.instagram.com/viaangroupofficial",
    video: "/videos/reel1.mp4", 
    tag: "ARCHITECTURAL MARVEL"
  },
  {
    id: 2,
    title: "Luxury Interiors",
    link: "https://www.instagram.com/viaangroupofficial",
    video: "/videos/reel2.mp4", 
    tag: "PREMIUM FINISHES"
  },
  {
    id: 3,
    title: "Rooftop Vibes",
    link: "https://www.instagram.com/viaangroupofficial",
    video: "/videos/reel3.mp4", 
    tag: "LIFESTYLE"
  },
  {
    id: 4,
    title: "Happy Homes",
    link: "https://www.instagram.com/viaangroupofficial",
    video: "/videos/reel4.mp4", 
    tag: "COMMUNITY"
  }
];

// Duplicate posts to create seamless infinite scroll loop
const MARQUEE_POSTS = [...SOCIAL_POSTS, ...SOCIAL_POSTS, ...SOCIAL_POSTS];

export default function ViaanGroup() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navbar background effect on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white text-[#1a202c] min-h-screen font-sans selection:bg-[#C5A059] selection:text-white overflow-x-hidden">
      
      {/* --- FLOATING CTA --- */}
      <a 
        href="https://wa.me/919610003121" 
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform flex items-center gap-2 border-2 border-white"
      >
        <MessageCircle size={24} fill="white" />
      </a>

      {/* --- NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#0F1420]/95 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-12 h-12 flex items-center justify-center font-serif font-bold text-2xl shadow-lg rounded-sm transition-colors ${scrolled ? 'bg-[#C5A059] text-[#0F1420]' : 'bg-white text-[#0F1420]'}`}>
              V
            </div>
            <div className="hidden md:block">
              <h1 className={`font-serif text-xl font-bold tracking-wide leading-none ${scrolled ? 'text-white' : 'text-white'}`}>VIAAN GROUP</h1>
              <p className="text-[10px] text-[#C5A059] uppercase tracking-[0.3em] font-bold mt-1">Developers</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-bold tracking-[0.2em] uppercase">
            {['Projects', 'Legacy', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`transition-colors hover:text-[#C5A059] ${scrolled ? 'text-gray-300' : 'text-white'}`}>
                {item}
              </a>
            ))}
            <button className="bg-[#C5A059] text-[#0F1420] px-6 py-3 hover:bg-white transition-colors shadow-lg font-bold">
              Download Brochure
            </button>
          </div>

          <button className={`md:hidden ${scrolled ? 'text-white' : 'text-white'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
           <div className="md:hidden absolute top-full left-0 w-full bg-[#0F1420] border-t border-gray-800 p-8 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top-5">
              {['Projects', 'Legacy', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-xl font-serif text-white border-b border-gray-800 pb-2">
                  {item}
                </a>
              ))}
           </div>
        )}
      </nav>

      {/* --- HERO SECTION (Scroll Indicator Removed) --- */}
      <header className="relative h-[90vh] md:h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay loop muted playsInline 
            className="w-full h-full object-cover opacity-80 scale-105 animate-slow-zoom"
          >
            <source src="/videos/reel1.mp4" type="video/mp4" />
          </video>
          {/* Gradients for text visibility */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1420] via-transparent to-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-20 text-center flex flex-col items-center">
            <div className="mb-6 animate-fade-in-up">
              <span className="text-[#C5A059] border-y border-[#C5A059] px-6 py-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] bg-black/20 backdrop-blur-sm">
                Jaipur's Finest
              </span>
            </div>
            
            <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-serif text-white leading-[0.9] mb-8 drop-shadow-2xl tracking-tight">
              Crafting <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] to-[#F3E5AB]">Legacy</span>
            </h1>
            
            <div className="flex flex-col md:flex-row gap-6 mt-8">
               <a href="#projects" className="group relative px-8 py-4 bg-[#C5A059] text-[#0F1420] font-bold uppercase tracking-widest text-xs overflow-hidden">
                 <span className="relative z-10 group-hover:text-white transition-colors">Explore Projects</span>
                 <div className="absolute inset-0 bg-[#0F1420] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
               </a>
               <a href="#contact" className="px-8 py-4 border border-white/30 text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-[#0F1420] transition-colors backdrop-blur-sm">
                 Book Site Visit
               </a>
            </div>
        </div>
      </header>

      {/* --- SECTION 2: THE "VIAAN LIFE" (REELS AUTO-SLIDE / MARQUEE) --- */}
      <section className="bg-[#0F1420] py-20 md:py-32 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 mb-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
             <div>
                <h3 className="text-[#C5A059] text-xs font-bold uppercase tracking-[0.3em] mb-4">Experience The Vibe</h3>
                <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
                  Live the <span className="italic text-gray-500">Viaan Life.</span>
                </h2>
             </div>
             <a href="https://instagram.com/viaangroupofficial" className="flex items-center gap-3 text-white border-b border-[#C5A059] pb-1 hover:text-[#C5A059] transition-colors text-sm uppercase tracking-widest">
               <Instagram size={18} /> @viaangroupofficial
             </a>
          </div>
        </div>

        {/* --- AUTO SLIDING MARQUEE --- */}
        <div className="relative w-full overflow-hidden">
          {/* Side Fades for smooth look */}
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#0F1420] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#0F1420] to-transparent z-20 pointer-events-none"></div>

          <motion.div 
            className="flex gap-6 w-max"
            animate={{ x: "-33.33%" }} 
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {MARQUEE_POSTS.map((post, index) => (
              <div key={`${post.id}-${index}`} className="group relative h-[450px] w-[300px] shrink-0 overflow-hidden rounded-sm cursor-pointer border border-white/5">
                <video 
                  src={post.video}
                  autoPlay loop muted playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[#C5A059] text-[9px] font-bold uppercase tracking-widest border border-[#C5A059] px-2 py-1 mb-2 inline-block bg-black/50 backdrop-blur-sm">
                    {post.tag}
                  </span>
                  <h3 className="text-xl font-serif text-white mb-2">{post.title}</h3>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                  <Play size={24} className="text-white fill-white" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 3: THE LEGACY --- */}
      <section id="legacy" className="py-24 bg-white relative">
        <div className="max-w-[1200px] mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                <div className="absolute -top-10 -left-10 text-[10rem] font-serif text-gray-100 font-bold leading-none select-none">
                  10+
                </div>
                <h2 className="text-5xl md:text-7xl font-serif text-[#0F1420] relative z-10 mb-8 leading-tight">
                  Built on <br/> <span className="text-[#C5A059]">Trust.</span>
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-8 font-light">
                  "At Viaan Group, we don't build houses; we build sanctuaries where families grow. Our legacy is defined not by the bricks we lay, but by the promises we keep."
                </p>
                <div className="flex gap-12 border-t border-gray-100 pt-8">
                  <div>
                    <div className="text-3xl font-serif font-bold text-[#0F1420]">100%</div>
                    <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">On Time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-serif font-bold text-[#0F1420]">200+</div>
                    <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">Families</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8">
                 {[
                   { icon: ShieldCheck, title: "Transparency", desc: "No hidden costs. What you see is what you get." },
                   { icon: Gem, title: "Craftsmanship", desc: "Premium materials sourced from the best brands." },
                   { icon: TrendingUp, title: "Location", desc: "Strategic spots in Jaipur for high ROI." }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-6 p-6 hover:bg-[#F9FAFB] transition-colors rounded-sm border-l-2 border-transparent hover:border-[#C5A059]">
                      <div className="text-[#C5A059] shrink-0">
                        <item.icon size={32} />
                      </div>
                      <div>
                        <h3 className="text-xl font-serif font-bold text-[#0F1420] mb-2">{item.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* --- SECTION 4: FEATURED PROJECT --- */}
      <section id="projects" className="py-24 bg-[#F5F5F7] overflow-hidden">
         <div className="max-w-[1400px] mx-auto px-6">
            <div className="text-center mb-16">
               <span className="text-[#C5A059] text-xs font-bold uppercase tracking-[0.3em]">Flagship Project</span>
               <h2 className="text-4xl md:text-6xl font-serif text-[#0F1420] mt-4">Viaan's Radiant</h2>
            </div>

            <div className="relative h-[600px] md:h-[700px] w-full group overflow-hidden shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200"
                 alt="Viaan's Radiant"
                 className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
               />
               
               <div className="absolute inset-0 bg-gradient-to-r from-[#0F1420]/90 via-transparent to-transparent md:w-1/2" />
               
               <div className="absolute top-0 left-0 h-full w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center text-white">
                  <div className="flex gap-4 mb-6">
                     <span className="border border-white/30 px-4 py-2 text-xs uppercase tracking-widest">Vaishali Nagar</span>
                     <span className="bg-[#C5A059] text-[#0F1420] px-4 py-2 text-xs uppercase tracking-widest font-bold">Ready to Move</span>
                  </div>
                  <h3 className="text-5xl md:text-7xl font-serif mb-6 leading-none">Luxury <br/> Redefined.</h3>
                  <p className="text-gray-300 text-lg mb-8 max-w-sm leading-relaxed">
                    3 BHK Ultra-Luxury Apartments with Rooftop Amenities, Vastu Compliance, and Premium Fittings.
                  </p>
                  <button className="bg-white text-[#0F1420] px-10 py-4 w-fit font-bold uppercase tracking-widest text-xs hover:bg-[#C5A059] hover:text-white transition-colors">
                    View Floor Plans
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contact" className="bg-[#0F1420] text-white pt-24 pb-12 border-t border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Start Your Journey.</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#0F1420] transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-1">Visit Us</h4>
                  <p className="text-xl">160 E, Narayan Puri A,<br/>Vaishali Nagar Ext, Jaipur</p>
                </div>
              </div>
              <div className="flex items-start gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#0F1420] transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-1">Call Us</h4>
                  <p className="text-xl font-bold">+91 96100 03121</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-10 border border-white/10">
            <h3 className="text-2xl font-serif mb-6 text-[#C5A059]">Schedule a Site Visit</h3>
            <form className="space-y-4">
              <input type="text" className="w-full bg-black/30 border border-white/10 p-4 text-sm focus:border-[#C5A059] outline-none text-white transition-colors" placeholder="Your Name" />
              <input type="tel" className="w-full bg-black/30 border border-white/10 p-4 text-sm focus:border-[#C5A059] outline-none text-white transition-colors" placeholder="Phone Number" />
              <button className="w-full bg-[#C5A059] text-[#0F1420] py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors mt-2">
                Send Request
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
          <p>© 2026 Viaan Group. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}