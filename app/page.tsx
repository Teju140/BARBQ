'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Scissors, Sparkles, Droplets, ArrowRight } from 'lucide-react';

import heroImg from '@/src/assets/images/salon_hero_1781254628849.jpg';
import modelImg from '@/src/assets/images/salon_model_1781254644241.jpg';

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const SERVICES = [
  { icon: Scissors, name: 'Bespoke Cut', price: 'from $85', description: 'Tailored to your bone structure, hair texture, and personal style for a truly customized look.' },
  { icon: Droplets, name: 'Custom Color', price: 'from $150', description: 'Dimensional color, seamless balayage, and expert color correction using premium glosses.' },
  { icon: Sparkles, name: 'Signature Styling', price: 'from $65', description: 'Voluminous blowouts and elegant styling tailored for special events or everyday luxury.' },
];

export default function SalonPage() {
  return (
    <main className="bg-[#FAF9F6] selection:bg-[#C5A880] selection:text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image 
          src={heroImg} 
          alt="BARBEQ Salon Interior" 
          fill 
          className="object-cover scale-105" 
          priority 
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/40" />
        
        <div className="relative z-10 text-center text-[#FAF9F6] px-6 max-w-4xl mx-auto w-full">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-manrope text-5xl md:text-7xl lg:text-8xl mb-6"
          >
            The Art of Hair
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl font-light tracking-wide mb-10 max-w-2xl mx-auto"
          >
            A luxury salon experience tailored to elevate your natural beauty in a serene, modern environment.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link href="/contact" className="inline-block bg-[#FAF9F6] text-[#1A1A1A] px-10 py-5 uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-all duration-300 transform hover:-translate-y-1">
              Reserve Your Time
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={FADE_UP}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-widest text-[#C5A880] text-sm font-semibold mb-4">Our Offerings</p>
          <h2 className="font-manrope text-4xl md:text-5xl text-[#1A1A1A] mb-8">Premium Services</h2>
          <div className="w-12 h-[1px] bg-[#C5A880] mx-auto"></div>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={STAGGER}
          className="grid md:grid-cols-3 gap-8"
        >
          {SERVICES.map((service, index) => (
            <motion.div 
              key={index} 
              variants={FADE_UP}
              className="bg-white p-12 border border-[#E5E0D8]/40 shadow-sm hover:shadow-xl hover:border-[#C5A880]/30 transition-all duration-500 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-[#FAF9F6] flex items-center justify-center mb-8 group-hover:-translate-y-2 transition-transform duration-500">
                <service.icon className="w-7 h-7 text-[#C5A880]" strokeWidth={1.5} />
              </div>
              <h3 className="font-manrope text-2xl text-[#1A1A1A] mb-2">{service.name}</h3>
              <p className="text-[#C5A880] mb-6 font-medium text-sm tracking-widest uppercase">{service.price}</p>
              <p className="text-gray-500 font-light leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link href="/services" className="inline-block border border-[#1A1A1A] text-[#1A1A1A] px-10 py-4 uppercase tracking-widest text-sm hover:bg-[#1A1A1A] hover:text-white transition-all duration-300">
            View All Services
          </Link>
        </div>
      </section>

      {/* The Experience (Split Text / Image) */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] w-full"
          >
            <Image 
              src={modelImg} 
              alt="Aura Model Focus" 
              fill 
              className="object-cover rounded-sm shadow-2xl shadow-black/10"
            />
            {/* Decorative Gold Frame */}
            <div className="absolute -inset-4 border border-[#C5A880]/40 -z-10 translate-x-3 translate-y-3"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="py-8"
          >
            <p className="uppercase tracking-widest text-[#C5A880] text-sm font-semibold mb-4">Our Philosophy</p>
            <h2 className="font-manrope text-4xl md:text-5xl text-[#1A1A1A] mb-8 leading-tight">The BARBEQ <br/>Experience</h2>
            <div className="w-12 h-[1px] bg-[#C5A880] mb-8"></div>
            
            <p className="text-gray-600 font-light leading-relaxed mb-6">
              Step into our sanctuary of style and sophistication. At BARBEQ, we believe that your hair is your most vital accessory. Our master stylists undergo rigorous continued education to refine the latest techniques in cutting, coloring, and styling.
            </p>
            <p className="text-gray-600 font-light leading-relaxed mb-10">
              Using only premium, sustainably-sourced products, we ensure your hair not only looks breathtaking but remains fundamentally, structurally healthy. Every appointment begins with a comprehensive consultation.
            </p>
            <Link href="/about" className="group inline-flex items-center gap-4 text-[#1A1A1A] uppercase tracking-widest text-sm hover:text-[#C5A880] transition-colors border-b border-black hover:border-[#C5A880] pb-1">
              Read Our Story 
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
