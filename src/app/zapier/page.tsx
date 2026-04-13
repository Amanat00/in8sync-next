'use client'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'

export default function Zapier() {
  return (
    <>
      <Navbar />
      <RevealObserver />

      {/* HERO */}
      <section className="hero-zap min-h-[calc(100vh-30px)] flex items-center pt-[65px] pb-4 relative overflow-hidden" style={{isolation:'isolate'}}>
        <div className="absolute inset-0 grid-lines opacity-60 z-10 pointer-events-none"></div>
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute top-16 right-8 w-96 h-96 rounded-full animate-float" style={{background:'radial-gradient(circle,rgba(255,74,0,.14) 0%,transparent 70%)'}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 w-full relative z-20">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div style={{animation:'slide-up .9s cubic-bezier(.23,1,.32,1) both'}}>
              <div className="flex items-center gap-2 mb-6">
                <Link href="/" className="text-xs font-medium" style={{color:'rgba(255,255,255,.4)'}}>Home</Link>
                <svg className="w-3 h-3" style={{color:'rgba(255,255,255,.25)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                <span className="text-xs font-medium" style={{color:'rgba(255,255,255,.4)'}}>CRM</span>
                <svg className="w-3 h-3" style={{color:'rgba(255,255,255,.25)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                <span className="text-xs font-semibold" style={{color:'#FF8C5A'}}>Zapier</span>
              </div>
              <div className="inline-flex items-center gap-2.5 mb-7 px-4 py-2 rounded-full border" style={{background:'rgba(255,74,0,.1)',borderColor:'rgba(255,74,0,.3)'}}>
                <span className="text-lg">⚡</span>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{color:'#FF8C5A'}}>Zapier DirectConnect</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{letterSpacing:'-0.03em',lineHeight:1.08}}>
                Connect NetSuite to<br />
                <span className="zap-text">4,000+ Apps</span><br />
                via Zapier
              </h1>
              <p className="text-lg mb-8" style={{color:'rgba(255,255,255,.78)',lineHeight:1.75}}>The ONLY NetSuite integration platform directly connecting NetSuite and Zapier&apos;s 4,000+ apps — bi-directional, real-time, all data stored in one place.</p>
              <div className="space-y-2.5 mb-10">
                {['Connect any of 4,000+ Zapier apps with NetSuite','7-day free trial — $100/month billed annually','No coding required — self-install in minutes'].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{background:'rgba(255,74,0,.2)',border:'1px solid rgba(255,74,0,.4)'}}><svg className="w-2.5 h-2.5" style={{color:'#FF8C5A'}} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg></div>
                    <p className="text-sm" style={{color:'rgba(255,255,255,.75)'}}>{item}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="https://zapier.com/" target="_blank" rel="noopener noreferrer" className="btn-zap text-white font-bold px-7 py-3.5 rounded-xl text-sm">Start Free Trial</a>
                <a href="#features" className="btn-outline-white btn-outline-white-zap text-white font-semibold px-6 py-3.5 rounded-xl text-sm">Features</a>
                <a href="#apps" className="btn-outline-white btn-outline-white-zap text-white font-semibold px-6 py-3.5 rounded-xl text-sm">Compatible Apps</a>
                <a href="#setup" className="btn-outline-white btn-outline-white-zap text-white font-semibold px-6 py-3.5 rounded-xl text-sm">Setup</a>
                <Link href="/integrations" className="btn-outline-white btn-outline-white-zap text-white font-semibold px-6 py-3.5 rounded-xl text-sm inline-flex items-center gap-2">See All Bundles <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></Link>
              </div>
            </div>
            <div className="relative flex justify-center" style={{animation:'fade-in 1.2s ease both .4s',opacity:0}}>
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 rounded-3xl blur-3xl" style={{background:'linear-gradient(135deg,rgba(255,74,0,.2),rgba(27,111,208,.12))'}}></div>
                <div className="relative rounded-3xl p-8 border" style={{background:'rgba(255,255,255,.03)',borderColor:'rgba(255,74,0,.18)',backdropFilter:'blur(10px)',boxShadow:'0 24px 64px rgba(0,0,0,.4)'}}>
                  <div className="flex flex-col items-center justify-center" style={{height:'300px'}}>
                    <div className="rounded-2xl flex items-center justify-center p-6" style={{background:'white',width:'220px',height:'140px'}}>
                      <img src="/brand_assests/Zapier.png" alt="Zapier Logo" style={{maxWidth:'180px',maxHeight:'100px',objectFit:'contain'}} />
                    </div>
                    <div style={{fontSize:'12px',color:'rgba(255,255,255,.4)',marginTop:'12px'}}>NetSuite Integration</div>
                  </div>
                </div>
                <div className="absolute -top-4 -left-6 bg-white rounded-2xl px-4 py-3 shadow-2xl card-lift">
                  <div className="flex items-center gap-2.5"><div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#FF4A00,#CC3B00)'}}><span className="text-white text-sm">⚡</span></div><div><div className="text-xs font-bold text-navy">4,000+ Apps</div><div className="text-[10px] text-gray-400">All Connected</div></div></div>
                </div>
                <div className="absolute -bottom-4 -right-6 bg-white rounded-2xl px-4 py-3 shadow-2xl card-lift">
                  <div className="flex items-center gap-2.5"><div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#059669,#10B981)'}}><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div><div><div className="text-xs font-bold text-navy">7-Day Free Trial</div><div className="text-[10px] text-gray-400">No credit card needed</div></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="py-20" style={{background:'#F5F7FC'}}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#FF4A00'}}>Why Zapier DirectConnect</p>
            <h2 className="text-4xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>5 Reasons to Choose<br />Zapier DirectConnect</h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              {icon:<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>, bg:'linear-gradient(135deg,#FF4A00,#CC3B00)', shadow:'rgba(255,74,0,.3)', title:'4,000+ Apps', desc:"Connect NetSuite to any app in Zapier's massive ecosystem", delay:''},
              {icon:<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/></svg>, bg:'linear-gradient(135deg,#1B6FD0,#3B8AE0)', shadow:'rgba(27,111,208,.25)', title:'No Manual Entry', desc:'Eliminate costly manual data entry and human errors entirely', delay:'reveal-delay-1'},
              {icon:<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>, bg:'linear-gradient(135deg,#059669,#10B981)', shadow:'rgba(5,150,105,.2)', title:'No iPaaS Needed', desc:'No overbuilt 3rd-party platform or extra middleware required', delay:'reveal-delay-2'},
              {icon:<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>, bg:'linear-gradient(135deg,#F59E0B,#FBBF24)', shadow:'rgba(245,158,11,.2)', title:'Real-Time Bi-Di', desc:'All data synced real-time bi-directionally, stored in NetSuite', delay:'reveal-delay-3'},
              {icon:<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>, bg:'linear-gradient(135deg,#6366F1,#818CF8)', shadow:'rgba(99,102,241,.2)', title:'Custom Mappings', desc:'Advanced configurations with custom mappings for any use case', delay:'reveal-delay-3'},
            ].map(v => (
              <div key={v.title} className={`bg-white rounded-2xl p-6 text-center border border-gray-100 card-lift reveal ${v.delay}`} style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3" style={{background:v.bg,boxShadow:`0 4px 14px ${v.shadow}`}}>{v.icon}</div>
                <h3 className="text-xs font-bold mb-1" style={{color:'#0B2554'}}>{v.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#1B6FD0'}}>Full Feature Set</p>
            <h2 className="text-4xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>Everything You Can Do with<br />Zapier DirectConnect</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="reveal">
              <div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#FF4A00,#CC3B00)'}}><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg></div><h3 className="font-bold text-sm" style={{color:'#0B2554'}}>Search Functions</h3></div>
              <div className="space-y-3">
                <div className="feat-card feat-card-zap"><h4 className="text-xs font-bold mb-1" style={{color:'#0B2554'}}>Download Saved Search Data</h4><p className="text-xs text-gray-400 leading-relaxed">Pull new or updated rows from any NetSuite saved search directly into Zapier workflows.</p></div>
                <div className="feat-card feat-card-zap"><h4 className="text-xs font-bold mb-1" style={{color:'#0B2554'}}>Find Records by Criteria</h4><p className="text-xs text-gray-400 leading-relaxed">Search for NetSuite records by any configured criteria and return completed records to Zapier for use in any app.</p></div>
              </div>
            </div>
            <div className="reveal reveal-delay-1">
              <div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#1B6FD0,#3B8AE0)'}}><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/></svg></div><h3 className="font-bold text-sm" style={{color:'#0B2554'}}>Create &amp; Update</h3></div>
              <div className="space-y-3">
                <div className="feat-card feat-card-zap"><h4 className="text-xs font-bold mb-1" style={{color:'#0B2554'}}>Any Record Type in NetSuite</h4><p className="text-xs text-gray-400 leading-relaxed">Create or update any NetSuite record type from Zapier — automatic configuration for all available fields.</p></div>
                <div className="feat-card feat-card-zap"><h4 className="text-xs font-bold mb-1" style={{color:'#0B2554'}}>Update by Internal ID</h4><p className="text-xs text-gray-400 leading-relaxed">Update existing NetSuite records precisely using NetSuite&apos;s Internal IDs — no duplicate records, no confusion.</p></div>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="flex items-center gap-3 mb-4"><div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#059669,#10B981)'}}><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg></div><h3 className="font-bold text-sm" style={{color:'#0B2554'}}>Workflow Automation</h3></div>
              <div className="space-y-3">
                <div className="feat-card feat-card-zap"><h4 className="text-xs font-bold mb-1" style={{color:'#0B2554'}}>Automate NetSuite Data Entry</h4><p className="text-xs text-gray-400 leading-relaxed">Use Zapier&apos;s automation tools to trigger NetSuite data entry and business processes automatically.</p></div>
                <div className="feat-card feat-card-zap"><h4 className="text-xs font-bold mb-1" style={{color:'#0B2554'}}>Schedule Flows &amp; Line Item Support</h4><p className="text-xs text-gray-400 leading-relaxed">Schedule flows based on Saved Searches. Submit data to any NetSuite record with full Line Item support for transactions.</p></div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 reveal">
            <div className="feat-card feat-card-zap"><h4 className="text-xs font-bold mb-1.5" style={{color:'#0B2554'}}>Fully Featured Zap Application</h4><p className="text-xs text-gray-400 leading-relaxed">Complete Zapier app for NetSuite with all actions and triggers — available in your Zapier account.</p></div>
            <div className="feat-card feat-card-zap"><h4 className="text-xs font-bold mb-1.5" style={{color:'#0B2554'}}>NetSuite SuiteApp Bundle</h4><p className="text-xs text-gray-400 leading-relaxed">Advanced Zapier functions run within NetSuite via a native SuiteApp bundle — downloadable directly from your account.</p></div>
            <div className="feat-card feat-card-zap"><h4 className="text-xs font-bold mb-1.5" style={{color:'#0B2554'}}>Automatic Field Mapping</h4><p className="text-xs text-gray-400 leading-relaxed">Automatic field mapping from NetSuite Record Type Forms — no manual configuration for standard fields.</p></div>
            <div className="feat-card feat-card-zap"><h4 className="text-xs font-bold mb-1.5" style={{color:'#0B2554'}}>Custom NetSuite Records</h4><p className="text-xs text-gray-400 leading-relaxed">Create custom NetSuite record types with specific data points from any Zapier-connected app.</p></div>
          </div>
        </div>
      </section>

      {/* COMPATIBLE APPS */}
      <section id="apps" className="py-20" style={{background:'#F5F7FC'}}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12 reveal">
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#FF4A00'}}>4,000+ Integrations</p>
            <h2 className="text-3xl font-bold mb-3" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>Connect NetSuite to Any App You Use</h2>
            <p className="text-gray-400 text-sm">A small sample of what&apos;s possible with Zapier DirectConnect.</p>
          </div>
          <div className="flex flex-wrap gap-2.5 justify-center reveal">
            {['📧 Gmail','📊 Google Sheets','💬 Slack','📅 Google Calendar','📨 Mailchimp','🔶 HubSpot','💳 Stripe','📋 Trello','📣 Facebook Lead Ads','📁 Google Drive','🐦 Twitter / X','▶️ YouTube','📝 Gravity Forms','🔵 Salesforce','🟣 Asana','🔴 Pipedrive','📦 Shopify','🟢 WhatsApp Business','🔔 Typeform','📌 Airtable'].map(app => (
              <span key={app} className="app-chip">{app}</span>
            ))}
          </div>
          <div className="text-center mt-6 reveal">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full" style={{background:'rgba(255,74,0,.08)',border:'1px solid rgba(255,74,0,.2)'}}>
              <svg className="w-4 h-4" style={{color:'#FF4A00'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span className="text-sm font-semibold" style={{color:'#FF4A00'}}>...and 3,980+ more apps available</span>
            </div>
          </div>
        </div>
      </section>

      {/* SETUP + PRICING */}
      <section id="setup" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="reveal">
              <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#FF4A00'}}>Simple 4-Step Setup</p>
              <h2 className="text-3xl font-bold mb-8" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>Up &amp; Running in Minutes</h2>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="step-num flex-shrink-0" style={{background:'linear-gradient(135deg,#FF4A00,#CC3B00)',boxShadow:'0 4px 14px rgba(255,74,0,.3)'}}><span className="text-white font-bold">1</span></div>
                  <div className="pt-2"><h4 className="text-sm font-bold mb-1" style={{color:'#0B2554'}}>Install DirectConnect Bundle</h4><p className="text-xs text-gray-400 leading-relaxed">Install In8Sync&apos;s Zapier DirectConnect SuiteApp bundle directly from your NetSuite account.</p></div>
                </div>
                <div className="flex gap-4">
                  <div className="step-num flex-shrink-0" style={{background:'linear-gradient(135deg,#1B6FD0,#3B8AE0)',boxShadow:'0 4px 14px rgba(27,111,208,.3)'}}><span className="text-white font-bold">2</span></div>
                  <div className="pt-2"><h4 className="text-sm font-bold mb-1" style={{color:'#0B2554'}}>Set Up Your License Key</h4><p className="text-xs text-gray-400 leading-relaxed">Activate your license key provided by In8Sync — takes under 2 minutes to configure.</p></div>
                </div>
                <div className="flex gap-4">
                  <div className="step-num flex-shrink-0" style={{background:'linear-gradient(135deg,#059669,#10B981)',boxShadow:'0 4px 14px rgba(5,150,105,.3)'}}><span className="text-white font-bold">3</span></div>
                  <div className="pt-2"><h4 className="text-sm font-bold mb-1" style={{color:'#0B2554'}}>Add Zapier Connector in NetSuite</h4><p className="text-xs text-gray-400 leading-relaxed">Add the In8Sync Zapier connector inside NetSuite and link it to your Zapier account.</p></div>
                </div>
                <div className="flex gap-4">
                  <div className="step-num flex-shrink-0" style={{background:'linear-gradient(135deg,#F59E0B,#FBBF24)',boxShadow:'0 4px 14px rgba(245,158,11,.3)'}}><span className="text-white font-bold">4</span></div>
                  <div className="pt-2"><h4 className="text-sm font-bold mb-1" style={{color:'#0B2554'}}>Authenticate Access Token</h4><p className="text-xs text-gray-400 leading-relaxed">Authenticate via Access Token (preferred), OAuth, or Username &amp; Password. Start building Zaps immediately.</p></div>
                </div>
              </div>
            </div>
            <div className="reveal">
              <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#1B6FD0'}}>Pricing</p>
              <h2 className="text-3xl font-bold mb-6" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>Simple, Flat Pricing</h2>
              <div style={{background:'linear-gradient(135deg,#0B2554,#0d1e42)',border:'1px solid rgba(255,74,0,.2)',borderRadius:'24px',padding:'32px',boxShadow:'0 20px 60px rgba(11,37,84,.25)'}}>
                <div className="flex items-end gap-2 mb-1"><span className="text-4xl font-bold text-white">$100</span><span className="text-gray-400 mb-1">/month</span></div>
                <p className="text-xs mb-6" style={{color:'rgba(255,255,255,.4)'}}>Billed annually</p>
                <div className="space-y-3 mb-6">
                  {['Unlimited Zaps & connections','1-hour setup training included','No coding required','Managed Zapier config available'].map(item => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{background:'rgba(255,74,0,.2)'}}><svg className="w-2.5 h-2.5" style={{color:'#FF8C5A'}} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg></div>
                      <span className="text-sm text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
                <a href="https://zapier.com/" target="_blank" rel="noopener noreferrer" className="btn-zap w-full block text-center text-white font-bold py-3.5 rounded-xl text-sm mb-3">Start 7-Day Free Trial</a>
                <p className="text-center text-xs" style={{color:'rgba(255,255,255,.35)'}}>No credit card required for trial</p>
              </div>
              <div className="mt-5 bg-white rounded-2xl p-5 border border-gray-100" style={{boxShadow:'0 4px 16px rgba(11,37,84,.06)'}}>
                <p className="text-gray-600 text-xs leading-relaxed italic mb-3">&ldquo;In8Sync&apos;s Zapier Integration is hands-free. If I need to change a setting, it&apos;s simple to make adjustments myself.&rdquo;</p>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-xs" style={{background:'linear-gradient(135deg,#FF4A00,#CC3B00)'}}>M</div>
                  <div><div className="text-xs font-bold" style={{color:'#0B2554'}}>Mohsin T.</div><div className="text-[10px] text-gray-400">Marketing Data Analyst, Sunlighten</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-20" style={{background:'#F5F7FC'}}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12 reveal"><p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#5BB8D4'}}>Explore More</p><h2 className="text-3xl font-bold" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>More CRM Integrations</h2></div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Link href="/salesforce" className="group bg-white rounded-2xl p-6 border border-gray-100 card-lift flex items-center gap-5 reveal" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)',textDecoration:'none'}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white border border-gray-100 p-2"><img src="/logos/Salesforce_logo.png" alt="Salesforce" className="w-full h-full object-contain" /></div>
              <div><h3 className="font-bold text-sm mb-0.5" style={{color:'#0B2554'}}>Salesforce DirectConnect</h3><p className="text-xs text-gray-400">17 record types — real-time bi-directional</p></div>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{letterSpacing:'-0.03em'}}>Connect NetSuite to<br /><span className="zap-text">4,000+ Apps</span> Today</h2>
          <p className="text-lg mb-10" style={{color:'rgba(255,255,255,.65)',lineHeight:1.7}}>Start your 7-day free trial of Zapier DirectConnect — no credit card required. Connect NetSuite to every app your business relies on.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://zapier.com/" target="_blank" rel="noopener noreferrer" className="btn-zap text-white font-bold px-10 py-4 rounded-2xl text-base">Start Free Trial</a>
            <Link href="/contact" className="btn-outline-white text-white font-semibold px-8 py-4 rounded-2xl text-base">Request a Demo</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
