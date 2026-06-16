'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

import serviceHero from '@/src/assets/images/salon_coloring_service_1781255484190.jpg';

const CATEGORIES = [
  {
    title: "Cutting & Styling",
    items: [
      { name: "Bespoke Haircut", price: "from $120", desc: "A detailed consultation followed by a tailored cut suited to your bone structure and lifestyle. Includes signature blowout." },
      { name: "Transformation Cut", price: "from $160", desc: "For those making a major length change or shifting to an entirely new style. Extra time is reserved." },
      { name: "Signature Blowout", price: "from $65", desc: "A luxurious wash using customized treatments followed by a voluminous styling." },
      { name: "Event Styling & Updo", price: "from $110", desc: "Elegant, structural styling for weddings, galas, and special occasions." }
    ]
  },
  {
    title: "Color Enhancements",
    items: [
      { name: "Base Color / Retouch", price: "from $95", desc: "Seamless root touch-up using our premium low-tox color line." },
      { name: "Partial Balayage", price: "from $195", desc: "Hand-painted dimensional color focusing on the crown and face-framing areas." },
      { name: "Full Balayage", price: "from $280", desc: "Comprehensive hand-painted dimension throughout the entire head for a sunkissed effect." },
      { name: "Color Correction", price: "Code Consult", desc: "Intensive repair and structural correction of uneven or undesired tones. Priced hourly." },
      { name: "Luxury Gloss", price: "from $75", desc: "A sheer demi-permanent glaze that adds intense shine and tone refinement." }
    ]
  },
  {
    title: "Treatments & Texture",
    items: [
      { name: "Keratin Smoothing", price: "from $350", desc: "Eliminates frizz and cuts drying time in half for up to 5 months." },
      { name: "Scalp Detox Oasis", price: "from $85", desc: "A deep clarifying treatment that purifies the scalp, featuring a 15-minute massage." },
      { name: "Restorative Mask", price: "$45", desc: "An add-on intensive moisture or protein mask customized to what your hair needs immediately." }
    ]
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-[#FAF9F6] selection:bg-[#C5A880] selection:text-white">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-24">
        <Image 
          src={serviceHero} 
          alt="BARBEQ Salon Services" 
          fill 
          className="object-cover" 
          priority 
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/40" />
        
        <div className="relative z-10 text-center text-[#FAF9F6] px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-manrope text-5xl md:text-6xl mb-4"
          >
            Services & Pricing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm uppercase tracking-widest text-[#C5A880]"
          >
            Tailored specifically for you
          </motion.p>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-24 md:py-32 px-6 max-w-4xl mx-auto">
        <p className="text-gray-500 font-light text-center mb-20">
          All pricing listed is a starting point. Final quotes vary based on hair density, length, and the specific artist's level of experience. We provide a definitive quote during your pre-service consultation.
        </p>

        <div className="space-y-24">
          {CATEGORIES.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-manrope text-3xl md:text-4xl text-[#1A1A1A] border-b border-[#E5E0D8] pb-6 mb-10">
                {category.title}
              </h2>
              
              <div className="space-y-12">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex flex-col md:flex-row justify-between items-start md:items-baseline gap-2">
                    <div className="flex-1 pr-8">
                      <h4 className="text-lg text-[#1A1A1A] font-medium tracking-wide mb-2">{item.name}</h4>
                      <p className="text-gray-500 font-light text-sm">{item.desc}</p>
                    </div>
                    <div className="text-[#C5A880] font-medium tracking-widest uppercase text-sm whitespace-nowrap mt-2 md:mt-0">
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center bg-white p-12 lg:p-20 border border-[#E5E0D8]/40 shadow-sm">
          <h3 className="font-manrope text-3xl mb-6">Ready to transform?</h3>
          <p className="text-gray-500 font-light mb-8 max-w-md mx-auto">
            Secure your appointment through our online booking system. For complex color corrections, please call us to schedule a consultation.
          </p>
          <Link href="/contact" className="inline-block bg-[#1A1A1A] text-white px-10 py-4 uppercase tracking-widest text-sm hover:bg-black transition-colors">
            Book Appointment
          </Link>
        </div>
      </section>
    </main>
  );
}
