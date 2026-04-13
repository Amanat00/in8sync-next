'use client'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'

export default function EbayPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero-ebay min-h-[calc(100vh-30px)] flex items-center pt-[65px] pb-4 relative overflow-hidden" style={{isolation:'isolate'}}>
        <div className="absolute inset-0 grid-lines opacity-60 z-10 pointer-events-none"></div>
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute top-16 right-8 w-80 h-80 rounded-full animate-float" style={{background:'radial-gradient(circle,rgba(229,50,56,.12) 0%,transparent 70%)'}}></div>
          <div className="absolute bottom-32 right-1/3 w-60 h-60 rounded-full" style={{background:'radial-gradient(circle,rgba(0,100,210,.1) 0%,transparent 70%)'}}></div>
          <div className="absolute top-1/3 right-1/4"><div className="w-3 h-3 rounded-full" style={{background:'#E53238'}}></div><div className="absolute inset-0 rounded-full" style={{background:'#E53238',animation:'pulse-ring 2.8s ease-out infinite',opacity:.4}}></div></div>
          <div className="absolute bottom-40 left-20"><div className="w-2 h-2 rounded-full" style={{background:'#0064D2'}}></div><div className="absolute inset-0 rounded-full" style={{background:'#0064D2',animation:'pulse-ring 3.4s ease-out infinite 1s',opacity:.4}}></div></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 w-full relative z-20">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div style={{animation:'slide-up .9s cubic-bezier(.23,1,.32,1) both'}}>
              <div className="flex items-center gap-2 mb-6">
                <Link href="/" className="text-xs font-medium" style={{color:'rgba(255,255,255,.4)'}}>Home</Link>
                <svg className="w-3 h-3" style={{color:'rgba(255,255,255,.25)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                <span className="text-xs font-medium" style={{color:'rgba(255,255,255,.4)'}}>Marketplaces</span>
                <svg className="w-3 h-3" style={{color:'rgba(255,255,255,.25)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                <span className="text-xs font-semibold" style={{color:'#E53238'}}>eBay</span>
              </div>
              <div className="inline-flex items-center gap-2.5 mb-7 px-4 py-2 rounded-full border" style={{background:'rgba(229,50,56,.1)',borderColor:'rgba(229,50,56,.3)'}}>
                <span className="text-lg">🏷️</span>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{color:'#FF6B6B'}}>In8Sync DirectConnect for eBay</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{letterSpacing:'-0.03em',lineHeight:'1.08'}}>
                Directly Connecting<br />
                NetSuite &amp; <span className="ebay-text">eBay</span>
              </h1>
              <p className="text-lg mb-8" style={{color:'rgba(255,255,255,.78)',lineHeight:'1.75'}}>eBay is natively built into NetSuite — the only required software for the integration. Save time, money, and expertise with In8Sync&apos;s fully automated eBay DirectConnect.</p>
              <div className="grid grid-cols-3 gap-4 mb-10">
                <div className="rounded-2xl p-4 text-center" style={{background:'rgba(229,50,56,.12)',border:'1px solid rgba(229,50,56,.2)'}}>
                  <div className="text-lg font-bold text-white mb-1">Save TIME</div>
                  <div className="text-xs" style={{color:'rgba(255,255,255,.5)'}}>Auto bi-directional sync</div>
                </div>
                <div className="rounded-2xl p-4 text-center" style={{background:'rgba(0,100,210,.12)',border:'1px solid rgba(0,100,210,.2)'}}>
                  <div className="text-lg font-bold text-white mb-1">Save MONEY</div>
                  <div className="text-xs" style={{color:'rgba(255,255,255,.5)'}}>No 3rd-party middleware</div>
                </div>
                <div className="rounded-2xl p-4 text-center" style={{background:'rgba(134,184,23,.12)',border:'1px solid rgba(134,184,23,.2)'}}>
                  <div className="text-lg font-bold text-white mb-1">Save EFFORT</div>
                  <div className="text-xs" style={{color:'rgba(255,255,255,.5)'}}>Simple management</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-ebay text-white font-bold px-7 py-3.5 rounded-xl text-sm">Schedule A Demo</Link>
                <a href="#benefits" className="btn-outline-white btn-outline-white-ebay text-white font-semibold px-6 py-3.5 rounded-xl text-sm">Benefits</a>
                <a href="#features" className="btn-outline-white btn-outline-white-ebay text-white font-semibold px-6 py-3.5 rounded-xl text-sm">Features</a>
                <Link href="/integrations" className="btn-outline-white btn-outline-white-ebay text-white font-semibold px-6 py-3.5 rounded-xl text-sm inline-flex items-center gap-2">See All Bundles <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></Link>
              </div>
            </div>
            <div className="relative flex justify-center" style={{animation:'fade-in 1.2s ease both .4s',opacity:0}}>
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 rounded-3xl blur-3xl" style={{background:'linear-gradient(135deg,rgba(229,50,56,.18),rgba(0,100,210,.15))'}}></div>
                <div className="relative rounded-3xl p-8 border" style={{background:'rgba(255,255,255,.03)',borderColor:'rgba(229,50,56,.18)',backdropFilter:'blur(10px)',boxShadow:'0 24px 64px rgba(0,0,0,.4)'}}>
                  <div className="flex flex-col items-center justify-center" style={{height:'300px'}}>
                    <div className="rounded-2xl flex items-center justify-center p-6" style={{background:'white',width:'220px',height:'140px'}}>
                      <img src="/brand_assests//EBay.svg" alt="eBay Logo" style={{maxWidth:'180px',maxHeight:'100px',objectFit:'contain'}} />
                    </div>
                    <div style={{fontSize:'12px',color:'rgba(255,255,255,.4)',marginTop:'12px'}}>NetSuite Integration</div>
                  </div>
                </div>
                <div className="absolute -top-4 -left-6 bg-white rounded-2xl px-4 py-3 shadow-2xl card-lift">
                  <div className="flex items-center gap-2.5">
                    <div className="flex gap-0.5">
                      <div className="w-3 h-6 rounded-sm" style={{background:'#E53238'}}></div>
                      <div className="w-3 h-6 rounded-sm" style={{background:'#F5AF02'}}></div>
                      <div className="w-3 h-6 rounded-sm" style={{background:'#86B817'}}></div>
                      <div className="w-3 h-6 rounded-sm" style={{background:'#0064D2'}}></div>
                    </div>
                    <div><div className="text-xs font-bold text-navy">eBay Native</div><div className="text-[10px] text-gray-400">Built in NetSuite</div></div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-6 bg-white rounded-2xl px-4 py-3 shadow-2xl card-lift">
                  <div className="flex items-center gap-2.5"><div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#0064D2,#1B6FD0)'}}><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg></div><div><div className="text-xs font-bold text-navy">Real-time Sync</div><div className="text-[10px] text-gray-400">Orders &amp; Inventory</div></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MIDDLEWARE */}
      <section className="py-16" style={{background:'#FF6B00'}}>
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-4" style={{letterSpacing:'-0.02em'}}>No External Platform or Middleware</h2>
              <p className="text-white/80 text-sm leading-relaxed mb-3">eBay offers superior system performance while dramatically reducing the <strong className="text-white">TIME</strong> and <strong className="text-white">SKILL</strong> required to manage, saving your business <strong className="text-white">MONEY</strong> and <strong className="text-white">RESOURCES</strong>.</p>
              <p className="text-white/80 text-sm leading-relaxed mb-3">While many other solutions run on an External Platform, also known as Middleware, In8Sync&apos;s efficient DirectConnect bundles are natively built into and fully hosted in NetSuite.</p>
              <p className="text-white/80 text-sm leading-relaxed">In8Sync&apos;s agile approach allows for <strong className="text-white">More Money</strong> to be re-invested in <strong className="text-white">New and Improved Products &amp; Features</strong>.</p>
            </div>
            <div className="flex-shrink-0">
              <div className="relative w-48 h-48 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full flex items-center justify-center border-4 border-white/30" style={{background:'#003087'}}>
                  <div className="text-center">
                    <div className="text-white font-bold text-xl mb-1">Middleware</div>
                    <div className="text-white/60 text-xs">External Platform</div>
                  </div>
                </div>
                {/* X cross over the circle */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 192 192" fill="none">
                  <line x1="30" y1="30" x2="162" y2="162" stroke="white" strokeWidth={8} strokeLinecap="round" />
                  <line x1="162" y1="30" x2="30" y2="162" stroke="white" strokeWidth={8} strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="py-24" style={{background:'#F5F7FC'}}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#E53238'}}>Why DirectConnect</p>
            <h2 className="text-4xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>Save Time, Money &amp; Expertise<br />with eBay DirectConnect</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 card-lift reveal" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{background:'linear-gradient(135deg,#E53238,#C42028)',boxShadow:'0 6px 20px rgba(229,50,56,.3)'}}><svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
              <h3 className="text-lg font-bold mb-3" style={{color:'#E53238'}}>Save TIME</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Automatically sync data bi-directionally between eBay and NetSuite. Any record is easy to view or download from directly within NetSuite — no external system needed.</p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 card-lift reveal reveal-delay-1" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{background:'linear-gradient(135deg,#0064D2,#1B8CC4)',boxShadow:'0 6px 20px rgba(0,100,210,.3)'}}><svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
              <h3 className="text-lg font-bold mb-3" style={{color:'#0064D2'}}>Save MONEY</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Skip expensive 3rd-party platforms or middleware entirely. In8Sync&apos;s simple, cost-effective bundles map API and EDI data directly into NetSuite with no additional licensing fees.</p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 card-lift reveal reveal-delay-2" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{background:'linear-gradient(135deg,#86B817,#A0D420)',boxShadow:'0 6px 20px rgba(134,184,23,.3)'}}><svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg></div>
              <h3 className="text-lg font-bold mb-3" style={{color:'#5A8B00'}}>Save EXPERTISE</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Any authorized employee can manage the bundle directly in NetSuite — no need to learn complicated external systems or hire dedicated integration specialists.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES WITH TABS */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 reveal">
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#1B6FD0'}}>Complete Feature Set</p>
            <h2 className="text-4xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>Inbound &amp; Outbound Flows<br />Fully Automated</h2>
            <p className="text-gray-400 text-sm">Everything from order imports to listing management — handled automatically inside NetSuite.</p>
          </div>

          {/* Inbound Section */}
          <div className="mb-10 reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#E53238,#C42028)'}}><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg></div>
              <h3 className="text-lg font-bold" style={{color:'#0B2554'}}>Inbound: eBay → NetSuite</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="feat-card feat-card-ebay">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{background:'rgba(229,50,56,.1)'}}><svg className="w-4 h-4" style={{color:'#E53238'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg></div>
                <h4 className="text-xs font-bold mb-1" style={{color:'#0B2554'}}>New Sales Orders</h4>
                <p className="text-xs text-gray-400 leading-relaxed">eBay orders automatically create new sales orders in NetSuite with all line items and customer data.</p>
              </div>
              <div className="feat-card feat-card-ebay">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{background:'rgba(229,50,56,.1)'}}><svg className="w-4 h-4" style={{color:'#E53238'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg></div>
                <h4 className="text-xs font-bold mb-1" style={{color:'#0B2554'}}>Order Updates</h4>
                <p className="text-xs text-gray-400 leading-relaxed">Changes to existing eBay orders sync automatically to NetSuite, keeping records always current.</p>
              </div>
              <div className="feat-card feat-card-ebay">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{background:'rgba(229,50,56,.1)'}}><svg className="w-4 h-4" style={{color:'#E53238'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/></svg></div>
                <h4 className="text-xs font-bold mb-1" style={{color:'#0B2554'}}>SKU / eBay ID Matching</h4>
                <p className="text-xs text-gray-400 leading-relaxed">Line items matched by SKU or eBay listing ID for precise, error-free order mapping into NetSuite.</p>
              </div>
              <div className="feat-card feat-card-ebay">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{background:'rgba(229,50,56,.1)'}}><svg className="w-4 h-4" style={{color:'#E53238'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
                <h4 className="text-xs font-bold mb-1" style={{color:'#0B2554'}}>Scheduled Import</h4>
                <p className="text-xs text-gray-400 leading-relaxed">Configure import schedules for eBay orders — real-time or batched at set intervals based on your workflow.</p>
              </div>
            </div>
          </div>

          {/* Outbound Section */}
          <div className="reveal">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#0064D2,#1B6FD0)'}}><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg></div>
              <h3 className="text-lg font-bold" style={{color:'#0B2554'}}>Outbound: NetSuite → eBay</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="feat-card feat-card-ebay">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{background:'rgba(0,100,210,.1)'}}><svg className="w-4 h-4" style={{color:'#0064D2'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg></div>
                <h4 className="text-xs font-bold mb-1" style={{color:'#0B2554'}}>Listing Management</h4>
                <p className="text-xs text-gray-400 leading-relaxed">Maps SKU, title, description, price, and image URLs from NetSuite. Syncs on create/edit, on-demand, or scheduled. Supports multi-location inventory.</p>
              </div>
              <div className="feat-card feat-card-ebay">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{background:'rgba(0,100,210,.1)'}}><svg className="w-4 h-4" style={{color:'#0064D2'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/></svg></div>
                <h4 className="text-xs font-bold mb-1" style={{color:'#0B2554'}}>Stock Level Sync</h4>
                <p className="text-xs text-gray-400 leading-relaxed">Maintains accurate eBay inventory via scheduled syncing from NetSuite (real-time not available due to eBay API limitations).</p>
              </div>
              <div className="feat-card feat-card-ebay">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{background:'rgba(0,100,210,.1)'}}><svg className="w-4 h-4" style={{color:'#0064D2'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
                <h4 className="text-xs font-bold mb-1" style={{color:'#0B2554'}}>Price Level Sync</h4>
                <p className="text-xs text-gray-400 leading-relaxed">Regular scheduled price updates from NetSuite to eBay. Select specific price levels and integrate with stock level sync for unified management.</p>
              </div>
              <div className="feat-card feat-card-ebay">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{background:'rgba(0,100,210,.1)'}}><svg className="w-4 h-4" style={{color:'#0064D2'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg></div>
                <h4 className="text-xs font-bold mb-1" style={{color:'#0B2554'}}>Shipping Sync</h4>
                <p className="text-xs text-gray-400 leading-relaxed">Tracking numbers and carrier details sync from NetSuite to eBay in real-time or on schedule — improving buyer experience with instant order tracking.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUT OF THE BOX */}
      <section className="py-20" style={{background:'#F5F7FC'}}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12 reveal">
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#5BB8D4'}}>Platform Capabilities</p>
            <h2 className="text-3xl font-bold" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>Out-of-the-Box Self-Service Management</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 card-lift reveal" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{background:'linear-gradient(135deg,#0B2554,#1B6FD0)'}}><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg></div>
              <h3 className="text-sm font-bold mb-2" style={{color:'#0B2554'}}>Fully Managed Within NetSuite</h3>
              <p className="text-xs text-gray-400 leading-relaxed">No external platform required. Everything runs inside NetSuite — one system, zero context switching.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 card-lift reveal reveal-delay-1" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{background:'linear-gradient(135deg,#E53238,#C42028)'}}><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg></div>
              <h3 className="text-sm font-bold mb-2" style={{color:'#0B2554'}}>Self-Service Dashboard</h3>
              <p className="text-xs text-gray-400 leading-relaxed">Monitor integration statuses, view logs, and manage settings from a clear dashboard inside NetSuite.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 card-lift reveal reveal-delay-2" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{background:'linear-gradient(135deg,#059669,#10B981)'}}><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg></div>
              <h3 className="text-sm font-bold mb-2" style={{color:'#0B2554'}}>Configurable Scheduling</h3>
              <p className="text-xs text-gray-400 leading-relaxed">Set schedules independently for each data flow. Trigger on-demand runs any time from within NetSuite.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 card-lift reveal" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{background:'linear-gradient(135deg,#F59E0B,#FBBF24)'}}><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg></div>
              <h3 className="text-sm font-bold mb-2" style={{color:'#0B2554'}}>Integration Logs in NetSuite</h3>
              <p className="text-xs text-gray-400 leading-relaxed">Integration settings and detailed logs are accessible directly within NetSuite for full transparency and auditability.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 card-lift reveal reveal-delay-1" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{background:'linear-gradient(135deg,#86B817,#A0D420)'}}><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg></div>
              <h3 className="text-sm font-bold mb-2" style={{color:'#0B2554'}}>Pre-Configured Flows</h3>
              <p className="text-xs text-gray-400 leading-relaxed">Integration flows come pre-configured and ready to run out-of-the-box — minimal setup, immediate value.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 card-lift reveal reveal-delay-2" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{background:'linear-gradient(135deg,#6366F1,#818CF8)'}}><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg></div>
              <h3 className="text-sm font-bold mb-2" style={{color:'#0B2554'}}>Expert Managed Support</h3>
              <p className="text-xs text-gray-400 leading-relaxed">Live phone support 8am–8pm MT and email support within 24 hours from In8Sync&apos;s NetSuite developer team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-20 bg-white">
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
            <Link href="/amazon-vendor-central" className="group bg-white rounded-2xl p-6 border border-gray-100 card-lift flex items-center gap-5 reveal reveal-delay-1" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)',textDecoration:'none'}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white border border-gray-100 p-2"><img src="/logos/Amazon-Vendor-Central_logo.png" alt="Amazon Vendor Central" className="w-full h-full object-contain" /></div>
              <div><h3 className="font-bold text-sm mb-0.5" style={{color:'#0B2554'}}>Amazon Vendor Central</h3><p className="text-xs text-gray-400">EDI &amp; API — full PO automation</p></div>
              <svg className="w-4 h-4 text-gray-300 ml-auto transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{background:'linear-gradient(135deg,#0B2554 0%,#0d1e42 50%,#0B2554 100%)'}}>
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{letterSpacing:'-0.03em'}}>Ready to Connect<br /><span className="ebay-text">eBay</span> &amp; NetSuite?</h2>
          <p className="text-lg mb-10" style={{color:'rgba(255,255,255,.65)',lineHeight:'1.7'}}>Schedule a personalized demo and see exactly how In8Sync&apos;s eBay DirectConnect will eliminate manual work and automate your entire eBay operation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link href="/contact" className="btn-ebay text-white font-bold px-10 py-4 rounded-2xl text-base">Schedule A Demo</Link>
            <Link href="/contact" className="btn-outline-white text-white font-semibold px-8 py-4 rounded-2xl text-base">Contact Us</Link>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm" style={{color:'rgba(255,255,255,.5)'}}>
            <div className="flex items-center gap-2"><svg className="w-4 h-4" style={{color:'#86B817'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg> Live phone support 8am–8pm MT</div>
            <div className="flex items-center gap-2"><svg className="w-4 h-4" style={{color:'#0064D2'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg> Email response within 24 hours</div>
            <div className="flex items-center gap-2"><svg className="w-4 h-4" style={{color:'#E53238'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg> SuiteCloud Certified Partner</div>
          </div>
        </div>
      </section>

      <Footer />
      <RevealObserver />
    </>
  )
}
