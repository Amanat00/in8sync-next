'use client'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'

export default function RadialPage() {
  return (
    <>
      <Navbar />
      
{/* HERO */}
<section className="hero-rad min-h-screen flex items-center pt-20 relative overflow-hidden" style={{isolation:'isolate'}}>
  <div className="absolute inset-0 grid-lines opacity-60 z-10 pointer-events-none"></div>
  <div className="absolute inset-0 pointer-events-none z-10">
    <div className="absolute top-16 right-8 w-96 h-96 rounded-full animate-float" style={{background:'radial-gradient(circle,rgba(248,113,113,.12) 0%,transparent 70%)'}}></div>
    <div className="absolute top-1/3 right-1/4"><div className="w-3 h-3 rounded-full" style={{background:'#F87171'}}></div><div className="absolute inset-0 rounded-full" style={{background:'#F87171',animation:'pulse-ring 2.8s ease-out infinite',opacity:'.4'}}></div></div>
  </div>
  <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 w-full relative z-20">
    <div className="grid lg:grid-cols-2 gap-14 items-center">
      <div style={{animation:'slide-up .9s cubic-bezier(.23,1,.32,1) both'}}>
        <div className="flex items-center gap-2 mb-6">
          <a href="/" className="text-xs font-medium" style={{color:'rgba(255,255,255,.4)'}}>Home</a>
          <svg className="w-3 h-3" style={{color:'rgba(255,255,255,.25)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          <span className="text-xs font-medium" style={{color:'rgba(255,255,255,.4)'}}>3PL Fulfillment</span>
          <svg className="w-3 h-3" style={{color:'rgba(255,255,255,.25)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          <span className="text-xs font-semibold" style={{color:'#F87171'}}>Radial</span>
        </div>
        <div className="inline-flex items-center gap-2.5 mb-7 px-4 py-2 rounded-full border" style={{background:'rgba(248,113,113,.1)',borderColor:'rgba(248,113,113,.3)'}}>
          <span className="text-lg">🔴</span>
          <span className="text-xs font-semibold tracking-widest uppercase" style={{color:'#F87171'}}>Radial DirectConnect</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{letterSpacing:'-0.03em',lineHeight:'1.08'}}>
          Directly Connecting<br />
          <span className="rad-text">NetSuite &amp; Radial</span>
        </h1>
        <p className="text-lg mb-8" style={{color:'rgba(255,255,255,.78)',lineHeight:'1.75'}}>In8Sync DirectConnect — the only native NetSuite integration that fully connects your Radial B2C eCommerce fulfillment operations with NetSuite ERP. Real-time, bi-directional, no middleware.</p>
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="rounded-2xl p-4 text-center" style={{background:'rgba(248,113,113,.08)',border:'1px solid rgba(248,113,113,.2)'}}>
            <div className="text-2xl font-bold mb-1" style={{color:'#F87171'}}>TIME</div>
            <div className="text-xs" style={{color:'rgba(255,255,255,.55)'}}>Eliminate manual data entry across systems</div>
          </div>
          <div className="rounded-2xl p-4 text-center" style={{background:'rgba(248,113,113,.08)',border:'1px solid rgba(248,113,113,.2)'}}>
            <div className="text-2xl font-bold mb-1" style={{color:'#F87171'}}>MONEY</div>
            <div className="text-xs" style={{color:'rgba(255,255,255,.55)'}}>Reduce errors that cost real dollars</div>
          </div>
          <div className="rounded-2xl p-4 text-center" style={{background:'rgba(248,113,113,.08)',border:'1px solid rgba(248,113,113,.2)'}}>
            <div className="text-2xl font-bold mb-1" style={{color:'#F87171'}}>EXPERTISE</div>
            <div className="text-xs" style={{color:'rgba(255,255,255,.55)'}}>No developers or middleware required</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="/contact" className="btn-rad text-white font-bold px-7 py-3.5 rounded-xl text-sm">Schedule A Demo</a>
          <a href="#flows" className="btn-outline-white btn-outline-white-rad text-white font-semibold px-6 py-3.5 rounded-xl text-sm">Data Flows</a>
          <a href="#features" className="btn-outline-white btn-outline-white-rad text-white font-semibold px-6 py-3.5 rounded-xl text-sm">Features</a>
        
          <a href="/integrations" className="btn-outline-white btn-outline-white-rad text-white font-semibold px-6 py-3.5 rounded-xl text-sm inline-flex items-center gap-2">See All Bundles <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
        </div>
      </div>
      <div className="relative flex justify-center" style={{animation:'fade-in 1.2s ease both .4s',opacity:'0'}}>
        <div className="relative w-full max-w-md">
          <div className="absolute inset-0 rounded-3xl blur-3xl" style={{background:'linear-gradient(135deg,rgba(153,27,27,.25),rgba(27,111,208,.12))'}}></div>
          <div className="relative rounded-3xl p-8 border" style={{background:'rgba(255,255,255,.03)',borderColor:'rgba(248,113,113,.18)',backdropFilter:'blur(10px)',boxShadow:'0 24px 64px rgba(0,0,0,.4)'}}>
            <div className="flex flex-col items-center justify-center" style={{height:'300px'}}>
  <div className="rounded-2xl flex items-center justify-center p-6" style={{background:'white',width:'220px',height:'140px'}}>
    <img src="/brand_assests/Radial.png" alt="radial Logo" style={{maxWidth:'180px',maxHeight:'100px',objectFit:'contain'}} onError={(e) => { (e.currentTarget as HTMLImageElement).style.display='none'; const next = e.currentTarget.nextElementSibling as HTMLElement; if(next) next.style.display='flex' }} />
    <div style={{display:'none',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%',height:'100%'}}>
      <span style={{fontSize:'18px',fontWeight:'800',color:'#0B2554'}}>Zapier</span>
    </div>
  </div>
  <div style={{fontSize:'12px',color:'rgba(255,255,255,.4)',marginTop:'12px'}}>NetSuite Integration</div>
</div>
          </div>
          <div className="absolute -top-4 -left-6 bg-white rounded-2xl px-4 py-3 shadow-2xl card-lift">
            <div className="flex items-center gap-2.5"><div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#991B1B,#B91C1C)'}}><span className="text-white text-sm">📦</span></div><div><div className="text-xs font-bold text-navy">B2C Fulfillment</div><div className="text-[10px] text-gray-400">Real-Time Sync</div></div></div>
          </div>
          <div className="absolute -bottom-4 -right-6 bg-white rounded-2xl px-4 py-3 shadow-2xl card-lift">
            <div className="flex items-center gap-2.5"><div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#059669,#10B981)'}}><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg></div><div><div className="text-xs font-bold text-navy">30+ Years Experience</div><div className="text-[10px] text-gray-400">Global Fulfillment</div></div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* BENEFITS */}
<section className="py-20" style={{background:'#F5F7FC'}}>
  <div className="max-w-7xl mx-auto px-6 md:px-12">
    <div className="text-center max-w-2xl mx-auto mb-14 reveal">
      <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#991B1B'}}>Why DirectConnect</p>
      <h2 className="text-4xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>What You Gain with<br />Radial DirectConnect</h2>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
      <div className="bg-white rounded-2xl p-6 border border-gray-100 card-lift reveal" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
        <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{background:'linear-gradient(135deg,#991B1B,#B91C1C)',boxShadow:'0 4px 16px rgba(153,27,27,.3)'}}><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3l14 9-14 9V3z"/></svg></div>
        <h3 className="font-bold text-sm mb-2" style={{color:'#0B2554'}}>B2C eCommerce Expert</h3>
        <p className="text-xs text-gray-500 leading-relaxed">30+ years of fulfillment excellence powering global B2C brands.</p>
      </div>
      <div className="bg-white rounded-2xl p-6 border border-gray-100 card-lift reveal reveal-delay-1" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
        <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{background:'linear-gradient(135deg,#991B1B,#B91C1C)',boxShadow:'0 4px 16px rgba(153,27,27,.3)'}}><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/></svg></div>
        <h3 className="font-bold text-sm mb-2" style={{color:'#0B2554'}}>Global Scale</h3>
        <p className="text-xs text-gray-500 leading-relaxed">Facilities across Europe &amp; North America serving major retail brands.</p>
      </div>
      <div className="bg-white rounded-2xl p-6 border border-gray-100 card-lift reveal reveal-delay-2" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
        <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{background:'linear-gradient(135deg,#991B1B,#B91C1C)',boxShadow:'0 4px 16px rgba(153,27,27,.3)'}}><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg></div>
        <h3 className="font-bold text-sm mb-2" style={{color:'#0B2554'}}>Native NetSuite</h3>
        <p className="text-xs text-gray-500 leading-relaxed">No external platform or middleware — built 100% inside NetSuite.</p>
      </div>
      <div className="bg-white rounded-2xl p-6 border border-gray-100 card-lift reveal reveal-delay-3" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
        <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{background:'linear-gradient(135deg,#991B1B,#B91C1C)',boxShadow:'0 4px 16px rgba(153,27,27,.3)'}}><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg></div>
        <h3 className="font-bold text-sm mb-2" style={{color:'#0B2554'}}>Real-Time Sync</h3>
        <p className="text-xs text-gray-500 leading-relaxed">Updates every 15 minutes or on-demand — inventory always accurate.</p>
      </div>
    </div>
  </div>
</section>

{/* DATA FLOWS */}
<section id="flows" className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 md:px-12">
    <div className="text-center max-w-2xl mx-auto mb-16 reveal">
      <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#991B1B'}}>Integration Architecture</p>
      <h2 className="text-4xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>Complete Data Flow Map</h2>
      <p className="text-gray-500 text-sm leading-relaxed">Every record type that flows between NetSuite and Radial — outbound and inbound.</p>
    </div>

    <div className="grid lg:grid-cols-3 gap-8 mb-8">
      {/* Outbound NS→Radial */}
      <div className="reveal">
        <div className="flex items-center gap-3 mb-5 p-4 rounded-2xl" style={{background:'linear-gradient(135deg,rgba(153,27,27,.07),rgba(248,113,113,.05))',border:'1.5px solid rgba(153,27,27,.15)'}}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:'linear-gradient(135deg,#991B1B,#B91C1C)'}}><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg></div>
          <div><div className="text-xs font-bold" style={{color:'#991B1B'}}>Outbound</div><div className="text-[11px] text-gray-400">NetSuite → Radial</div></div>
        </div>
        <div className="space-y-3">
          <div className="flow-card flow-card-rad reveal reveal-delay-1">
            <div className="flex items-center gap-3">
              <div className="flow-arrow" style={{background:'rgba(153,27,27,.1)'}}><span className="text-sm">📋</span></div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold" style={{color:'#991B1B'}}>Item Master</span>
                  <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                  <span className="text-xs font-semibold" style={{color:'#0B2554'}}>Create SKUs</span>
                </div>
                <p className="text-[11px] text-gray-400 mt-0.5">NetSuite items create and update SKUs in Radial</p>
              </div>
            </div>
          </div>
          <div className="flow-card flow-card-rad reveal reveal-delay-2">
            <div className="flex items-center gap-3">
              <div className="flow-arrow" style={{background:'rgba(153,27,27,.1)'}}><span className="text-sm">🛒</span></div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold" style={{color:'#991B1B'}}>Sales Orders</span>
                  <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                  <span className="text-xs font-semibold" style={{color:'#0B2554'}}>Auto-Sync</span>
                </div>
                <p className="text-[11px] text-gray-400 mt-0.5">Auto-sync by location to Radial fulfillment centers</p>
              </div>
            </div>
          </div>
          <div className="flow-card flow-card-rad reveal reveal-delay-3">
            <div className="flex items-center gap-3">
              <div className="flow-arrow" style={{background:'rgba(153,27,27,.1)'}}><span className="text-sm">📥</span></div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold" style={{color:'#991B1B'}}>Purchase Orders</span>
                  <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                  <span className="text-xs font-semibold" style={{color:'#0B2554'}}>Inbound Orders</span>
                </div>
                <p className="text-[11px] text-gray-400 mt-0.5">Purchase orders sent as inbound receipts to Radial</p>
              </div>
            </div>
          </div>
          <div className="flow-card flow-card-rad reveal">
            <div className="flex items-center gap-3">
              <div className="flow-arrow" style={{background:'rgba(153,27,27,.1)'}}><span className="text-sm">🔄</span></div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold" style={{color:'#991B1B'}}>Transfer Orders</span>
                  <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                  <span className="text-xs font-semibold" style={{color:'#0B2554'}}>Conditional Sync</span>
                </div>
                <p className="text-[11px] text-gray-400 mt-0.5">Transfer orders synced based on location rules</p>
              </div>
            </div>
          </div>
          <div className="flow-card flow-card-rad reveal reveal-delay-1">
            <div className="flex items-center gap-3">
              <div className="flow-arrow" style={{background:'rgba(153,27,27,.1)'}}><span className="text-sm">↩️</span></div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold" style={{color:'#991B1B'}}>Return Authorizations</span>
                  <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                  <span className="text-xs font-semibold" style={{color:'#0B2554'}}>RMA Processing</span>
                </div>
                <p className="text-[11px] text-gray-400 mt-0.5">RMAs pushed to Radial for return processing</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inbound Radial→NS */}
      <div className="reveal reveal-delay-1">
        <div className="flex items-center gap-3 mb-5 p-4 rounded-2xl" style={{background:'linear-gradient(135deg,rgba(27,111,208,.07),rgba(91,184,212,.05))',border:'1.5px solid rgba(27,111,208,.15)'}}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:'linear-gradient(135deg,#1B6FD0,#3B8AE0)'}}><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg></div>
          <div><div className="text-xs font-bold" style={{color:'#1B6FD0'}}>Inbound</div><div className="text-[11px] text-gray-400">Radial → NetSuite</div></div>
        </div>
        <div className="space-y-3">
          <div className="flow-card flow-card-rad reveal reveal-delay-1">
            <div className="flex items-center gap-3">
              <div className="flow-arrow" style={{background:'rgba(27,111,208,.1)'}}><span className="text-sm">🔗</span></div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold" style={{color:'#1B6FD0'}}>Item Matching</span>
                  <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                  <span className="text-xs font-semibold" style={{color:'#0B2554'}}>SKU Alignment</span>
                </div>
                <p className="text-[11px] text-gray-400 mt-0.5">Radial SKUs matched to NetSuite item records</p>
              </div>
            </div>
          </div>
          <div className="flow-card flow-card-rad reveal reveal-delay-2">
            <div className="flex items-center gap-3">
              <div className="flow-arrow" style={{background:'rgba(27,111,208,.1)'}}><span className="text-sm">🚚</span></div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold" style={{color:'#1B6FD0'}}>Item Fulfillments</span>
                  <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                  <span className="text-xs font-semibold" style={{color:'#0B2554'}}>Shipment Tracking</span>
                </div>
                <p className="text-[11px] text-gray-400 mt-0.5">Shipment records with tracking auto-created in NetSuite</p>
              </div>
            </div>
          </div>
          <div className="flow-card flow-card-rad reveal reveal-delay-3">
            <div className="flex items-center gap-3">
              <div className="flow-arrow" style={{background:'rgba(27,111,208,.1)'}}><span className="text-sm">📬</span></div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold" style={{color:'#1B6FD0'}}>Item Receipts</span>
                  <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                  <span className="text-xs font-semibold" style={{color:'#0B2554'}}>Inbound Receiving</span>
                </div>
                <p className="text-[11px] text-gray-400 mt-0.5">Received inventory creates item receipts in NetSuite</p>
              </div>
            </div>
          </div>
          <div className="flow-card flow-card-rad reveal">
            <div className="flex items-center gap-3">
              <div className="flow-arrow" style={{background:'rgba(27,111,208,.1)'}}><span className="text-sm">📊</span></div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold" style={{color:'#1B6FD0'}}>Inventory Variance</span>
                  <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                  <span className="text-xs font-semibold" style={{color:'#0B2554'}}>Daily Stock Levels</span>
                </div>
                <p className="text-[11px] text-gray-400 mt-0.5">Daily on-hand inventory updates keep NetSuite accurate</p>
              </div>
            </div>
          </div>
          <div className="flow-card flow-card-rad reveal reveal-delay-1" style={{opacity:'.75'}}>
            <div className="flex items-center gap-3">
              <div className="flow-arrow" style={{background:'rgba(27,111,208,.07)'}}><span className="text-sm">🧾</span></div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold" style={{color:'#1B6FD0'}}>Vendor Bills</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold" style={{background:'rgba(153,27,27,.1)',color:'#991B1B'}}>Coming Soon</span>
                </div>
                <p className="text-[11px] text-gray-400 mt-0.5">Automatic vendor bill creation — future release</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary stats */}
      <div className="reveal reveal-delay-2">
        <div className="flex items-center gap-3 mb-5 p-4 rounded-2xl" style={{background:'linear-gradient(135deg,rgba(91,184,212,.1),rgba(58,191,191,.06))',border:'1.5px solid rgba(91,184,212,.25)'}}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:'linear-gradient(135deg,#5BB8D4,#3ABFBF)'}}><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg></div>
          <div><div className="text-xs font-bold" style={{color:'#5BB8D4'}}>Integration Summary</div><div className="text-[11px] text-gray-400">Radial ↔ NetSuite</div></div>
        </div>
        <div className="rounded-2xl p-5 mb-4" style={{background:'linear-gradient(135deg,#991B1B,#7F1D1D)',boxShadow:'0 8px 30px rgba(153,27,27,.3)'}}>
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{color:'#FCA5A5'}}>Record Summary</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/60">Outbound flows</span>
              <span className="text-xs font-bold text-white">5 record types</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/60">Inbound flows</span>
              <span className="text-xs font-bold text-white">5 record types</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/60">Vendor Bills</span>
              <span className="text-xs font-bold" style={{color:'#FCA5A5'}}>Coming Soon</span>
            </div>
            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-semibold text-white/70">Total synced records</span>
              <span className="text-sm font-bold" style={{color:'#F87171'}}>10 types</span>
            </div>
          </div>
        </div>
        <div className="rounded-2xl p-5 border border-gray-100" style={{background:'#F9FAFB'}}>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">About Radial</p>
          <p className="text-xs text-gray-500 leading-relaxed">Radial is a leading B2C eCommerce fulfillment provider with 30+ years experience, serving global brands across Europe and North America.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* FEATURES */}
<section id="features" className="py-24" style={{background:'#F5F7FC'}}>
  <div className="max-w-7xl mx-auto px-6 md:px-12">
    <div className="text-center max-w-2xl mx-auto mb-16 reveal">
      <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#991B1B'}}>Platform Capabilities</p>
      <h2 className="text-4xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>Everything Included<br />Out of the Box</h2>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div className="feat-card feat-card-rad reveal">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{background:'rgba(153,27,27,.1)'}}><svg className="w-4 h-4" style={{color:'#991B1B'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg></div>
        <h3 className="font-bold text-sm mb-1.5" style={{color:'#0B2554'}}>Self-Service Dashboard</h3>
        <p className="text-xs text-gray-500 leading-relaxed">Manage all integration settings inside NetSuite — no external portal needed.</p>
      </div>
      <div className="feat-card feat-card-rad reveal reveal-delay-1">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{background:'rgba(153,27,27,.1)'}}><svg className="w-4 h-4" style={{color:'#991B1B'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/></svg></div>
        <h3 className="font-bold text-sm mb-1.5" style={{color:'#0B2554'}}>Pre-Built Templates</h3>
        <p className="text-xs text-gray-500 leading-relaxed">Pre-configured flow templates for Radial ready to activate with one click.</p>
      </div>
      <div className="feat-card feat-card-rad reveal reveal-delay-2">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{background:'rgba(153,27,27,.1)'}}><svg className="w-4 h-4" style={{color:'#991B1B'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg></div>
        <h3 className="font-bold text-sm mb-1.5" style={{color:'#0B2554'}}>Real-Time Sync</h3>
        <p className="text-xs text-gray-500 leading-relaxed">Updates as frequently as every 15 minutes — orders, shipments, and inventory.</p>
      </div>
      <div className="feat-card feat-card-rad reveal">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{background:'rgba(153,27,27,.1)'}}><svg className="w-4 h-4" style={{color:'#991B1B'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
        <h3 className="font-bold text-sm mb-1.5" style={{color:'#0B2554'}}>Error Logs &amp; Retry</h3>
        <p className="text-xs text-gray-500 leading-relaxed">All sync logs stored in NetSuite with automatic retry on failed records.</p>
      </div>
      <div className="feat-card feat-card-rad reveal reveal-delay-1">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{background:'rgba(153,27,27,.1)'}}><svg className="w-4 h-4" style={{color:'#991B1B'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg></div>
        <h3 className="font-bold text-sm mb-1.5" style={{color:'#0B2554'}}>Conditional Rules</h3>
        <p className="text-xs text-gray-500 leading-relaxed">Set sync rules based on location, order type, and status — full control.</p>
      </div>
      <div className="feat-card feat-card-rad reveal reveal-delay-2">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{background:'rgba(153,27,27,.1)'}}><svg className="w-4 h-4" style={{color:'#991B1B'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg></div>
        <h3 className="font-bold text-sm mb-1.5" style={{color:'#0B2554'}}>No External Platform</h3>
        <p className="text-xs text-gray-500 leading-relaxed">100% hosted inside NetSuite — no iPaaS, no extra subscriptions, no middleware.</p>
      </div>
    </div>
  </div>
</section>

{/* SUPPORT + CTA SPLIT */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 md:px-12">
    <div className="grid lg:grid-cols-2 gap-10 items-center">
      <div className="rounded-3xl p-10 reveal" style={{background:'linear-gradient(135deg,#991B1B 0%,#7F1D1D 60%,#0B2554 100%)',boxShadow:'0 20px 60px rgba(153,27,27,.35)'}}>
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full" style={{background:'rgba(248,113,113,.15)',border:'1px solid rgba(248,113,113,.3)'}}>
          <span className="w-1.5 h-1.5 rounded-full" style={{background:'#F87171'}}></span>
          <span className="text-xs font-semibold" style={{color:'#F87171'}}>Schedule A Demo</span>
        </div>
        <h2 className="text-3xl font-bold text-white mb-4" style={{letterSpacing:'-0.025em'}}>See Radial DirectConnect<br />in Action</h2>
        <p className="text-sm mb-8" style={{color:'rgba(255,255,255,.65)',lineHeight:'1.75'}}>Get a live walkthrough of every data flow, ask your implementation questions, and see exactly how your Radial and NetSuite environments will connect.</p>
        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-3"><div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{background:'rgba(248,113,113,.2)'}}><svg className="w-2.5 h-2.5" style={{color:'#F87171'}} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg></div><span className="text-sm text-white/70">30-minute live demo with an integration expert</span></div>
          <div className="flex items-center gap-3"><div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{background:'rgba(248,113,113,.2)'}}><svg className="w-2.5 h-2.5" style={{color:'#F87171'}} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg></div><span className="text-sm text-white/70">Custom setup plan tailored to your Radial workflows</span></div>
          <div className="flex items-center gap-3"><div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{background:'rgba(248,113,113,.2)'}}><svg className="w-2.5 h-2.5" style={{color:'#F87171'}} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg></div><span className="text-sm text-white/70">No obligation — just answers and a clear path forward</span></div>
        </div>
        <a href="/contact" className="btn-rad w-full block text-center text-white font-bold py-4 rounded-2xl text-sm">Schedule A Demo</a>
      </div>
      <div className="reveal reveal-delay-1">
        <div className="mb-6">
          <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#991B1B'}}>Expert Support</p>
          <h2 className="text-3xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>Real Humans.<br />Real NetSuite Experts.</h2>
          <p className="text-gray-500 text-sm leading-relaxed">Our implementation and support team are certified NetSuite professionals — not ticket bots. Every question answered by someone who has actually built the integration.</p>
        </div>
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 card-lift" style={{boxShadow:'0 2px 12px rgba(11,37,84,.04)'}}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:'rgba(153,27,27,.1)'}}><svg className="w-5 h-5" style={{color:'#991B1B'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg></div>
            <div>
              <div className="text-xs font-bold mb-0.5" style={{color:'#0B2554'}}>Call Us Directly</div>
              <div className="text-sm font-semibold" style={{color:'#991B1B'}}>+1 (888) 604-4120</div>
              <div className="text-[11px] text-gray-400">8am – 8pm MT, Monday – Friday</div>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 card-lift" style={{boxShadow:'0 2px 12px rgba(11,37,84,.04)'}}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:'rgba(153,27,27,.1)'}}><svg className="w-5 h-5" style={{color:'#991B1B'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg></div>
            <div>
              <div className="text-xs font-bold mb-0.5" style={{color:'#0B2554'}}>Live Chat Support</div>
              <div className="text-sm font-semibold" style={{color:'#991B1B'}}>Available on all plans</div>
              <div className="text-[11px] text-gray-400">Average response under 2 minutes</div>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 card-lift" style={{boxShadow:'0 2px 12px rgba(11,37,84,.04)'}}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:'rgba(153,27,27,.1)'}}><svg className="w-5 h-5" style={{color:'#991B1B'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg></div>
            <div>
              <div className="text-xs font-bold mb-0.5" style={{color:'#0B2554'}}>Full Documentation</div>
              <div className="text-sm font-semibold" style={{color:'#991B1B'}}>Step-by-step guides</div>
              <div className="text-[11px] text-gray-400">Implementation, field mapping, and troubleshooting</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* RELATED */}
<section className="py-20" style={{background:'#F5F7FC'}}>
  <div className="max-w-7xl mx-auto px-6 md:px-12">
    <div className="text-center mb-12 reveal"><p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#5BB8D4'}}>Explore More</p><h2 className="text-3xl font-bold" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>More 3PL Integrations</h2></div>
    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      <a href="/extensiv" className="group bg-white rounded-2xl p-6 border border-gray-100 card-lift flex items-center gap-5 reveal" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)',textDecoration:'none'}}>
        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white border border-gray-100 p-2"><img src="/logos/Extensiv_logo.png" alt="Extensiv" className="w-full h-full object-contain" /></div>
        <div><h3 className="font-bold text-sm mb-0.5" style={{color:'#0B2554'}}>Extensiv DirectConnect</h3><p className="text-xs text-gray-400">Multi-3PL warehouse management</p></div>
        <svg className="w-4 h-4 text-gray-300 ml-auto transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
      </a>
      <a href="/shipstation" className="group bg-white rounded-2xl p-6 border border-gray-100 card-lift flex items-center gap-5 reveal reveal-delay-1" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)',textDecoration:'none'}}>
        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white border border-gray-100 p-2"><img src="/logos/shipstation_logo.png" alt="ShipStation" className="w-full h-full object-contain" /></div>
        <div><h3 className="font-bold text-sm mb-0.5" style={{color:'#0B2554'}}>ShipStation DirectConnect</h3><p className="text-xs text-gray-400">Multi-carrier shipping automation</p></div>
        <svg className="w-4 h-4 text-gray-300 ml-auto transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
      </a>
      <a href="/ceva-logistics" className="group bg-white rounded-2xl p-6 border border-gray-100 card-lift flex items-center gap-5 reveal reveal-delay-2" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)',textDecoration:'none'}}>
        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white border border-gray-100 p-2"><img src="/logos/ceva_logo.png" alt="CEVA Logistics" className="w-full h-full object-contain" /></div>
        <div><h3 className="font-bold text-sm mb-0.5" style={{color:'#0B2554'}}>CEVA Logistics DirectConnect</h3><p className="text-xs text-gray-400">170+ countries, 1,300+ facilities</p></div>
        <svg className="w-4 h-4 text-gray-300 ml-auto transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</section>

{/* CTA BANNER */}
<section className="py-24" style={{background:'linear-gradient(135deg,#0B2554 0%,#3B0A0A 50%,#0B2554 100%)'}}>
  <div className="max-w-4xl mx-auto px-6 md:px-12 text-center reveal">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{letterSpacing:'-0.03em'}}>Unify Radial &amp;<br /><span className="rad-text">NetSuite</span> Today</h2>
    <p className="text-lg mb-10" style={{color:'rgba(255,255,255,.65)',lineHeight:'1.7'}}>Stop copying data between systems. Start your Radial DirectConnect integration and give your fulfillment and finance teams a single source of truth.</p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="/contact" className="btn-rad text-white font-bold px-10 py-4 rounded-2xl text-base">Schedule A Demo</a>
      <a href="tel:+18886044120" className="btn-outline-white btn-outline-white-rad text-white font-semibold px-8 py-4 rounded-2xl text-base">+1 (888) 604-4120</a>
    </div>
  </div>
</section>
      <Footer />
      <RevealObserver />
    </>
  )
}
