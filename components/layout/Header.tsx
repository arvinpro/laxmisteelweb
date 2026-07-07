"use client";

import { useState, useEffect } from 'react';
import {
  Menu, X, Phone, ShieldCheck, ArrowRight, Mail, MapPin,
  Briefcase, Newspaper, Building2, ChevronRight, FileCheck,
  Calendar, Heart
} from 'lucide-react';
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import logoImage from '@/assets/images/laxmi.png';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<'career' | 'media' | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
  if (pathname === '/') {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  setIsMobileMenuOpen(false);
};

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const menuItems = [
    { href: '/about',    label: 'About Us' },
    { href: '/product', label: 'Our Products' },
    { href: '/project', label: 'Projects' },
    { href: '/gallery',  label: 'Gallery' },
    { href: '/investor', label: 'Investor Relations' },
  ];

  const isActive = (href: string) => pathname === href;

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    router.push(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          isScrolled || isMobileMenuOpen
            ? 'bg-brand-nearblack/95 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/30'
            : 'bg-transparent border-b border-transparent shadow-none'
        }`}
      >
        {/* TOP UTILITY BAR */}
        <div className="bg-black border-b border-white/10 text-gray-300 text-[11px] font-sans py-1 hidden lg:block">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-2.5">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 md:gap-5">
              <a
                href="tel:+97714412351"
                className="flex items-center gap-1.5 hover:text-brand-skytext transition-colors duration-200"
              >
                <Phone size={11} className="text-brand-skytext" />
                <span className="font-mono tracking-tight text-white"> 01-4111571/67</span>
              </a>
              <a
                href="mailto:info@laxmisteels.com.np"
                className="flex items-center gap-1.5 hover:text-brand-skytext transition-colors duration-200"
              >
                <Mail size={11} className="text-brand-skytext" />
                <span className="font-mono tracking-tight text-white">info@laxmisteels.com.np</span>
              </a>
              <div className="flex items-center gap-1.5 text-gray-300">
                <MapPin size={11} className="text-brand-skytext" />
                <span>Neupane Tower, Subidhanagar, Kathmandu</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 md:gap-5">
              <div className="flex items-center gap-3.5 border-r border-white/10 pr-3.5">
                <button 
                  onClick={() => setActiveModal('career')}
                  className="hover:text-brand-skytext text-white hidden transition-colors duration-200 font-condensed font-bold uppercase tracking-wider text-[10px] flex items-center gap-1 cursor-pointer focus:outline-none"
                >
                  <Briefcase size={10} className="text-brand-skytext" />
                  <span>Careers</span>
                </button>
                <Link
                  href="/blogs"
                  className={`hover:text-brand-skytext transition-colors duration-200 font-condensed font-bold uppercase tracking-wider text-[10px] flex items-center gap-1 ${
                    isActive('/blog') ? 'text-brand-skytext' : 'text-white'
                  }`}
                >
                  <Newspaper size={10} className="text-brand-skytext" />
                  <span>Blogs</span>
                </Link>
                <Link
                  href="/csr"
                  className={`hover:text-brand-skytext transition-colors duration-200 font-condensed font-bold uppercase tracking-wider text-[10px] flex items-center gap-1 ${
                    isActive('/csr') ? 'text-brand-skytext' : 'text-white'
                  }`}
                >
                  <Heart size={10} className="text-brand-skytext" />
                  <span>CSR Core</span>
                </Link>
              </div>

              <div className="flex items-center gap-2 text-white">
                {[
                  { href: 'https://www.facebook.com/profile.php?id=100065564496445', icon: <FaFacebook size={15} />, label: 'Facebook' },
                  { href: 'https://linkedin.com', icon: <FaLinkedin size={15} />, label: 'LinkedIn' },
                  { href: 'https://youtu.be/2xdR0_SrskE?si=fsWSrayRP5g_XwZm', icon: <FaYoutube size={15} />, label: 'YouTube' },
                  // { href: 'https://instagram.com', icon: <FaInstagram size={15} />, label: 'Instagram' },
                ].map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="bg-white/5 hover:bg-brand-red p-1.5 rounded-sm text-white transition-all hover:scale-105 inline-flex items-center justify-center"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MAIN NAV ROW */}
        <div className={`max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between transition-all duration-500 ease-in-out ${
          isScrolled ? 'py-2 md:py-2.5' : 'py-3.5 md:py-4.5'
        }`}>

          {/* Logo */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className={`flex-shrink-0 relative flex items-center transition-all duration-500 ease-in-out ${
              isScrolled ? 'h-9 md:h-12' : 'h-11 md:h-14'
            }`}>
              <Image
                src={logoImage}
                alt="Laxmi Steels Logo"
                className="h-full w-auto object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] transition-transform group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm uppercase tracking-wider font-sans font-medium transition-colors border-l-2 focus:outline-none ${
                  isActive(item.href)
                    ? 'border-brand-skytext text-white bg-brand-darksky/40'
                    : 'border-transparent text-gray-300 hover:text-white hover:bg-brand-darksky/20'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="bg-brand-red text-white hover:bg-brand-red/90 font-condensed text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-sm transition-all shadow-md transform hover:scale-[1.02] focus:outline-none"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-brand-red p-3 focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-brand-nearblack z-40 flex flex-col pt-24 px-6 md:px-12 animate-fade-in lg:hidden">
          <div className="flex flex-col gap-5 overflow-y-auto pb-10">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-left py-2.5 border-b border-white/5 font-serif text-2xl md:text-3xl font-extrabold text-white hover:text-brand-red transition-all flex items-center justify-between group cursor-pointer focus:outline-none"
              >
                <span className={isActive(item.href) ? 'text-brand-red pl-2 border-l-4 border-brand-red' : ''}>
                  {item.label}
                </span>
                <ArrowRight size={22} className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-red" />
              </button>
            ))}

            {/* Mobile utility links */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/5">
              <button
                onClick={() => { setIsMobileMenuOpen(false); setActiveModal('career'); }}
                className="flex flex-col items-center justify-center text-center bg-neutral-900 border border-white/5 p-2 rounded-xs"
              >
                <Briefcase size={14} className="text-brand-gold mb-1" />
                <span className="text-white text-[10px] uppercase font-condensed font-bold">Careers</span>
              </button>
              <button
                onClick={() => handleNavClick('/blog')}
                className="flex flex-col items-center justify-center text-center bg-neutral-900 border border-white/5 p-2 rounded-xs"
              >
                <Newspaper size={14} className="text-[#8F9E75] mb-1" />
                <span className="text-white text-[10px] uppercase font-condensed font-bold">Blogs</span>
              </button>
              <button
                onClick={() => handleNavClick('/csr')}
                className={`flex flex-col items-center justify-center text-center bg-neutral-900 border p-2 rounded-xs ${
                  isActive('/csr') ? 'border-[#8F9E75]/40 text-[#8F9E75]' : 'border-white/5 text-white'
                }`}
              >
                <Heart size={14} className="text-brand-gold mb-1" />
                <span className="text-white text-[10px] uppercase font-condensed font-bold">CSR Core</span>
              </button>
            </div>

            <div className="mt-4 flex flex-col gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3 text-brand-gold font-mono text-sm">
                <ShieldCheck size={18} />
                <span>NS · ISO 9001 · BIS Certified</span>
              </div>
              <button
                onClick={() => handleNavClick('/contact')}
                className="w-full bg-brand-red text-white py-3 font-condensed font-bold uppercase tracking-widest text-center mt-2 focus:outline-none cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CAREER MODAL */}
      {activeModal === 'career' && (
        <div className="fixed inset-0 bg-brand-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6 select-none animate-fade-in">
          <div className="bg-brand-nearblack border border-brand-border w-full max-w-lg p-6 md:p-8 space-y-6 relative rounded-xs shadow-2xl">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer focus:outline-none"
              aria-label="Close career modal"
            >
              <X size={20} />
            </button>

            <div className="space-y-2">
              <span className="font-condensed font-bold text-xs uppercase tracking-widest text-brand-gold block">
                Join Laxmi Steels Team
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-white uppercase tracking-tight leading-tight">
                Build the Foundations of Tomorrow
              </h3>
            </div>

            <p className="text-xs text-gray-300 font-sans leading-relaxed">
              We are Nepal's premier steel manufacturing industry. We are constantly expanding operations at our Nawalparasi plant (currently producing 800 Metric Tons daily) and looking for exceptional talent to optimize high-stress metallurgical solutions.
            </p>

            <div className="space-y-3 bg-brand-black p-4 border border-white/5 rounded-xs">
              <h4 className="font-condensed font-bold text-xs uppercase text-brand-gold tracking-wider flex items-center gap-1.5">
                <Building2 size={13} />
                <span>Open Engineering Positions</span>
              </h4>
              <ul className="space-y-2 text-xs text-gray-400 font-sans">
                {[
                  'Senior Metallurgical Process Control Engineer (Sunwal Plant)',
                  'Thermex Quenching Operations Supervisor',
                  'Associate Occupational Health & Safety Inspector',
                ].map((role) => (
                  <li key={role} className="flex items-center gap-2">
                    <ChevronRight size={10} className="text-brand-red" />
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 pt-1 border-t border-white/5">
              <p className="text-[11px] text-gray-400 font-sans leading-normal">
                If you excel in chemical control, precision engineering, or heavy industrial logistics, send your updated resume and cover letter directly to our human resources inbox.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="mailto:careers@laxmisteels.com.np"
                  className="w-full sm:w-auto flex-1 bg-brand-red hover:bg-[#9E0016] text-white font-condensed font-bold text-xs uppercase tracking-widest py-3 px-6 text-center transition-all flex items-center justify-center gap-2"
                >
                  <Mail size={13} />
                  <span>Apply via CV Submission</span>
                </a>
                <button
                  onClick={() => setActiveModal(null)}
                  className="w-full sm:w-auto bg-transparent hover:bg-white/5 text-gray-300 font-condensed font-bold text-xs uppercase tracking-widest py-3 px-6 text-center border border-white/10 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MEDIA MODAL */}
      {activeModal === 'media' && (
        <div className="fixed inset-0 bg-brand-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6 select-none animate-fade-in">
          <div className="bg-brand-nearblack border border-brand-border w-full max-w-lg p-6 md:p-8 space-y-6 relative rounded-xs shadow-2xl">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer focus:outline-none"
              aria-label="Close media modal"
            >
              <X size={20} />
            </button>

            <div className="space-y-2">
              <span className="font-condensed font-bold text-xs uppercase tracking-widest text-brand-gold block">
                Corporate Media Center
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-white uppercase tracking-tight leading-tight">
                Press & Industry Updates
              </h3>
            </div>

            <p className="text-xs text-gray-300 font-sans leading-relaxed">
              Explore national publications, recent accolades, commercial developments, and official communication bulletins published by Laxmi Steels Limited.
            </p>

            <div className="space-y-4 max-h-60 overflow-y-auto pr-2">
              {[
                {
                  date: 'May 25, 2026',
                  title: 'Industrial Expansion: Plant Reaches 800 Metric Tons Daily Capacity',
                  desc: 'Laxmi Steels inaugurates fully automated mill sequence line in Sunwal, Nawalparasi, setting Nepal\'s benchmark for raw steel engineering operations.',
                },
                {
                  date: 'April 12, 2026',
                  title: 'Gold Award for Structural Safety and Earthquake Resilience',
                  desc: 'Society of Nepalese Structural Engineers awards Laxmi Steels FE 500D rebars with the primary commendation for supreme seismic resistance tests.',
                },
              ].map((item) => (
                <div key={item.date} className="border border-white/5 bg-brand-black p-3.5 space-y-1.5 rounded-xs hover:border-brand-red transition-all">
                  <div className="flex items-center gap-2 text-[10px] text-brand-gold font-mono">
                    <Calendar size={11} />
                    <span>{item.date}</span>
                  </div>
                  <h4 className="font-condensed font-bold text-sm uppercase text-white">{item.title}</h4>
                  <p className="text-[11px] text-gray-400 leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-white/5 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={typeof logoImage === 'string' ? logoImage : logoImage.src}
                download="laxmi_steels_media_kit"
                className="w-full sm:w-auto flex-1 bg-brand-red hover:bg-[#9E0016] text-white font-condensed font-bold text-xs uppercase tracking-widest py-3 px-6 text-center transition-all flex items-center justify-center gap-2"
              >
                <FileCheck size={13} />
                <span>Download Press Assets</span>
              </a>
              <button
                onClick={() => setActiveModal(null)}
                className="w-full sm:w-auto bg-transparent hover:bg-white/5 text-gray-300 font-condensed font-bold text-xs uppercase tracking-widest py-3 px-6 text-center border border-white/10 transition-colors"
              >
                Close Media Center
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}