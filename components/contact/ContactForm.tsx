"use client";


import { useState } from "react";
import { MapPin, Phone, Send } from "lucide-react";
import Link from "next/link";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  company: string;
  subject: string;
  message: string;
  productName: string;
}


function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        phone: '',
        email: '',
        company: '',
        subject: 'General Inquiry',
        message: '',
        productName: 'None / General'
      });
      const [isSuccess, setIsSuccess] = useState(false);
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.fullName || !formData.phone) {
          alert('Please fill at least your Name and Phone Number to submit.');
          return;
        }
        console.log('Contact form submitted:', formData);
        setIsSuccess(true);
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          company: '',
          subject: 'General Inquiry',
          message: '',
          productName: 'None / General'
        });
        setTimeout(() => {
          setIsSuccess(false);
        }, 4000);
      };
  return (
    <section>
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 font-sans">
        
        {/* LEFT COLUMN: CONTACT CARDS */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="border border-brand-border bg-white rounded-xs p-6 shadow-xs flex items-start gap-4">
            <div className="bg-brand-red text-white p-3 rounded-xs flex-shrink-0">
              <MapPin size={20} />
            </div>
            <div className="space-y-1">
              <span className="block font-condensed font-black text-xs tracking-widest text-brand-red uppercase">HEAD OFFICE</span>
              <h4 className="font-serif text-lg font-bold text-brand-black">Kathmandu Headquarters</h4>
              <p className="text-xs text-brand-muted leading-relaxed">
                Neupane Tower, 3rd Floor, Subidhanagar, Kathmandu, Nepal
              </p>
              <div className="text-xs text-brand-black font-semibold pt-1">
                Phone: +977-1-4412351 / 4412352
              </div>
            </div>
          </div>

          <div className="border border-brand-border bg-white rounded-xs p-6 shadow-xs flex items-start gap-4">
            <div className="bg-brand-black text-white p-3 rounded-xs flex-shrink-0">
              <MapPin size={20} />
            </div>
            <div className="space-y-1">
              <span className="block font-condensed font-black text-xs tracking-widest text-brand-gold uppercase">MANUFACTURING PLANT</span>
              <h4 className="font-serif text-lg font-bold text-brand-black">Sunwal Factory Complex</h4>
              <p className="text-xs text-brand-muted leading-relaxed">
                Khaireni, Sunwal-7, Nawalparasi (Lumbini Province), Nepal
              </p>
              <div className="text-xs text-brand-black font-semibold pt-1">
                Phone: +977-78-570188
              </div>
            </div>
          </div>

          <div className="border border-brand-border bg-white rounded-xs p-6 shadow-xs flex items-start gap-4">
            <div className="bg-brand-red/5 text-brand-red p-3 rounded-xs flex-shrink-0 border border-brand-red/10">
              <Phone size={20} />
            </div>
            <div className="space-y-1">
              <span className="block font-condensed font-black text-xs tracking-widest text-brand-muted uppercase">SALES & PROCUREMENT</span>
              <h4 className="font-serif text-lg font-bold text-brand-black">Enquiry Helpdesk</h4>
              <p className="text-xs text-brand-muted">
                Reach our provincial sales heads, quotation channels, or dispatch logs.
              </p>
              <div className="text-xs text-brand-black font-semibold pt-1">
                Email: info@laxmisteels.com.np <br />
                B2B Bulk Direct: +977-9801201502
              </div>
            </div>
          </div>

          <div className="border border-brand-border bg-white p-6 rounded-xs space-y-3 text-sm">
            <span className="block font-condensed font-black text-xs text-brand-black tracking-wider uppercase">Institutional Channels</span>
            <p className="text-xs text-brand-muted leading-normal">Follow Laxmi Steels on official socio-corporate platforms for recent compliance dispatches and group milestones.</p>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <Link href="www.facebook.com" className="bg-white border border-brand-border px-3 py-1.5 font-semibold text-brand-black hover:bg-brand-red/10">LinkedIn</Link>
              <Link href="www.facebook.com" className="bg-white border border-brand-border px-3 py-1.5 font-semibold text-brand-black hover:bg-brand-red/10">Facebook</Link>
              <Link href="www.facebook.com" className="bg-white border border-brand-border px-3 py-1.5 font-semibold text-brand-black hover:bg-brand-red/10">Instagram</Link>
              <Link href="www.facebook.com" className="bg-white border border-brand-border px-3 py-1.5 font-semibold text-brand-black hover:bg-brand-red/10">YouTube</Link>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: CONTACT FORM */}
        <div className="lg:col-span-7 bg-white border border-brand-border p-6 md:p-8 rounded-sm shadow-sm">
          <div className="mb-6">
            <h3 className="font-serif text-2xl font-extrabold text-brand-black leading-tight mb-1">Submit Your Inquiry</h3>
            <p className="text-xs text-brand-muted">Fill the form details below to direct your message to relevant department leads.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 text-xs text-brand-black">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold uppercase tracking-wide mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="w-full bg-brand-sand border border-brand-border px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-brand-red rounded-xs text-sm"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="block font-bold uppercase tracking-wide mb-1">Phone Number *</label>
                <input
                  type="text"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-brand-sand border border-brand-border px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-brand-red rounded-xs text-sm"
                  placeholder="+977-98..."
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold uppercase tracking-wide mb-1">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-brand-sand border border-brand-border px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-brand-red rounded-xs text-sm"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label className="block font-bold uppercase tracking-wide mb-1">Company / Organization</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full bg-brand-sand border border-brand-border px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-brand-red rounded-xs text-sm"
                  placeholder="BuildCon Pvt. Ltd."
                />
              </div>
            </div>

            <div>
              <label className="block font-bold uppercase tracking-wide mb-1">Subject / Area of Inquiry</label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className="w-full bg-brand-sand border border-brand-border px-4 py-3 focus:outline-none focus:border-brand-red rounded-xs text-sm"
              >
                <option>General Inquiry</option>
                <option>Product Inquiry (Rates / Sizing)</option>
                <option>Project / Bulk Supply Contracts</option>
                <option>Investor Relations Query</option>
                <option>Dealership Application</option>
              </select>
            </div>

            <div>
              <label className="block font-bold uppercase tracking-wide mb-1">Product Category of Interest *</label>
              <select
                value={formData.productName}
                onChange={(e) => setFormData({...formData, productName: e.target.value})}
                className="w-full bg-brand-sand border border-brand-border px-4 py-3 focus:outline-none focus:border-brand-red rounded-xs text-sm"
              >
                <option value="None / General">None / General</option>
                <option value="FE 500 TMT Steel Bars">FE 500 TMT Steel Bars</option>
                <option value="FE 500D TMT Steel Bars">FE 500D TMT Steel Bars (Premium Ductility)</option>
                <option value="4.75mm Cold Ribbed Wire">4.75mm Cold Ribbed Wire</option>
                <option value="High-Tensile Annealed Binding Wire">High-Tensile Annealed Binding Wire</option>
              </select>
            </div>

            <div>
              <label className="block font-bold uppercase tracking-wide mb-1">Detailed Message / Project Scope</label>
              <textarea
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-brand-sand border border-brand-border px-4 py-3 placeholder-gray-400 focus:outline-none focus:border-brand-red rounded-xs text-sm leading-relaxed"
                placeholder="Briefly explain your site location in Nepal and product grade requirements to help our team respond comprehensively..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-brand-red hover:bg-brand-red/90 text-white font-condensed font-black text-xs uppercase tracking-widest py-3.5 focus:outline-none cursor-pointer flex items-center justify-center gap-2 rounded-xs"
            >
              <Send size={14} />
              <span>Send Message</span>
            </button>

            {isSuccess && (
              <div className="p-4 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs text-center rounded-xs">
                ✓ Communication logged! Sales team members will respond with rate guides as soon as possible.
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  )
}

export default ContactForm