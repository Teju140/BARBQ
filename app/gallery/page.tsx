'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

import img1 from '@/src/assets/images/salon_gallery_1_1781255498991.jpg';
import img2 from '@/src/assets/images/salon_coloring_service_1781255484190.jpg';
import img3 from '@/src/assets/images/salon_interior_about_1781255466054.jpg';
import img4 from '@/src/assets/images/salon_hero_1781254628849.jpg';
import img5 from '@/src/assets/images/salon_model_1781254644241.jpg';

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const FADE_UP = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const galleryImages = [
  { src: img1, alt: "Sleek straight hair back view", aspect: "aspect-[3/4]" },
  { src: img2, alt: "Stylist applying hair dye", aspect: "aspect-[4/5]" },
  { src: img3, alt: "Luxury salon interior seating", aspect: "aspect-square" },
  { src: img5, alt: "Beautiful wavy hair model", aspect: "aspect-[3/4]" },
  { src: img4, alt: "Salon wide view", aspect: "aspect-[16/9]" },
  { src: img1, alt: "Another hair detail", aspect: "aspect-[4/5]" },
];

export default function GalleryPage() {
  return (
    <main className="bg-[#FAF9F6] selection:bg-[#C5A880] selection:text-white pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6 mt-16 mb-24 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-manrope text-5xl md:text-6xl text-[#1A1A1A] mb-6"
        >
          Our Gallery
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-500 font-light max-w-2xl mx-auto"
        >
          Explore a curated selection of our favorite transformations and the serene environment of our salon. 
        </motion.p>
        <div className="w-12 h-[1px] bg-[#C5A880] mx-auto mt-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={STAGGER}
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {galleryImages.map((image, idx) => (
            <motion.div 
              key={idx} 
              variants={FADE_UP} 
              className={`relative w-full ${image.aspect} overflow-hidden group cursor-pointer inline-block`}
            >
              <Image 
                src={image.src} 
                alt={image.alt} 
                fill 
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <div className="mt-32 text-center">
        <p className="uppercase tracking-widest text-sm text-gray-400 mb-4">Follow us for more inspiration</p>
        <a href="#" className="font-[family-name:var(--font-poppins)] text-3xl hover:text-[#C5A880] transition-colors">@barbeqsalon</a>
      </div>
    </main>
  );
}
