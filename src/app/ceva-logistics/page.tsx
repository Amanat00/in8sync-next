'use client'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'

export default function CevaLogisticsPage() {
  return (
    <>
      <Navbar />
      
{/* HERO */}
<section className="hero-ceva min-h-screen flex items-center pt-20 relative overflow-hidden" style={{isolation:'isolate'}}>
  <div className="absolute inset-0 grid-lines opacity-60 z-10 pointer-events-none"></div>
  <div className="absolute inset-0 pointer-events-none z-10">
    <div className="absolute top-16 right-8 w-96 h-96 rounded-full animate-float" style={{background:'radial-gradient(circle,rgba(245,158,11,.1) 0%,transparent 70%)'}}></div>
    <div className="absolute top-1/3 right-1/4"><div className="w-3 h-3 rounded-full" style={{background:'#F59E0B'}}></div><div className="absolute inset-0 rounded-full" style={{background:'#F59E0B',animation:'pulse-ring 2.8s ease-out infinite',opacity:'.4'}}></div></div>
  </div>
  <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 w-full relative z-20">
    <div className="grid lg:grid-cols-2 gap-14 items-center">
      <div style={{animation:'slide-up .9s cubic-bezier(.23,1,.32,1) both'}}>
        <div className="flex items-center gap-2 mb-6">
          <a href="/" className="text-xs font-medium" style={{color:'rgba(255,255,255,.4)'}}>Home</a>
          <svg className="w-3 h-3" style={{color:'rgba(255,255,255,.25)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          <span className="text-xs font-medium" style={{color:'rgba(255,255,255,.4)'}}>3PL Fulfillment</span>
          <svg className="w-3 h-3" style={{color:'rgba(255,255,255,.25)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          <span className="text-xs font-semibold" style={{color:'#F59E0B'}}>CEVA Logistics</span>
        </div>
        <div className="inline-flex items-center gap-2.5 mb-7 px-4 py-2 rounded-full border" style={{background:'rgba(245,158,11,.1)',borderColor:'rgba(245,158,11,.3)'}}>
          <span className="text-lg">🚛</span>
          <span className="text-xs font-semibold tracking-widest uppercase" style={{color:'#F59E0B'}}>CEVA DirectConnect</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{letterSpacing:'-0.03em',lineHeight:'1.08'}}>
          Directly Connecting<br />
          <span className="ceva-text">NetSuite &amp; CEVA</span>
        </h1>
        <p className="text-lg mb-8" style={{color:'rgba(255,255,255,.78)',lineHeight:'1.75'}}>In8Sync DirectConnect — the only native NetSuite integration that fully connects your CEVA Logistics global operations with NetSuite ERP. 1,300+ facilities, 170+ countries — all in sync.</p>
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="rounded-2xl p-4 text-center" style={{background:'rgba(245,158,11,.08)',border:'1px solid rgba(245,158,11,.2)'}}>
            <div className="text-2xl font-bold mb-1" style={{color:'#F59E0B'}}>TIME</div>
            <div className="text-xs" style={{color:'rgba(255,255,255,.55)'}}>Eliminate manual data entry across systems</div>
          </div>
          <div className="rounded-2xl p-4 text-center" style={{background:'rgba(245,158,11,.08)',border:'1px solid rgba(245,158,11,.2)'}}>
            <div className="text-2xl font-bold mb-1" style={{color:'#F59E0B'}}>MONEY</div>
            <div className="text-xs" style={{color:'rgba(255,255,255,.55)'}}>Reduce errors that cost real dollars</div>
          </div>
          <div className="rounded-2xl p-4 text-center" style={{background:'rgba(245,158,11,.08)',border:'1px solid rgba(245,158,11,.2)'}}>
            <div className="text-2xl font-bold mb-1" style={{color:'#F59E0B'}}>EXPERTISE</div>
            <div className="text-xs" style={{color:'rgba(255,255,255,.55)'}}>No developers or middleware required</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="/contact" className="btn-ceva text-white font-bold px-7 py-3.5 rounded-xl text-sm">Schedule A Demo</a>
          <a href="#flows" className="btn-outline-white btn-outline-white-ceva text-white font-semibold px-6 py-3.5 rounded-xl text-sm">Data Flows</a>
          <a href="#features" className="btn-outline-white btn-outline-white-ceva text-white font-semibold px-6 py-3.5 rounded-xl text-sm">Features</a>
        
          <a href="/integrations" className="btn-outline-white btn-outline-white-ceva text-white font-semibold px-6 py-3.5 rounded-xl text-sm inline-flex items-center gap-2">See All Bundles <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
        </div>
      </div>
      <div className="relative flex justify-center" style={{animation:'fade-in 1.2s ease both .4s',opacity:'0'}}>
        <div className="relative w-full max-w-md">
          <div className="absolute inset-0 rounded-3xl blur-3xl" style={{background:'linear-gradient(135deg,rgba(15,52,96,.25),rgba(245,158,11,.12))'}}></div>
          <div className="relative rounded-3xl p-8 border" style={{background:'rgba(255,255,255,.03)',borderColor:'rgba(245,158,11,.18)',backdropFilter:'blur(10px)',boxShadow:'0 24px 64px rgba(0,0,0,.4)'}}>
<div className="flex flex-col items-center justify-center" style={{height:'300px'}}>
  <div className="rounded-2xl flex items-center justify-center p-6" style={{background:'white',width:'220px',height:'140px'}}>
    <img src="/brand_assests/CEVA_BlueRed.png" alt="ceva Logo" style={{maxWidth:'180px',maxHeight:'100px',objectFit:'contain'}} onError={(e) => { (e.currentTarget as HTMLImageElement).style.display='none'; const next = e.currentTarget.nextElementSibling as HTMLElement; if(next) next.style.display='flex' }} />
    <div style={{display:'none',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%',height:'100%'}}>
      <span style={{fontSize:'18px',fontWeight:'800',color:'#0B2554'}}>Zapier</span>
    </div>
  </div>
  <div style={{fontSize:'12px',color:'rgba(255,255,255,.4)',marginTop:'12px'}}>NetSuite Integration</div>
</div>
          </div>
          <div className="absolute -top-4 -left-6 bg-white rounded-2xl px-4 py-3 shadow-2xl card-lift">
            <div className="flex items-center gap-2.5"><div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#0F3460,#1A5276)'}}><span className="text-white text-sm">🌍</span></div><div><div className="text-xs font-bold text-navy">170+ Countries</div><div className="text-[10px] text-gray-400">Global Reach</div></div></div>
          </div>
          <div className="absolute -bottom-4 -right-6 bg-white rounded-2xl px-4 py-3 shadow-2xl card-lift">
            <div className="flex items-center gap-2.5"><div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#F59E0B,#D97706)'}}><span className="text-white text-sm font-bold">1.3k</span></div><div><div className="text-xs font-bold text-navy">1,300+ Facilities</div><div className="text-[10px] text-gray-400">Worldwide Network</div></div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* MIDDLEWARE */}
<section className="py-16" style={{background:'#C8102E'}}>
  <div className="max-w-5xl mx-auto px-6 md:px-12">
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-white mb-4" style={{letterSpacing:'-0.02em'}}>No External Platform or Middleware</h2>
        <p className="text-white/80 text-sm leading-relaxed mb-3">While many other solutions run on an External Platform, also known as Middleware, In8Sync's CEVA Logistics DirectConnect bundle is natively built into and fully hosted in NetSuite.</p>
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
      <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#0F3460'}}>Why DirectConnect</p>
      <h2 className="text-4xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>What You Gain with<br />CEVA DirectConnect</h2>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
      <div className="bg-white rounded-2xl p-6 border border-gray-100 card-lift reveal" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
        <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{background:'linear-gradient(135deg,#0F3460,#1A5276)',boxShadow:'0 4px 16px rgba(15,52,96,.3)'}}><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/></svg></div>
        <h3 className="font-bold text-sm mb-2" style={{color:'#0B2554'}}>Global Scale</h3>
        <p className="text-xs text-gray-500 leading-relaxed">1,300+ facilities across 170+ countries with 110,000 professionals — all connected to NetSuite.</p>
      </div>
      <div className="bg-white rounded-2xl p-6 border border-gray-100 card-lift reveal reveal-delay-1" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
        <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{background:'linear-gradient(135deg,#0F3460,#1A5276)',boxShadow:'0 4px 16px rgba(15,52,96,.3)'}}><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg></div>
        <h3 className="font-bold text-sm mb-2" style={{color:'#0B2554'}}>Enterprise Grade</h3>
        <p className="text-xs text-gray-500 leading-relaxed">Built for complex global supply chains with multi-location, multi-currency, multi-subsidiary support.</p>
      </div>
      <div className="bg-white rounded-2xl p-6 border border-gray-100 card-lift reveal reveal-delay-2" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
        <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{background:'linear-gradient(135deg,#0F3460,#1A5276)',boxShadow:'0 4px 16px rgba(15,52,96,.3)'}}><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg></div>
        <h3 className="font-bold text-sm mb-2" style={{color:'#0B2554'}}>Native NetSuite</h3>
        <p className="text-xs text-gray-500 leading-relaxed">No external platform or middleware — built and hosted 100% inside your NetSuite environment.</p>
      </div>
      <div className="bg-white rounded-2xl p-6 border border-gray-100 card-lift reveal reveal-delay-3" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
        <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{background:'linear-gradient(135deg,#0F3460,#1A5276)',boxShadow:'0 4px 16px rgba(15,52,96,.3)'}}><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg></div>
        <h3 className="font-bold text-sm mb-2" style={{color:'#0B2554'}}>Real-Time Visibility</h3>
        <p className="text-xs text-gray-500 leading-relaxed">Stock levels and order status updated every 15 minutes — no more spreadsheet guesswork.</p>
      </div>
    </div>
  </div>
</section>

{/* DATA FLOWS */}
<section id="flows" className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 md:px-12">
    <div className="text-center max-w-2xl mx-auto mb-16 reveal">
      <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#0F3460'}}>Integration Architecture</p>
      <h2 className="text-4xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>Complete Data Flow Map</h2>
      <p className="text-gray-500 text-sm leading-relaxed">Every record type that flows between NetSuite and CEVA Logistics — outbound and inbound.</p>
    </div>
    <div className="grid lg:grid-cols-3 gap-8 mb-8">
      {/* Outbound */}
      <div className="reveal">
        <div className="flex items-center gap-3 mb-5 p-4 rounded-2xl" style={{background:'linear-gradient(135deg,rgba(15,52,96,.07),rgba(245,158,11,.05))',border:'1.5px solid rgba(15,52,96,.15)'}}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:'linear-gradient(135deg,#0F3460,#1A5276)'}}><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg></div>
          <div><div className="text-xs font-bold" style={{color:'#0F3460'}}>Outbound</div><div className="text-[11px] text-gray-400">NetSuite → CEVA</div></div>
        </div>
        <div className="space-y-3">
          <div className="flow-card flow-card-ceva reveal reveal-delay-1"><div className="flex items-center gap-3"><div className="flow-arrow" style={{background:'rgba(15,52,96,.1)'}}><span className="text-sm">📋</span></div><div className="flex-1"><div className="flex items-center gap-2 flex-wrap"><span className="text-xs font-semibold" style={{color:'#0F3460'}}>Item Master</span><svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg><span className="text-xs font-semibold" style={{color:'#0B2554'}}>Create Items</span></div><p className="text-[11px] text-gray-400 mt-0.5">NetSuite items create and update product records in CEVA</p></div></div></div>
          <div className="flow-card flow-card-ceva reveal reveal-delay-2"><div className="flex items-center gap-3"><div className="flow-arrow" style={{background:'rgba(15,52,96,.1)'}}><span className="text-sm">🛒</span></div><div className="flex-1"><div className="flex items-center gap-2 flex-wrap"><span className="text-xs font-semibold" style={{color:'#0F3460'}}>Sales Orders</span><svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg><span className="text-xs font-semibold" style={{color:'#0B2554'}}>Auto-Sync</span></div><p className="text-[11px] text-gray-400 mt-0.5">Auto-sync by location to CEVA fulfillment facilities</p></div></div></div>
          <div className="flow-card flow-card-ceva reveal reveal-delay-3"><div className="flex items-center gap-3"><div className="flow-arrow" style={{background:'rgba(15,52,96,.1)'}}><span className="text-sm">📥</span></div><div className="flex-1"><div className="flex items-center gap-2 flex-wrap"><span className="text-xs font-semibold" style={{color:'#0F3460'}}>Purchase Orders</span><svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg><span className="text-xs font-semibold" style={{color:'#0B2554'}}>Inbound Orders</span></div><p className="text-[11px] text-gray-400 mt-0.5">Purchase orders sent as inbound receipts to CEVA</p></div></div></div>
          <div className="flow-card flow-card-ceva reveal"><div className="flex items-center gap-3"><div className="flow-arrow" style={{background:'rgba(15,52,96,.1)'}}><span className="text-sm">🔄</span></div><div className="flex-1"><div className="flex items-center gap-2 flex-wrap"><span className="text-xs font-semibold" style={{color:'#0F3460'}}>Transfer Orders</span><svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg><span className="text-xs font-semibold" style={{color:'#0B2554'}}>Conditional Sync</span></div><p className="text-[11px] text-gray-400 mt-0.5">Transfer orders synced based on location and facility rules</p></div></div></div>
          <div className="flow-card flow-card-ceva reveal reveal-delay-1"><div className="flex items-center gap-3"><div className="flow-arrow" style={{background:'rgba(15,52,96,.1)'}}><span className="text-sm">↩️</span></div><div className="flex-1"><div className="flex items-center gap-2 flex-wrap"><span className="text-xs font-semibold" style={{color:'#0F3460'}}>Return Authorizations</span><svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg><span className="text-xs font-semibold" style={{color:'#0B2554'}}>RMA Processing</span></div><p className="text-[11px] text-gray-400 mt-0.5">RMAs pushed to CEVA for return and restocking</p></div></div></div>
        </div>
      </div>
      {/* Inbound */}
      <div className="reveal reveal-delay-1">
        <div className="flex items-center gap-3 mb-5 p-4 rounded-2xl" style={{background:'linear-gradient(135deg,rgba(27,111,208,.07),rgba(91,184,212,.05))',border:'1.5px solid rgba(27,111,208,.15)'}}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:'linear-gradient(135deg,#1B6FD0,#3B8AE0)'}}><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg></div>
          <div><div className="text-xs font-bold" style={{color:'#1B6FD0'}}>Inbound</div><div className="text-[11px] text-gray-400">CEVA → NetSuite</div></div>
        </div>
        <div className="space-y-3">
          <div className="flow-card flow-card-ceva reveal reveal-delay-1"><div className="flex items-center gap-3"><div className="flow-arrow" style={{background:'rgba(27,111,208,.1)'}}><span className="text-sm">🔗</span></div><div className="flex-1"><div className="flex items-center gap-2 flex-wrap"><span className="text-xs font-semibold" style={{color:'#1B6FD0'}}>Item Matching</span><svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg><span className="text-xs font-semibold" style={{color:'#0B2554'}}>SKU Alignment</span></div><p className="text-[11px] text-gray-400 mt-0.5">CEVA SKUs matched to NetSuite item records automatically</p></div></div></div>
          <div className="flow-card flow-card-ceva reveal reveal-delay-2"><div className="flex items-center gap-3"><div className="flow-arrow" style={{background:'rgba(27,111,208,.1)'}}><span className="text-sm">🚚</span></div><div className="flex-1"><div className="flex items-center gap-2 flex-wrap"><span className="text-xs font-semibold" style={{color:'#1B6FD0'}}>Item Fulfillments</span><svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg><span className="text-xs font-semibold" style={{color:'#0B2554'}}>Shipment Tracking</span></div><p className="text-[11px] text-gray-400 mt-0.5">Shipment records with tracking auto-created in NetSuite</p></div></div></div>
          <div className="flow-card flow-card-ceva reveal reveal-delay-3"><div className="flex items-center gap-3"><div className="flow-arrow" style={{background:'rgba(27,111,208,.1)'}}><span className="text-sm">📬</span></div><div className="flex-1"><div className="flex items-center gap-2 flex-wrap"><span className="text-xs font-semibold" style={{color:'#1B6FD0'}}>Item Receipts</span><svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg><span className="text-xs font-semibold" style={{color:'#0B2554'}}>Inbound Receiving</span></div><p className="text-[11px] text-gray-400 mt-0.5">Received inventory creates item receipts in NetSuite</p></div></div></div>
          <div className="flow-card flow-card-ceva reveal"><div className="flex items-center gap-3"><div className="flow-arrow" style={{background:'rgba(27,111,208,.1)'}}><span className="text-sm">📊</span></div><div className="flex-1"><div className="flex items-center gap-2 flex-wrap"><span className="text-xs font-semibold" style={{color:'#1B6FD0'}}>Inventory Variance</span><svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg><span className="text-xs font-semibold" style={{color:'#0B2554'}}>Daily Stock Levels</span></div><p className="text-[11px] text-gray-400 mt-0.5">Daily on-hand inventory updates keep NetSuite accurate</p></div></div></div>
          <div className="flow-card flow-card-ceva reveal reveal-delay-1" style={{opacity:'.75'}}><div className="flex items-center gap-3"><div className="flow-arrow" style={{background:'rgba(27,111,208,.07)'}}><span className="text-sm">🧾</span></div><div className="flex-1"><div className="flex items-center gap-2 flex-wrap"><span className="text-xs font-semibold" style={{color:'#1B6FD0'}}>Vendor Bills</span><span className="text-[10px] px-2 py-0.5 rounded-full font-semibold" style={{background:'rgba(15,52,96,.1)',color:'#0F3460'}}>Future Release</span></div><p className="text-[11px] text-gray-400 mt-0.5">Automatic vendor bill creation — coming in future release</p></div></div></div>
        </div>
      </div>
      {/* Summary */}
      <div className="reveal reveal-delay-2">
        <div className="flex items-center gap-3 mb-5 p-4 rounded-2xl" style={{background:'linear-gradient(135deg,rgba(91,184,212,.1),rgba(58,191,191,.06))',border:'1.5px solid rgba(91,184,212,.25)'}}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:'linear-gradient(135deg,#5BB8D4,#3ABFBF)'}}><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg></div>
          <div><div className="text-xs font-bold" style={{color:'#5BB8D4'}}>Integration Summary</div><div className="text-[11px] text-gray-400">CEVA ↔ NetSuite</div></div>
        </div>
        <div className="rounded-2xl p-5 mb-4" style={{background:'linear-gradient(135deg,#0F3460,#0B2548)',boxShadow:'0 8px 30px rgba(15,52,96,.4)'}}>
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{color:'#F59E0B'}}>Record Summary</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between"><span className="text-xs text-white/60">Outbound flows</span><span className="text-xs font-bold text-white">5 record types</span></div>
            <div className="flex items-center justify-between"><span className="text-xs text-white/60">Inbound flows</span><span className="text-xs font-bold text-white">5 record types</span></div>
            <div className="flex items-center justify-between"><span className="text-xs text-white/60">Vendor Bills</span><span className="text-xs font-bold" style={{color:'#FCD34D'}}>Future Release</span></div>
            <div className="pt-3 border-t border-white/10 flex items-center justify-between"><span className="text-xs font-semibold text-white/70">Total synced records</span><span className="text-sm font-bold" style={{color:'#F59E0B'}}>10 types</span></div>
          </div>
        </div>
        <div className="rounded-2xl p-5 border border-gray-100" style={{background:'#F9FAFB'}}>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">About CEVA Logistics</p>
          <p className="text-xs text-gray-500 leading-relaxed">CEVA Logistics operates 1,300+ facilities across 170+ countries with 110,000 professionals delivering global supply chain excellence across contract logistics, freight management, and distribution.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* FEATURES */}
<section id="features" className="py-24" style={{background:'#F5F7FC'}}>
  <div className="max-w-7xl mx-auto px-6 md:px-12">
    <div className="text-center max-w-2xl mx-auto mb-16 reveal">
      <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#0F3460'}}>Platform Capabilities</p>
      <h2 className="text-4xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>Everything Included<br />Out of the Box</h2>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div className="feat-card feat-card-ceva reveal"><div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{background:'rgba(15,52,96,.1)'}}><svg className="w-4 h-4" style={{color:'#0F3460'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg></div><h3 className="font-bold text-sm mb-1.5" style={{color:'#0B2554'}}>Self-Service Dashboard</h3><p className="text-xs text-gray-500 leading-relaxed">Manage all integration settings inside NetSuite — no external portal needed.</p></div>
      <div className="feat-card feat-card-ceva reveal reveal-delay-1"><div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{background:'rgba(15,52,96,.1)'}}><svg className="w-4 h-4" style={{color:'#0F3460'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/></svg></div><h3 className="font-bold text-sm mb-1.5" style={{color:'#0B2554'}}>Pre-Built Templates</h3><p className="text-xs text-gray-500 leading-relaxed">Pre-configured flow templates for CEVA ready to activate with one click.</p></div>
      <div className="feat-card feat-card-ceva reveal reveal-delay-2"><div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{background:'rgba(15,52,96,.1)'}}><svg className="w-4 h-4" style={{color:'#0F3460'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg></div><h3 className="font-bold text-sm mb-1.5" style={{color:'#0B2554'}}>Real-Time Sync</h3><p className="text-xs text-gray-500 leading-relaxed">Updates as frequently as every 15 minutes — orders, shipments, and inventory.</p></div>
      <div className="feat-card feat-card-ceva reveal"><div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{background:'rgba(15,52,96,.1)'}}><svg className="w-4 h-4" style={{color:'#0F3460'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div><h3 className="font-bold text-sm mb-1.5" style={{color:'#0B2554'}}>Error Logs &amp; Retry</h3><p className="text-xs text-gray-500 leading-relaxed">All sync logs stored in NetSuite with automatic retry on failed records.</p></div>
      <div className="feat-card feat-card-ceva reveal reveal-delay-1"><div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{background:'rgba(15,52,96,.1)'}}><svg className="w-4 h-4" style={{color:'#0F3460'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg></div><h3 className="font-bold text-sm mb-1.5" style={{color:'#0B2554'}}>Conditional Rules</h3><p className="text-xs text-gray-500 leading-relaxed">Set sync rules based on location, order type, and status — full control.</p></div>
      <div className="feat-card feat-card-ceva reveal reveal-delay-2"><div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{background:'rgba(15,52,96,.1)'}}><svg className="w-4 h-4" style={{color:'#0F3460'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg></div><h3 className="font-bold text-sm mb-1.5" style={{color:'#0B2554'}}>No External Platform</h3><p className="text-xs text-gray-500 leading-relaxed">100% hosted inside NetSuite — no iPaaS, no extra subscriptions, no middleware.</p></div>
    </div>
  </div>
</section>

{/* RELATED */}
<section className="py-20" style={{background:'#F5F7FC'}}>
  <div className="max-w-7xl mx-auto px-6 md:px-12">
    <div className="text-center mb-12 reveal"><p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#5BB8D4'}}>Explore More</p><h2 className="text-3xl font-bold" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>More 3PL Integrations</h2></div>
    <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
      <a href="/radial" className="group bg-white rounded-2xl p-6 border border-gray-100 card-lift flex items-center gap-4 reveal" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)',textDecoration:'none'}}><div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-white border border-gray-100 p-2"><img src="/logos/Radial_logo.png" alt="Radial" className="w-full h-full object-contain" /></div><div><h3 className="font-bold text-sm mb-0.5" style={{color:'#0B2554'}}>Radial</h3><p className="text-xs text-gray-400">B2C eCommerce fulfillment</p></div><svg className="w-4 h-4 text-gray-300 ml-auto transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg></a>
      <a href="/idrive-fulfillment" className="group bg-white rounded-2xl p-6 border border-gray-100 card-lift flex items-center gap-4 reveal reveal-delay-1" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)',textDecoration:'none'}}><div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-white border border-gray-100 p-2"><img src="/logos/idrive_logo.png" alt="iDrive Fulfillment" className="w-full h-full object-contain" /></div><div><h3 className="font-bold text-sm mb-0.5" style={{color:'#0B2554'}}>iDrive Fulfillment</h3><p className="text-xs text-gray-400">Modern 3PL fulfillment</p></div><svg className="w-4 h-4 text-gray-300 ml-auto transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg></a>
      <a href="/extensiv" className="group bg-white rounded-2xl p-6 border border-gray-100 card-lift flex items-center gap-4 reveal reveal-delay-2" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)',textDecoration:'none'}}><div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-white border border-gray-100 p-2"><img src="/logos/Extensiv_logo.png" alt="Extensiv" className="w-full h-full object-contain" /></div><div><h3 className="font-bold text-sm mb-0.5" style={{color:'#0B2554'}}>Extensiv</h3><p className="text-xs text-gray-400">Multi-3PL warehouse management</p></div><svg className="w-4 h-4 text-gray-300 ml-auto transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg></a>
    </div>
  </div>
</section>

{/* CTA BANNER */}
<section className="py-24" style={{background:'linear-gradient(135deg,#0B2554 0%,#0F3460 50%,#0B2554 100%)'}}>
  <div className="max-w-4xl mx-auto px-6 md:px-12 text-center reveal">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{letterSpacing:'-0.03em'}}>Unify CEVA &amp;<br /><span className="ceva-text">NetSuite</span> Today</h2>
    <p className="text-lg mb-10" style={{color:'rgba(255,255,255,.65)',lineHeight:'1.7'}}>Stop copying data between systems. Connect your CEVA Logistics global network with NetSuite and give your fulfillment and finance teams a single source of truth.</p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="/contact" className="btn-ceva text-white font-bold px-10 py-4 rounded-2xl text-base">Schedule A Demo</a>
      <a href="tel:+18886044120" className="btn-outline-white btn-outline-white-ceva text-white font-semibold px-8 py-4 rounded-2xl text-base">+1 (888) 604-4120</a>
    </div>
  </div>
</section>
      <Footer />
      <RevealObserver />
    </>
  )
}
