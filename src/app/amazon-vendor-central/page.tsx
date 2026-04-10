'use client'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'

export default function AmazonVendorCentral() {
  const features = [
    {title:'Product Sync via EDI & API',desc:'Sync product data to Amazon Vendor Central via both EDI and API — supporting all catalog types and keeping listings consistently accurate.',color:'linear-gradient(135deg,#146EB4,#1B8CC4)',shadow:'rgba(20,110,180,.3)'},
    {title:'Easily Tailored Configuration',desc:'Every field, workflow, and mapping is configurable to your exact business requirements — no rigid one-size-fits-all approach.',color:'linear-gradient(135deg,#059669,#10B981)',shadow:'rgba(5,150,105,.2)'},
    {title:'Scheduled Data Sync',desc:'Configure sync schedules for each data flow independently — real-time, hourly, or daily — to balance performance and API limits.',color:'linear-gradient(135deg,#F59E0B,#FBBF24)',shadow:'rgba(245,158,11,.2)'},
    {title:'Eliminate Errors & Duplicate Data',desc:'Smart deduplication and validation logic ensures clean, accurate data across both NetSuite and Amazon Vendor Central at all times.',color:'linear-gradient(135deg,#EF4444,#F87171)',shadow:'rgba(239,68,68,.2)'},
    {title:'No iPaaS Requirement',desc:'No Boomi, Celigo, or other integration platforms needed. Everything runs natively inside NetSuite — saving thousands in additional licensing fees.',color:'linear-gradient(135deg,#6366F1,#818CF8)',shadow:'rgba(99,102,241,.2)'},
    {title:'Secure SuiteCloud Storage',desc:"All integration data is stored securely within NetSuite's SuiteCloud infrastructure — enterprise-grade security with no external data exposure.",color:'linear-gradient(135deg,#0B2554,#146EB4)',shadow:'rgba(11,37,84,.25)'},
    {title:'NetSuite Workflow Management',desc:'Manage and monitor all integration workflows directly from within NetSuite — full visibility and control without leaving your ERP.',color:'linear-gradient(135deg,#1B6FD0,#5BB8D4)',shadow:'rgba(27,111,208,.25)'},
    {title:'100% Hosted Within NetSuite',desc:'The entire integration lives inside your NetSuite environment — zero external dependencies, zero additional platforms, zero extra logins.',color:'linear-gradient(135deg,#FF9900,#E8871A)',shadow:'rgba(255,153,0,.2)'},
    {title:'24/7 Monitored & Managed Support',desc:"The integration is actively monitored 24/7 by In8Sync's expert team. Issues are caught and resolved before they impact your operations.",color:'linear-gradient(135deg,#059669,#10B981)',shadow:'rgba(5,150,105,.2)'},
  ]

  const dataFlows = [
    {title:'Purchase Orders',desc:'Amazon Purchase Orders sync from Vendor Central to NetSuite automatically — creating or updating records with all line items, quantities, and delivery requirements.',color:'linear-gradient(135deg,#146EB4,#1B8CC4)',shadow:'rgba(20,110,180,.25)'},
    {title:'Order Acknowledgements',desc:'Confirm and acknowledge Amazon POs directly from NetSuite. Acknowledgement data syncs back to Vendor Central automatically to keep buyers informed.',color:'linear-gradient(135deg,#059669,#10B981)',shadow:'rgba(5,150,105,.2)'},
    {title:'Advanced Shipping Notifications (ASN)',desc:'ASNs are generated and sent to Amazon Vendor Central automatically from NetSuite item fulfillments — tracking numbers, carrier info, and box contents included.',color:'linear-gradient(135deg,#F59E0B,#FBBF24)',shadow:'rgba(245,158,11,.2)'},
    {title:'Item Fulfillments',desc:'NetSuite item fulfillments trigger automatic updates in Amazon Vendor Central, maintaining accurate fulfillment status across both systems in real-time.',color:'linear-gradient(135deg,#6366F1,#818CF8)',shadow:'rgba(99,102,241,.2)'},
    {title:'Invoices',desc:'Invoices generated in NetSuite sync to Amazon Vendor Central automatically — ensuring accurate billing records, faster payment cycles, and full financial reconciliation without manual intervention.',color:'linear-gradient(135deg,#EF4444,#F87171)',shadow:'rgba(239,68,68,.2)'},
  ]

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero-avc min-h-screen flex items-center pt-20 relative overflow-hidden" style={{isolation:'isolate'}}>
        <div className="absolute inset-0 grid-lines opacity-60 z-10 pointer-events-none"></div>
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute top-16 right-8 w-96 h-96 rounded-full animate-float" style={{background:'radial-gradient(circle,rgba(20,110,180,.2) 0%,transparent 70%)'}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 w-full relative z-20">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div style={{animation:'slide-up .9s cubic-bezier(.23,1,.32,1) both'}}>
              <div className="flex items-center gap-2 mb-6">
                <Link href="/" className="text-xs font-medium" style={{color:'rgba(255,255,255,.4)'}}>Home</Link>
                <svg className="w-3 h-3" style={{color:'rgba(255,255,255,.25)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                <span className="text-xs font-medium" style={{color:'rgba(255,255,255,.4)'}}>Marketplaces</span>
                <svg className="w-3 h-3" style={{color:'rgba(255,255,255,.25)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                <span className="text-xs font-semibold" style={{color:'#7DC4F0'}}>Amazon Vendor Central</span>
              </div>
              <div className="inline-flex items-center gap-2.5 mb-7 px-4 py-2 rounded-full border" style={{background:'rgba(20,110,180,.12)',borderColor:'rgba(20,110,180,.35)'}}>
                <span className="text-lg">🏭</span>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{color:'#7DC4F0'}}>Amazon Vendor Central DirectConnect</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{letterSpacing:'-0.03em',lineHeight:1.08}}>
                Lossless Data Sync for<br />
                <span style={{background:'linear-gradient(135deg,#3B9CE0,#7DC4F0)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>Amazon Vendor</span><br />
                & NetSuite
              </h1>
              <p className="text-lg mb-8" style={{color:'rgba(255,255,255,.78)',lineHeight:1.75}}>A fully-featured, out-of-the-box solution providing lossless data syncing between your Amazon Vendor Central account and NetSuite's ERP — with no iPaaS required.</p>
              <div className="space-y-2.5 mb-10">
                {['Product sync via both EDI & API','100% hosted within NetSuite SuiteCloud','24/7 monitored with managed support'].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{background:'rgba(20,110,180,.25)',border:'1px solid rgba(20,110,180,.4)'}}>
                      <svg className="w-2.5 h-2.5" style={{color:'#7DC4F0'}} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    </div>
                    <p className="text-sm" style={{color:'rgba(255,255,255,.75)'}}>{item}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-avc text-white font-bold px-7 py-3.5 rounded-xl text-sm">Request a Demo</Link>
                <Link href="#benefits" className="btn-outline-white btn-outline-white-avc text-white font-semibold px-6 py-3.5 rounded-xl text-sm">Benefits</Link>
                <Link href="#features" className="btn-outline-white btn-outline-white-avc text-white font-semibold px-6 py-3.5 rounded-xl text-sm">Features</Link>
                <Link href="#flows" className="btn-outline-white btn-outline-white-avc text-white font-semibold px-6 py-3.5 rounded-xl text-sm">Data Flows</Link>
                <Link href="/integrations" className="btn-outline-white btn-outline-white-avc text-white font-semibold px-6 py-3.5 rounded-xl text-sm inline-flex items-center gap-2">
                  See All Bundles <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center" style={{animation:'fade-in 1.2s ease both .4s',opacity:0}}>
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 rounded-3xl blur-3xl" style={{background:'linear-gradient(135deg,rgba(20,110,180,.25),rgba(91,184,212,.15))'}}></div>
                <div className="relative rounded-3xl p-8 border" style={{background:'rgba(255,255,255,.03)',borderColor:'rgba(20,110,180,.2)',backdropFilter:'blur(10px)',boxShadow:'0 24px 64px rgba(0,0,0,.4)'}}>
                  <div className="flex flex-col items-center justify-center" style={{height:'300px'}}>
                    <div className="rounded-2xl flex items-center justify-center p-6" style={{background:'white',width:'220px',height:'140px'}}>
                      <img src="/brand_assests/amazaon vendor central.jpg" alt="Amazon Vendor Central" style={{maxWidth:'180px',maxHeight:'100px',objectFit:'contain'}} />
                    </div>
                    <div style={{fontSize:'13px',fontWeight:600,color:'rgba(255,255,255,.7)',marginTop:'10px'}}>Vendor Central</div>
                    <div style={{fontSize:'12px',color:'rgba(255,255,255,.4)',marginTop:'4px'}}>NetSuite Integration</div>
                  </div>
                </div>
                <div className="absolute -top-4 -left-6 bg-white rounded-2xl px-4 py-3" style={{boxShadow:'0 8px 32px rgba(0,0,0,.15)'}}>
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#146EB4,#1B8CC4)'}}><span className="text-white text-sm">🏭</span></div>
                    <div><div className="text-xs font-bold" style={{color:'#0B2554'}}>EDI + API</div><div className="text-[10px] text-gray-400">Dual Sync Method</div></div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-6 bg-white rounded-2xl px-4 py-3" style={{boxShadow:'0 8px 32px rgba(0,0,0,.15)'}}>
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#0B2554,#146EB4)'}}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                    </div>
                    <div><div className="text-xs font-bold" style={{color:'#0B2554'}}>100% NetSuite</div><div className="text-[10px] text-gray-400">No iPaaS Required</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24" style={{background:'#F5F7FC'}}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#146EB4'}}>Why DirectConnect</p>
            <h2 className="text-4xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>Benefits of Our Amazon Vendor Central<br />NetSuite Integration</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 card-lift reveal" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{background:'linear-gradient(135deg,#146EB4,#1B8CC4)',boxShadow:'0 6px 20px rgba(20,110,180,.3)'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 className="text-lg font-bold mb-3" style={{color:'#0B2554'}}>Cut Data Management Time in Half</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Stop wasting time manually syncing POs, ASNs, and invoices. Vendor Central DirectConnect automates bi-directional data flows between Amazon and NetSuite for a true omni-channel experience.</p>
            </div>
            <div className="rounded-3xl p-8 border border-gray-100 card-lift reveal reveal-delay-1" style={{background:'#F8F9FC',boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{background:'linear-gradient(135deg,#0B2554,#1B6FD0)',boxShadow:'0 6px 20px rgba(11,37,84,.2)'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <h3 className="text-lg font-bold mb-3" style={{color:'#0B2554'}}>No iPaaS Requirement</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Natively built into and fully hosted in NetSuite's SuiteCloud platform — no external integration tool needed. Superior performance, dramatically lower cost, and zero middleware to manage.</p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 card-lift reveal reveal-delay-2" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{background:'linear-gradient(135deg,#1B6FD0,#5BB8D4)',boxShadow:'0 6px 20px rgba(27,111,208,.3)'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </div>
              <h3 className="text-lg font-bold mb-3" style={{color:'#0B2554'}}>Accurate, Real-time Syncing</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Purchase Orders, Order Acknowledgements, Advanced Shipping Notices, and Invoices sync perfectly between Vendor Central and NetSuite with zero data loss.</p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 card-lift reveal reveal-delay-3" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{background:'linear-gradient(135deg,#059669,#10B981)',boxShadow:'0 6px 20px rgba(16,185,129,.25)'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
              </div>
              <h3 className="text-lg font-bold mb-3" style={{color:'#0B2554'}}>Full Installation & Managed Support</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Comes fully-featured out-of-the-box with 24/7 monitored integration and fully-managed support from In8Sync's expert NetSuite developers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#1B6FD0'}}>What's Included</p>
            <h2 className="text-4xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>9 Core Features of Amazon Vendor Central<br />DirectConnect</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div key={f.title} className={`bg-white rounded-2xl p-6 border card-lift reveal${i%3===1?' reveal-delay-1':i%3===2?' reveal-delay-2':''}`} style={{borderColor:'#E8EDF5'}}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{background:f.color,boxShadow:`0 4px 14px ${f.shadow}`}}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                </div>
                <h3 className="text-sm font-bold mb-1.5" style={{color:'#0B2554'}}>{f.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DATA FLOWS */}
      <section id="flows" className="py-24" style={{background:'#F5F7FC'}}>
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14 reveal">
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#146EB4'}}>Supported Data Flows</p>
            <h2 className="text-4xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>Everything That Moves Between<br />Vendor Central & NetSuite</h2>
            <p className="text-gray-400 text-sm">Five critical data flows — fully automated and monitored end-to-end.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flow-card reveal">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:'linear-gradient(135deg,#146EB4,#1B8CC4)',boxShadow:'0 4px 14px rgba(20,110,180,.25)'}}><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg></div>
              <div><h3 className="text-sm font-bold mb-1" style={{color:'#0B2554'}}>Purchase Orders</h3><p className="text-xs text-gray-400 leading-relaxed">Amazon Purchase Orders sync from Vendor Central to NetSuite automatically — creating or updating records with all line items, quantities, and delivery requirements.</p></div>
            </div>
            <div className="flow-card reveal reveal-delay-1">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:'linear-gradient(135deg,#059669,#10B981)',boxShadow:'0 4px 14px rgba(5,150,105,.2)'}}><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg></div>
              <div><h3 className="text-sm font-bold mb-1" style={{color:'#0B2554'}}>Order Acknowledgements</h3><p className="text-xs text-gray-400 leading-relaxed">Confirm and acknowledge Amazon POs directly from NetSuite. Acknowledgement data syncs back to Vendor Central automatically to keep buyers informed.</p></div>
            </div>
            <div className="flow-card reveal reveal-delay-2">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:'linear-gradient(135deg,#F59E0B,#FBBF24)',boxShadow:'0 4px 14px rgba(245,158,11,.2)'}}><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg></div>
              <div><h3 className="text-sm font-bold mb-1" style={{color:'#0B2554'}}>Advanced Shipping Notifications (ASN)</h3><p className="text-xs text-gray-400 leading-relaxed">ASNs are generated and sent to Amazon Vendor Central automatically from NetSuite item fulfillments — tracking numbers, carrier info, and box contents included.</p></div>
            </div>
            <div className="flow-card reveal reveal-delay-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:'linear-gradient(135deg,#6366F1,#818CF8)',boxShadow:'0 4px 14px rgba(99,102,241,.2)'}}><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/></svg></div>
              <div><h3 className="text-sm font-bold mb-1" style={{color:'#0B2554'}}>Item Fulfillments</h3><p className="text-xs text-gray-400 leading-relaxed">NetSuite item fulfillments trigger automatic updates in Amazon Vendor Central, maintaining accurate fulfillment status across both systems in real-time.</p></div>
            </div>
            <div className="flow-card reveal md:col-span-2">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:'linear-gradient(135deg,#EF4444,#F87171)',boxShadow:'0 4px 14px rgba(239,68,68,.2)'}}><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z"/></svg></div>
              <div><h3 className="text-sm font-bold mb-1" style={{color:'#0B2554'}}>Invoices</h3><p className="text-xs text-gray-400 leading-relaxed">Invoices generated in NetSuite sync to Amazon Vendor Central automatically — ensuring accurate billing records, faster payment cycles, and full financial reconciliation without manual intervention.</p></div>
            </div>
          </div>

          {/* Data Flow Diagram */}
          <div className="mt-16 reveal">
            <div className="max-w-2xl mx-auto text-center">
              <div className="relative inline-block">
                <div className="relative w-80 h-80 mx-auto">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full flex items-center justify-center" style={{background:'linear-gradient(135deg,#0B2554,#1B6FD0)',boxShadow:'0 8px 32px rgba(11,37,84,.3)'}}>
                      <span className="text-white font-bold text-sm text-center leading-tight">In8<br />Sync</span>
                    </div>
                  </div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-1" style={{background:'#fff',border:'2px solid #0B2554',boxShadow:'0 4px 16px rgba(11,37,84,.15)'}}>
                      <span className="text-[9px] font-bold text-center" style={{color:'#0B2554'}}>ORACLE<br />NetSuite</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{background:'#fff',border:'2px solid #FF9900',boxShadow:'0 4px 16px rgba(255,153,0,.2)'}}>
                      <span className="text-[9px] font-bold" style={{color:'#FF9900'}}>amazon</span>
                    </div>
                  </div>
                  <div className="absolute top-10 right-0 flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{background:'#EFF6FF',border:'2px solid #1B6FD0'}}>
                      <svg className="w-6 h-6" style={{color:'#1B6FD0'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                    </div>
                    <span className="text-[9px] font-medium mt-1 text-center" style={{color:'#0B2554'}}>Purchase<br />Orders</span>
                  </div>
                  <div className="absolute bottom-10 right-0 flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{background:'#EFF6FF',border:'2px solid #1B6FD0'}}>
                      <svg className="w-6 h-6" style={{color:'#1B6FD0'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                    </div>
                    <span className="text-[9px] font-medium mt-1 text-center" style={{color:'#0B2554'}}>Items</span>
                  </div>
                  <div className="absolute top-10 left-0 flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{background:'#F0FFF4',border:'2px solid #059669'}}>
                      <svg className="w-6 h-6" style={{color:'#059669'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
                    </div>
                    <span className="text-[9px] font-medium mt-1 text-center" style={{color:'#0B2554'}}>Invoices</span>
                  </div>
                  <div className="absolute bottom-10 left-0 flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{background:'#F0FFF4',border:'2px solid #059669'}}>
                      <svg className="w-6 h-6" style={{color:'#059669'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <span className="text-[9px] font-medium mt-1 text-center" style={{color:'#0B2554'}}>Receipts</span>
                  </div>
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320" fill="none">
                    <circle cx="160" cy="160" r="130" stroke="#1B6FD0" strokeWidth="1.5" strokeDasharray="8 6" opacity="0.3"/>
                  </svg>
                </div>
                <p className="text-sm text-gray-500 mt-4">Automated bi-directional data sync powered by In8Sync DirectConnect</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY IN8SYNC */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-8 items-center reveal">
            <div className="bg-white rounded-2xl p-8 border border-gray-100" style={{boxShadow:'0 4px 24px rgba(11,37,84,.07)'}}>
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-4 h-4" style={{color:'#FF9900'}} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed italic mb-6">&ldquo;We use In8Sync for several e-commerce integrations and advanced NetSuite scripting to help automate our business process, and reduce manual labor. They continually develop and implement new features.&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-sm" style={{background:'linear-gradient(135deg,#146EB4,#1B8CC4)'}}>T</div>
                <div><div className="text-xs font-bold" style={{color:'#0B2554'}}>Tony N.</div><div className="text-[10px] text-gray-400">Workwell Technologies</div></div>
              </div>
            </div>
            <div className="space-y-4 reveal reveal-delay-2">
              <h3 className="text-2xl font-bold" style={{color:'#0B2554'}}>Why In8Sync?</h3>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{background:'#EFF6FF',border:'1px solid rgba(20,110,180,.2)'}}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{background:'linear-gradient(135deg,#146EB4,#1B8CC4)'}}><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg></div>
                <p className="text-xs font-medium" style={{color:'#146EB4'}}>NetSuite SuiteCloud Developer Network Certified Partner</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-xl p-4 border border-gray-100 text-center"><div className="text-2xl font-bold mb-1" style={{color:'#0B2554'}}>10+</div><div className="text-xs text-gray-400">Years NetSuite Experience</div></div>
                <div className="bg-white rounded-xl p-4 border border-gray-100 text-center"><div className="text-2xl font-bold mb-1" style={{color:'#0B2554'}}>24/7</div><div className="text-xs text-gray-400">Monitored Integration</div></div>
                <div className="bg-white rounded-xl p-4 border border-gray-100 text-center"><div className="text-2xl font-bold mb-1" style={{color:'#0B2554'}}>0</div><div className="text-xs text-gray-400">External Platforms</div></div>
                <div className="bg-white rounded-xl p-4 border border-gray-100 text-center"><div className="text-2xl font-bold mb-1" style={{color:'#0B2554'}}>100%</div><div className="text-xs text-gray-400">NetSuite Native</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE MORE */}
      <section className="py-20" style={{background:'#F5F7FC'}}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12 reveal">
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#5BB8D4'}}>Explore More</p>
            <h2 className="text-3xl font-bold" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>More Marketplace Integrations</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Link href="/amazon-seller-central" className="group bg-white rounded-2xl p-6 border border-gray-100 card-lift flex items-center gap-5 reveal" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)',textDecoration:'none'}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white border border-gray-100 p-2"><img src="/logos/Amazon-Seller-Central_logo.png" alt="Amazon Seller Central" className="w-full h-full object-contain" /></div>
              <div><h3 className="font-bold text-sm mb-0.5" style={{color:'#0B2554'}}>Amazon Seller Central</h3><p className="text-xs text-gray-400">FBA + FBM — $200/mo all-inclusive</p></div>
              <svg className="w-4 h-4 text-gray-300 ml-auto transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </Link>
            <Link href="/ebay" className="group bg-white rounded-2xl p-6 border border-gray-100 card-lift flex items-center gap-5 reveal reveal-delay-1" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)',textDecoration:'none'}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white border border-gray-100 p-2"><img src="/logos/eBay_logo.png" alt="eBay" className="w-full h-full object-contain" /></div>
              <div><h3 className="font-bold text-sm mb-0.5" style={{color:'#0B2554'}}>eBay DirectConnect</h3><p className="text-xs text-gray-400">Inbound & outbound flow automation</p></div>
              <svg className="w-4 h-4 text-gray-300 ml-auto transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{background:'linear-gradient(135deg,#0B2554 0%,#0d1e42 50%,#0B2554 100%)'}}>
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{letterSpacing:'-0.03em'}}>Ready to Automate Your<br /><span className="avc-text">Vendor Central ↔ NetSuite</span> Sync?</h2>
          <p className="text-lg mb-10" style={{color:'rgba(255,255,255,.65)',lineHeight:1.7}}>Request a personalized demo today. Our NetSuite integration experts will show you exactly how Amazon Vendor Central DirectConnect will transform your operations.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-avc text-white font-bold px-10 py-4 rounded-2xl text-base">Request A Demo</Link>
            <Link href="/contact" className="btn-outline-white text-white font-semibold px-8 py-4 rounded-2xl text-base">Contact Us</Link>
          </div>
        </div>
      </section>

      <Footer />
      <RevealObserver />
    </>
  )
}
