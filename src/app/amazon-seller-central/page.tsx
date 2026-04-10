'use client'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'

export default function AmazonSellerCentral() {
  const features = [
    {title:'Hosted Within NetSuite',desc:'No 3rd-party integration platform required. The entire integration lives natively inside your NetSuite environment.',color:'linear-gradient(135deg,#FF9900,#E8871A)',shadow:'rgba(255,153,0,.3)'},
    {title:'Customer Sync',desc:'Bi-directional customer sync between Amazon and NetSuite. Automatically match, find, or create customer records on purchase.',color:'linear-gradient(135deg,#1B6FD0,#3B8AE0)',shadow:'rgba(27,111,208,.25)'},
    {title:'Product Sync',desc:'Sync products from NetSuite to Amazon including SKUs, titles, descriptions, pricing, and images — on create, edit, or scheduled.',color:'linear-gradient(135deg,#059669,#10B981)',shadow:'rgba(16,185,129,.2)'},
    {title:'Stock Level Sync (FBM)',desc:'Inventory stock levels sync from NetSuite to Amazon FBM on a scheduled basis, keeping your Amazon listings always accurate.',color:'linear-gradient(135deg,#7F54B3,#9B6FC8)',shadow:'rgba(127,84,179,.2)'},
    {title:'Order Sync',desc:'Amazon orders sync to NetSuite as sales orders automatically in real-time or on schedule, with full field mapping support.',color:'linear-gradient(135deg,#EF4444,#F87171)',shadow:'rgba(239,68,68,.2)'},
    {title:'FBM Shipment Sync',desc:'Tracking numbers and shipment data sync from NetSuite back to Amazon automatically, keeping buyers informed in real-time.',color:'linear-gradient(135deg,#0B2554,#1B6FD0)',shadow:'rgba(11,37,84,.25)'},
    {title:'FBA Support',desc:'Full Fulfillment by Amazon support — FBA inventory, orders, and fulfillment data sync seamlessly with NetSuite records.',color:'linear-gradient(135deg,#F59E0B,#FBBF24)',shadow:'rgba(245,158,11,.2)'},
    {title:'Order Fee Reconciliation',desc:'Automatically reconcile Amazon seller fees, refunds, and adjustments against NetSuite financial records to ensure accuracy.',color:'linear-gradient(135deg,#10B981,#34D399)',shadow:'rgba(16,185,129,.2)'},
    {title:'Report Reconciliation',desc:'Amazon settlement reports and financial data reconcile automatically in NetSuite, eliminating manual spreadsheet work.',color:'linear-gradient(135deg,#6366F1,#818CF8)',shadow:'rgba(99,102,241,.2)'},
    {title:'Fully Managed Support',desc:"In8Sync's expert NetSuite developers manage the integration end-to-end — from installation through ongoing operations and customizations.",color:'linear-gradient(135deg,#059669,#10B981)',shadow:'rgba(5,150,105,.2)'},
  ]

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero-amz-sc min-h-screen flex items-center pt-20 relative overflow-hidden" style={{isolation:'isolate'}}>
        <div className="absolute inset-0 grid-lines opacity-60 z-10 pointer-events-none"></div>
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute top-16 right-8 w-96 h-96 rounded-full animate-float" style={{background:'radial-gradient(circle,rgba(255,153,0,.15) 0%,transparent 70%)'}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 w-full relative z-20">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div style={{animation:'slide-up .9s cubic-bezier(.23,1,.32,1) both'}}>
              <div className="flex items-center gap-2 mb-6">
                <Link href="/" className="text-xs font-medium" style={{color:'rgba(255,255,255,.4)'}}>Home</Link>
                <svg className="w-3 h-3" style={{color:'rgba(255,255,255,.25)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                <span className="text-xs font-medium" style={{color:'rgba(255,255,255,.4)'}}>Marketplaces</span>
                <svg className="w-3 h-3" style={{color:'rgba(255,255,255,.25)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                <span className="text-xs font-semibold" style={{color:'#FF9900'}}>Amazon Seller Central</span>
              </div>
              <div className="inline-flex items-center gap-2.5 mb-7 px-4 py-2 rounded-full border" style={{background:'rgba(255,153,0,.1)',borderColor:'rgba(255,153,0,.3)'}}>
                <span className="text-lg">📦</span>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{color:'#FF9900'}}>Amazon Seller Central DirectConnect</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{letterSpacing:'-0.03em',lineHeight:1.08}}>
                The Seamless<br />
                <span style={{background:'linear-gradient(135deg,#FF9900,#FFB84D)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>Amazon Seller</span><br />
                NetSuite Integration
              </h1>
              <p className="text-lg mb-8" style={{color:'rgba(255,255,255,.78)',lineHeight:1.75}}>Designed to interface directly within NetSuite, In8Sync's DirectConnect bundle is a proven solution for seamless, bi-directional integration between NetSuite and Amazon Seller Central.</p>
              <div className="space-y-2.5 mb-10">
                {['10 core features including FBA support & order reconciliation','100% natively hosted in NetSuite — no external platform','Starting at $200/month billed annually'].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{background:'rgba(255,153,0,.2)',border:'1px solid rgba(255,153,0,.4)'}}>
                      <svg className="w-2.5 h-2.5" style={{color:'#FF9900'}} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    </div>
                    <p className="text-sm" style={{color:'rgba(255,255,255,.75)'}}>{item}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-amz font-bold px-7 py-3.5 rounded-xl text-sm">Request a Demo</Link>
                <Link href="#benefits" className="btn-outline-white btn-outline-white-amz text-white font-semibold px-6 py-3.5 rounded-xl text-sm">Benefits</Link>
                <Link href="#features" className="btn-outline-white btn-outline-white-amz text-white font-semibold px-6 py-3.5 rounded-xl text-sm">Features</Link>
                <Link href="/integrations" className="btn-outline-white btn-outline-white-amz text-white font-semibold px-6 py-3.5 rounded-xl text-sm inline-flex items-center gap-2">
                  See All Bundles <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center" style={{animation:'fade-in 1.2s ease both .4s',opacity:0}}>
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 rounded-3xl blur-3xl" style={{background:'linear-gradient(135deg,rgba(255,153,0,.2),rgba(27,111,208,.12))'}}></div>
                <div className="relative rounded-3xl p-8 border" style={{background:'rgba(255,255,255,.03)',borderColor:'rgba(255,153,0,.18)',backdropFilter:'blur(10px)',boxShadow:'0 24px 64px rgba(0,0,0,.4)'}}>
                  <div className="flex flex-col items-center justify-center" style={{height:'300px'}}>
                    <div className="rounded-2xl flex items-center justify-center p-6" style={{background:'white',width:'220px',height:'140px'}}>
                      <img src="/brand_assests/amazon central seller.png" alt="Amazon Seller Central" style={{maxWidth:'180px',maxHeight:'100px',objectFit:'contain'}} />
                    </div>
                    <div style={{fontSize:'13px',fontWeight:600,color:'rgba(255,255,255,.7)',marginTop:'10px'}}>Seller Central</div>
                    <div style={{fontSize:'12px',color:'rgba(255,255,255,.4)',marginTop:'4px'}}>NetSuite Integration</div>
                  </div>
                </div>
                <div className="absolute -top-4 -left-6 bg-white rounded-2xl px-4 py-3" style={{boxShadow:'0 8px 32px rgba(0,0,0,.15)'}}>
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#FF9900,#E8871A)'}}><span className="text-sm">📦</span></div>
                    <div><div className="text-xs font-bold" style={{color:'#0B2554'}}>FBA + FBM</div><div className="text-[10px] text-gray-400">Full Support</div></div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-6 bg-white rounded-2xl px-4 py-3" style={{boxShadow:'0 8px 32px rgba(0,0,0,.15)'}}>
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#0B2554,#1B6FD0)'}}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    <div><div className="text-xs font-bold" style={{color:'#0B2554'}}>$200/mo</div><div className="text-[10px] text-gray-400">All Features Included</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NO MIDDLEWARE BANNER */}
      <section className="py-10" style={{background:'#E8F4FD'}}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-8">
            <div className="flex-shrink-0">
              <div className="relative w-24 h-24">
                <div className="w-24 h-24 rounded-full border-4 flex items-center justify-center" style={{borderColor:'#0B2554',background:'#fff'}}>
                  <span className="text-xs font-bold text-center leading-tight px-2" style={{color:'#0B2554'}}>Middle<br />ware</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-28 h-28" viewBox="0 0 112 112" fill="none"><circle cx="56" cy="56" r="54" stroke="#CC0000" strokeWidth="4" fill="none"/><line x1="20" y1="20" x2="92" y2="92" stroke="#CC0000" strokeWidth="4"/></svg>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2" style={{color:'#0B2554'}}>No External Platform or Middleware</h3>
              <p className="text-sm leading-relaxed mb-3" style={{color:'#1a3a5c'}}>While many other solutions run on an external platform, or middleware application, <strong>In8Sync's Amazon Seller Central DirectConnect</strong> bundle is natively built into and fully hosted in NetSuite.</p>
              <p className="text-sm font-semibold" style={{color:'#1a3a5c'}}>Amazon Seller Central <strong>DirectConnect</strong> offers superior system performance while dramatically reducing the time and skill required to manage, saving your business time and money.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24" style={{background:'#F5F7FC'}}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#FF9900'}}>Why DirectConnect</p>
            <h2 className="text-4xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>Benefits of Our Amazon Seller Central<br />NetSuite Integration</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 card-lift reveal" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{background:'linear-gradient(135deg,#FF9900,#E8871A)',boxShadow:'0 6px 20px rgba(255,153,0,.3)'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 className="text-lg font-bold mb-3" style={{color:'#0B2554'}}>Cut Data Management Time in Half</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Stop wasting time syncing data manually. Amazon Seller Central DirectConnect integrates data flows bi-directionally between Amazon and NetSuite, giving you a true omni-channel experience.</p>
            </div>
            <div className="rounded-3xl p-8 border border-gray-100 card-lift reveal reveal-delay-1" style={{background:'#F8F9FC',boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{background:'linear-gradient(135deg,#0B2554,#1B6FD0)',boxShadow:'0 6px 20px rgba(11,37,84,.2)'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <h3 className="text-lg font-bold mb-3" style={{color:'#0B2554'}}>No External Integration Platform</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Amazon Seller Central DirectConnect is natively built into and fully hosted in NetSuite — offering superior performance, dramatically reducing management overhead, and saving you money.</p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 card-lift reveal reveal-delay-2" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{background:'linear-gradient(135deg,#1B6FD0,#5BB8D4)',boxShadow:'0 6px 20px rgba(27,111,208,.3)'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </div>
              <h3 className="text-lg font-bold mb-3" style={{color:'#0B2554'}}>Accurate, Real-time Syncing</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Data flows are fully automated between Amazon and NetSuite in real-time — orders, inventory, customers, products, shipments, and more are always in sync.</p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 card-lift reveal reveal-delay-3" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{background:'linear-gradient(135deg,#059669,#10B981)',boxShadow:'0 6px 20px rgba(16,185,129,.25)'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
              </div>
              <h3 className="text-lg font-bold mb-3" style={{color:'#0B2554'}}>Full Installation & Managed Support</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Comes fully-featured out-of-the-box. In8Sync's expert developers handle the complete installation and provide fully-managed ongoing support — no technical expertise required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#1B6FD0'}}>What's Included</p>
            <h2 className="text-4xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>10 Core Features of Amazon Seller Central<br />DirectConnect</h2>
            <p className="text-gray-400 text-sm leading-relaxed">Everything you need to run a fully automated Amazon &harr; NetSuite integration — out of the box.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div key={f.title} className={`feat-card feat-card-amz reveal${i%3===1?' reveal-delay-1':i%3===2?' reveal-delay-2':''}${i===features.length-1?' md:col-start-2':''}`}>
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

      {/* RELATED */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12 reveal">
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#5BB8D4'}}>Explore More</p>
            <h2 className="text-3xl font-bold" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>More Marketplace Integrations</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Link href="/amazon-vendor-central" className="group bg-white rounded-2xl p-6 border border-gray-100 card-lift flex items-center gap-5 reveal" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)',textDecoration:'none'}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white border border-gray-100 p-2"><img src="/logos/Amazon-Vendor-Central_logo.png" alt="Amazon Vendor Central" className="w-full h-full object-contain" /></div>
              <div><h3 className="font-bold text-sm mb-0.5" style={{color:'#0B2554'}}>Amazon Vendor Central</h3><p className="text-xs text-gray-400">EDI & API — full PO automation</p></div>
              <svg className="w-4 h-4 text-gray-300 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </Link>
            <Link href="/ebay" className="group bg-white rounded-2xl p-6 border border-gray-100 card-lift flex items-center gap-5 reveal reveal-delay-1" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)',textDecoration:'none'}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white border border-gray-100 p-2"><img src="/logos/eBay_logo.png" alt="eBay" className="w-full h-full object-contain" /></div>
              <div><h3 className="font-bold text-sm mb-0.5" style={{color:'#0B2554'}}>eBay DirectConnect</h3><p className="text-xs text-gray-400">Inbound & outbound flow automation</p></div>
              <svg className="w-4 h-4 text-gray-300 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden" style={{background:'linear-gradient(135deg,#0B2554 0%,#0d1e42 50%,#0B2554 100%)'}}>
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{letterSpacing:'-0.03em'}}>Ready to Automate Your<br /><span style={{background:'linear-gradient(135deg,#FF9900,#FFB84D)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>Amazon ↔ NetSuite</span> Sync?</h2>
          <p className="text-lg mb-10" style={{color:'rgba(255,255,255,.65)',lineHeight:1.7}}>Join growing brands using In8Sync's Amazon Seller Central DirectConnect to eliminate manual data entry and run a seamless, automated operation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="font-bold px-10 py-4 rounded-2xl text-base text-white" style={{background:'linear-gradient(135deg,#FF9900,#E8871A)',boxShadow:'0 4px 20px rgba(255,153,0,.4)',color:'#1A1A1A'}}>Request A Demo</Link>
            <Link href="/contact" className="text-white font-semibold px-8 py-4 rounded-2xl text-base" style={{border:'1.5px solid rgba(255,255,255,.3)'}}>Talk to an Expert</Link>
          </div>
        </div>
      </section>

      <Footer />
      <RevealObserver />
    </>
  )
}
