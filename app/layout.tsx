import type {Metadata} from 'next';
import { Inter, Manrope, Poppins } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css'; // Global styles

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: 'BARBEQ | Premium Salon',
  description: 'Elevate your natural beauty at BARBEQ Premium Salon.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} ${poppins.variable} scroll-smooth`}>
      <body className="antialiased font-sans bg-[#FAF9F6] text-[#1A1A1A] flex flex-col min-h-screen" suppressHydrationWarning>
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
