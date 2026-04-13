'use client'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'

export default function ShipstationPage() {
  return (
    <>
      <Navbar />
      
{/* HERO */}
<section className="hero-ss min-h-[calc(100vh-30px)] flex items-center pt-[65px] pb-4 relative overflow-hidden" style={{isolation:'isolate'}}>
  <div className="absolute inset-0 grid-lines opacity-60 z-10 pointer-events-none"></div>
  <div className="absolute inset-0 pointer-events-none z-10">
    <div className="absolute top-16 right-8 w-96 h-96 rounded-full animate-float" style={{background:'radial-gradient(circle,rgba(251,146,60,.12) 0%,transparent 70%)'}}></div>
    <div className="absolute top-1/3 right-1/4"><div className="w-3 h-3 rounded-full" style={{background:'#FB923C'}}></div><div className="absolute inset-0 rounded-full" style={{background:'#FB923C',animation:'pulse-ring 2.8s ease-out infinite',opacity:'.4'}}></div></div>
  </div>
  <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 w-full relative z-20">
    <div className="grid lg:grid-cols-2 gap-14 items-center">
      <div style={{animation:'slide-up .9s cubic-bezier(.23,1,.32,1) both'}}>
        <div className="flex items-center gap-2 mb-6">
          <a href="/" className="text-xs font-medium" style={{color:'rgba(255,255,255,.4)'}}>Home</a>
          <svg className="w-3 h-3" style={{color:'rgba(255,255,255,.25)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          <span className="text-xs font-medium" style={{color:'rgba(255,255,255,.4)'}}>3PL Fulfillment</span>
          <svg className="w-3 h-3" style={{color:'rgba(255,255,255,.25)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          <span className="text-xs font-semibold" style={{color:'#FB923C'}}>ShipStation</span>
        </div>
        <div className="inline-flex items-center gap-2.5 mb-7 px-4 py-2 rounded-full border" style={{background:'rgba(251,146,60,.1)',borderColor:'rgba(251,146,60,.3)'}}>
          <span className="text-lg">🚢</span>
          <span className="text-xs font-semibold tracking-widest uppercase" style={{color:'#FB923C'}}>ShipStation DirectConnect</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{letterSpacing:'-0.03em',lineHeight:'1.08'}}>
          Directly Connecting<br />
          <span className="ss-text">NetSuite &amp; ShipStation</span>
        </h1>
        <p className="text-lg mb-8" style={{color:'rgba(255,255,255,.78)',lineHeight:'1.75'}}>In8Sync DirectConnect — the only native NetSuite integration that fully automates your ShipStation shipping operations with NetSuite ERP. Real-time, bi-directional, natively inside NetSuite.</p>
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="rounded-2xl p-4 text-center" style={{background:'rgba(251,146,60,.08)',border:'1px solid rgba(251,146,60,.2)'}}>
            <div className="text-2xl font-bold mb-1" style={{color:'#FB923C'}}>TIME</div>
            <div className="text-xs" style={{color:'rgba(255,255,255,.55)'}}>Eliminate manual data entry across systems</div>
          </div>
          <div className="rounded-2xl p-4 text-center" style={{background:'rgba(251,146,60,.08)',border:'1px solid rgba(251,146,60,.2)'}}>
            <div className="text-2xl font-bold mb-1" style={{color:'#FB923C'}}>MONEY</div>
            <div className="text-xs" style={{color:'rgba(255,255,255,.55)'}}>Reduce errors that cost real dollars</div>
          </div>
          <div className="rounded-2xl p-4 text-center" style={{background:'rgba(251,146,60,.08)',border:'1px solid rgba(251,146,60,.2)'}}>
            <div className="text-2xl font-bold mb-1" style={{color:'#FB923C'}}>EXPERTISE</div>
            <div className="text-xs" style={{color:'rgba(255,255,255,.55)'}}>No developers or middleware required</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="/contact" className="btn-ss text-white font-bold px-7 py-3.5 rounded-xl text-sm">Schedule A Demo</a>
          <a href="#flows" className="btn-outline-white btn-outline-white-ss text-white font-semibold px-6 py-3.5 rounded-xl text-sm">Data Flows</a>
          <a href="#features" className="btn-outline-white btn-outline-white-ss text-white font-semibold px-6 py-3.5 rounded-xl text-sm">Features</a>
        
          <a href="/integrations" className="btn-outline-white btn-outline-white-ss text-white font-semibold px-6 py-3.5 rounded-xl text-sm inline-flex items-center gap-2">See All Bundles <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
        </div>
      </div>
      <div className="relative flex justify-center" style={{animation:'fade-in 1.2s ease both .4s',opacity:'0'}}>
        <div className="relative w-full max-w-md">
          <div className="absolute inset-0 rounded-3xl blur-3xl" style={{background:'linear-gradient(135deg,rgba(194,65,12,.25),rgba(27,111,208,.12))'}}></div>
          <div className="relative rounded-3xl p-8 border" style={{background:'rgba(255,255,255,.03)',borderColor:'rgba(251,146,60,.18)',backdropFilter:'blur(10px)',boxShadow:'0 24px 64px rgba(0,0,0,.4)'}}>
            <div className="flex flex-col items-center justify-center" style={{height:'300px'}}>
  <div className="rounded-2xl flex items-center justify-center p-6" style={{background:'white',width:'220px',height:'140px'}}>
    <img src="/brand_assests/shipstatio.png" alt="Zapier Logo" style={{maxWidth:'180px',maxHeight:'100px',objectFit:'contain'}} onError={(e) => { (e.currentTarget as HTMLImageElement).style.display='none'; const next = e.currentTarget.nextElementSibling as HTMLElement; if(next) next.style.display='flex' }} />
    <div style={{display:'none',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%',height:'100%'}}>
      <span style={{fontSize:'18px',fontWeight:'800',color:'#0B2554'}}>Zapier</span>
    </div>
  </div>
  <div style={{fontSize:'12px',color:'rgba(255,255,255,.4)',marginTop:'12px'}}>NetSuite Integration</div>
</div>
          </div>
          <div className="absolute -top-4 -left-6 bg-white rounded-2xl px-4 py-3 shadow-2xl card-lift">
            <div className="flex items-center gap-2.5"><div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#C2410C,#EA580C)'}}><span className="text-white text-sm">📦</span></div><div><div className="text-xs font-bold text-navy">Shipping Automation</div><div className="text-[10px] text-gray-400">Real-Time Sync</div></div></div>
          </div>
          <div className="absolute -bottom-4 -right-6 bg-white rounded-2xl px-4 py-3 shadow-2xl card-lift">
            <div className="flex items-center gap-2.5"><div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#059669,#10B981)'}}><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg></div><div><div className="text-xs font-bold text-navy">Real-Time Sync</div><div className="text-[10px] text-gray-400">Orders &amp; Tracking</div></div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* MIDDLEWARE */}
<section className="py-16" style={{background:'#FB923C'}}>
  <div className="max-w-5xl mx-auto px-6 md:px-12">
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-white mb-4" style={{letterSpacing:'-0.02em'}}>No External Platform or Middleware</h2>
        <p className="text-white/80 text-sm leading-relaxed mb-3">While many other solutions run on an External Platform, also known as Middleware, In8Sync's ShipStation DirectConnect bundle is natively built into and fully hosted in NetSuite.</p>
        <p className="text-white/80 text-sm leading-relaxed mb-3">In8Sync's efficient approach dramatically reduces the <strong className="text-white">TIME</strong> and <strong className="text-white">SKILL</strong> required to manage, saving your business <strong className="text-white">MONEY</strong> and <strong className="text-white">RESOURCES</strong>.</p>
        <p className="text-white/80 text-sm leading-relaxed">No iPaaS. No middleware. No extra licensing. Just a native NetSuite integration.</p>
      </div>
      <div className="flex-shrink-0">
        <div className="relative w-48 h-48 flex items-center justify-center">
          <div className="w-40 h-40 rounded-full flex items-center justify-center border-4 border-white/30" style={{background:'rgba(255,255,255,.15)'}}>
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
      <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#C2410C'}}>Why DirectConnect</p>
      <h2 className="text-4xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>What You Gain with<br />ShipStation DirectConnect</h2>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
      <div className="bg-white rounded-2xl p-6 border border-gray-100 card-lift reveal" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
        <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{background:'linear-gradient(135deg,#C2410C,#EA580C)',boxShadow:'0 4px 16px rgba(194,65,12,.3)'}}><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg></div>
        <h3 className="font-bold text-sm mb-2" style={{color:'#0B2554'}}>Real-Time Order Sync</h3>
        <p className="text-xs text-gray-500 leading-relaxed">Orders flow instantly from NetSuite to ShipStation and tracking returns as soon as labels are printed.</p>
      </div>
      <div className="bg-white rounded-2xl p-6 border border-gray-100 card-lift reveal reveal-delay-1" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
        <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{background:'linear-gradient(135deg,#C2410C,#EA580C)',boxShadow:'0 4px 16px rgba(194,65,12,.3)'}}><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg></div>
        <h3 className="font-bold text-sm mb-2" style={{color:'#0B2554'}}>Tracking Automation</h3>
        <p className="text-xs text-gray-500 leading-relaxed">Carrier tracking numbers and shipment data automatically update item fulfillments in NetSuite.</p>
      </div>
      <div className="bg-white rounded-2xl p-6 border border-gray-100 card-lift reveal reveal-delay-2" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
        <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{background:'linear-gradient(135deg,#C2410C,#EA580C)',boxShadow:'0 4px 16px rgba(194,65,12,.3)'}}><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg></div>
        <h3 className="font-bold text-sm mb-2" style={{color:'#0B2554'}}>Native NetSuite</h3>
        <p className="text-xs text-gray-500 leading-relaxed">Built directly inside NetSuite — no third-party middleware, no iPaaS overhead, no extra licensing.</p>
      </div>
      <div className="bg-white rounded-2xl p-6 border border-gray-100 card-lift reveal reveal-delay-3" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
        <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{background:'linear-gradient(135deg,#C2410C,#EA580C)',boxShadow:'0 4px 16px rgba(194,65,12,.3)'}}><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg></div>
        <h3 className="font-bold text-sm mb-2" style={{color:'#0B2554'}}>Configurable Flows</h3>
        <p className="text-xs text-gray-500 leading-relaxed">Self-service dashboard inside NetSuite — set your own rules, mappings, and carrier preferences.</p>
      </div>
    </div>
  </div>
</section>

{/* DATA FLOWS */}
<section id="flows" className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 md:px-12">
    <div className="text-center max-w-2xl mx-auto mb-16 reveal">
      <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#C2410C'}}>Integration Architecture</p>
      <h2 className="text-4xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>Complete Data Flow Map</h2>
      <p className="text-gray-500 text-sm leading-relaxed">Every record type that flows between NetSuite and ShipStation — outbound and inbound.</p>
    </div>

    <div className="grid lg:grid-cols-3 gap-8 mb-8">
      {/* Outbound */}
      <div className="reveal">
        <div className="flex items-center gap-3 mb-5 p-4 rounded-2xl" style={{background:'linear-gradient(135deg,rgba(194,65,12,.07),rgba(251,146,60,.05))',border:'1.5px solid rgba(194,65,12,.15)'}}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:'linear-gradient(135deg,#C2410C,#EA580C)'}}><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg></div>
          <div><div className="text-xs font-bold" style={{color:'#C2410C'}}>Outbound</div><div className="text-[11px] text-gray-400">NetSuite → ShipStation</div></div>
        </div>
        <div className="space-y-3">
          <div className="flow-card flow-card-ss reveal reveal-delay-1">
            <div className="flex items-center gap-3">
              <div className="flow-arrow" style={{background:'rgba(194,65,12,.1)'}}><span className="text-sm">📦</span></div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold" style={{color:'#C2410C'}}>Item Master</span>
                  <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                  <span className="text-xs font-semibold" style={{color:'#0B2554'}}>Product Catalog</span>
                </div>
                <p className="text-[11px] text-gray-400 mt-0.5">Product catalog syncs to ShipStation as shippable products</p>
              </div>
            </div>
          </div>
          <div className="flow-card flow-card-ss reveal reveal-delay-2">
            <div className="flex items-center gap-3">
              <div className="flow-arrow" style={{background:'rgba(194,65,12,.1)'}}><span className="text-sm">🛒</span></div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold" style={{color:'#C2410C'}}>Sales Orders</span>
                  <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                  <span className="text-xs font-semibold" style={{color:'#0B2554'}}>Shipment Orders</span>
                </div>
                <p className="text-[11px] text-gray-400 mt-0.5">Sales orders sync to ShipStation ready for label printing and shipment</p>
              </div>
            </div>
          </div>
          <div className="flow-card flow-card-ss reveal reveal-delay-3">
            <div className="flex items-center gap-3">
              <div className="flow-arrow" style={{background:'rgba(194,65,12,.1)'}}><span className="text-sm">🔄</span></div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold" style={{color:'#C2410C'}}>Transfer Orders</span>
                  <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                  <span className="text-xs font-semibold" style={{color:'#0B2554'}}>Internal Transfers</span>
                </div>
                <p className="text-[11px] text-gray-400 mt-0.5">Internal inventory moves sync as transfer shipments in ShipStation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inbound */}
      <div className="reveal reveal-delay-1">
        <div className="flex items-center gap-3 mb-5 p-4 rounded-2xl" style={{background:'linear-gradient(135deg,rgba(27,111,208,.07),rgba(91,184,212,.05))',border:'1.5px solid rgba(27,111,208,.15)'}}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:'linear-gradient(135deg,#1B6FD0,#3B8AE0)'}}><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg></div>
          <div><div className="text-xs font-bold" style={{color:'#1B6FD0'}}>Inbound</div><div className="text-[11px] text-gray-400">ShipStation → NetSuite</div></div>
        </div>
        <div className="space-y-3">
          <div className="flow-card flow-card-ss reveal reveal-delay-1">
            <div className="flex items-center gap-3">
              <div className="flow-arrow" style={{background:'rgba(27,111,208,.1)'}}><span className="text-sm">🚚</span></div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold" style={{color:'#1B6FD0'}}>Item Fulfillments</span>
                  <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                  <span className="text-xs font-semibold" style={{color:'#0B2554'}}>Tracking Data</span>
                </div>
                <p className="text-[11px] text-gray-400 mt-0.5">Tracking numbers and carrier data auto-create fulfilled records in NetSuite</p>
              </div>
            </div>
          </div>
          <div className="flow-card flow-card-ss reveal reveal-delay-2">
            <div className="flex items-center gap-3">
              <div className="flow-arrow" style={{background:'rgba(27,111,208,.1)'}}><span className="text-sm">📋</span></div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold" style={{color:'#1B6FD0'}}>Product Lists</span>
                  <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                  <span className="text-xs font-semibold" style={{color:'#0B2554'}}>Item Sync Back</span>
                </div>
                <p className="text-[11px] text-gray-400 mt-0.5">Product data updated in ShipStation syncs back to NetSuite item records</p>
              </div>
            </div>
          </div>
          <div className="flow-card flow-card-ss reveal reveal-delay-3">
            <div className="flex items-center gap-3">
              <div className="flow-arrow" style={{background:'rgba(27,111,208,.1)'}}><span className="text-sm">❌</span></div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold" style={{color:'#1B6FD0'}}>Order Cancellations</span>
                  <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                  <span className="text-xs font-semibold" style={{color:'#0B2554'}}>Cancel Sync</span>
                </div>
                <p className="text-[11px] text-gray-400 mt-0.5">Cancellations in ShipStation automatically update order status in NetSuite</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="reveal reveal-delay-2">
        <div className="flex items-center gap-3 mb-5 p-4 rounded-2xl" style={{background:'linear-gradient(135deg,rgba(91,184,212,.1),rgba(58,191,191,.06))',border:'1.5px solid rgba(91,184,212,.25)'}}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:'linear-gradient(135deg,#5BB8D4,#3ABFBF)'}}><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg></div>
          <div><div className="text-xs font-bold" style={{color:'#5BB8D4'}}>Integration Summary</div><div className="text-[11px] text-gray-400">All record types</div></div>
        </div>
        <div className="rounded-2xl p-5" style={{background:'linear-gradient(135deg,#C2410C,#9A3412)',boxShadow:'0 8px 30px rgba(194,65,12,.3)'}}>
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{color:'#FB923C'}}>Record Summary</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/60">Outbound flows</span>
              <span className="text-xs font-bold text-white">3 record types</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/60">Inbound flows</span>
              <span className="text-xs font-bold text-white">3 record types</span>
            </div>
            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-semibold text-white/70">Total synced records</span>
              <span className="text-sm font-bold" style={{color:'#FB923C'}}>6 types</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* FEATURES */}
<section id="features" className="py-24" style={{background:'#F5F7FC'}}>
  <div className="max-w-7xl mx-auto px-6 md:px-12">
    <div className="text-center max-w-2xl mx-auto mb-16 reveal">
      <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#C2410C'}}>Platform Capabilities</p>
      <h2 className="text-4xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>Everything Included<br />Out of the Box</h2>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div className="feat-card feat-card-ss reveal">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{background:'rgba(194,65,12,.1)'}}><svg className="w-4 h-4" style={{color:'#C2410C'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg></div>
        <h3 className="font-bold text-sm mb-1.5" style={{color:'#0B2554'}}>Self-Service Dashboard</h3>
        <p className="text-xs text-gray-500 leading-relaxed">Manage all integration settings inside NetSuite — no external portals or support tickets required.</p>
      </div>
      <div className="feat-card feat-card-ss reveal reveal-delay-1">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{background:'rgba(194,65,12,.1)'}}><svg className="w-4 h-4" style={{color:'#C2410C'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg></div>
        <h3 className="font-bold text-sm mb-1.5" style={{color:'#0B2554'}}>Pre-Built Templates</h3>
        <p className="text-xs text-gray-500 leading-relaxed">Pre-configured flow templates ready to activate — go live faster with less setup work.</p>
      </div>
      <div className="feat-card feat-card-ss reveal reveal-delay-2">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{background:'rgba(194,65,12,.1)'}}><svg className="w-4 h-4" style={{color:'#C2410C'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg></div>
        <h3 className="font-bold text-sm mb-1.5" style={{color:'#0B2554'}}>Real-Time Sync</h3>
        <p className="text-xs text-gray-500 leading-relaxed">Updates as frequently as every 15 minutes — orders, tracking, and products always current.</p>
      </div>
      <div className="feat-card feat-card-ss reveal">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{background:'rgba(194,65,12,.1)'}}><svg className="w-4 h-4" style={{color:'#C2410C'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
        <h3 className="font-bold text-sm mb-1.5" style={{color:'#0B2554'}}>Error Logs &amp; Retry</h3>
        <p className="text-xs text-gray-500 leading-relaxed">All logs stored in NetSuite with auto-retry — never lose a sync event silently.</p>
      </div>
      <div className="feat-card feat-card-ss reveal reveal-delay-1">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{background:'rgba(194,65,12,.1)'}}><svg className="w-4 h-4" style={{color:'#C2410C'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg></div>
        <h3 className="font-bold text-sm mb-1.5" style={{color:'#0B2554'}}>Conditional Rules</h3>
        <p className="text-xs text-gray-500 leading-relaxed">Set sync rules based on location, order type, and status — only move the data you want.</p>
      </div>
      <div className="feat-card feat-card-ss reveal reveal-delay-2">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{background:'rgba(194,65,12,.1)'}}><svg className="w-4 h-4" style={{color:'#C2410C'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg></div>
        <h3 className="font-bold text-sm mb-1.5" style={{color:'#0B2554'}}>No External Platform</h3>
        <p className="text-xs text-gray-500 leading-relaxed">100% hosted inside NetSuite — no iPaaS, no external servers, no additional vendor contracts.</p>
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
        <div><h3 className="font-bold text-sm mb-0.5" style={{color:'#0B2554'}}>Extensiv</h3><p className="text-xs text-gray-400">Warehouse DirectConnect</p></div>
        <svg className="w-4 h-4 text-gray-300 ml-auto transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
      </a>
      <a href="/capacity-3pl" className="group bg-white rounded-2xl p-6 border border-gray-100 card-lift flex items-center gap-5 reveal reveal-delay-1" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)',textDecoration:'none'}}>
        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white border border-gray-100 p-2"><img src="/logos/Capacity-3PL_logo.png" alt="Capacity 3PL" className="w-full h-full object-contain" /></div>
        <div><h3 className="font-bold text-sm mb-0.5" style={{color:'#0B2554'}}>Capacity 3PL</h3><p className="text-xs text-gray-400">Fulfillment DirectConnect</p></div>
        <svg className="w-4 h-4 text-gray-300 ml-auto transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
      </a>
      <a href="/radial" className="group bg-white rounded-2xl p-6 border border-gray-100 card-lift flex items-center gap-5 reveal reveal-delay-2" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)',textDecoration:'none'}}>
        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white border border-gray-100 p-2"><img src="/logos/Radial_logo.png" alt="Radial" className="w-full h-full object-contain" /></div>
        <div><h3 className="font-bold text-sm mb-0.5" style={{color:'#0B2554'}}>Radial</h3><p className="text-xs text-gray-400">eCommerce DirectConnect</p></div>
        <svg className="w-4 h-4 text-gray-300 ml-auto transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</section>

{/* WORKFLOWS */}
<section className="py-24 bg-white">
  <div className="max-w-5xl mx-auto px-6 md:px-12">
    <div className="text-center mb-14 reveal">
      <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#FB923C'}}>Workflow Automation</p>
      <h2 className="text-4xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>ShipStation 3PL Workflows</h2>
      <p className="text-gray-400 text-sm">Automate NetSuite business processes with ShipStation 3PL's integrations</p>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      <div className="rounded-2xl p-6 reveal" style={{background:'#FFF7ED',border:'1px solid rgba(251,146,60,.15)'}}>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{background:'linear-gradient(135deg,#FB923C,#F97316)',boxShadow:'0 4px 14px rgba(251,146,60,.3)'}}>
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
        </div>
        <h3 className="font-bold text-sm mb-2" style={{color:'#0B2554'}}>Order Entry in NetSuite</h3>
        <p className="text-xs text-gray-500 leading-relaxed">Order entry in NetSuite with specific location synced automatically to ShipStation</p>
      </div>
      <div className="rounded-2xl p-6 reveal reveal-delay-1" style={{background:'#FFF7ED',border:'1px solid rgba(251,146,60,.15)'}}>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{background:'linear-gradient(135deg,#FB923C,#F97316)',boxShadow:'0 4px 14px rgba(251,146,60,.3)'}}>
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/></svg>
        </div>
        <h3 className="font-bold text-sm mb-2" style={{color:'#0B2554'}}>Sync to ShipStation Customer Center</h3>
        <p className="text-xs text-gray-500 leading-relaxed">Sync to a specific ShipStation Customer Center automatically</p>
      </div>
      <div className="rounded-2xl p-6 reveal reveal-delay-2" style={{background:'#FFF7ED',border:'1px solid rgba(251,146,60,.15)'}}>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{background:'linear-gradient(135deg,#FB923C,#F97316)',boxShadow:'0 4px 14px rgba(251,146,60,.3)'}}>
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
        </div>
        <h3 className="font-bold text-sm mb-2" style={{color:'#0B2554'}}>Order Fulfillment</h3>
        <p className="text-xs text-gray-500 leading-relaxed">ShipStation fulfills the order items and Item Fulfillment record gets created in NetSuite with tracking info</p>
      </div>
      <div className="rounded-2xl p-6 reveal" style={{background:'#FFF7ED',border:'1px solid rgba(251,146,60,.15)'}}>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{background:'linear-gradient(135deg,#FB923C,#F97316)',boxShadow:'0 4px 14px rgba(251,146,60,.3)'}}>
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
        </div>
        <h3 className="font-bold text-sm mb-2" style={{color:'#0B2554'}}>System Updates</h3>
        <p className="text-xs text-gray-500 leading-relaxed">Other systems get updated with shipment information automatically</p>
      </div>
      <div className="rounded-2xl p-6 reveal reveal-delay-1" style={{background:'#FFF7ED',border:'1px solid rgba(251,146,60,.15)'}}>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{background:'linear-gradient(135deg,#FB923C,#F97316)',boxShadow:'0 4px 14px rgba(251,146,60,.3)'}}>
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.437L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
        </div>
        <h3 className="font-bold text-sm mb-2" style={{color:'#0B2554'}}>Saved Search Triggers</h3>
        <p className="text-xs text-gray-500 leading-relaxed">Trigger syncs based on Saved Searches or User Events</p>
      </div>
      <div className="rounded-2xl p-6 reveal reveal-delay-2" style={{background:'#FFF7ED',border:'1px solid rgba(251,146,60,.15)'}}>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{background:'linear-gradient(135deg,#FB923C,#F97316)',boxShadow:'0 4px 14px rgba(251,146,60,.3)'}}>
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
        </div>
        <h3 className="font-bold text-sm mb-2" style={{color:'#0B2554'}}>Complete Data Picture</h3>
        <p className="text-xs text-gray-500 leading-relaxed">View a complete picture of all data in one place, NetSuite</p>
      </div>
    </div>
  </div>
</section>

{/* CTA */}
<section className="py-24" style={{background:'linear-gradient(135deg,#0B2554 0%,#7C2D12 50%,#0B2554 100%)'}}>
  <div className="max-w-3xl mx-auto text-center px-6">
    <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'rgba(251,146,60,.8)'}}>Getting Started</p>
    <h2 className="text-4xl font-bold text-white mb-6" style={{letterSpacing:'-0.025em'}}>Best way to Connect ShipStation 3PL to NetSuite:</h2>
    <p className="text-lg mb-10" style={{color:'rgba(255,255,255,.65)'}}>Setup Automatic Bi-Directional Data Sync in 4 Steps</p>
    <div className="grid md:grid-cols-2 gap-4 text-left mb-10">
      <div className="rounded-2xl p-6" style={{background:'rgba(255,255,255,.06)',border:'1px solid rgba(255,255,255,.1)'}}>
        <div className="text-xs font-bold mb-2" style={{color:'rgba(251,146,60,.9)'}}>STEP 1</div>
        <div className="text-white font-semibold text-sm">Request a Demo from In8Sync</div>
      </div>
      <div className="rounded-2xl p-6" style={{background:'rgba(255,255,255,.06)',border:'1px solid rgba(255,255,255,.1)'}}>
        <div className="text-xs font-bold mb-2" style={{color:'rgba(251,146,60,.9)'}}>STEP 2</div>
        <div className="text-white font-semibold text-sm">Review your Unique Business Data Flows Requirements</div>
      </div>
      <div className="rounded-2xl p-6" style={{background:'rgba(255,255,255,.06)',border:'1px solid rgba(255,255,255,.1)'}}>
        <div className="text-xs font-bold mb-2" style={{color:'rgba(251,146,60,.9)'}}>STEP 3</div>
        <div className="text-white font-semibold text-sm">Agree upon Value-Added Integrations</div>
      </div>
      <div className="rounded-2xl p-6" style={{background:'rgba(255,255,255,.06)',border:'1px solid rgba(255,255,255,.1)'}}>
        <div className="text-xs font-bold mb-2" style={{color:'rgba(251,146,60,.9)'}}>STEP 4</div>
        <div className="text-white font-semibold text-sm">Implement In8Sync DirectConnect Solution</div>
      </div>
    </div>
    <a href="/contact" className="btn-ss inline-flex items-center gap-2 text-white font-bold px-10 py-4 rounded-2xl text-base">Schedule A Demo <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
  </div>
</section>
      <Footer />
      <RevealObserver />
    </>
  )
}
