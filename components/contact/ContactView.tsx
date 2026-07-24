import { ChevronRight } from "lucide-react"
import ContactForm from "./ContactForm"
import InteractiveMap from "./InteractiveMap"
import FAQSection from "./FAQSection"
import Breadcrumb from "../ui/Breadcrumb"


function ContactView() {
  return (
    <section id='contact-us-page'>
      {/* Page Hero */}
      <div 
        className="relative bg-neutral-950 text-white pt-44 pb-20 md:pt-52 md:pb-24 px-4 md:px-8 border-b border-brand-red/20 overflow-hidden select-none bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.65) 45%, rgba(184, 0, 31, 0.25) 100%), url("/company-webp/contact.webp")` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          <Breadcrumb />
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">Contact Our Operations</h1>
          <p className="text-brand-gold text-lg max-w-2xl mx-auto uppercase tracking-wider font-bold">
            Headquarters & Manufacturing Plant Communication Desk
          </p>
        </div>
      </div>


    {/*Contact form*/}
    <ContactForm />

    {/*Contact form*/}
    <InteractiveMap />

    {/*Contact form*/}
    <FAQSection />
    </section>  
  )
}

export default ContactView