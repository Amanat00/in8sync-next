'use client'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero-bg min-h-screen flex items-center pt-20 relative overflow-hidden" style={{isolation:'isolate'}}>
        {/* Decorative orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 right-0 w-[600px] h-[600px] rounded-full animate-float" style={{background:'radial-gradient(circle,rgba(27,111,208,.2) 0%,transparent 70%)'}}></div>
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full animate-float2" style={{background:'radial-gradient(circle,rgba(91,184,212,.12) 0%,transparent 70%)'}}></div>
          {/* Concentric rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-white/[0.03] animate-float2"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full border border-white/[0.04] animate-float"></div>
          {/* Pulse dots */}
          <div className="absolute top-1/4 right-1/3">
            <div className="w-3 h-3 rounded-full" style={{background:'#5BB8D4'}}></div>
            <div className="absolute inset-0 rounded-full" style={{background:'#5BB8D4',animation:'pulse-ring 2.5s ease-out infinite',opacity:.5}}></div>
          </div>
          <div className="absolute bottom-1/3 left-1/4">
            <div className="w-2 h-2 rounded-full" style={{background:'#3B8AE0'}}></div>
            <div className="absolute inset-0 rounded-full" style={{background:'#3B8AE0',animation:'pulse-ring 3s ease-out infinite 1.2s',opacity:.5}}></div>
          </div>
          <div className="absolute top-2/3 right-1/4">
            <div className="w-2.5 h-2.5 rounded-full" style={{background:'#5BB8D4'}}></div>
            <div className="absolute inset-0 rounded-full" style={{background:'#5BB8D4',animation:'pulse-ring 3.5s ease-out infinite .6s',opacity:.4}}></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <div style={{animation:'slide-up .9s cubic-bezier(.23,1,.32,1) both'}}>
              <div className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full border" style={{background:'rgba(91,184,212,.08)',borderColor:'rgba(91,184,212,.2)'}}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{background:'#5BB8D4'}}></span>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{color:'#5BB8D4'}}>Advanced NetSuite Automation Experts</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-[68px] font-light text-white leading-none mb-6" style={{letterSpacing:'-0.03em',lineHeight:1.05}}>
                Advanced<br />
                <span className="font-bold gradient-text">NetSuite</span><br />
                Integration &<br />
                <span className="font-semibold text-white">Automation</span>
              </h1>
              <p className="text-lg leading-relaxed mb-10 max-w-xl" style={{color:'rgba(255,255,255,.75)',lineHeight:1.75}}>
                In8Sync isn't just a NetSuite Integration Partner — we are Advanced NetSuite Automation Experts. Headquartered in Grand Junction, Colorado, our global team has been providing NetSuite solutions for over a decade.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary text-white font-semibold px-7 py-3.5 rounded-xl text-sm">Contact Us</Link>
                <Link href="/contact" className="btn-outline text-white font-semibold px-7 py-3.5 rounded-xl text-sm">Request A Demo</Link>
              </div>
              {/* Stats */}
              <div className="flex gap-8 mt-14 pt-8 border-t" style={{borderColor:'rgba(255,255,255,.08)'}}>
                <div>
                  <div className="text-3xl font-bold text-white" style={{letterSpacing:'-0.03em'}}>10+</div>
                  <div className="text-xs mt-1 font-medium" style={{color:'rgba(255,255,255,.4)'}}>Years Experience</div>
                </div>
                <div className="w-px" style={{background:'rgba(255,255,255,.08)'}}></div>
                <div>
                  <div className="text-3xl font-bold text-white" style={{letterSpacing:'-0.03em'}}>9+</div>
                  <div className="text-xs mt-1 font-medium" style={{color:'rgba(255,255,255,.4)'}}>Integration Bundles</div>
                </div>
                <div className="w-px" style={{background:'rgba(255,255,255,.08)'}}></div>
                <div>
                  <div className="text-3xl font-bold text-white" style={{letterSpacing:'-0.03em'}}>100%</div>
                  <div className="text-xs mt-1 font-medium" style={{color:'rgba(255,255,255,.4)'}}>Native NetSuite</div>
                </div>
              </div>
            </div>

            {/* Right: Hero illustration */}
            <div className="relative flex items-center justify-center" style={{animation:'fade-in 1.2s ease both .4s',opacity:0}}>
              <div className="relative w-full max-w-lg">
                <div className="absolute inset-0 rounded-3xl blur-3xl" style={{background:'linear-gradient(135deg,rgba(27,111,208,.2),rgba(91,184,212,.1))'}}></div>
                <img src="/brand_assests/Group 328.svg" alt="NetSuite Integration Platform" className="relative w-full h-auto" style={{filter:'drop-shadow(0 24px 60px rgba(27,111,208,.3))'}} />
                {/* Floating card: No iPaaS */}
                <div className="absolute -top-5 -left-8 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-gray-100/60 card-lift" style={{minWidth:'160px'}}>
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#0B2554,#1B6FD0)'}}>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    </div>
                    <div>
                      <div className="text-xs font-bold" style={{color:'#0B2554'}}>No iPaaS</div>
                      <div className="text-[10px] text-gray-400">100% Native</div>
                    </div>
                  </div>
                </div>
                {/* Floating card: Live sync */}
                <div className="absolute -bottom-5 -right-8 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-gray-100/60 card-lift" style={{minWidth:'160px'}}>
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#0B6E6E,#5BB8D4)'}}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                    </div>
                    <div>
                      <div className="text-xs font-bold" style={{color:'#0B2554'}}>Live Sync</div>
                      <div className="text-[10px] text-gray-400">Real-time Data</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{color:'rgba(255,255,255,.3)'}}>
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b" style={{background:'linear-gradient(to bottom,rgba(255,255,255,.3),transparent)'}}></div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <p className="text-[16px] font-semibold tracking-widest uppercase text-gray-400 mb-10">Trusted by Growing NetSuite Businesses</p>
          <div className="flex flex-wrap justify-center items-center gap-20">
            <img src="/brand_assests/image 32.svg" alt="Shredly" className="reveal h-20 w-auto object-contain" />
            <img src="/brand_assests/image 33.svg" alt="LeadAbroad" className="reveal reveal-delay-1 h-20 w-auto object-contain" />
            <img src="/brand_assests/Frame 288.svg" alt="Expanscience Laboratoires" className="reveal reveal-delay-2 h-20 w-auto object-contain" />
          </div>
        </div>
      </section>

      {/* IDC & SPHERICAL BRM CARDS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-6">
            {/* IDC Card */}
            <div className="reveal home-card rounded-3xl overflow-hidden" style={{background:'linear-gradient(135deg,#0B2554 0%,#153470 60%,#1B6FD0 100%)',boxShadow:'0 20px 60px rgba(11,37,84,.3)'}}>
              <div className="p-8 md:p-10">
                <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{color:'#5BB8D4'}}>Direct Connect</p>
                <h3 className="text-2xl font-bold text-white mb-6" style={{letterSpacing:'-0.02em'}}>NetSuite Integrations<br />with IDC</h3>
                <ul className="space-y-3 mb-8">
                  {['Real-time bi-directional data sync','API, EDI, and file-based connectivity','Lower cost and reduced system complexity','Template-based, scalable integration'].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{background:'rgba(91,184,212,.25)'}}>
                        <svg className="w-3 h-3" style={{color:'#5BB8D4'}} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                      </div>
                      <span className="text-sm" style={{color:'rgba(255,255,255,.75)'}}>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm mb-8" style={{color:'rgba(255,255,255,.5)'}}>Whether you're integrating Shopify Amazon, a 3PL partner, POS system, or a custom B2B portal, IDC ensures clean data flow, operational visibility, and scalability.</p>
                <Link href="/netsuite-integrations" className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-xl transition-all" style={{background:'rgba(255,255,255,.1)',color:'#fff',border:'1.5px solid rgba(255,255,255,.2)'}}
                  onMouseOver={e => (e.currentTarget as HTMLElement).style.background='rgba(255,255,255,.18)'}
                  onMouseOut={e => (e.currentTarget as HTMLElement).style.background='rgba(255,255,255,.1)'}>
                  Explore In8Sync Direct Connect
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>

            {/* Spherical BRM Card */}
            <div className="reveal reveal-delay-1 home-card rounded-3xl overflow-hidden" style={{background:'linear-gradient(135deg,#1B6FD0 0%,#0d5ab0 60%,#0B2554 100%)',boxShadow:'0 20px 60px rgba(27,111,208,.3)'}}>
              <div className="p-8 md:p-10">
                <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{color:'#93C5FD'}}>Business Relationship Management</p>
                <h3 className="text-2xl font-bold text-white mb-6" style={{letterSpacing:'-0.02em'}}>NetSuite Integrations<br />with Spherical BRM</h3>
                <ul className="space-y-3 mb-8">
                  {['Customers','Vendors','Employees','Partners'].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{background:'rgba(255,255,255,.2)'}}>
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                      </div>
                      <span className="text-sm" style={{color:'rgba(255,255,255,.85)'}}>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm mb-8" style={{color:'rgba(255,255,255,.6)'}}>Fully configurable workflows, unified real-time data, and branded portals make Spherical BRM the smart choice for growing organizations.</p>
                <a href="https://sphericalbrm.com/" className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-xl transition-all" style={{background:'rgba(255,255,255,.15)',color:'#fff',border:'1.5px solid rgba(255,255,255,.25)'}}
                  onMouseOver={e => (e.currentTarget as HTMLElement).style.background='rgba(255,255,255,.25)'}
                  onMouseOut={e => (e.currentTarget as HTMLElement).style.background='rgba(255,255,255,.15)'}>
                  Explore Spherical BRM
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATION BUNDLES */}
      <section id="bundles" className="py-24" style={{background:'#F5F7FC'}}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl mb-16 reveal">
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#1B6FD0'}}>Integration Bundles</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-5" style={{color:'#0B2554',letterSpacing:'-0.025em',lineHeight:1.1}}>Natively Built Into<br />NetSuite</h2>
            <p className="text-gray-500 text-base leading-relaxed">
              Our integration bundles are natively built into and fully hosted within NetSuite — offering superior performance. No slow, expensive iPaaS integrators or third-party platforms. Human data-entry is obsolete.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Salesforce */}
            <div className="integration-card bg-white rounded-2xl p-6 border border-gray-100 cursor-pointer reveal" style={{boxShadow:'0 2px 12px rgba(11,37,84,.06)'}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-white border border-gray-100 p-1">
                <img src="/logos/Salesforce_logo.png" alt="Salesforce" className="w-full h-full object-contain" />
              </div>
              <h3 className="font-semibold text-sm mb-1" style={{color:'#0B2554'}}>Salesforce</h3>
              <p className="text-xs text-gray-400">CRM DirectConnect</p>
            </div>
            {/* Amazon */}
            <div className="integration-card bg-white rounded-2xl p-6 border border-gray-100 cursor-pointer reveal reveal-delay-1" style={{boxShadow:'0 2px 12px rgba(11,37,84,.06)'}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-white border border-gray-100 p-1">
                <img src="/logos/Amazon_logo.png" alt="Amazon" className="w-full h-full object-contain" />
              </div>
              <h3 className="font-semibold text-sm mb-1" style={{color:'#0B2554'}}>Amazon</h3>
              <p className="text-xs text-gray-400">Seller & Vendor Central</p>
            </div>
            {/* Shopify */}
            <div className="integration-card bg-white rounded-2xl p-6 border border-gray-100 cursor-pointer reveal reveal-delay-2" style={{boxShadow:'0 2px 12px rgba(11,37,84,.06)'}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-white border border-gray-100 p-1">
                <img src="/logos/shopify_logo.png" alt="Shopify" className="w-full h-full object-contain" />
              </div>
              <h3 className="font-semibold text-sm mb-1" style={{color:'#0B2554'}}>Shopify</h3>
              <p className="text-xs text-gray-400">eCommerce DirectConnect</p>
            </div>
            {/* WooCommerce */}
            <div className="integration-card bg-white rounded-2xl p-6 border border-gray-100 cursor-pointer reveal reveal-delay-3" style={{boxShadow:'0 2px 12px rgba(11,37,84,.06)'}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-white border border-gray-100 p-1">
                <img src="/logos/woocommerce_logo.svg" alt="WooCommerce" className="w-full h-full object-contain" />
              </div>
              <h3 className="font-semibold text-sm mb-1" style={{color:'#0B2554'}}>WooCommerce</h3>
              <p className="text-xs text-gray-400">WordPress DirectConnect</p>
            </div>
            {/* Zapier */}
            <div className="integration-card bg-white rounded-2xl p-6 border border-gray-100 cursor-pointer reveal" style={{boxShadow:'0 2px 12px rgba(11,37,84,.06)'}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-white border border-gray-100 p-1">
                <img src="/logos/zapier_logo.svg" alt="Zapier" className="w-full h-full object-contain" />
              </div>
              <h3 className="font-semibold text-sm mb-1" style={{color:'#0B2554'}}>Zapier</h3>
              <p className="text-xs text-gray-400">Workflow Automation</p>
            </div>
            {/* eBay */}
            <div className="integration-card bg-white rounded-2xl p-6 border border-gray-100 cursor-pointer reveal reveal-delay-1" style={{boxShadow:'0 2px 12px rgba(11,37,84,.06)'}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-white border border-gray-100 p-1">
                <img src="/logos/eBay_logo.png" alt="eBay" className="w-full h-full object-contain" />
              </div>
              <h3 className="font-semibold text-sm mb-1" style={{color:'#0B2554'}}>eBay</h3>
              <p className="text-xs text-gray-400">Marketplace Connect</p>
            </div>
            {/* 3PL */}
            <div className="integration-card bg-white rounded-2xl p-6 border border-gray-100 cursor-pointer reveal reveal-delay-2" style={{boxShadow:'0 2px 12px rgba(11,37,84,.06)'}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-white border border-gray-100 p-1">
                <img src="/logos/3pl_logo.png" alt="3PL" className="w-full h-full object-contain" />
              </div>
              <h3 className="font-semibold text-sm mb-1" style={{color:'#0B2554'}}>3PL Connect</h3>
              <p className="text-xs text-gray-400">Extensiv · ShipStation · Radial</p>
            </div>
            {/* Zendesk */}
            <div className="integration-card bg-white rounded-2xl p-6 border border-gray-100 cursor-pointer reveal reveal-delay-3" onClick={() => window.location.href='/zendesk'} style={{boxShadow:'0 2px 12px rgba(11,37,84,.06)'}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-white border border-gray-100 p-1">
                <img src="/logos/zendesk_logo.svg" alt="Zendesk" className="w-full h-full object-contain" />
              </div>
              <h3 className="font-semibold text-sm mb-1" style={{color:'#0B2554'}}>Zendesk</h3>
              <p className="text-xs text-gray-400">CRM Support DirectConnect</p>
            </div>
          </div>

          <div className="mt-10 reveal text-center">
            <Link href="/integrations" className="btn-primary inline-flex items-center gap-2 text-white text-sm font-semibold px-7 py-3.5 rounded-xl">
              See All Integrations
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY IN8SYNC */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-4xl mx-auto mb-16 reveal">
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#1B6FD0'}}>Why In8Sync</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-5" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>The Leading NetSuite<br />Solutions Provider</h2>
            <p className="text-gray-500 text-base leading-relaxed">Three core pillars that set us apart from every other NetSuite integration provider on the market.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* No External Platform */}
            <div className="rounded-3xl p-8 card-lift border border-gray-100 reveal" style={{background:'#F5F7FC',boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{background:'linear-gradient(135deg,#0B2554,#1B6FD0)',boxShadow:'0 8px 24px rgba(27,111,208,.3)'}}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <h3 className="text-lg font-bold mb-3" style={{color:'#0B2554'}}>No External Integration Platform</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Unlike other sync solutions which run on external platforms, In8Sync's integration bundles are natively built into and fully hosted in NetSuite, offering superior performance and dramatically reducing costs.</p>
            </div>
            {/* NetSuite Expertise */}
            <div className="rounded-3xl p-8 card-lift border reveal reveal-delay-1" style={{background:'linear-gradient(135deg,#0B2554,#0d1e42)',borderColor:'rgba(91,184,212,.15)',boxShadow:'0 8px 32px rgba(11,37,84,.25)'}}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{background:'rgba(91,184,212,.15)',border:'1px solid rgba(91,184,212,.25)'}}>
                <svg className="w-7 h-7" style={{color:'#5BB8D4'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">Deep NetSuite Expertise</h3>
              <p className="text-sm leading-relaxed" style={{color:'rgba(255,255,255,.55)'}}>Our in-house software architects and developers have unparalleled NetSuite experience. We focus all efforts on integrating and automating systems with NetSuite — making us the most specialized provider.</p>
            </div>
            {/* Managed Support */}
            <div className="rounded-3xl p-8 card-lift border border-gray-100 reveal reveal-delay-2" style={{background:'#F5F7FC',boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{background:'linear-gradient(135deg,#0B6E6E,#5BB8D4)',boxShadow:'0 8px 24px rgba(91,184,212,.3)'}}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
              </div>
              <h3 className="text-lg font-bold mb-3" style={{color:'#0B2554'}}>Managed Support</h3>
              <p className="text-gray-500 text-sm leading-relaxed">In8Sync is dedicated to providing our customers with timely and effective support for any inquiries or issues related to our software products. We're with you every step of the way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24" style={{background:'#F5F7FC'}}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Services image */}
            <div className="relative reveal">
              <div className="absolute inset-0 rounded-3xl blur-2xl" style={{background:'linear-gradient(135deg,rgba(27,111,208,.15),rgba(91,184,212,.1))'}}></div>
              <div className="relative rounded-3xl overflow-hidden" style={{boxShadow:'0 24px 80px rgba(11,37,84,.2)'}}>
                <img src="/brand_assests/91115 (1).jpg" alt="NetSuite Customization" className="w-full h-[380px] object-cover" />
                {/* Service tags overlay */}
                <div className="absolute bottom-0 inset-x-0 p-6 z-10" style={{background:'linear-gradient(to top,rgba(11,37,84,.92),transparent)'}}>
                  <div className="flex flex-wrap gap-2">
                    {['SuiteScripts','RESTlets','Suitelets','Custom Modules'].map(tag => (
                      <span key={tag} className="text-xs px-3 py-1.5 rounded-full font-medium" style={{background:'rgba(91,184,212,.2)',color:'#5BB8D4',border:'1px solid rgba(91,184,212,.3)'}}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Right: text */}
            <div className="reveal reveal-delay-2">
              <p className="text-[11px] font-semibold tracking-widest uppercase mb-4" style={{color:'#1B6FD0'}}>Expert NetSuite Services</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color:'#0B2554',letterSpacing:'-0.025em',lineHeight:1.1}}>Advanced NetSuite<br />Services &<br />Customizations</h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">Our seasoned in-house developers provide Advanced NetSuite Services, Customizations, Automations, and Integrations. We can make your NetSuite account act and behave any way you want it to.</p>
              <div className="space-y-3 mb-10">
                {['Full NetSuite Implementation','Full Business Process Analysis','Consulting & Strategy','Custom Modules, Suitelets & RESTlets'].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{background:'linear-gradient(135deg,#1B6FD0,#3B8AE0)'}}>
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    </div>
                    <span className="text-gray-600 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2 text-white text-sm font-semibold px-7 py-3.5 rounded-xl">
                Schedule a Demo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-xl mx-auto mb-16 reveal">
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#1B6FD0'}}>Testimonials</p>
            <h2 className="text-4xl font-bold" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>What Our Clients Say</h2>
          </div>
          <div className="max-w-3xl mx-auto reveal">
            <div className="rounded-3xl p-10 md:p-14 relative overflow-hidden border" style={{background:'linear-gradient(135deg,#0B2554,#0d1e42)',borderColor:'rgba(91,184,212,.15)',boxShadow:'0 24px 80px rgba(11,37,84,.3)'}}>
              {/* Quote mark */}
              <div className="absolute top-8 right-10 text-9xl font-serif leading-none select-none" style={{color:'rgba(91,184,212,.08)'}}>"</div>
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-5 h-5" style={{color:'#FFD700'}} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl font-light leading-relaxed mb-10 text-white" style={{lineHeight:1.65}}>"We use In8Sync for several e-commerce integrations and advance NetSuite scripting to help automate our business process, and reduce manual labor. We have been so satisfied with their work, we continually have them develop and implement new features in our NetSuite instance."</blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{background:'linear-gradient(135deg,#1B6FD0,#5BB8D4)'}}>T</div>
                <div>
                  <div className="font-semibold text-white">Tony N.</div>
                  <div className="text-sm" style={{color:'rgba(255,255,255,.45)'}}>Workwell Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 relative overflow-hidden" style={{background:'linear-gradient(135deg,#0B2554 0%,#153470 50%,#1B6FD0 100%)'}}>
        <div className="absolute inset-0 grid-lines opacity-40"></div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-3xl" style={{background:'radial-gradient(ellipse,rgba(91,184,212,.2) 0%,transparent 70%)'}}></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10 reveal">
          <p className="text-[11px] font-semibold tracking-widest uppercase mb-5" style={{color:'#5BB8D4'}}>Get Started Today</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{letterSpacing:'-0.03em',lineHeight:1.05}}>Unleash The Full<br />Potential Of Your Business</h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{color:'rgba(255,255,255,.6)',lineHeight:1.75}}>We make NetSuite work the way you want. Let's build something powerful together.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-sm font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1" style={{color:'#0B2554',boxShadow:'0 4px 20px rgba(0,0,0,.2)'}}>
              Contact Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 btn-outline text-white text-sm font-semibold px-8 py-4 rounded-xl">
              Request A Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <RevealObserver />
    </>
  )
}
