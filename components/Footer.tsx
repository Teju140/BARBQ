import Link from 'next/link';
import { MapPin, Phone, Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-[#FAF9F6] pt-32 pb-12 px-6 relative overflow-hidden border-t border-[#222]">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C5A880] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Section - Newsletter / CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end border-b border-[#333] pb-16 mb-16 gap-10">
          <div className="max-w-2xl">
            <h2 className="font-manrope text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Ready for your <span className="text-[#C5A880] italic">transformation?</span>
            </h2>
            <p className="text-gray-400 font-light text-lg">
              Join our exclusive list for the latest trends, styling tips, and VIP booking opportunities.
            </p>
          </div>
          <div className="w-full lg:w-auto">
            <form className="flex border-b border-gray-600 focus-within:border-[#C5A880] transition-colors pb-2">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-transparent border-none outline-none text-white placeholder-gray-500 w-full lg:w-72 text-sm font-light uppercase tracking-wider"
              />
              <button type="button" className="text-[#C5A880] hover:text-white transition-colors p-2">
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Main Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          <div className="lg:col-span-4 lg:pr-12">
            <Link href="/" className="font-[family-name:var(--font-poppins)] text-4xl tracking-widest mb-6 block text-white font-bold">BARBEQ</Link>
            <p className="text-gray-400 mb-8 leading-relaxed font-light text-sm">
              Elevating the art of hair in a minimal, luxurious environment. Dedicated to providing an unparalleled salon experience tailored just for you.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-gray-400 hover:bg-[#C5A880] hover:text-[#0A0A0A] hover:border-[#C5A880] transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-gray-400 hover:bg-[#C5A880] hover:text-[#0A0A0A] hover:border-[#C5A880] transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-gray-400 hover:bg-[#C5A880] hover:text-[#0A0A0A] hover:border-[#C5A880] transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="uppercase tracking-widest mb-8 text-white font-medium text-xs">Explore</h4>
            <ul className="space-y-4 text-sm font-light text-gray-400">
              <li><Link href="/" className="hover:text-[#C5A880] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#C5A880] transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-[#C5A880] transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-[#C5A880] transition-colors">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-[#C5A880] transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="lg:col-span-3">
            <h4 className="uppercase tracking-widest mb-8 text-white font-medium text-xs">Visit Us</h4>
            <ul className="space-y-5 text-sm font-light text-gray-400">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#C5A880] shrink-0" /> 
                <span className="leading-relaxed">123 Luxury Lane, <br/>Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-[#C5A880] shrink-0" /> 
                <span>+1 (310) 555-0199</span>
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-3">
            <h4 className="uppercase tracking-widest mb-8 text-white font-medium text-xs">Hours</h4>
            <ul className="space-y-4 text-sm font-light text-gray-400">
              <li className="flex justify-between border-b border-[#222] pb-2">
                <span>Mon - Fri</span> 
                <span className="text-white">9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-[#222] pb-2">
                <span>Saturday</span> 
                <span className="text-white">10:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between text-[#C5A880] pb-2">
                <span>Sunday</span> 
                <span>Closed</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#222] text-xs font-light tracking-widest text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} BARBEQ PREMIUM SALON. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
