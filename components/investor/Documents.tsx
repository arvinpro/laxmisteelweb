"use client";

import { useState } from 'react';
import { FileText, Calendar, Download, Eye, Info, FolderArchive, ChevronRight } from 'lucide-react';
import IsoScannedCertImg from '@/assets/images/ccs.jpg';
import NepalStandardsScannedCertImg from '@/assets/images/ccs1.jpg';
import BisLicenseScannedCertImg from '@/assets/images/ccs2.jpg';

function Documents() {
     const [activeTab, setActiveTab] = useState<'annual' | 'quarterly' | 'ipo' | 'notices'>('annual');

  const reportGroups = {
    annual: {
      title: 'Annual Financial Reports',
      desc: 'Mandated annual financial statements, balances, board audit reports, and company performance statistics for the respective fiscal years.',
      availableDocs: [
        { 
          title: 'Annual General Report FY 2079/2080 (Upto 79/80)', 
          date: 'Oct 24, 2024', 
          size: '4.8 MB', 
          url: IsoScannedCertImg.src 
        },
        { 
          title: 'Annual General Report FY 2080/2081 (Upto 80/81)', 
          date: 'Nov 12, 2025', 
          size: '4.2 MB', 
          url: NepalStandardsScannedCertImg.src 
        }
      ],
      upcomingDocs: [
        { 
          title: 'Annual General Report FY 2081/2082 (Upto 81/82)', 
          status: 'Coming Soon', 
          remark: 'Currently the document is under review.' 
        },
        { 
          title: 'Annual General Report FY 2082/2083 (Upto 82/83)', 
          status: 'Coming Soon', 
          remark: 'Currently the document is under review.' 
        }
      ]
    },
    quarterly: {
      title: 'Quarterly Statements',
      desc: 'Mid-term un-audited balance accounts and short-term operational targets matching direct rolling mill parameters.',
      availableDocs: [
        { 
          title: 'First Quarter Balance Sheet & Financials FY 2081/2082', 
          date: 'Nov 14, 2024', 
          size: '1.2 MB', 
          url: IsoScannedCertImg.src 
        },
        { 
          title: 'Second Quarter Financial Analysis FY 2081/2082', 
          date: 'Feb 18, 2025', 
          size: '1.1 MB', 
          url: NepalStandardsScannedCertImg.src 
        }
      ],
      upcomingDocs: [
        { 
          title: 'Third Quarter Balance Account FY 2081/2082', 
          status: 'Coming Soon', 
          remark: 'Currently the document is under review.' 
        }
      ]
    },
    ipo: {
      title: 'IPO Filings & Issuance',
      desc: 'Official securities exchange notices, prospectus listings, and public offering details for Laxmi Steels public milestones.',
      availableDocs: [],
      upcomingDocs: [
        { 
          title: 'Initial Public Offering Draft Prospectus (Draft)', 
          status: 'Coming Soon', 
          remark: 'Currently the document is under review.' 
        }
      ]
    },
    notices: {
      title: 'Corporate Advisory Notices',
      desc: 'Official board resolutions, general AGM statements, dividend indices, and statutory public disclosures.',
      availableDocs: [
        { 
          title: 'Notice of Special Board Assembly 2025', 
          date: 'May 02, 2025', 
          size: '890 KB', 
          url: BisLicenseScannedCertImg.src 
        }
      ],
      upcomingDocs: [
        { 
          title: 'Notice of 18th Annual General Assembly 2026', 
          status: 'Coming Soon', 
          remark: 'Currently the document is under review.' 
        }
      ]
    }
  };

  const activeGroup = reportGroups[activeTab];
  return (
    <section>
        {/* DOCUMENT CATEGORIES LAYOUT */}
      <div 
        className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-20 font-sans"
      >
        
        {/* Horizontal Navigation Tabs on Top */}
        <div className="mb-8 select-none">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-brand-border pb-4 mb-6">
            <h3 className="font-condensed font-black text-base uppercase text-brand-black tracking-wider">
              Corporate Disclosures
            </h3>
            <span className="text-[10px] text-brand-muted font-mono tracking-widest uppercase mt-1 sm:mt-0">
              Upto Financial Year 2082/2083
            </span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <button
              onClick={() => setActiveTab('annual')}
              className={`text-left p-4 rounded-xs border font-condensed font-bold text-sm sm:text-sm uppercase tracking-wide transition-all cursor-pointer focus:outline-none flex flex-col justify-between gap-1 min-h-[84px] ${
                activeTab === 'annual'
                  ? 'border-brand-red bg-brand-red/5 text-[#B8001F] shadow-xs'
                  : 'border-brand-border bg-white text-brand-black hover:bg-brand-sand/50'
              }`}
            >
              <span className="text-[11px] font-mono opacity-60">Category 01</span>
              <span className="font-bold flex items-center justify-between w-full">
                <span>Annual Reports</span>
                <span className="text-[8px] font-mono bg-brand-red/10 px-1.5 py-0.5 rounded-sm">Release Active</span>
              </span>
            </button>
            
            <button
              onClick={() => setActiveTab('quarterly')}
              className={`text-left p-4 rounded-xs border font-condensed font-bold text-sm sm:text-sm uppercase tracking-wide transition-all cursor-pointer focus:outline-none flex flex-col justify-between gap-1 min-h-[84px] ${
                activeTab === 'quarterly'
                  ? 'border-brand-red bg-brand-red/5 text-[#B8001F] shadow-xs'
                  : 'border-brand-border bg-white text-brand-black hover:bg-brand-sand/50'
              }`}
            >
              <span className="text-[11px] font-mono opacity-60">Category 02</span>
              <span className="font-bold flex items-center justify-between w-full">
                <span>Quarterly Statements</span>
                <span className="text-[8px] font-mono bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded-sm">FY 2081/82</span>
              </span>
            </button>

            <button
              onClick={() => setActiveTab('ipo')}
              className={`text-left p-4 rounded-xs border font-condensed font-bold text-sm sm:text-sm uppercase tracking-wide transition-all cursor-pointer focus:outline-none flex flex-col justify-between gap-1 min-h-[84px] ${
                activeTab === 'ipo'
                  ? 'border-brand-red bg-brand-red/5 text-[#B8001F] shadow-xs'
                  : 'border-brand-border bg-white text-brand-black hover:bg-brand-sand/50'
              }`}
            >
              <span className="text-[11px] font-mono opacity-60">Category 03</span>
              <span className="font-bold flex items-center justify-between w-full">
                <span>IPO Filings</span>
                <span className="text-[8px] font-mono bg-[#D4A017]/10 text-[#D4A017] px-1.5 py-0.5 rounded-sm">Coming Soon</span>
              </span>
            </button>

            <button
              onClick={() => setActiveTab('notices')}
              className={`text-left p-4 rounded-xs border font-condensed font-bold text-sm sm:text-sm uppercase tracking-wide transition-all cursor-pointer focus:outline-none flex flex-col justify-between gap-1 min-h-[84px] ${
                activeTab === 'notices'
                  ? 'border-brand-red bg-brand-red/5 text-[#B8001F] shadow-xs'
                  : 'border-brand-border bg-white text-brand-black hover:bg-brand-sand/50'
              }`}
            >
              <span className="text-[11px] font-mono opacity-60">Category 04</span>
              <span className="font-bold flex items-center justify-between w-full">
                <span>Advisory Notices</span>
                <span className="text-[8px] font-mono bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded-sm">Statutory</span>
              </span>
            </button>
          </div>
        </div>

        {/* Selected Category Panel */}
        <div className="bg-white border border-brand-border/80 rounded-sm p-6 md:p-10 shadow-3xs space-y-8">
          
          {/* Header Title & Details */}
          <div className="border-b border-brand-border/40 pb-5">
            <h3 className="font-serif text-2xl font-extrabold text-brand-black leading-tight">
              {activeGroup.title}
            </h3>
            <p className="text-sm text-brand-muted leading-relaxed font-sans font-normal mt-2">
              {activeGroup.desc}
            </p>
          </div>

          {/* Section: Available / Downloadable Documents */}
          <div className="space-y-4">
            <h4 className="font-condensed font-bold text-sm uppercase tracking-wider text-brand-black flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#B8001F] rounded-full" />
              Published Disclosures (Interactive Download)
            </h4>

            {activeGroup.availableDocs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeGroup.availableDocs.map((doc, idx) => (
                  <div 
                    key={idx} 
                    className="border border-brand-border bg-neutral-50/50 p-5 rounded-xs flex flex-col justify-between hover:border-[#B8001F]/40 transition-colors group relative"
                  >
                    <div className="flex items-start gap-3.5 mb-4">
                      <div className="w-10 h-10 bg-[#B8001F]/5 text-[#B8001F] border border-[#B8001F]/15 rounded-xs flex items-center justify-center flex-shrink-0">
                        <FileText size={20} />
                      </div>
                      <div className="space-y-0.5 min-w-0 flex-1">
                        <span className="block text-brand-black font-semibold text-sm leading-snug truncate group-hover:text-[#B8001F] transition-colors" title={doc.title}>
                          {doc.title}
                        </span>
                        <div className="flex items-center gap-2 text-[10px] text-brand-muted font-mono uppercase tracking-wide">
                          <span>Released: {doc.date}</span>
                          <span>•</span>
                          <span>{doc.size}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-end gap-2 pt-2 border-t border-brand-border/40">
                      {/* View Online Action */}
                      <a 
                        href={doc.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase bg-white border border-brand-border hover:border-brand-black text-brand-black px-2.5 py-1.5 transition-colors"
                      >
                        <Eye size={12} />
                        <span>Preview</span>
                      </a>

                      {/* Download Action */}
                      <a 
                        href={doc.url} 
                        download
                        className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase bg-brand-black text-white hover:bg-[#B8001F] text-white px-2.5 py-1.5 transition-colors"
                      >
                        <Download size={12} />
                        <span>Download</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="border border-dashed border-brand-border/70 rounded-xs p-6 text-center text-brand-muted">
                <FolderArchive className="text-gray-300 mx-auto mb-2" size={32} />
                <p className="text-[11px] font-mono uppercase tracking-wider">No published reports in this section</p>
                <p className="text-[10px] mt-1">Direct board files are under formatting compilation process.</p>
              </div>
            )}
          </div>

          {/* Section: Upcoming Documents */}
          <div className="space-y-4 pt-4 border-t border-brand-border/30">
            <h4 className="font-condensed font-bold text-sm uppercase tracking-wider text-brand-black flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#D4A017] rounded-full" />
              Upcoming Documents / In-Review Schedules
            </h4>

            <div className="space-y-2.5">
              {activeGroup.upcomingDocs.map((doc, idx) => (
                <div 
                  key={idx} 
                  className="border border-amber-200 bg-amber-50/20 p-4 rounded-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm"
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 text-[#D4A017]">
                      <Calendar size={15} />
                    </div>
                    <div>
                      <span className="block text-brand-black font-semibold leading-snug text-sm">
                        {doc.title}
                      </span>
                      <p className="text-[11px] text-[#A17A0E] mt-0.5 leading-normal">
                        <span className="font-bold underline">Coming Soon</span> - Currently the document is under review. {doc.remark || ''}
                      </p>
                    </div>
                  </div>

                  <div className="flex-shrink-0 self-start sm:self-center">
                    <span className="inline-block text-[11px] font-mono font-bold uppercase bg-amber-100/60 text-[#A17A0E] border border-amber-200/50 px-2.5 py-1 rounded-sm">
                      Under Review
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Documents