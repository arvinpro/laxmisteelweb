"use client";

import React from 'react';
import { X, User, Briefcase, Award, GraduationCap } from 'lucide-react';
import { TeamMember } from '@/types/types';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

interface ManagementModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

export default function ManagementModal({ member, onClose }: ManagementModalProps) {
  return (
    <AnimatePresence mode="wait">
      {member && (
        <div className="fixed inset-0 z-50 overflow-hidden" id="management-modal-container">
          {/* Backdrop with smooth fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-black"
          />

          {/* Drawer container */}
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10 md:pl-16">
            <motion.div
              key={member.id} // Re-animate when switching directly between team members
              initial={{ x: '100%', opacity: 0.95 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0.95 }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="w-screen max-w-2xl bg-brand-nearblack text-white h-full shadow-2xl flex flex-col border-l border-brand-black/50"
            >
              {/* Drawer Header */}
              <div className="p-6 md:p-8 border-b border-white/5 flex items-center justify-between bg-brand-black">
                <div className="flex items-center gap-3">
                  <div className="bg-brand-red p-2.5 rounded-sm">
                    <User size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-condensed font-extrabold text-xl md:text-2xl tracking-wider text-white uppercase select-none">
                      Executive Profile
                    </h3>
                    <p className="text-xs text-brand-gold font-mono uppercase tracking-widest">Laxmi Steels Leadership</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="bg-white/5 hover:bg-brand-red text-white p-2.5 rounded-xs transition-colors cursor-pointer focus:outline-none"
                  aria-label="Close Profile"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8">
                
                {/* Header card info */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05, duration: 0.3 }}
                  className="border border-white/5 rounded-sm bg-brand-black/40 p-6 md:p-8 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center gap-6"
                >
                  {/* Subtle red decoration panel */}
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-red" />
                  
                  {/* Mock profile photo avatar */}
                  <div className="w-24 h-24 bg-gradient-to-br from-brand-black to-brand-red/20 border border-white/10 rounded-sm overflow-hidden flex items-center justify-center text-brand-gold flex-shrink-0 relative">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <User size={42} className="opacity-80" />
                    )}
                    <div className="absolute bottom-1 right-1 w-3 h-3 bg-brand-red rounded-full ring-2 ring-brand-nearblack" />
                  </div>

                  <div>
                    <h4 className="font-serif text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-2 md:mb-1">
                      {member.name}
                    </h4>
                    <p className="font-condensed font-bold text-base md:text-lg tracking-wider text-brand-gold uppercase">
                      {member.title}
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-[10px] font-mono tracking-widest uppercase bg-brand-red/10 border border-brand-red/30 px-2.5 py-0.5 text-brand-red">
                        {member.category === 'board' ? 'Board Of Directors' : 'Executive Management'}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Core Experience Bio */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="space-y-4"
                >
                  <h5 className="font-condensed font-bold text-base tracking-widest text-white uppercase border-b border-brand-red/30 pb-2 flex items-center gap-2">
                    <Briefcase size={16} className="text-brand-red" />
                    <span>Professional Overview</span>
                  </h5>
                  <p className="text-gray-300 font-sans text-base leading-relaxed">
                    {member.bio}
                  </p>
                </motion.div>

                {/* Full Career Detail */}
                {member.longBio && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.3 }}
                    className="space-y-4"
                  >
                    <h5 className="font-condensed font-bold text-base tracking-widest text-white uppercase border-b border-brand-red/30 pb-2 flex items-center gap-2">
                      <Award size={16} className="text-brand-red" />
                      <span>Distinguished Milestones & Contributions</span>
                    </h5>
                    <p className="text-gray-300 font-sans text-base leading-relaxed bg-brand-black/20 p-5 border-l-2 border-brand-gold">
                      {member.longBio}
                    </p>
                  </motion.div>
                )}

                {/* Technical Strengths Info */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div className="border border-white/5 bg-brand-black/30 p-5">
                    <h6 className="font-condensed font-bold text-xs tracking-widest uppercase text-brand-gold mb-2 flex items-center gap-1.5/2">
                      <GraduationCap size={14} className="text-brand-red" />
                      <span>Scope of Responsibility</span>
                    </h6>
                    <p className="text-xs text-gray-400 leading-normal">
                      Managing and evaluating strict Nepalese Standard (NS) metrics, ISO 9001 compliance standards, and promoting continuous casting machine casting standards.
                    </p>
                  </div>
                  <div className="border border-white/5 bg-brand-black/30 p-5">
                    <h6 className="font-condensed font-bold text-xs tracking-widest uppercase text-brand-gold mb-2 flex items-center gap-1.5/2">
                      <Shield size={14} className="text-brand-red" />
                      <span>Group Affiliation</span>
                    </h6>
                    <p className="text-xs text-gray-400 leading-normal">
                      Coordinating executive plans under <span className="text-red-500"><Link href="https://saurabhgroup.com/" target="_blank" rel="noopener noreferrer">Saurabh Group</Link></span> conglomerates, integrating steel supply lines smoothly for massive high-value national projects.
                    </p>
                  </div>
                </motion.div>

              </div>

              {/* Drawer Footer */}
              <div className="p-6 border-t border-white/5 bg-brand-black flex items-center justify-between">
                <span className="text-[10px] font-mono text-gray-500 uppercase">LAXMI STEELS LTD. est. 2008</span>
                <button
                  onClick={onClose}
                  className="bg-brand-red text-white hover:bg-brand-red/90 font-condensed text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-sm transition-all cursor-pointer focus:outline-none"
                >
                  Close Profile
                </button>
              </div>

            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

// Subtle helper icons
function Shield({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .76-.97l8-2a1 1 0 0 1 .48 0l8 2A1 1 0 0 1 20 6z" />
    </svg>
  );
}
