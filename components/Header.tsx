'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerActive = isScrolled || mobileMenuOpen;

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerActive ? 'bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E5E0D8]' : 'bg-transparent border-b border-transparent'}`}>
        <div className={`max-w-7xl mx-auto px-6 h-24 flex items-center justify-between transition-colors duration-300 ${headerActive ? 'text-[#1A1A1A]' : 'text-white'}`}>
          <Link href="/" className="font-[family-name:var(--font-poppins)] text-3xl tracking-widest hover:opacity-80 transition-opacity">BARBEQ</Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex flex-1 justify-center space-x-12 text-sm font-light uppercase tracking-widest">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`transition-colors ${pathname === link.href ? 'text-[#C5A880] border-b border-[#C5A880] pb-1' : 'hover:text-[#C5A880]'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link href="/contact" className={`hidden md:block px-6 py-3 uppercase tracking-widest text-xs transition-colors duration-300 ${headerActive ? 'bg-[#1A1A1A] text-[#FAF9F6] hover:bg-black' : 'bg-white text-[#1A1A1A] hover:bg-black hover:text-white'}`}>
            Book Now
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className="md:hidden bg-[#FAF9F6] border-b border-[#E5E0D8] px-6 py-8 flex flex-col space-y-6 text-sm font-light uppercase tracking-widest text-[#1A1A1A]"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className={`${pathname === link.href ? 'text-[#C5A880]' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="bg-[#1A1A1A] text-[#FAF9F6] px-6 py-4 mt-4 uppercase tracking-widest text-xs w-full text-center">
              Book Now
            </Link>
          </motion.div>
        )}
      </nav>
    </>
  );
}
