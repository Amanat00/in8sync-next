'use client'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'

export default function Squarespace() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero-sqsp min-h-[calc(100vh-30px)] flex items-center pt-[65px] pb-4 relative overflow-hidden" style={{isolation:'isolate'}}>
        <div className="absolute inset-0 grid-lines opacity-60 z-10 pointer-events-none"></div>
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute top-16 right-8 w-96 h-96 rounded-full animate-float" style={{background:'radial-gradient(circle,rgba(247,192,74,.12) 0%,transparent 70%)'}}></div>
          <div className="absolute top-1/3 right-1/4">
            <div className="w-3 h-3 rounded-full" style={{background:'#F7C04A'}}></div>
            <div className="absolute inset-0 rounded-full" style={{background:'#F7C04A',animation:'pulse-ring 2.8s ease-out infinite',opacity:.4}}></div>
          </div>
          <div className="absolute bottom-32 left-16">
            <div className="w-2 h-2 rounded-full" style={{background:'#5BB8D4'}}></div>
            <div className="absolute inset-0 rounded-full" style={{background:'#5BB8D4',animation:'pulse-ring 3.2s ease-out infinite .8s',opacity:.4}}></div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 w-full relative z-20">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div style={{animation:'slide-up .9s cubic-bezier(.23,1,.32,1) both'}}>
              <div className="flex items-center gap-2 mb-6">
                <Link href="/" className="text-xs font-medium" style={{color:'rgba(255,255,255,.4)'}}>Home</Link>
                <svg className="w-3 h-3" style={{color:'rgba(255,255,255,.25)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                <span className="text-xs font-medium" style={{color:'rgba(255,255,255,.4)'}}>eCommerce</span>
                <svg className="w-3 h-3" style={{color:'rgba(255,255,255,.25)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                <span className="text-xs font-semibold" style={{color:'#F7C04A'}}>Squarespace</span>
              </div>
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full" style={{background:'linear-gradient(135deg,rgba(247,192,74,.2),rgba(247,192,74,.1))',border:'1px solid rgba(247,192,74,.4)'}}>
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" style={{boxShadow:'0 0 6px rgba(74,222,128,.8)'}}></span>
                <span className="text-[10px] font-bold tracking-widest uppercase" style={{color:'#F7C04A'}}>Newly Launched</span>
              </div>
              <div className="inline-flex items-center gap-2.5 mb-7 px-4 py-2 rounded-full border ml-3" style={{background:'rgba(247,192,74,.08)',borderColor:'rgba(247,192,74,.25)'}}>
                <span className="text-lg">◻️</span>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{color:'#F7C04A'}}>Squarespace DirectConnect</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{letterSpacing:'-0.03em',lineHeight:1.08}}>
                In8Sync Now Offers<br />
                <span className="sqsp-text">Squarespace</span><br />
                NetSuite Integration
              </h1>
              <p className="text-lg mb-8" style={{color:'rgba(255,255,255,.78)',lineHeight:1.75}}>Discover our new Squarespace DirectConnect product — a solution that integrates your Squarespace eCommerce operations with NetSuite, featuring advanced automation, full customizability, and 24/7 expert support.</p>
              <div className="space-y-2.5 mb-10">
                {['Natively integrated inside NetSuite — no external platform','Advanced automation for all data flows','Fully customizable with 24/7 expert NetSuite developer support'].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{background:'rgba(247,192,74,.2)',border:'1px solid rgba(247,192,74,.4)'}}>
                      <svg className="w-2.5 h-2.5" style={{color:'#F7C04A'}} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    </div>
                    <p className="text-sm" style={{color:'rgba(255,255,255,.75)'}}>{item}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-sqsp-gold font-bold px-7 py-3.5 rounded-xl text-sm">Request a Demo</Link>
                <Link href="#announcement" className="btn-outline-white btn-outline-white-sqsp text-white font-semibold px-6 py-3.5 rounded-xl text-sm">What&apos;s New</Link>
                <Link href="/integrations" className="btn-outline-white btn-outline-white-sqsp text-white font-semibold px-6 py-3.5 rounded-xl text-sm inline-flex items-center gap-2">
                  See All Bundles <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center" style={{animation:'fade-in 1.2s ease both .4s',opacity:0}}>
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 rounded-3xl blur-3xl" style={{background:'linear-gradient(135deg,rgba(247,192,74,.2),rgba(27,111,208,.12))'}}></div>
                <div className="relative rounded-3xl p-8 border" style={{background:'rgba(255,255,255,.03)',borderColor:'rgba(247,192,74,.18)',backdropFilter:'blur(10px)',boxShadow:'0 24px 64px rgba(0,0,0,.4)'}}>
                  <div className="flex flex-col items-center justify-center" style={{height:'300px'}}>
                    <div className="rounded-2xl flex items-center justify-center p-6" style={{background:'white',width:'220px',height:'140px'}}>
                      <img src="/brand_assests/squarespace.png" alt="Squarespace Logo" style={{maxWidth:'180px',maxHeight:'100px',objectFit:'contain'}} />
                    </div>
                    <div style={{fontSize:'12px',color:'rgba(255,255,255,.4)',marginTop:'12px'}}>NetSuite Integration</div>
                  </div>
                </div>
                <div className="absolute -top-4 -left-6 bg-white rounded-2xl px-4 py-3 shadow-2xl card-lift">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#1A1A1A,#3a3a3a)'}}><span className="text-sm">◻️</span></div>
                    <div><div className="text-xs font-bold" style={{color:'#0B2554'}}>Just Launched</div><div className="text-[10px] text-gray-400">Squarespace DirectConnect</div></div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-6 bg-white rounded-2xl px-4 py-3 shadow-2xl card-lift">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#F7C04A,#E8B83A)'}}>
                      <svg className="w-4 h-4" style={{color:'#1a1a1a'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    </div>
                    <div><div className="text-xs font-bold" style={{color:'#0B2554'}}>Full Automation</div><div className="text-[10px] text-gray-400">All Data Flows</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENT BANNER */}
      <section id="announcement" className="launch-banner py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10 reveal">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full" style={{background:'rgba(247,192,74,.12)',border:'1px solid rgba(247,192,74,.25)'}}>
            <span className="w-2 h-2 rounded-full" style={{background:'#F7C04A'}}></span>
            <span className="text-xs font-bold tracking-widest uppercase" style={{color:'#F7C04A'}}>Official Announcement</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{letterSpacing:'-0.025em'}}>In8Sync Now Offers Squarespace<br />eCommerce Integration with NetSuite</h2>
          <p className="text-gray-400 text-base leading-relaxed max-w-2xl mx-auto">We are thrilled to announce the arrival of Squarespace DirectConnect — a solution that integrates your Squarespace eCommerce operations with NetSuite. In addition to robust integration, In8Sync&apos;s solution provides advanced automation for all data flows between Squarespace eCommerce and NetSuite.</p>
        </div>
      </section>

      {/* EXPLORE MORE */}
      <section className="py-20" style={{background:'#F5F7FC'}}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12 reveal">
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#5BB8D4'}}>Explore More</p>
            <h2 className="text-3xl font-bold" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>More eCommerce Integrations</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Link href="/shopify" className="group bg-white rounded-2xl p-6 border border-gray-100 card-lift flex items-center gap-5 reveal" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)',textDecoration:'none'}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white border border-gray-100 p-2"><img src="/logos/shopify_logo.png" alt="Shopify" className="w-full h-full object-contain" /></div>
              <div><h3 className="font-bold text-sm mb-0.5" style={{color:'#0B2554'}}>Shopify DirectConnect</h3><p className="text-xs text-gray-400">Full retail sync — starting at $200/mo</p></div>
              <svg className="w-4 h-4 text-gray-300 ml-auto transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </Link>
            <Link href="/woocommerce" className="group bg-white rounded-2xl p-6 border border-gray-100 card-lift flex items-center gap-5 reveal reveal-delay-1" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)',textDecoration:'none'}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white border border-gray-100 p-2"><img src="/logos/woocommerce_logo.svg" alt="WooCommerce" className="w-full h-full object-contain" /></div>
              <div><h3 className="font-bold text-sm mb-0.5" style={{color:'#0B2554'}}>WooCommerce DirectConnect</h3><p className="text-xs text-gray-400">Full B2B & B2C — starting at $200/mo</p></div>
              <svg className="w-4 h-4 text-gray-300 ml-auto transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <RevealObserver />
    </>
  )
}
