'use client'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'

export default function VeracorePage() {
  return (
    <>
      <Navbar />
      <section className="hero-vrc min-h-[calc(100vh-30px)] flex items-center pt-[65px] pb-4 relative overflow-hidden" style={{isolation:'isolate'}}>
  <div className="absolute inset-0 grid-lines opacity-60 z-10 pointer-events-none"></div>
  <div className="absolute inset-0 pointer-events-none z-10">
    <div className="absolute top-16 right-8 w-96 h-96 rounded-full animate-float" style={{background:'radial-gradient(circle,rgba(34,211,238,.1) 0%,transparent 70%)'}}></div>
    <div className="absolute top-1/3 right-1/4"><div className="w-3 h-3 rounded-full" style={{background:'#22D3EE'}}></div><div className="absolute inset-0 rounded-full" style={{background:'#22D3EE',animation:'pulse-ring 2.8s ease-out infinite',opacity:'.4'}}></div></div>
  </div>
  <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 w-full relative z-20">
    <div className="grid lg:grid-cols-2 gap-14 items-center">
      <div style={{animation:'slide-up .9s cubic-bezier(.23,1,.32,1) both'}}>
        <div className="flex items-center gap-2 mb-6">
          <a href="/" className="text-xs font-medium" style={{color:'rgba(255,255,255,.4)'}}>Home</a>
          <svg className="w-3 h-3" style={{color:'rgba(255,255,255,.25)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          <span className="text-xs font-medium" style={{color:'rgba(255,255,255,.4)'}}>3PL Fulfillment</span>
          <svg className="w-3 h-3" style={{color:'rgba(255,255,255,.25)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          <span className="text-xs font-semibold" style={{color:'#22D3EE'}}>Veracore</span>
        </div>
        <div className="inline-flex items-center gap-2.5 mb-7 px-4 py-2 rounded-full border" style={{background:'rgba(34,211,238,.1)',borderColor:'rgba(34,211,238,.3)'}}>
          <span className="text-lg">🔷</span>
          <span className="text-xs font-semibold tracking-widest uppercase" style={{color:'#22D3EE'}}>Veracore DirectConnect</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{letterSpacing:'-0.03em',lineHeight:'1.08'}}>
          Directly Connecting<br />
          <span className="vrc-text">NetSuite &amp; Veracore</span>
        </h1>
        <p className="text-lg mb-8" style={{color:'rgba(255,255,255,.78)',lineHeight:'1.75'}}>In8Sync DirectConnect — the only native NetSuite integration that fully automates your Veracore cloud 3PL operations with NetSuite ERP. Real-time order visibility, bi-directional sync, no middleware.</p>
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="rounded-2xl p-4 text-center" style={{background:'rgba(34,211,238,.08)',border:'1px solid rgba(34,211,238,.2)'}}>
            <div className="text-2xl font-bold mb-1" style={{color:'#22D3EE'}}>TIME</div>
            <div className="text-xs" style={{color:'rgba(255,255,255,.55)'}}>Eliminate manual data entry across systems</div>
          </div>
          <div className="rounded-2xl p-4 text-center" style={{background:'rgba(34,211,238,.08)',border:'1px solid rgba(34,211,238,.2)'}}>
            <div className="text-2xl font-bold mb-1" style={{color:'#22D3EE'}}>MONEY</div>
            <div className="text-xs" style={{color:'rgba(255,255,255,.55)'}}>Reduce errors that cost real dollars</div>
          </div>
          <div className="rounded-2xl p-4 text-center" style={{background:'rgba(34,211,238,.08)',border:'1px solid rgba(34,211,238,.2)'}}>
            <div className="text-2xl font-bold mb-1" style={{color:'#22D3EE'}}>EXPERTISE</div>
            <div className="text-xs" style={{color:'rgba(255,255,255,.55)'}}>No developers or middleware required</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="/contact" className="btn-vrc text-white font-bold px-7 py-3.5 rounded-xl text-sm">Schedule A Demo</a>
          <a href="#flows" className="btn-outline-white btn-outline-white-vrc text-white font-semibold px-6 py-3.5 rounded-xl text-sm">Data Flows</a>
          <a href="#features" className="btn-outline-white btn-outline-white-vrc text-white font-semibold px-6 py-3.5 rounded-xl text-sm">Features</a>
        
          <a href="/integrations" className="btn-outline-white btn-outline-white-vrc text-white font-semibold px-6 py-3.5 rounded-xl text-sm inline-flex items-center gap-2">See All Bundles <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
        </div>
      </div>
      <div className="relative flex justify-center" style={{animation:'fade-in 1.2s ease both .4s',opacity:'0'}}>
        <div className="relative w-full max-w-md">
          <div className="absolute inset-0 rounded-3xl blur-3xl" style={{background:'linear-gradient(135deg,rgba(14,116,144,.25),rgba(27,111,208,.12))'}}></div>
          <div className="relative rounded-3xl p-8 border" style={{background:'rgba(255,255,255,.03)',borderColor:'rgba(34,211,238,.18)',backdropFilter:'blur(10px)',boxShadow:'0 24px 64px rgba(0,0,0,.4)'}}>
<div className="flex flex-col items-center justify-center" style={{height:'300px'}}>
  <div className="rounded-2xl flex items-center justify-center p-6" style={{background:'white',width:'220px',height:'140px'}}>
    <img src="/brand_assests/vercore.png" alt="Zapier Logo" style={{maxWidth:'180px',maxHeight:'100px',objectFit:'contain'}} onError={(e) => { (e.currentTarget as HTMLImageElement).style.display='none'; const next = e.currentTarget.nextElementSibling as HTMLElement; if(next) next.style.display='flex' }} />
    <div style={{display:'none',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%',height:'100%'}}>
      <span style={{fontSize:'18px',fontWeight:'800',color:'#0B2554'}}>Zapier</span>
    </div>
  </div>
  <div style={{fontSize:'12px',color:'rgba(255,255,255,.4)',marginTop:'12px'}}>NetSuite Integration</div>
</div>
          </div>
          <div className="absolute -top-4 -left-6 bg-white rounded-2xl px-4 py-3 shadow-2xl card-lift">
            <div className="flex items-center gap-2.5"><div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#0E7490,#0C6179)'}}><span className="text-white text-sm">🔷</span></div><div><div className="text-xs font-bold text-navy">Cloud 3PL</div><div className="text-[10px] text-gray-400">Real-Time Sync</div></div></div>
          </div>
          <div className="absolute -bottom-4 -right-6 bg-white rounded-2xl px-4 py-3 shadow-2xl card-lift">
            <div className="flex items-center gap-2.5"><div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#059669,#10B981)'}}><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg></div><div><div className="text-xs font-bold text-navy">Bi-Directional</div><div className="text-[10px] text-gray-400">Full Order Cycle</div></div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* MIDDLEWARE */}
<section className="py-16" style={{background:'#1a3a6e'}}>
  <div className="max-w-5xl mx-auto px-6 md:px-12">
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-white mb-4" style={{letterSpacing:'-0.02em'}}>No External Platform or Middleware</h2>
        <p className="text-white/80 text-sm leading-relaxed mb-3">While many other solutions run on an External Platform, also known as Middleware, In8Sync's Veracore DirectConnect bundle is natively built into and fully hosted in NetSuite.</p>
        <p className="text-white/80 text-sm leading-relaxed mb-3">In8Sync's efficient approach dramatically reduces the <strong className="text-white">TIME</strong> and <strong className="text-white">SKILL</strong> required to manage, saving your business <strong className="text-white">MONEY</strong> and <strong className="text-white">RESOURCES</strong>.</p>
        <p className="text-white/80 text-sm leading-relaxed">No iPaaS. No middleware. No extra licensing. Just a native NetSuite integration.</p>
      </div>
      <div className="flex-shrink-0">
        <div className="relative w-48 h-48 flex items-center justify-center">
          <div className="w-40 h-40 rounded-full flex items-center justify-center border-4 border-white/30" style={{background:'rgba(255,255,255,.1)'}}>
            <div className="text-center">
              <div className="text-white font-bold text-xl mb-1">Middleware</div>
              <div className="text-white/60 text-xs">External Platform</div>
            </div>
          </div>
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 192 192" fill="none">
            <line x1="30" y1="30" x2="162" y2="162" stroke="white" strokeWidth="8" strokeLinecap="round"/>
            <line x1="162" y1="30" x2="30" y2="162" stroke="white" strokeWidth="8" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</section>

{/* BENEFITS */}
<section className="py-20" style={{background:'#F5F7FC'}}>
  <div className="max-w-7xl mx-auto px-6 md:px-12">
    <div className="text-center max-w-2xl mx-auto mb-14 reveal">
      <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#0E7490'}}>Why DirectConnect</p>
      <h2 className="text-4xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>What You Gain with<br />Veracore DirectConnect</h2>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
      <div className="bg-white rounded-2xl p-6 border border-gray-100 card-lift reveal" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
        <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{background:'linear-gradient(135deg,#0E7490,#0C6179)',boxShadow:'0 4px 16px rgba(14,116,144,.3)'}}><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg></div>
        <h3 className="font-bold text-sm mb-2" style={{color:'#0B2554'}}>Real-Time Order Visibility</h3>
        <p className="text-xs text-gray-500 leading-relaxed">Order status, shipments, and inventory stay in sync the moment data changes — no manual checks.</p>
      </div>
      <div className="bg-white rounded-2xl p-6 border border-gray-100 card-lift reveal reveal-delay-1" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
        <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{background:'linear-gradient(135deg,#0E7490,#0C6179)',boxShadow:'0 4px 16px rgba(14,116,144,.3)'}}><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg></div>
        <h3 className="font-bold text-sm mb-2" style={{color:'#0B2554'}}>Inventory Accuracy</h3>
        <p className="text-xs text-gray-500 leading-relaxed">Inventory variance reports automatically generate adjustments in NetSuite — always accurate.</p>
      </div>
      <div className="bg-white rounded-2xl p-6 border border-gray-100 card-lift reveal reveal-delay-2" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
        <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{background:'linear-gradient(135deg,#0E7490,#0C6179)',boxShadow:'0 4px 16px rgba(14,116,144,.3)'}}><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg></div>
        <h3 className="font-bold text-sm mb-2" style={{color:'#0B2554'}}>Native NetSuite</h3>
        <p className="text-xs text-gray-500 leading-relaxed">No external platform or middleware — built and hosted 100% inside your NetSuite environment.</p>
      </div>
      <div className="bg-white rounded-2xl p-6 border border-gray-100 card-lift reveal reveal-delay-3" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
        <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{background:'linear-gradient(135deg,#0E7490,#0C6179)',boxShadow:'0 4px 16px rgba(14,116,144,.3)'}}><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
        <h3 className="font-bold text-sm mb-2" style={{color:'#0B2554'}}>Configurable Schedule</h3>
        <p className="text-xs text-gray-500 leading-relaxed">Default hourly sync with adjustable frequency — set the cadence that fits your business.</p>
      </div>
    </div>
  </div>
</section>

{/* DATA FLOWS */}
<section id="flows" className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 md:px-12">
    <div className="text-center max-w-2xl mx-auto mb-16 reveal">
      <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#0E7490'}}>Integration Architecture</p>
      <h2 className="text-4xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>Complete Data Flow Map</h2>
      <p className="text-gray-500 text-sm leading-relaxed">Every record type that flows between NetSuite and Veracore — outbound and inbound.</p>
    </div>
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Outbound */}
      <div className="reveal">
        <div className="flex items-center gap-3 mb-5 p-4 rounded-2xl" style={{background:'linear-gradient(135deg,rgba(14,116,144,.07),rgba(34,211,238,.05))',border:'1.5px solid rgba(14,116,144,.15)'}}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:'linear-gradient(135deg,#0E7490,#0C6179)'}}><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg></div>
          <div><div className="text-xs font-bold" style={{color:'#0E7490'}}>Outbound</div><div className="text-[11px] text-gray-400">NetSuite → Veracore</div></div>
        </div>
        <div className="space-y-3">
          <div className="flow-card flow-card-vrc reveal reveal-delay-1"><div className="flex items-center gap-3"><div className="flow-arrow" style={{background:'rgba(14,116,144,.1)'}}><span className="text-sm">📋</span></div><div className="flex-1"><div className="flex items-center gap-2 flex-wrap"><span className="text-xs font-semibold" style={{color:'#0E7490'}}>Item Master</span><svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg><span className="text-xs font-semibold" style={{color:'#0B2554'}}>Sync Field Marked</span></div><p className="text-[11px] text-gray-400 mt-0.5">NetSuite items exported to Veracore via sync field marker</p></div></div></div>
          <div className="flow-card flow-card-vrc reveal reveal-delay-2"><div className="flex items-center gap-3"><div className="flow-arrow" style={{background:'rgba(14,116,144,.1)'}}><span className="text-sm">🛒</span></div><div className="flex-1"><div className="flex items-center gap-2 flex-wrap"><span className="text-xs font-semibold" style={{color:'#0E7490'}}>Sales Orders</span><svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg><span className="text-xs font-semibold" style={{color:'#0B2554'}}>Pending Fulfillment</span></div><p className="text-[11px] text-gray-400 mt-0.5">Sales orders with Pending Fulfillment status sent to Veracore</p></div></div></div>
          <div className="flow-card flow-card-vrc reveal reveal-delay-3"><div className="flex items-center gap-3"><div className="flow-arrow" style={{background:'rgba(14,116,144,.1)'}}><span className="text-sm">📥</span></div><div className="flex-1"><div className="flex items-center gap-2 flex-wrap"><span className="text-xs font-semibold" style={{color:'#0E7490'}}>Purchase Orders</span><svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg><span className="text-xs font-semibold" style={{color:'#0B2554'}}>Pending Receipt</span></div><p className="text-[11px] text-gray-400 mt-0.5">Purchase orders with Pending Receipt status sent to Veracore</p></div></div></div>
        </div>
      </div>
      {/* Inbound */}
      <div className="reveal reveal-delay-1">
        <div className="flex items-center gap-3 mb-5 p-4 rounded-2xl" style={{background:'linear-gradient(135deg,rgba(27,111,208,.07),rgba(91,184,212,.05))',border:'1.5px solid rgba(27,111,208,.15)'}}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:'linear-gradient(135deg,#1B6FD0,#3B8AE0)'}}><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg></div>
          <div><div className="text-xs font-bold" style={{color:'#1B6FD0'}}>Inbound</div><div className="text-[11px] text-gray-400">Veracore → NetSuite</div></div>
        </div>
        <div className="space-y-3">
          <div className="flow-card flow-card-vrc reveal reveal-delay-1"><div className="flex items-center gap-3"><div className="flow-arrow" style={{background:'rgba(27,111,208,.1)'}}><span className="text-sm">🚚</span></div><div className="flex-1"><div className="flex items-center gap-2 flex-wrap"><span className="text-xs font-semibold" style={{color:'#1B6FD0'}}>Item Fulfillments</span><svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg><span className="text-xs font-semibold" style={{color:'#0B2554'}}>Shipment Records</span></div><p className="text-[11px] text-gray-400 mt-0.5">Veracore shipments auto-create item fulfillment records in NetSuite</p></div></div></div>
          <div className="flow-card flow-card-vrc reveal reveal-delay-2"><div className="flex items-center gap-3"><div className="flow-arrow" style={{background:'rgba(27,111,208,.1)'}}><span className="text-sm">📬</span></div><div className="flex-1"><div className="flex items-center gap-2 flex-wrap"><span className="text-xs font-semibold" style={{color:'#1B6FD0'}}>Item Receipts</span><svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg><span className="text-xs font-semibold" style={{color:'#0B2554'}}>Expected Arrivals</span></div><p className="text-[11px] text-gray-400 mt-0.5">Completed Expected Arrivals in Veracore create item receipts in NetSuite</p></div></div></div>
          <div className="flow-card flow-card-vrc reveal reveal-delay-3"><div className="flex items-center gap-3"><div className="flow-arrow" style={{background:'rgba(27,111,208,.1)'}}><span className="text-sm">📊</span></div><div className="flex-1"><div className="flex items-center gap-2 flex-wrap"><span className="text-xs font-semibold" style={{color:'#1B6FD0'}}>Inventory Variance</span><svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg><span className="text-xs font-semibold" style={{color:'#0B2554'}}>Product Availabilities</span></div><p className="text-[11px] text-gray-400 mt-0.5">Veracore Product Availabilities sync inventory variance adjustments to NetSuite</p></div></div></div>
        </div>
      </div>
      {/* Summary */}
      <div className="reveal reveal-delay-2">
        <div className="flex items-center gap-3 mb-5 p-4 rounded-2xl" style={{background:'linear-gradient(135deg,rgba(91,184,212,.1),rgba(58,191,191,.06))',border:'1.5px solid rgba(91,184,212,.25)'}}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:'linear-gradient(135deg,#5BB8D4,#3ABFBF)'}}><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg></div>
          <div><div className="text-xs font-bold" style={{color:'#5BB8D4'}}>Integration Summary</div><div className="text-[11px] text-gray-400">Veracore ↔ NetSuite</div></div>
        </div>
        <div className="rounded-2xl p-5 mb-4" style={{background:'linear-gradient(135deg,#0E7490,#0C6179)',boxShadow:'0 8px 30px rgba(14,116,144,.3)'}}>
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{color:'#67E8F9'}}>Record Summary</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between"><span className="text-xs text-white/60">Outbound flows</span><span className="text-xs font-bold text-white">3 record types</span></div>
            <div className="flex items-center justify-between"><span className="text-xs text-white/60">Inbound flows</span><span className="text-xs font-bold text-white">3 record types</span></div>
            <div className="flex items-center justify-between"><span className="text-xs text-white/60">Sync frequency</span><span className="text-xs font-bold" style={{color:'#67E8F9'}}>Hourly (configurable)</span></div>
            <div className="pt-3 border-t border-white/10 flex items-center justify-between"><span className="text-xs font-semibold text-white/70">Total synced records</span><span className="text-sm font-bold" style={{color:'#22D3EE'}}>6 types</span></div>
          </div>
        </div>
        <div className="rounded-2xl p-5 border border-gray-100" style={{background:'#F9FAFB'}}>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">About Veracore</p>
          <p className="text-xs text-gray-500 leading-relaxed">Veracore is a cloud-based 3PL fulfillment platform offering order management, inventory tracking, warehouse management, and real-time analytics for improved operational efficiency.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* FEATURES */}
<section id="features" className="py-24" style={{background:'#F5F7FC'}}>
  <div className="max-w-7xl mx-auto px-6 md:px-12">
    <div className="text-center max-w-2xl mx-auto mb-16 reveal">
      <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#0E7490'}}>Platform Capabilities</p>
      <h2 className="text-4xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>Everything Included<br />Out of the Box</h2>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div className="feat-card feat-card-vrc reveal"><div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{background:'rgba(14,116,144,.1)'}}><svg className="w-4 h-4" style={{color:'#0E7490'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg></div><h3 className="font-bold text-sm mb-1.5" style={{color:'#0B2554'}}>Self-Service Dashboard</h3><p className="text-xs text-gray-500 leading-relaxed">Manage all integration settings and monitor statuses inside NetSuite — no external portal.</p></div>
      <div className="feat-card feat-card-vrc reveal reveal-delay-1"><div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{background:'rgba(14,116,144,.1)'}}><svg className="w-4 h-4" style={{color:'#0E7490'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/></svg></div><h3 className="font-bold text-sm mb-1.5" style={{color:'#0B2554'}}>Pre-Built Templates</h3><p className="text-xs text-gray-500 leading-relaxed">Pre-configured flow templates for Veracore ready to activate with a single click.</p></div>
      <div className="feat-card feat-card-vrc reveal reveal-delay-2"><div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{background:'rgba(14,116,144,.1)'}}><svg className="w-4 h-4" style={{color:'#0E7490'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div><h3 className="font-bold text-sm mb-1.5" style={{color:'#0B2554'}}>Configurable Schedule</h3><p className="text-xs text-gray-500 leading-relaxed">Default hourly sync with adjustable frequency — set the cadence that fits your workflow.</p></div>
      <div className="feat-card feat-card-vrc reveal"><div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{background:'rgba(14,116,144,.1)'}}><svg className="w-4 h-4" style={{color:'#0E7490'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div><h3 className="font-bold text-sm mb-1.5" style={{color:'#0B2554'}}>Error Logs &amp; Retry</h3><p className="text-xs text-gray-500 leading-relaxed">All sync logs stored in NetSuite with automatic retry logic on failed records.</p></div>
      <div className="feat-card feat-card-vrc reveal reveal-delay-1"><div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{background:'rgba(14,116,144,.1)'}}><svg className="w-4 h-4" style={{color:'#0E7490'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg></div><h3 className="font-bold text-sm mb-1.5" style={{color:'#0B2554'}}>Full API &amp; File Transfer</h3><p className="text-xs text-gray-500 leading-relaxed">Both API and file-based transfers supported — works with Veracore's native data exchange methods.</p></div>
      <div className="feat-card feat-card-vrc reveal reveal-delay-2"><div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{background:'rgba(14,116,144,.1)'}}><svg className="w-4 h-4" style={{color:'#0E7490'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg></div><h3 className="font-bold text-sm mb-1.5" style={{color:'#0B2554'}}>No External Platform</h3><p className="text-xs text-gray-500 leading-relaxed">100% hosted inside NetSuite — no iPaaS, no extra subscriptions, no middleware required.</p></div>
    </div>
  </div>
</section>

{/* RELATED */}
<section className="py-20" style={{background:'#F5F7FC'}}>
  <div className="max-w-7xl mx-auto px-6 md:px-12">
    <div className="text-center mb-12 reveal"><p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#5BB8D4'}}>Explore More</p><h2 className="text-3xl font-bold" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>More 3PL Integrations</h2></div>
    <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
      <a href="/extensiv" className="group bg-white rounded-2xl p-6 border border-gray-100 card-lift flex items-center gap-4 reveal" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)',textDecoration:'none'}}><div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-white border border-gray-100 p-2"><img src="/logos/Extensiv_logo.png" alt="Extensiv" className="w-full h-full object-contain" /></div><div><h3 className="font-bold text-sm mb-0.5" style={{color:'#0B2554'}}>Extensiv</h3><p className="text-xs text-gray-400">Multi-3PL warehouse management</p></div><svg className="w-4 h-4 text-gray-300 ml-auto transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg></a>
      <a href="/radial" className="group bg-white rounded-2xl p-6 border border-gray-100 card-lift flex items-center gap-4 reveal reveal-delay-1" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)',textDecoration:'none'}}><div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-white border border-gray-100 p-2"><img src="/logos/Radial_logo.png" alt="Radial" className="w-full h-full object-contain" /></div><div><h3 className="font-bold text-sm mb-0.5" style={{color:'#0B2554'}}>Radial</h3><p className="text-xs text-gray-400">B2C eCommerce fulfillment</p></div><svg className="w-4 h-4 text-gray-300 ml-auto transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg></a>
      <a href="/ceva-logistics" className="group bg-white rounded-2xl p-6 border border-gray-100 card-lift flex items-center gap-4 reveal reveal-delay-2" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)',textDecoration:'none'}}><div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-white border border-gray-100 p-2"><img src="/logos/ceva_logo.png" alt="CEVA Logistics" className="w-full h-full object-contain" /></div><div><h3 className="font-bold text-sm mb-0.5" style={{color:'#0B2554'}}>CEVA Logistics</h3><p className="text-xs text-gray-400">170+ countries, 1,300+ facilities</p></div><svg className="w-4 h-4 text-gray-300 ml-auto transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg></a>
    </div>
  </div>
</section>

{/* CTA BANNER */}
<section className="py-24" style={{background:'linear-gradient(135deg,#0B2554 0%,#0b3548 50%,#0B2554 100%)'}}>
  <div className="max-w-4xl mx-auto px-6 md:px-12 text-center reveal">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{letterSpacing:'-0.03em'}}>Unify Veracore &amp;<br /><span className="vrc-text">NetSuite</span> Today</h2>
    <p className="text-lg mb-10" style={{color:'rgba(255,255,255,.65)',lineHeight:'1.7'}}>Stop copying data between systems. Start your Veracore DirectConnect integration and give your fulfillment and finance teams a single source of truth.</p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="/contact" className="btn-vrc text-white font-bold px-10 py-4 rounded-2xl text-base">Schedule A Demo</a>
      <a href="tel:+18886044120" className="btn-outline-white text-white font-semibold px-8 py-4 rounded-2xl text-base">+1 (888) 604-4120</a>
    </div>
  </div>
</section>
      <Footer />
      <RevealObserver />
    </>
  )
}
