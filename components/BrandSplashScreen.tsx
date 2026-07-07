"use client";

import { useEffect } from 'react';
import { motion } from "motion/react";
import logoImage from '../assets/images/laxmi.png';
import Image from 'next/image';
interface BrandSplashScreenProps {
  onComplete: () => void;
}

export default function BrandSplashScreen({ onComplete }: BrandSplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1200); // Snappy loading duration

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      id="brand-splash-screen"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.4, ease: 'easeInOut' }
      }}
      className="fixed inset-0 z-[9999] bg-neutral-950 flex flex-col items-center justify-center select-none"
    >
      <div className="relative flex flex-col items-center gap-6">
        {/* Logo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="w-32 h-32 flex items-center justify-center p-3 bg-black/40 border border-white/5 rounded-xs"
        >
          <Image
            src={logoImage}
            alt="Laxmi Logo"
            className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.05)]"
          />
        </motion.div>

        {/* Minimal Thin Loading Ring */}
        <div className="flex items-center gap-2">
          <svg className="animate-spin h-4 w-4 text-[#8F9E75]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="font-mono text-[10px] text-stone-400 tracking-wider">LOADING...</span>
        </div>
      </div>
    </motion.div>
  );
}
