'use client';

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="bg-[#FAF9F6] selection:bg-[#C5A880] selection:text-white pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 mt-16 mb-24">
        
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-manrope text-5xl md:text-6xl text-[#1A1A1A] mb-6"
          >
            Get In Touch
          </motion.h1>
          <div className="w-12 h-[1px] bg-[#C5A880] mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-manrope text-3xl mb-8">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">First Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-[#C5A880] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-[#C5A880] transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-[#C5A880] transition-colors" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Service Interest</label>
                <select className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-[#C5A880] transition-colors appearance-none">
                  <option>Haircut & Styling</option>
                  <option>Color Services</option>
                  <option>Extensions</option>
                  <option>Consultation</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Your Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-[#C5A880] transition-colors resize-none"></textarea>
              </div>
              <button className="bg-[#1A1A1A] text-white px-10 py-4 uppercase tracking-widest text-sm hover:bg-black transition-colors w-full md:w-auto">
                Submit Message
              </button>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-12 lg:p-16 border border-[#E5E0D8]/40 shadow-sm flex flex-col justify-center"
          >
            <h3 className="font-manrope text-3xl mb-10">Salon Details</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <MapPin className="w-6 h-6 text-[#C5A880] shrink-0 mt-1" />
                <div>
                  <h4 className="uppercase tracking-widest text-xs font-semibold mb-2">Location</h4>
                  <p className="text-gray-500 font-light">123 Luxury Lane<br/>Beverly Hills, CA 90210</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <Phone className="w-6 h-6 text-[#C5A880] shrink-0 mt-1" />
                <div>
                  <h4 className="uppercase tracking-widest text-xs font-semibold mb-2">Phone</h4>
                  <p className="text-gray-500 font-light">+1 (310) 555-0199</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <Mail className="w-6 h-6 text-[#C5A880] shrink-0 mt-1" />
                <div>
                  <h4 className="uppercase tracking-widest text-xs font-semibold mb-2">Email</h4>
                  <p className="text-gray-500 font-light">appointments@barbeqsalon.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <Clock className="w-6 h-6 text-[#C5A880] shrink-0 mt-1" />
                <div>
                  <h4 className="uppercase tracking-widest text-xs font-semibold mb-2">Hours</h4>
                  <div className="text-gray-500 font-light space-y-1">
                    <p className="flex justify-between w-48"><span>Mon - Fri</span><span>9am - 7pm</span></p>
                    <p className="flex justify-between w-48"><span>Saturday</span><span>10am - 5pm</span></p>
                    <p className="flex justify-between w-48"><span>Sunday</span><span>Closed</span></p>
                  </div>
                </div>
              </div>
            </div>
            
          </motion.div>

        </div>
      </div>
    </main>
  );
}
