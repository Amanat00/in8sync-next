'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'

export default function NetSuiteIntegrationsPage() {
  return (
    <>
      <Navbar />
      
{/* HERO */}
<section className="hero-bg min-h-[calc(100vh-30px)] flex items-center pt-[65px] pb-[50px] relative overflow-hidden" style={{isolation:'isolate'}}>
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-20 right-0 w-[700px] h-[700px] rounded-full animate-float" style={{background:'radial-gradient(circle,rgba(27,111,208,.18) 0%,transparent 70%)'}}></div>
    <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full animate-float2" style={{background:'radial-gradient(circle,rgba(91,184,212,.1) 0%,transparent 70%)'}}></div>
  </div>
  <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
    {/* Breadcrumb */}
    <div className="flex items-center gap-2 pt-6 mb-8 text-xs" style={{color:'rgba(255,255,255,.4)',animation:'fade-in .8s ease both'}}>
      <a href="/" className="hover:text-white transition-colors">Home</a>
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
      <span style={{color:'#5BB8D4'}}>DirectConnect Platform</span>
    </div>
    <div className="grid md:grid-cols-2 gap-16 items-center">
      {/* Left */}
      <div style={{animation:'slide-up .9s cubic-bezier(.23,1,.32,1) both'}}>
        <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full" style={{background:'rgba(91,184,212,.1)',border:'1px solid rgba(91,184,212,.2)'}}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{background:'#5BB8D4'}}></span>
          <span className="text-xs font-bold tracking-widest uppercase" style={{color:'#5BB8D4'}}>In8Sync DirectConnect Platform</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{letterSpacing:'-0.03em',lineHeight:'1.08'}}>Directly Connecting<br /><span className="gradient-text">NetSuite</span> &amp; Your<br />Applications</h1>
        <p className="text-lg mb-8" style={{color:'rgba(255,255,255,.65)',lineHeight:'1.7'}}>Advanced bi-directional data synchronization — natively built inside NetSuite. No external platforms, no middleware, no extra licensing fees.</p>
        {/* Stats row */}
        <div className="flex flex-wrap gap-6 mb-10">
          <div>
            <div className="text-3xl font-bold text-white" style={{letterSpacing:'-0.02em'}}>40+</div>
            <div className="text-xs mt-1" style={{color:'rgba(255,255,255,.4)'}}>Pre-built Integrations</div>
          </div>
          <div className="w-px" style={{background:'rgba(255,255,255,.1)'}}></div>
          <div>
            <div className="text-3xl font-bold text-white" style={{letterSpacing:'-0.02em'}}>0</div>
            <div className="text-xs mt-1" style={{color:'rgba(255,255,255,.4)'}}>Middleware Required</div>
          </div>
          <div className="w-px" style={{background:'rgba(255,255,255,.1)'}}></div>
          <div>
            <div className="text-3xl font-bold text-white" style={{letterSpacing:'-0.02em'}}>4</div>
            <div className="text-xs mt-1" style={{color:'rgba(255,255,255,.4)'}}>Integration Categories</div>
          </div>
          <div className="w-px" style={{background:'rgba(255,255,255,.1)'}}></div>
          <div>
            <div className="text-3xl font-bold text-white" style={{letterSpacing:'-0.02em'}}>24/7</div>
            <div className="text-xs mt-1" style={{color:'rgba(255,255,255,.4)'}}>Auto Sync</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="/contact" className="btn-primary text-white font-semibold px-7 py-3.5 rounded-xl text-sm">Request A Demo</a>
          <a href="/integrations" className="btn-outline text-white font-semibold px-6 py-3.5 rounded-xl text-sm">See All Bundles</a>
        </div>
      </div>
      {/* Right: Real Image */}
      <div className="relative flex justify-center items-center" style={{animation:'fade-in 1.2s ease both .4s',opacity:'0'}}>
        <div className="relative w-full max-w-lg">
          <div className="absolute inset-0 rounded-3xl blur-3xl" style={{background:'linear-gradient(135deg,rgba(27,111,208,.3),rgba(91,184,212,.2))'}}></div>
          <div className="relative rounded-3xl overflow-hidden border p-3" style={{background:'rgba(255,255,255,.04)',borderColor:'rgba(91,184,212,.2)',backdropFilter:'blur(10px)',boxShadow:'0 32px 80px rgba(11,37,84,.5)'}}>
            <img src="/brand_assests/netsuite-integrations.png" alt="NetSuite Integrations" className="w-full h-auto object-cover rounded-2xl" />
          </div>
          {/* Floating badges */}
          <div className="absolute -top-4 -left-6 bg-white rounded-2xl px-4 py-3 shadow-2xl card-lift">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#0B2554,#1B6FD0)'}}><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg></div>
              <div><div className="text-xs font-bold" style={{color:'#0B2554'}}>No Middleware</div><div className="text-[10px] text-gray-400">100% Native</div></div>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-6 bg-white rounded-2xl px-4 py-3 shadow-2xl card-lift">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#059669,#10B981)'}}><svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg></div>
              <div><div className="text-xs font-bold" style={{color:'#0B2554'}}>Live Sync</div><div className="text-[10px] text-gray-400">Real-time</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* NO MIDDLEWARE = DIRECT COMMUNICATION */}
<section className="py-24" style={{background:'#F5F7FC'}}>
  <div className="max-w-6xl mx-auto px-6 md:px-12">
    <div className="text-center mb-16 reveal">
      <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#1B6FD0'}}>The DirectConnect Advantage</p>
      <h2 className="text-4xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>No Middleware = Direct Communication</h2>
      <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">Traditional integration platforms require an external middleware layer — adding cost, complexity, and failure points. In8Sync eliminates all of that.</p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      {/* Save TIME */}
      <div className="diff-card reveal text-center">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{background:'linear-gradient(135deg,#0B2554,#1B6FD0)',boxShadow:'0 8px 24px rgba(27,111,208,.3)'}}>
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </div>
        <h3 className="text-xl font-bold mb-3" style={{color:'#0B2554'}}>Save <span style={{color:'#1B6FD0'}}>TIME</span></h3>
        <p className="text-sm text-gray-500 leading-relaxed">Automatic bi-directional data synchronization eliminates manual data entry. Orders, inventory, customers, and financials sync in real-time between NetSuite and your connected applications.</p>
      </div>
      {/* Save MONEY */}
      <div className="diff-card reveal reveal-delay-1 text-center">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{background:'linear-gradient(135deg,#059669,#10B981)',boxShadow:'0 8px 24px rgba(5,150,105,.25)'}}>
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </div>
        <h3 className="text-xl font-bold mb-3" style={{color:'#0B2554'}}>Save <span style={{color:'#059669'}}>MONEY</span></h3>
        <p className="text-sm text-gray-500 leading-relaxed">No expensive middleware required. Native NetSuite bundles dramatically reduce total cost of ownership. In8Sync's agile approach means more resources invested in new features and improvements.</p>
      </div>
      {/* Save EXPERTISE */}
      <div className="diff-card reveal reveal-delay-2 text-center">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{background:'linear-gradient(135deg,#D97706,#F59E0B)',boxShadow:'0 8px 24px rgba(217,119,6,.25)'}}>
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
        </div>
        <h3 className="text-xl font-bold mb-3" style={{color:'#0B2554'}}>Save <span style={{color:'#D97706'}}>EXPERTISE</span></h3>
        <p className="text-sm text-gray-500 leading-relaxed">Employees manage integrations within the familiar NetSuite environment they already know. No need to learn or manage a separate external integration platform or hire specialized middleware developers.</p>
      </div>
    </div>
  </div>
</section>

{/* 5 KEY DIFFERENTIATORS */}
<section className="py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6 md:px-12">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div className="reveal">
        <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#1B6FD0'}}>Why Choose DirectConnect</p>
        <h2 className="text-4xl font-bold mb-5" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>5 Key Differentiators</h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-8">What makes In8Sync DirectConnect fundamentally different from other integration solutions on the market.</p>
        <a href="/contact" className="btn-primary inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl text-sm">Request A Demo <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
      </div>
      <div className="space-y-4">
        <div className="flex items-start gap-4 p-5 rounded-2xl reveal" style={{background:'#F5F7FC',border:'1px solid #EEF2F8'}}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style={{background:'linear-gradient(135deg,#0B2554,#1B6FD0)'}}>1</div>
          <div>
            <h4 className="font-bold text-sm mb-1" style={{color:'#0B2554'}}>Fully Integrated Within NetSuite</h4>
            <p className="text-xs text-gray-500 leading-relaxed">Natively built into and fully hosted in NetSuite — delivers superior performance while reducing management complexity.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-5 rounded-2xl reveal reveal-delay-1" style={{background:'#F5F7FC',border:'1px solid #EEF2F8'}}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style={{background:'linear-gradient(135deg,#0B2554,#1B6FD0)'}}>2</div>
          <div>
            <h4 className="font-bold text-sm mb-1" style={{color:'#0B2554'}}>Available for Any API-Enabled System</h4>
            <p className="text-xs text-gray-500 leading-relaxed">Connect with any external system that offers API access — extending integration possibilities far beyond pre-built bundles.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-5 rounded-2xl reveal reveal-delay-2" style={{background:'#F5F7FC',border:'1px solid #EEF2F8'}}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style={{background:'linear-gradient(135deg,#0B2554,#1B6FD0)'}}>3</div>
          <div>
            <h4 className="font-bold text-sm mb-1" style={{color:'#0B2554'}}>Advanced Workflows Built In</h4>
            <p className="text-xs text-gray-500 leading-relaxed">Sophisticated automation workflows embedded directly within integration flows — no separate workflow tool needed.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-5 rounded-2xl reveal reveal-delay-3" style={{background:'#F5F7FC',border:'1px solid #EEF2F8'}}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style={{background:'linear-gradient(135deg,#0B2554,#1B6FD0)'}}>4</div>
          <div>
            <h4 className="font-bold text-sm mb-1" style={{color:'#0B2554'}}>Purpose-Built for NetSuite Records</h4>
            <p className="text-xs text-gray-500 leading-relaxed">Designed specifically for all NetSuite record types with full line item support — not a generic integration tool retrofitted for NetSuite.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-5 rounded-2xl reveal" style={{background:'#EFF6FF',border:'1px solid rgba(27,111,208,.2)'}}>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-white text-sm font-bold" style={{background:'linear-gradient(135deg,#1B6FD0,#3B8AE0)'}}>5</div>
          <div>
            <h4 className="font-bold text-sm mb-1" style={{color:'#0B2554'}}>All Monitoring Within NetSuite</h4>
            <p className="text-xs text-gray-500 leading-relaxed">Full monitoring, management, and visibility occurs directly within NetSuite itself — one system, complete control.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* INTEGRATION CATEGORIES */}
<section className="py-24" style={{background:'#F5F7FC'}}>
  <div className="max-w-6xl mx-auto px-6 md:px-12">
    <div className="text-center mb-14 reveal">
      <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#1B6FD0'}}>Connect Numerous Applications</p>
      <h2 className="text-4xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>All In8Sync DirectConnect Bundles</h2>
      <p className="text-gray-500 text-sm">40+ pre-built integrations across four key categories — all natively inside NetSuite.</p>
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      {/* eCommerce */}
      <div className="cat-card reveal" style={{background:'linear-gradient(135deg,#F0FFF4,#E8F8F0)',border:'1px solid rgba(5,150,105,.15)'}}>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#059669,#10B981)',boxShadow:'0 4px 14px rgba(5,150,105,.3)'}}>
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
          </div>
          <div>
            <h3 className="font-bold text-sm" style={{color:'#0B2554'}}>eCommerce</h3>
            <p className="text-xs text-gray-500">3 integrations</p>
          </div>
        </div>
        <div className="space-y-2 mb-5">
          <a href="/shopify" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/70 hover:bg-white transition-colors group">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center p-1" style={{background:'#F0F9FF'}}><img src="/logos/shopify_logo.png" alt="Shopify" className="w-full h-full object-contain"/></div>
            <span className="text-sm font-medium" style={{color:'#0B2554'}}>Shopify DirectConnect</span>
            <svg className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{color:'#1B6FD0'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </a>
          <a href="/woocommerce" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/70 hover:bg-white transition-colors group">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center p-1" style={{background:'#F5F0FF'}}><img src="/logos/woocommerce_logo.svg" alt="WooCommerce" className="w-full h-full object-contain"/></div>
            <span className="text-sm font-medium" style={{color:'#0B2554'}}>WooCommerce DirectConnect</span>
            <svg className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{color:'#1B6FD0'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </a>
          <a href="/squarespace" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/70 hover:bg-white transition-colors group">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center p-1" style={{background:'#F0FFF4'}}><img src="/logos/squarespace_logo.png" alt="Squarespace" className="w-full h-full object-contain"/></div>
            <span className="text-sm font-medium" style={{color:'#0B2554'}}>Squarespace DirectConnect</span>
            <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full" style={{background:'rgba(245,175,2,.15)',color:'#D97706'}}>Coming Soon</span>
          </a>
        </div>
      </div>
      {/* Marketplaces */}
      <div className="cat-card reveal reveal-delay-1" style={{background:'linear-gradient(135deg,#FFFBEB,#FFF5D6)',border:'1px solid rgba(245,175,2,.2)'}}>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#F59E0B,#FBBF24)',boxShadow:'0 4px 14px rgba(245,158,11,.3)'}}>
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
          </div>
          <div>
            <h3 className="font-bold text-sm" style={{color:'#0B2554'}}>Marketplaces</h3>
            <p className="text-xs text-gray-500">3 integrations</p>
          </div>
        </div>
        <div className="space-y-2 mb-5">
          <a href="/amazon-seller-central" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/70 hover:bg-white transition-colors group">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center p-1" style={{background:'#FFFBEB'}}><img src="/logos/Amazon-Seller-Central_logo.png" alt="Amazon Seller Central" className="w-full h-full object-contain"/></div>
            <span className="text-sm font-medium" style={{color:'#0B2554'}}>Amazon Seller Central</span>
            <svg className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{color:'#1B6FD0'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </a>
          <a href="/amazon-vendor-central" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/70 hover:bg-white transition-colors group">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center p-1" style={{background:'#FFF7ED'}}><img src="/logos/Amazon-Vendor-Central_logo.png" alt="Amazon Vendor Central" className="w-full h-full object-contain"/></div>
            <span className="text-sm font-medium" style={{color:'#0B2554'}}>Amazon Vendor Central</span>
            <svg className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{color:'#1B6FD0'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </a>
          <a href="/ebay" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/70 hover:bg-white transition-colors group">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center p-1" style={{background:'#EFF6FF'}}><img src="/logos/eBay_logo.png" alt="eBay" className="w-full h-full object-contain"/></div>
            <span className="text-sm font-medium" style={{color:'#0B2554'}}>eBay DirectConnect</span>
            <svg className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{color:'#1B6FD0'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
      {/* CRM */}
      <div className="cat-card reveal" style={{background:'linear-gradient(135deg,#EFF6FF,#E4EFFE)',border:'1px solid rgba(27,111,208,.15)'}}>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#1B6FD0,#3B8AE0)',boxShadow:'0 4px 14px rgba(27,111,208,.3)'}}>
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          </div>
          <div>
            <h3 className="font-bold text-sm" style={{color:'#0B2554'}}>CRM</h3>
            <p className="text-xs text-gray-500">3 integrations</p>
          </div>
        </div>
        <div className="space-y-2 mb-5">
          <a href="/salesforce" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/70 hover:bg-white transition-colors group">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center p-1" style={{background:'#EFF6FF'}}><img src="/logos/Salesforce_logo.png" alt="Salesforce" className="w-full h-full object-contain"/></div>
            <span className="text-sm font-medium" style={{color:'#0B2554'}}>Salesforce DirectConnect</span>
            <svg className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{color:'#1B6FD0'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </a>
          <a href="/zapier" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/70 hover:bg-white transition-colors group">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center p-1" style={{background:'#FFF5F5'}}><img src="/logos/zapier_logo.svg" alt="Zapier" className="w-full h-full object-contain"/></div>
            <span className="text-sm font-medium" style={{color:'#0B2554'}}>Zapier DirectConnect</span>
            <svg className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{color:'#1B6FD0'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </a>
          <a href="/zendesk" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/70 hover:bg-white transition-colors group">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center p-1" style={{background:'#F0FDF4'}}><img src="/logos/zendesk_logo.svg" alt="Zendesk" className="w-full h-full object-contain"/></div>
            <span className="text-sm font-medium" style={{color:'#0B2554'}}>Zendesk DirectConnect</span>
            <svg className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{color:'#1B6FD0'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
      {/* 3PL */}
      <div className="cat-card reveal reveal-delay-1" style={{background:'linear-gradient(135deg,#F5F3FF,#EDE9FE)',border:'1px solid rgba(109,40,217,.12)'}}>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#6D28D9,#8B5CF6)',boxShadow:'0 4px 14px rgba(109,40,217,.3)'}}>
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/></svg>
          </div>
          <div>
            <h3 className="font-bold text-sm" style={{color:'#0B2554'}}>3PL Fulfillment</h3>
            <p className="text-xs text-gray-500">7 integrations</p>
          </div>
        </div>
        <div className="space-y-2 mb-5">
          <a href="/extensiv" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/70 hover:bg-white transition-colors group">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center p-1" style={{background:'#F5F3FF'}}><img src="/logos/Extensiv_logo.png" alt="Extensiv" className="w-full h-full object-contain"/></div>
            <span className="text-sm font-medium" style={{color:'#0B2554'}}>Extensiv DirectConnect</span>
            <svg className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{color:'#1B6FD0'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </a>
          <a href="/capacity-3pl" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/70 hover:bg-white transition-colors group">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center p-1" style={{background:'#F0FFF4'}}><img src="/logos/Capacity-3PL_logo.png" alt="Capacity 3PL" className="w-full h-full object-contain"/></div>
            <span className="text-sm font-medium" style={{color:'#0B2554'}}>Capacity 3PL DirectConnect</span>
            <svg className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{color:'#1B6FD0'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </a>
          <a href="/shipstation" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/70 hover:bg-white transition-colors group">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center p-1" style={{background:'#FFFBEB'}}><img src="/logos/shipstation_logo.png" alt="ShipStation" className="w-full h-full object-contain"/></div>
            <span className="text-sm font-medium" style={{color:'#0B2554'}}>ShipStation DirectConnect</span>
            <svg className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{color:'#1B6FD0'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </a>
          <a href="/radial" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/70 hover:bg-white transition-colors group">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center p-1" style={{background:'#FFF5F5'}}><img src="/logos/Radial_logo.png" alt="Radial" className="w-full h-full object-contain"/></div>
            <span className="text-sm font-medium" style={{color:'#0B2554'}}>Radial DirectConnect</span>
            <svg className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{color:'#1B6FD0'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </a>
          <a href="/idrive-fulfillment" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/70 hover:bg-white transition-colors group">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center p-1" style={{background:'#EFF6FF'}}><img src="/logos/idrive_logo.png" alt="iDrive" className="w-full h-full object-contain"/></div>
            <span className="text-sm font-medium" style={{color:'#0B2554'}}>iDrive Fulfillment DirectConnect</span>
            <svg className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{color:'#1B6FD0'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </a>
          <a href="/ceva-logistics" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/70 hover:bg-white transition-colors group">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center p-1" style={{background:'#FFF5F5'}}><img src="/logos/ceva_logo.png" alt="CEVA Logistics" className="w-full h-full object-contain"/></div>
            <span className="text-sm font-medium" style={{color:'#0B2554'}}>CEVA Logistics DirectConnect</span>
            <svg className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{color:'#1B6FD0'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </a>
          <a href="/veracore" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/70 hover:bg-white transition-colors group">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center p-1" style={{background:'#EFF6FF'}}><img src="/logos/veracore_logo.png" alt="Veracore" className="w-full h-full object-contain"/></div>
            <span className="text-sm font-medium" style={{color:'#0B2554'}}>Veracore DirectConnect</span>
            <svg className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{color:'#1B6FD0'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </div>
    <div className="text-center mt-10 reveal">
      <a href="/integrations" className="btn-primary inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl text-sm">View All Integrations <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
    </div>
  </div>
</section>

{/* OUT OF THE BOX CAPABILITIES */}
<section className="py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6 md:px-12">
    <div className="grid md:grid-cols-2 gap-16 items-start">
      <div>
        <div className="reveal">
          <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#1B6FD0'}}>Included From Day One</p>
          <h2 className="text-4xl font-bold mb-5" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>Out of the Box<br />Capabilities</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">Every DirectConnect bundle includes a complete set of tools to manage, monitor, and configure your integrations — all from inside NetSuite.</p>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3 reveal">
            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{background:'rgba(27,111,208,.12)'}}><svg className="w-3.5 h-3.5" style={{color:'#1B6FD0'}} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg></div>
            <span className="text-sm text-gray-700">Integration Management Dashboard</span>
          </div>
          <div className="flex items-center gap-3 reveal reveal-delay-1">
            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{background:'rgba(27,111,208,.12)'}}><svg className="w-3.5 h-3.5" style={{color:'#1B6FD0'}} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg></div>
            <span className="text-sm text-gray-700">Real-time visibility into integration statuses and activity logs</span>
          </div>
          <div className="flex items-center gap-3 reveal reveal-delay-2">
            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{background:'rgba(27,111,208,.12)'}}><svg className="w-3.5 h-3.5" style={{color:'#1B6FD0'}} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg></div>
            <span className="text-sm text-gray-700">Centralized integration settings configuration</span>
          </div>
          <div className="flex items-center gap-3 reveal">
            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{background:'rgba(27,111,208,.12)'}}><svg className="w-3.5 h-3.5" style={{color:'#1B6FD0'}} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg></div>
            <span className="text-sm text-gray-700">Scheduled and on-demand integration flow initiation</span>
          </div>
          <div className="flex items-center gap-3 reveal reveal-delay-1">
            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{background:'rgba(27,111,208,.12)'}}><svg className="w-3.5 h-3.5" style={{color:'#1B6FD0'}} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg></div>
            <span className="text-sm text-gray-700">New integration flow setup capability</span>
          </div>
          <div className="flex items-center gap-3 reveal reveal-delay-2">
            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{background:'rgba(27,111,208,.12)'}}><svg className="w-3.5 h-3.5" style={{color:'#1B6FD0'}} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg></div>
            <span className="text-sm text-gray-700">Dozens of pre-existing integration templates</span>
          </div>
          <div className="flex items-center gap-3 reveal">
            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{background:'rgba(27,111,208,.12)'}}><svg className="w-3.5 h-3.5" style={{color:'#1B6FD0'}} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg></div>
            <span className="text-sm text-gray-700">OAuth, SFTP, EDI, API, CSV &amp; XML support</span>
          </div>
          <div className="flex items-center gap-3 reveal reveal-delay-1">
            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{background:'rgba(27,111,208,.12)'}}><svg className="w-3.5 h-3.5" style={{color:'#1B6FD0'}} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg></div>
            <span className="text-sm text-gray-700">Support for any NetSuite record type with line item support</span>
          </div>
        </div>
      </div>
      {/* Advanced Configurations */}
      <div className="space-y-6">
        <div className="reveal">
          <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#1B6FD0'}}>Beyond the Basics</p>
          <h3 className="text-2xl font-bold mb-5" style={{color:'#0B2554',letterSpacing:'-0.02em'}}>Advanced Configurations</h3>
        </div>
        <div className="rounded-2xl p-6 reveal" style={{background:'#F5F7FC',border:'1px solid #EEF2F8'}}>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:'linear-gradient(135deg,#0B2554,#1B6FD0)'}}>
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-1" style={{color:'#0B2554'}}>Managed Setup Services</h4>
              <p className="text-xs text-gray-500 leading-relaxed">Expert-led implementation with complete setup documentation enabling your team to manage independently going forward.</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl p-6 reveal reveal-delay-1" style={{background:'#F5F7FC',border:'1px solid #EEF2F8'}}>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:'linear-gradient(135deg,#0B2554,#1B6FD0)'}}>
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-1" style={{color:'#0B2554'}}>Custom Third-Party Integration Flows</h4>
              <p className="text-xs text-gray-500 leading-relaxed">Connect to any API-enabled system — not just pre-built bundles. Custom integration flows built to your exact specifications.</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl p-6 reveal reveal-delay-2" style={{background:'#F5F7FC',border:'1px solid #EEF2F8'}}>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:'linear-gradient(135deg,#0B2554,#1B6FD0)'}}>
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-1" style={{color:'#0B2554'}}>SFTP &amp; EDI Add-On Bundles</h4>
              <p className="text-xs text-gray-500 leading-relaxed">Additional bundles for SFTP file transfer operations and EDI support for traditional data exchange formats with trading partners.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* 4-STEP IMPLEMENTATION */}
<section className="py-24" style={{background:'#F5F7FC'}}>
  <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
    <div className="reveal mb-14">
      <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#1B6FD0'}}>Getting Started</p>
      <h2 className="text-4xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>Best Way to Integrate NetSuite Data</h2>
      <p className="text-gray-500 text-sm">Setup Automatic Bi-Directional Data Sync in 4 Simple Steps</p>
    </div>
    <div className="grid md:grid-cols-4 gap-4">
      <div className="reveal flex flex-col items-center text-center">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 relative" style={{background:'linear-gradient(135deg,#0B2554,#1B6FD0)',boxShadow:'0 8px 24px rgba(27,111,208,.35)'}}>
          <span className="text-white font-bold text-lg">1</span>
        </div>
        <h4 className="font-bold text-sm mb-2" style={{color:'#0B2554'}}>Request a Demo</h4>
        <p className="text-xs text-gray-500 leading-relaxed">Schedule a demo with an In8Sync integration expert</p>
      </div>
      <div className="reveal reveal-delay-1 flex flex-col items-center text-center">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{background:'linear-gradient(135deg,#0B2554,#1B6FD0)',boxShadow:'0 8px 24px rgba(27,111,208,.35)'}}>
          <span className="text-white font-bold text-lg">2</span>
        </div>
        <h4 className="font-bold text-sm mb-2" style={{color:'#0B2554'}}>Review Requirements</h4>
        <p className="text-xs text-gray-500 leading-relaxed">Review your unique business data flow requirements</p>
      </div>
      <div className="reveal reveal-delay-2 flex flex-col items-center text-center">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{background:'linear-gradient(135deg,#0B2554,#1B6FD0)',boxShadow:'0 8px 24px rgba(27,111,208,.35)'}}>
          <span className="text-white font-bold text-lg">3</span>
        </div>
        <h4 className="font-bold text-sm mb-2" style={{color:'#0B2554'}}>Agree on Integrations</h4>
        <p className="text-xs text-gray-500 leading-relaxed">Agree upon value-added integrations for your business</p>
      </div>
      <div className="reveal reveal-delay-3 flex flex-col items-center text-center">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{background:'linear-gradient(135deg,#0B2554,#1B6FD0)',boxShadow:'0 8px 24px rgba(27,111,208,.35)'}}>
          <span className="text-white font-bold text-lg">4</span>
        </div>
        <h4 className="font-bold text-sm mb-2" style={{color:'#0B2554'}}>Implement Solution</h4>
        <p className="text-xs text-gray-500 leading-relaxed">Implement the In8Sync DirectConnect solution</p>
      </div>
    </div>
    <div className="mt-12 reveal">
      <a href="/contact" className="btn-primary inline-flex items-center gap-2 text-white font-semibold px-10 py-4 rounded-2xl text-base">Schedule A Demo <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
    </div>
  </div>
</section>

{/* CTA */}
<section className="py-24" style={{background:'linear-gradient(135deg,#0B2554 0%,#0d1e42 50%,#0B2554 100%)'}}>
  <div className="max-w-4xl mx-auto px-6 md:px-12 text-center reveal">
    <p className="text-[11px] font-semibold tracking-widest uppercase mb-4" style={{color:'rgba(91,184,212,.8)'}}>Ready to Start?</p>
    <h2 className="text-4xl font-bold text-white mb-5" style={{letterSpacing:'-0.025em'}}>Unleash the Full Potential<br />of Your NetSuite Business</h2>
    <p className="text-lg mb-10" style={{color:'rgba(255,255,255,.6)',lineHeight:'1.7'}}>Join businesses that have eliminated middleware costs, reduced manual data entry, and achieved real-time visibility across all their systems.</p>
    <div className="flex flex-wrap justify-center gap-4">
      <a href="/contact" className="btn-primary inline-flex items-center gap-2 text-white font-semibold px-10 py-4 rounded-2xl text-base">Request A Demo <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
      <a href="/integrations" className="btn-outline inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-2xl text-base">View All Bundles</a>
    </div>
  </div>
</section>
      <Footer />
      <RevealObserver />
    </>
  )
}
