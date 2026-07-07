"use client";

import { useState } from "react";
import { HelpCircle } from "lucide-react";
import { contactFAQs } from "./data";

function FAQSection() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  
  return (
    <section>
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-24 space-y-8 text-sm">
        <div className="text-center space-y-2 select-none border-b border-brand-border pb-4">
          <HelpCircle size={28} className="text-brand-red mx-auto" />
          <h3 className="text-2xl font-bold text-brand-black">
            Common Inquiries FAQs
          </h3>
        </div>

        <div className="space-y-4 select-none">
          {contactFAQs.map((faq, index) => (
            <div
              key={index}
              className="border border-brand-border bg-white rounded-xs"
            >
              <button
                onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                className="w-full text-left p-4 font-condensed font-bold text-base text-brand-black flex justify-between items-center hover:bg-brand-sand/30 cursor-pointer focus:outline-none"
              >
                <span>{faq.q}</span>
                <span className="font-serif text-brand-red font-bold text-lg">
                  {activeFAQ === index ? "×" : "+"}
                </span>
              </button>

              {activeFAQ === index && (
                <div>
                  <p className="p-4 bg-brand-sand text-xs text-brand-muted leading-relaxed border-t border-brand-border">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
