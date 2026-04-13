'use client'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'

export default function Salesforce() {
  return (
    <>
      <Navbar />
      <RevealObserver />

      {/* HERO */}
      <section className="hero-sf min-h-[calc(100vh-30px)] flex items-center pt-[65px] pb-4 relative overflow-hidden" style={{isolation:'isolate'}}>
        <div className="absolute inset-0 grid-lines opacity-60 z-10 pointer-events-none"></div>
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute top-16 right-8 w-96 h-96 rounded-full animate-float" style={{background:'radial-gradient(circle,rgba(0,161,224,.15) 0%,transparent 70%)'}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 w-full relative z-20">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div style={{animation:'slide-up .9s cubic-bezier(.23,1,.32,1) both'}}>
              <div className="flex items-center gap-2 mb-6">
                <Link href="/" className="text-xs font-medium" style={{color:'rgba(255,255,255,.4)'}}>Home</Link>
                <svg className="w-3 h-3" style={{color:'rgba(255,255,255,.25)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                <span className="text-xs font-medium" style={{color:'rgba(255,255,255,.4)'}}>CRM</span>
                <svg className="w-3 h-3" style={{color:'rgba(255,255,255,.25)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                <span className="text-xs font-semibold" style={{color:'#00A1E0'}}>Salesforce</span>
              </div>
              <div className="inline-flex items-center gap-2.5 mb-7 px-4 py-2 rounded-full border" style={{background:'rgba(0,161,224,.1)',borderColor:'rgba(0,161,224,.3)'}}>
                <span className="text-lg">☁️</span>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{color:'#00A1E0'}}>Salesforce DirectConnect</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{letterSpacing:'-0.03em',lineHeight:1.08}}>
                The Seamless<br />
                <span className="sf-text">Salesforce</span><br />
                NetSuite Integration
              </h1>
              <p className="text-lg mb-8" style={{color:'rgba(255,255,255,.78)',lineHeight:1.75}}>Real-time bi-directional integration between NetSuite and Salesforce — built and optimized specifically for both platforms. Manage 100% of the integration from within NetSuite.</p>
              <div className="space-y-2.5 mb-10">
                {['All record types including custom records — bi-directional','100% managed inside NetSuite — no iPaaS required','Starting at $50/month — bundles available'].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{background:'rgba(0,161,224,.2)',border:'1px solid rgba(0,161,224,.4)'}}>
                      <svg className="w-2.5 h-2.5" style={{color:'#00A1E0'}} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    </div>
                    <p className="text-sm" style={{color:'rgba(255,255,255,.75)'}}>{item}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-sf text-white font-bold px-7 py-3.5 rounded-xl text-sm">Request a Demo</Link>
                <a href="#benefits" className="btn-outline-white btn-outline-white-sf text-white font-semibold px-6 py-3.5 rounded-xl text-sm">Benefits</a>
                <a href="#features" className="btn-outline-white btn-outline-white-sf text-white font-semibold px-6 py-3.5 rounded-xl text-sm">Features</a>
                <Link href="/integrations" className="btn-outline-white btn-outline-white-sf text-white font-semibold px-6 py-3.5 rounded-xl text-sm inline-flex items-center gap-2">See All Bundles <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></Link>
              </div>
            </div>
            <div className="relative flex justify-center" style={{animation:'fade-in 1.2s ease both .4s',opacity:0}}>
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 rounded-3xl blur-3xl" style={{background:'linear-gradient(135deg,rgba(0,161,224,.2),rgba(91,184,212,.12))'}}></div>
                <div className="relative rounded-3xl p-8 border" style={{background:'rgba(255,255,255,.03)',borderColor:'rgba(0,161,224,.2)',backdropFilter:'blur(10px)',boxShadow:'0 24px 64px rgba(0,0,0,.4)'}}>
                  <div className="flex flex-col items-center justify-center" style={{height:'300px'}}>
                    <div className="rounded-2xl flex items-center justify-center p-6" style={{background:'white',width:'220px',height:'140px'}}>
                      <img src="/brand_assests/saleforce.png" alt="Salesforce Logo" style={{maxWidth:'180px',maxHeight:'100px',objectFit:'contain'}} />
                    </div>
                    <div style={{fontSize:'12px',color:'rgba(255,255,255,.4)',marginTop:'12px'}}>NetSuite Integration</div>
                  </div>
                </div>
                <div className="absolute -top-4 -left-6 bg-white rounded-2xl px-4 py-3 shadow-2xl card-lift">
                  <div className="flex items-center gap-2.5"><div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#00A1E0,#0076A8)'}}><span className="text-white text-sm">☁️</span></div><div><div className="text-xs font-bold text-navy">Real-Time Sync</div><div className="text-[10px] text-gray-400">All Record Types</div></div></div>
                </div>
                <div className="absolute -bottom-4 -right-6 bg-white rounded-2xl px-4 py-3 shadow-2xl card-lift">
                  <div className="flex items-center gap-2.5"><div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#0B2554,#1B6FD0)'}}><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div><div><div className="text-xs font-bold text-navy">From $50/mo</div><div className="text-[10px] text-gray-400">All Features Included</div></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="py-24" style={{background:'#F5F7FC'}}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#00A1E0'}}>Why DirectConnect</p>
            <h2 className="text-4xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>4 Reasons to Choose Salesforce<br />DirectConnect</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 card-lift reveal" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{background:'linear-gradient(135deg,#00A1E0,#0076A8)',boxShadow:'0 6px 20px rgba(0,161,224,.3)'}}><svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
              <h3 className="text-lg font-bold mb-3" style={{color:'#0B2554'}}>Reduce Time Spent Entering Data</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Automatically synchronizes all data flows between NetSuite and Salesforce instead of manual entry across separate platforms — eliminating duplication and saving hours every week.</p>
            </div>
            <div className="rounded-3xl p-8 border border-gray-100 card-lift reveal reveal-delay-1" style={{background:'#F8F9FC',boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{background:'linear-gradient(135deg,#0B2554,#1B6FD0)',boxShadow:'0 6px 20px rgba(11,37,84,.2)'}}><svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg></div>
              <h3 className="text-lg font-bold mb-3" style={{color:'#0B2554'}}>Manage 100% in NetSuite</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Installed directly in NetSuite — manage the entire integration from your ERP rather than a third-party iPaaS platform. No context switching, no extra logins, no extra cost.</p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 card-lift reveal reveal-delay-2" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{background:'linear-gradient(135deg,#1B6FD0,#5BB8D4)',boxShadow:'0 6px 20px rgba(27,111,208,.3)'}}><svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/></svg></div>
              <h3 className="text-lg font-bold mb-3" style={{color:'#0B2554'}}>Eliminate Data Entry Errors</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Automatic bi-directional syncing prevents data inconsistencies across systems. Every record in Salesforce stays in perfect alignment with NetSuite — always.</p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 card-lift reveal reveal-delay-3" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{background:'linear-gradient(135deg,#059669,#10B981)',boxShadow:'0 6px 20px rgba(16,185,129,.25)'}}><svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg></div>
              <h3 className="text-lg font-bold mb-3" style={{color:'#0B2554'}}>Setup &amp; Managed Support Included</h3>
              <p className="text-gray-500 text-sm leading-relaxed">In8Sync's team of NetSuite experts handles full installation, setup, and testing — then provides fully-managed ongoing support at no additional cost.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#1B6FD0'}}>Complete Feature Set</p>
            <h2 className="text-4xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>17 Record Syncs — All Bi-Directional<br />&amp; Real-Time</h2>
            <p className="text-gray-400 text-sm">Every critical record type between NetSuite and Salesforce — synchronized automatically.</p>
          </div>
          <div className="mb-10 reveal">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#00A1E0,#0076A8)'}}><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg></div>
              <h3 className="text-lg font-bold" style={{color:'#0B2554'}}>Core Record Syncing</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {title:'Customer Sync', badge:'↔ Real-Time', badgeBg:'#E8F6FD', badgeColor:'#00A1E0', desc:'Bi-directional real-time customer sync between NetSuite and Salesforce — account records stay aligned at all times.'},
                {title:'Contact Sync', badge:'↔ Real-Time', badgeBg:'#E8F6FD', badgeColor:'#00A1E0', desc:'Contacts sync bi-directionally in real-time. Create or update a contact in either system and it reflects immediately in the other.'},
                {title:'Product Sync', badge:'→ NetSuite', badgeBg:'#E8F8F0', badgeColor:'#059669', desc:'Products sync from NetSuite to Salesforce, keeping your product catalog consistent across both platforms.'},
                {title:'Stock Level Updates', badge:'→ Scheduled', badgeBg:'#FFFBEB', badgeColor:'#D97706', desc:'Inventory stock levels sync from NetSuite to Salesforce on a configurable schedule — Salesforce reps always see accurate availability.'},
                {title:'Order Sync', badge:'↔ Real-Time', badgeBg:'#E8F6FD', badgeColor:'#00A1E0', desc:'Bi-directional real-time order sync. Orders created in Salesforce flow to NetSuite and vice versa — no manual handoff needed.'},
                {title:'Lead Sync', badge:'↔ Real-Time', badgeBg:'#E8F6FD', badgeColor:'#00A1E0', desc:'Leads sync bi-directionally in real-time — sales teams in Salesforce and operations in NetSuite always work from the same pipeline.'},
                {title:'Prospect Sync', badge:'↔ Real-Time', badgeBg:'#E8F6FD', badgeColor:'#00A1E0', desc:'Prospects sync in real-time between both platforms, ensuring consistent pipeline visibility across your sales and ERP teams.'},
              ].map(f => (
                <div key={f.title} className="feat-card feat-card-sf">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="text-xs font-bold" style={{color:'#0B2554'}}>{f.title}</h4>
                    <span className="sync-badge" style={{background:f.badgeBg,color:f.badgeColor}}>{f.badge}</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#6366F1,#818CF8)'}}><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg></div>
              <h3 className="text-lg font-bold" style={{color:'#0B2554'}}>Advanced Capabilities</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {title:'Price Book Sync', desc:'NetSuite price books sync to Salesforce so reps always quote accurate prices from your ERP.'},
                {title:'Quote / Estimate Sync', desc:'Quotes and estimates sync bi-directionally — close deals in Salesforce, fulfill in NetSuite, seamlessly.'},
                {title:'Opportunity Sync', desc:'Real-time bi-directional opportunity sync keeps your sales pipeline and ERP perfectly in step.'},
                {title:'Shipment & Fulfillment Sync', desc:'Item fulfillment and shipment data flows from NetSuite back to Salesforce — reps stay updated without leaving their CRM.'},
                {title:'Campaign Sync', desc:'Marketing campaigns sync bi-directionally, enabling closed-loop reporting between Salesforce campaigns and NetSuite financials.'},
                {title:'Support Case Sync', desc:'Bi-directional support case sync ensures your service teams in both platforms always have the latest case status.'},
                {title:'NetSuite Orders & History Suitelet', desc:'View complete NetSuite order history directly within Salesforce — no need to switch systems to look up past transactions.'},
                {title:'Credit Card Gateway Suitelet', desc:"Accept and process payments through NetSuite's credit card gateway directly from within Salesforce records."},
                {title:'Custom Field Mappings & Anomaly Alerts', desc:'Configure custom field mappings for any record type. Set up team alerts when data anomalies are detected during sync.'},
              ].map(f => (
                <div key={f.title} className="feat-card feat-card-sf">
                  <h4 className="text-xs font-bold mb-1.5" style={{color:'#0B2554'}}>{f.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12 reveal"><p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#5BB8D4'}}>Explore More</p><h2 className="text-3xl font-bold" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>More CRM Integrations</h2></div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Link href="/zapier" className="group bg-white rounded-2xl p-6 border border-gray-100 card-lift flex items-center gap-5 reveal" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)',textDecoration:'none'}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white border border-gray-100 p-2"><img src="/logos/zapier_logo.svg" alt="Zapier" className="w-full h-full object-contain" /></div>
              <div><h3 className="font-bold text-sm mb-0.5" style={{color:'#0B2554'}}>Zapier DirectConnect</h3><p className="text-xs text-gray-400">Connect 4,000+ apps — $100/mo, 7-day trial</p></div>
              <svg className="w-4 h-4 text-gray-300 ml-auto transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </Link>
            <Link href="/zendesk" className="group bg-white rounded-2xl p-6 border border-gray-100 card-lift flex items-center gap-5 reveal reveal-delay-1" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)',textDecoration:'none'}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white border border-gray-100 p-2"><img src="/logos/zendesk_logo.svg" alt="Zendesk" className="w-full h-full object-contain" /></div>
              <div><h3 className="font-bold text-sm mb-0.5" style={{color:'#0B2554'}}>Zendesk DirectConnect</h3><p className="text-xs text-gray-400">Full bi-directional ticket &amp; customer sync</p></div>
              <svg className="w-4 h-4 text-gray-300 ml-auto transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{background:'linear-gradient(135deg,#0B2554 0%,#0d1e42 50%,#0B2554 100%)'}}>
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{letterSpacing:'-0.03em'}}>Ready to Connect<br /><span className="sf-text">Salesforce</span> &amp; NetSuite?</h2>
          <p className="text-lg mb-10" style={{color:'rgba(255,255,255,.65)',lineHeight:1.7}}>Request a demo today. Our experts will show you exactly how Salesforce DirectConnect will eliminate data silos and power your revenue engine.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-sf text-white font-bold px-10 py-4 rounded-2xl text-base">Request A Demo</Link>
            <Link href="/contact" className="btn-outline-white text-white font-semibold px-8 py-4 rounded-2xl text-base">Contact Us</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
