'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

import interiorImg from '@/src/assets/images/salon_interior_about_1781255466054.jpg';
import stylistImg1 from '@/src/assets/images/salon_model_1781254644241.jpg'; // using as placeholder
import heroImg from '@/src/assets/images/salon_hero_1781254628849.jpg';

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function AboutPage() {
  return (
    <main className="bg-[#FAF9F6] selection:bg-[#C5A880] selection:text-white">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-24">
        <Image 
          src={interiorImg} 
          alt="BARBEQ Salon Interior" 
          fill 
          className="object-cover" 
          priority 
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/50" />
        
        <div className="relative z-10 text-center text-[#FAF9F6] px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-manrope text-5xl md:text-6xl mb-4"
          >
            Our Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm uppercase tracking-widest text-[#C5A880]"
          >
            A legacy of luxury styling
          </motion.p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-32 px-6 max-w-4xl mx-auto text-center">
        <div className="w-12 h-[1px] bg-[#C5A880] mx-auto mb-10"></div>
        <h2 className="font-manrope text-3xl md:text-5xl text-[#1A1A1A] mb-8 leading-tight">
          "Beauty is not about changing who you are, it's about revealing it with absolute clarity."
        </h2>
        <p className="text-gray-600 font-light leading-relaxed mb-6 text-lg">
          Founded in 2015, BARBEQ began with a singular vision: to create a mindful sanctuary where high-end hair artistry meets holistic relaxation. We believe that a salon visit should be an immersive experience that leaves you feeling understood, empowered, and profoundly beautiful.
        </p>
        <p className="text-gray-600 font-light leading-relaxed text-lg">
          Our space is intentionally designed with minimalist aesthetics to provide an escape from the outside noise. Every stylist at BARBEQ is an independent artist, rigorously trained in modern European techniques and armed with the finest botanical luxury color systems.
        </p>
      </section>

      {/* Team Grid */}
      <section className="bg-white py-24 md:py-32 px-6 border-t border-[#E5E0D8]/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="uppercase tracking-widest text-[#C5A880] text-sm font-semibold mb-4">The Masters</p>
            <h2 className="font-manrope text-4xl text-[#1A1A1A] mb-8">Meet Our Artists</h2>
            <div className="w-12 h-[1px] bg-[#C5A880] mx-auto"></div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER}
            className="grid md:grid-cols-3 gap-12"
          >
            {[
              { name: "Elena Rostova", role: "Creative Director", img: interiorImg },
              { name: "Julian Hayes", role: "Master Colorist", img: heroImg },
              { name: "Sarah Lin", role: "Extensions Specialist", img: stylistImg1 }
            ].map((stylist, idx) => (
              <motion.div key={idx} variants={FADE_UP} className="group">
                <div className="relative aspect-[3/4] mb-6 overflow-hidden">
                  <Image fill src={stylist.img} alt={stylist.name} className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-105" />
                </div>
                <h3 className="font-manrope text-2xl text-[#1A1A1A] mb-1">{stylist.name}</h3>
                <p className="text-sm uppercase tracking-widest text-[#C5A880]">{stylist.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
