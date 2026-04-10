'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'

const TAGS = ['3PL','Amazon Seller Central','Amazon Vendor Central','B2B Portal','CRM Portal','Vendor Portal','eBay','EDI','Home Depot','Lightspeed POS','Lightspeed X-Series','Magento','Salesforce','Shopify','Shopify POS','ShipStation','Squarespace','Vend POS','Walmart','WooCommerce','WordPress','Zapier','Other']

export default function Contact() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTimeout(() => setSubmitted(true), 1400)
  }

  return (
    <>
      <Navbar />

      {/* CONTACT HERO */}
      <section className="hero-contact min-h-[65vh] flex items-end pt-24 pb-20 relative overflow-hidden" style={{isolation:'isolate'}}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 right-0 w-[500px] h-[500px] rounded-full animate-float" style={{background:'radial-gradient(circle,rgba(27,111,208,.2) 0%,transparent 70%)'}}></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full animate-float2" style={{background:'radial-gradient(circle,rgba(91,184,212,.1) 0%,transparent 70%)'}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
          <div className="max-w-3xl" style={{animation:'slide-up .9s cubic-bezier(.23,1,.32,1) both'}}>
            <div className="flex items-center gap-2 mb-6">
              <Link href="/" className="text-xs font-medium transition-colors" style={{color:'rgba(255,255,255,.4)'}}>Home</Link>
              <svg className="w-3 h-3" style={{color:'rgba(255,255,255,.25)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
              <span className="text-xs font-medium" style={{color:'#5BB8D4'}}>Contact</span>
            </div>
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-5" style={{color:'#5BB8D4'}}>Get In Touch</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6" style={{letterSpacing:'-0.03em',lineHeight:1.05}}>
              Let's Talk About Your<br />
              <span className="font-bold gradient-text">NetSuite</span><br />
              <span className="font-semibold text-white">Integration</span>
            </h1>
            <p className="text-lg max-w-xl" style={{color:'rgba(255,255,255,.8)',lineHeight:1.75}}>Whether you need a demo, a custom solution, or just have a question, our team of NetSuite experts is ready to help.</p>
          </div>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="flex items-center gap-4 p-6 rounded-2xl border border-gray-100 reveal" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:'linear-gradient(135deg,#0B2554,#1B6FD0)'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-wider uppercase text-gray-400 mb-0.5">Phone</p>
                <a href="tel:+18886044120" className="text-sm font-bold transition-colors duration-200" style={{color:'#0B2554'}}>+1 (888) 604-4120</a>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-2xl border border-gray-100 reveal reveal-delay-1" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:'linear-gradient(135deg,#0B6E6E,#5BB8D4)'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-wider uppercase text-gray-400 mb-0.5">Email</p>
                <a href="mailto:sales@in8sync.com" className="text-sm font-bold transition-colors duration-200" style={{color:'#0B2554'}}>sales@in8sync.com</a>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-2xl border border-gray-100 reveal reveal-delay-2" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:'linear-gradient(135deg,#1B6FD0,#3B8AE0)'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-wider uppercase text-gray-400 mb-0.5">Location</p>
                <p className="text-sm font-bold" style={{color:'#0B2554'}}>600 Rood Ave, Grand Junction, CO 81501, United States</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="py-24" style={{background:'#F5F7FC'}}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* LEFT: FORM */}
            <div className="reveal">
              <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#1B6FD0'}}>Send a Message</p>
              <h2 className="text-3xl font-bold mb-2" style={{color:'#0B2554',letterSpacing:'-0.02em'}}>Request a Demo or Solution</h2>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">Fill out the form below and our NetSuite experts will reach out within 1 business day.</p>

              <div className="relative bg-white rounded-3xl p-8 md:p-10 border border-gray-100" style={{boxShadow:'0 8px 40px rgba(11,37,84,.08)'}}>
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{background:'linear-gradient(135deg,#1B6FD0,#5BB8D4)',boxShadow:'0 8px 32px rgba(27,111,208,.4)'}}>
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2" style={{color:'#0B2554'}}>Message Sent!</h3>
                    <p className="text-gray-500 text-sm mb-6">Thank you for reaching out. Our team will contact you within 1 business day.</p>
                    <button onClick={() => setSubmitted(false)} className="text-sm font-semibold transition-colors" style={{color:'#1B6FD0'}}>Send another message →</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-xs font-semibold mb-1.5" style={{color:'#0B2554'}}>First Name *</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-blue-400" placeholder="John" required />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold mb-1.5" style={{color:'#0B2554'}}>Last Name *</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-blue-400" placeholder="Smith" required />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block text-xs font-semibold mb-1.5" style={{color:'#0B2554'}}>Work Email *</label>
                      <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-blue-400" placeholder="john@company.com" required />
                    </div>
                    <div className="mb-4">
                      <label className="block text-xs font-semibold mb-1.5" style={{color:'#0B2554'}}>Company Name *</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-blue-400" placeholder="Acme Corporation" required />
                    </div>
                    <div className="mb-4">
                      <label className="block text-xs font-semibold mb-1.5" style={{color:'#0B2554'}}>Phone Number</label>
                      <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-blue-400" placeholder="+1 (555) 000-0000" />
                    </div>
                    <div className="mb-4">
                      <label className="block text-xs font-semibold mb-1.5" style={{color:'#0B2554'}}>I'm Interested In <span className="text-xs font-normal text-gray-400">(select all that apply)</span></label>
                      <input type="hidden" name="interests" value={selectedTags.join(',')} />
                      <div className="flex flex-wrap gap-2">
                        {TAGS.map(tag => (
                          <span
                            key={tag}
                            onClick={() => toggleTag(tag)}
                            className="cursor-pointer text-xs font-medium px-3.5 py-1.5 rounded-full border transition-all select-none"
                            style={{
                              background: selectedTags.includes(tag) ? '#1B6FD0' : '#fff',
                              color: selectedTags.includes(tag) ? '#fff' : '#4A5568',
                              borderColor: selectedTags.includes(tag) ? '#1B6FD0' : '#E2E8F0',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mb-6">
                      <label className="block text-xs font-semibold mb-1.5" style={{color:'#0B2554'}}>Message</label>
                      <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:border-blue-400" rows={4} placeholder="Tell us about your NetSuite integration needs..." style={{resize:'none'}}></textarea>
                    </div>
                    <button type="submit" className="btn-primary w-full text-white font-semibold py-4 rounded-xl text-sm">
                      Send Message & Request Demo
                    </button>
                    <p className="text-center text-xs text-gray-400 mt-4">By submitting this form, you agree to our <a href="#" className="hover:underline" style={{color:'#9EA3AD'}}>Privacy Policy</a>.</p>
                  </form>
                )}
              </div>
            </div>

            {/* RIGHT */}
            <div className="reveal reveal-delay-2">
              

              <div className="bg-white rounded-3xl p-8 border border-gray-100 mb-6" style={{boxShadow:'0 4px 20px rgba(11,37,84,.06)'}}>
                <h3 className="font-bold text-base mb-6" style={{color:'#0B2554'}}>What Happens Next</h3>
                <div className="space-y-5">
                  {[
                    { n:1, bg:'linear-gradient(135deg,#0B2554,#1B6FD0)', title:'We review your request', desc:'Our team reviews your message within 1 business day.' },
                    { n:2, bg:'linear-gradient(135deg,#1B6FD0,#3B8AE0)', title:'Schedule a discovery call', desc:"We'll reach out to schedule a time that works for you." },
                    { n:3, bg:'linear-gradient(135deg,#0B6E6E,#5BB8D4)', title:'Live demo & proposal', desc:'We demonstrate the integration and prepare a custom solution proposal.' },
                    { n:4, bg:'linear-gradient(135deg,#059669,#10B981)', title:'Implementation begins', desc:'Your native NetSuite integration goes live — fast, clean, performant.' },
                  ].map(step => (
                    <div key={step.n} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold" style={{background:step.bg}}>{step.n}</div>
                      <div>
                        <p className="text-sm font-semibold mb-0.5" style={{color:'#0B2554'}}>{step.title}</p>
                        <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <a href="tel:+18886044120" className="flex items-center gap-3 p-5 rounded-2xl border border-gray-100 bg-white card-lift transition-all duration-300" style={{boxShadow:'0 2px 8px rgba(11,37,84,.05)'}}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#0B2554,#1B6FD0)'}}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-medium">Call Us</p>
                    <p className="text-xs font-bold" style={{color:'#0B2554'}}>888-604-4120</p>
                  </div>
                </a>
                <a href="mailto:sales@in8sync.com" className="flex items-center gap-3 p-5 rounded-2xl border border-gray-100 bg-white card-lift transition-all duration-300" style={{boxShadow:'0 2px 8px rgba(11,37,84,.05)'}}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#0B6E6E,#5BB8D4)'}}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-medium">Email Us</p>
                    <p className="text-xs font-bold" style={{color:'#0B2554'}}>sales@in8sync.com</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <RevealObserver />
    </>
  )
}
