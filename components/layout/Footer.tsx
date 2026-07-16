"use client";

import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Smile,
  Link2Icon,
  JapaneseYen,
  Inbox,
  Shield,
} from "lucide-react";
import { PageId } from "@/types/types";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import LogoImage from "@/assets/images/laxmi.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface FooterProps {
  onPageChange: (page: PageId) => void;
  onReplaySplash?: () => void;
}

export default function Footer() {
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer
      className="bg-brand-nearblack text-gray-400 border-t-4 border-brand-red mt-0"
      id="global-footer"
    >
      {/* Top Strip - Certification Banner */}
      <div className="border-b border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-white">
            <Shield className="text-brand-red flex-shrink-0" size={32} />
            <div>
              <p className="font-condensed font-extrabold tracking-wider uppercase text-base">
                Nepal's Largest Certified Rebar Producer
              </p>
              <p className="text-xs text-gray-400 font-sans">
                Manufactured using state-of-the-art German Thermex
                High-Ductility Quenching process.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 items-center justify-center font-mono text-xs text-brand-skytext">
            <span className="bg-brand-darksky border border-brand-skyaccent/30 px-3 py-1">
              NS-191 CERTIFIED
            </span>
            <span className="bg-brand-darksky border border-brand-skyaccent/30 px-3 py-1">
              ISO 9001:2015
            </span>
            <span className="bg-brand-darksky border border-brand-skyaccent/30 px-3 py-1">
              BIS ACCREDITED
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12">
        {/* Col 1: Brand Info */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center gap-2 text-left">
            <div className="h-12 md:h-16 flex-shrink-0 relative flex items-center">
              <Image
                src={LogoImage}
                alt="Laxmi Steels Logo"
                className="h-full w-auto object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>
          <p className="text-sm font-sans text-gray-400 leading-relaxed max-w-sm">
            Established in 2008, Laxmi Steels Limited is the premier
            manufacturer of high-quality TMT steel bars in Nepal, producing 800
            Metric Tons daily of earthquake-resistant steel bars using German
            Thermex process.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://www.facebook.com/LaxmiSteelsLimited"
              className="bg-brand-black/50 hover:bg-brand-red p-2.5 rounded-sm text-white transition-all hover:scale-105"
              aria-label="Facebook"
            >
              <FaFacebook size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/laxmi-steels-private-limited/"
              className="bg-brand-black/50 hover:bg-brand-red p-2.5 rounded-sm text-white transition-all hover:scale-105"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://www.youtube.com/@laxmisteelslimited"
              className="bg-brand-black/50 hover:bg-brand-red p-2.5 rounded-sm text-white transition-all hover:scale-105"
              aria-label="YouTube"
            >
              <FaYoutube size={18} />
            </a>
            {/* <a href="https://instagram.com" className="bg-brand-black/50 hover:bg-brand-red p-2.5 rounded-sm text-white transition-all hover:scale-105" aria-label="Instagram">
              <FaInstagram size={18} />
            </a> */}
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="font-condensed font-bold text-sm tracking-widest uppercase text-white border-l-2 border-brand-skyaccent pl-2.5">
            Quick Links
          </h3>
          <ul className="space-y-2.5 text-sm font-sans">
            <li>
              <Link
                href="/"
                scroll={true}
                onClick={handleClick}
                className="hover:text-brand-red transition-colors text-left focus:outline-none cursor-pointer"
              >
                Home Page
              </Link>
            </li>
            <li>
              <Link
                href={"/about"}
                className="hover:text-brand-red transition-colors text-left focus:outline-none cursor-pointer"
              >
                About Our Legacy
              </Link>
            </li>
            <li>
              <Link
                href={"/product"}
                className="hover:text-brand-red transition-colors text-left focus:outline-none cursor-pointer"
              >
                Products Catalogue
              </Link>
            </li>
            <li>
              <Link
                href={"/project"}
                className="hover:text-brand-red transition-colors text-left focus:outline-none cursor-pointer"
              >
                Mega Projects
              </Link>
            </li>
            <li>
              <Link
                href={"/blogs"}
                className="hover:text-brand-red transition-colors text-left focus:outline-none cursor-pointer"
              >
                Steel Knowledge Hub
              </Link>
            </li>
            <li>
              <Link
                href={"/sustainability"}
                className="text-[#8F9E75] hover:text-[#A7B88A] transition-colors text-left focus:outline-none cursor-pointer font-medium"
              >
                Sustainability & ESG
              </Link>
            </li>
            <li>
              <Link
                href={"/csr"}
                className="hover:text-[#8F9E75] transition-colors text-left focus:outline-none cursor-pointer font-medium"
              >
                Corporate Social Responsibility (CSR)
              </Link>
            </li>
            {/* {onReplaySplash && (
              <li className="pt-1.5 border-t border-white/5">
                <button 
                  onClick={onReplaySplash} 
                  className="text-brand-gold hover:text-white transition-colors text-left focus:outline-none cursor-pointer font-bold flex items-center gap-1.5 text-xs uppercase tracking-wide"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4A017] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4A017]"></span>
                  </span>
                  <span>Replay Brand Intro</span>
                </button>
              </li>
            )} */}
          </ul>
        </div>

        {/* Col 3: Products */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="font-condensed font-bold text-sm tracking-widest uppercase text-white border-l-2 border-brand-skyaccent pl-2.5">
            Our Products
          </h3>
          <ul className="space-y-2.5 text-sm font-sans">
            <li>
              <Link
                href="/product?tab=tmt"
                className="hover:text-brand-red transition-colors text-left focus:outline-none cursor-pointer"
              >
                Fe 500/500D TMT Steel Bars
              </Link>
            </li>
            <li>
              <Link
                href="/product?tab=ribbed"
                className="hover:text-brand-red transition-colors text-left focus:outline-none cursor-pointer"
              >
                4.75mm Ribbed Wire
              </Link>
            </li>
            <li>
              <Link
                href="/product?tab=binding"
                className="hover:text-brand-red transition-colors text-left focus:outline-none cursor-pointer"
              >
                High Tensile Binding Wire
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact info */}
        <div className="lg:col-span-4 space-y-4">
          <h3 className="font-condensed font-bold text-sm tracking-widest uppercase text-white border-l-2 border-brand-skyaccent pl-2.5">
            Contact Information
          </h3>
          <ul className="space-y-3.5 text-sm font-sans leading-relaxed">
            <li className="flex items-start gap-2.5">
              <MapPin
                size={18}
                className="text-brand-red mt-0.5 flex-shrink-0"
              />
              <div>
                <span className="block font-semibold text-white text-xs uppercase tracking-wider">
                  HEAD OFFICE
                </span>
                <span className="text-gray-400">
                  Neupane Tower 3rd Floor, Subidhanagar, Kathmandu, Nepal
                </span>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin
                size={18}
                className="text-brand-gold mt-0.5 flex-shrink-0"
              />
              <div>
                <span className="block font-semibold text-white text-xs uppercase tracking-wider">
                  MANUFACTURING PLANT
                </span>
                <span className="text-gray-400">
                  Khaireni, Sunwal-7, Nawalparasi (Lumbini Province), Nepal
                </span>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone
                size={18}
                className="text-brand-red mt-0.5 flex-shrink-0"
              />
              <div>
                <span className="block font-semibold text-white text-xs uppercase tracking-wider font-mono">
                  01-4111571 / 01-4111567
                </span>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={18} className="text-brand-red mt-0.5 flex-shrink-0" />
              <div>
                <span className="block font-semibold text-white text-xs uppercase tracking-widest font-mono">
                  info@laxmisteels.com.np
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6 bg-brand-black/30 font-sans text-xs">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} Shivautomation. All Rights Reserved.
          </p>
          <div className="flex items-center gap-1">
            <span>A proud unit of</span>
            <span className="font-semibold text-white tracking-widest font-condensed uppercase text-sm border-b border-brand-red ml-1">
              <span className="hover:text-[#B8001F] transition ease-in-out">
                <Link
                  href="https://saurabhgroup.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Saurabh Group
                </Link>
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
