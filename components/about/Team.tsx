"use client";

import { useState } from "react";
import { Award, User, ChevronRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { TeamMember } from "@/types/types";
import { TEAM_MEMBERS } from "@/data";
import ManagementModal from "../ManagementModal";

function Team() {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  return (
    <section>
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 space-y-16">
        <div className="text-center max-w-xl mx-auto space-y-4 select-none">
          <span className="text-[#B8001F] text-sm font-bold uppercase tracking-widest">
            Our Organizational Grid
          </span>
          <h3 className="text-3xl font-extrabold text-brand-black uppercase">
            Executive Leadership & Management
          </h3>
          <p className="text-base text-brand-muted leading-relaxed">
            Meet the visionaries, financial guardians, and operations
            specialists guiding our journey to elevate Shivautomation and Laxmi
            Steels Limited's infrastructure standards.
          </p>
        </div>

        {/* 1. BOARD OF DIRECTORS (TOP AUTHORITIES) */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 border-b border-brand-border pb-4">
            <Award className="text-brand-red w-5 h-5 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-bold text-brand-black uppercase tracking-wide">
                Board of Directors
              </h4>
              <p className="text-xs text-brand-muted uppercase tracking-widest">
                Governing Council & Ultimate Authorities
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
            {TEAM_MEMBERS.filter((member) => member.category === "board").map(
              (member) => (
                <div
                  key={member.id}
                  onClick={() => setSelectedMember(member)}
                  className="bg-white border-2 border-brand-red/10 hover:border-brand-red bg-linear-to-b hover:from-white hover:to-brand-red/[0.02] relative rounded-xs p-6 shadow-xs hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between hover:translate-y-[-2px] duration-300"
                >
                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-neutral-100 rounded-xs overflow-hidden flex-shrink-0 relative shadow-sm">
                        {member.image ? (
                          <Image
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-[#B8001F] bg-brand-red/5">
                            <User
                              size={28}
                              className="group-hover:scale-105 transition-transform"
                            />
                          </div>
                        )}                    
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="inline-block text-[9px] font-mono font-extrabold text-[#B8001F] uppercase bg-brand-red/5 px-2 py-0.5 rounded-full mb-1 tracking-wider">
                          {member.title === "Chairman"
                            ? "Board Chairman"
                            : "Board Director"}
                        </span>
                        <h4 className="font-extrabold text-base uppercase tracking-wide text-brand-black group-hover:text-brand-red transition-colors">
                          {member.name}
                        </h4>
                        <p className="text-sm text-brand-muted font-semibold mt-0.5">
                          {member.title}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-brand-muted leading-relaxed pl-3 border-l-2 border-brand-border group-hover:border-brand-red/40 transition-colors py-0.5 italic text-left">
                      "{member.bio}"
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-brand-border/65 flex justify-between items-center text-[9px] font-mono tracking-wider uppercase text-brand-gold">
                    <span>Show Full Bio</span>
                    <ChevronRight
                      size={12}
                      className="transform group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* 2. CORPORATE EXECUTIVE HEADS */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center gap-4 border-b border-brand-border pb-4">
            <div className="text-brand-gold bg-brand-black/5 p-1 rounded-xs">
              <Sparkles className="w-5 h-5 flex-shrink-0" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-brand-black uppercase tracking-wide">
                Key Corporate Officers
              </h4>
              <p className="text-xs text-brand-muted font-mono uppercase tracking-widest">
                Executive Management & General Secretary
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans max-w-4xl">
            {TEAM_MEMBERS.filter(
              (member) => member.category === "management"
            ).map((member) => (
              <div
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="bg-white border border-brand-border hover:border-brand-black relative rounded-xs p-5 shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col sm:flex-row items-center sm:items-start gap-4 hover:translate-y-[-2px] duration-300"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-neutral-100 border border-brand-border rounded-xs overflow-hidden flex-shrink-0 shadow-xs relative">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-neutral-600">
                      <User size={28} />
                    </div>
                  )}
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <span className="inline-block text-[8px] font-bold text-neutral-500 uppercase bg-neutral-100 px-1.5 py-0.5 rounded-full mb-1.5 tracking-wider">
                    Executive Administration
                  </span>
                  <h4 className="font-condensed font-extrabold text-sm uppercase tracking-wide text-brand-black group-hover:text-brand-black transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-sm text-brand-muted font-semibold mb-2">
                    {member.title}
                  </p>
                  <p className="text-sm text-brand-muted line-clamp-2 leading-relaxed mb-3 pr-2">
                    {member.bio}
                  </p>
                  <span className="inline-flex items-center text-[9px] tracking-wider uppercase text-brand-gold">
                    <span>View Profile</span>
                    <ChevronRight
                      size={10}
                      className="transform group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. CORE DEPARTMENTS & FUNCTIONAL LEADERS */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center gap-4 border-b border-brand-border pb-4">
            <div className="text-brand-black/70 bg-brand-black/5 p-1 rounded-xs">
              <User size={18} className="flex-shrink-0" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-brand-black uppercase tracking-wide">
                Operational & Sales Leadership
              </h4>
              <p className="text-xs text-brand-muted uppercase tracking-widest">
                Heads of Department & Managers
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 font-sans">
            {TEAM_MEMBERS.filter(
              (member) =>
                member.category === "sales" || member.category === "ops"
            ).map((member) => (
              <div
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="bg-neutral-50/50 border border-brand-border/80 hover:border-brand-black relative rounded-xs p-4 hover:bg-white shadow-3xs hover:shadow-xs transition-all cursor-pointer group flex flex-col sm:flex-row gap-4 items-center sm:items-start text-center sm:text-left hover:translate-y-[-1px] duration-200"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-neutral-100 border border-brand-border/60 rounded-xs overflow-hidden flex-shrink-0 shadow-3xs relative">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-neutral-500">
                      <User size={22} />
                    </div>
                  )}
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-center sm:justify-between">
                    <span className="inline-block text-[8px] uppercase bg-brand-border/40 text-brand-black/80 px-2 py-0.5 rounded-full tracking-wider font-semibold">
                      {member.division} division
                    </span>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm uppercase tracking-wide text-brand-black transition-colors group-hover:text-brand-black">
                      {member.name}
                    </h4>
                    <p className="text-sm text-brand-muted font-semibold mt-0.5">
                      {member.title}
                    </p>
                  </div>
                  <p className="text-sm text-brand-muted leading-relaxed line-clamp-2 pt-1">
                    {member.bio}
                  </p>

                  <div className="pt-2 mt-2 border-t border-brand-border/45 flex justify-between items-center text-[9px] font-mono tracking-wider uppercase text-brand-muted group-hover:text-brand-gold transition-colors">
                    <span>View Details</span>
                    <ChevronRight
                      size={10}
                      className="transform group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
       <ManagementModal
              member={selectedMember}
              onClose={() => setSelectedMember(null)}
            />
    </section>
  )
}

export default Team