 
import IsoScannedCertImg from '../assets/images/ccs1.jpg';
import NepalStandardsScannedCertImg from '../assets/images/ccs2.jpg';
import BisLicenseScannedCertImg from '../assets/images/ccs.jpg';
 
 
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

