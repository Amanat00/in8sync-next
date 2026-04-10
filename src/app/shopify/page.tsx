'use client'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'

export default function Shopify() {
  const features = [
    { bg:'linear-gradient(135deg,#0B2554,#1B6FD0)', title:'Fully Hosted in NetSuite', desc:'No external platform. Connector is hosted fully in NetSuite, saving time, money, and headaches.' },
    { bg:'linear-gradient(135deg,#96BF48,#78a835)', title:'Customer Sync', desc:'Sync customers bi-directionally between Shopify and NetSuite in real-time.' },
    { bg:'linear-gradient(135deg,#7C3AED,#A855F7)', title:'Product Sync', desc:'Manage your Shopify products directly from NetSuite with full control.' },
    { bg:'linear-gradient(135deg,#0B6E6E,#5BB8D4)', title:'Stock Level Sync', desc:'Sync product inventory from NetSuite to Shopify, custom-scheduled to your needs.' },
    { bg:'linear-gradient(135deg,#1B6FD0,#3B8AE0)', title:'Order Sync', desc:'Sync orders from Shopify to NetSuite on a scheduled basis with the DirectConnect connector.' },
    { bg:'linear-gradient(135deg,#059669,#10B981)', title:'Item Support', desc:'Sync any item type from NetSuite to Shopify — assembly, service, inventory, and more.' },
    { bg:'linear-gradient(135deg,#DC2626,#F87171)', title:'Shipment Tracking', desc:'Tracking information automatically updates to Shopify from NetSuite fulfillment records.' },
    { bg:'linear-gradient(135deg,#F59E0B,#FBBF24)', title:'Support for Promotions', desc:'Manage promotions in NetSuite and automatically send them to Shopify in real-time.' },
    { bg:'linear-gradient(135deg,#0B2554,#153470)', title:'Refund Support', desc:'Refund information automatically syncs from NetSuite to Shopify seamlessly.' },
    { bg:'linear-gradient(135deg,#96BF48,#78a835)', title:'Gift Certificate Support', desc:'Utilize standard Shopify and NetSuite Gift Certificate functions natively.' },
    { bg:'linear-gradient(135deg,#DC2626,#F87171)', title:'Signify Risk Support', desc:'Prevent high-risk orders from syncing from Shopify to NetSuite automatically.' },
    { bg:'linear-gradient(135deg,#1B6FD0,#5BB8D4)', title:'NetSuite Lead Forms', desc:'Utilize your NetSuite marketing and support forms directly in your Shopify website.' },
    { bg:'linear-gradient(135deg,#7C3AED,#A855F7)', title:'Price Level Support', desc:'Select which NetSuite price levels to assign to products when syncing to Shopify.' },
    { bg:'linear-gradient(135deg,#059669,#10B981)', title:'Configurable Mappings', desc:'Custom map items, orders, fulfillments, customers between Shopify and NetSuite.' },
    { bg:'linear-gradient(135deg,#F59E0B,#FBBF24)', title:'Notifications', desc:"If data anomalies arise, In8Sync's team gets notified — and you get notified too." },
    { bg:'linear-gradient(135deg,#0B2554,#1B6FD0)', title:'Wholesale Quantity Pricing', desc:'Sync tiered pricing for products based on order quantities for wholesale customers.' },
    { bg:'linear-gradient(135deg,#96BF48,#78a835)', title:'Multi-Currency Support', desc:'Sync products, inventories, orders and fulfillments in multiple currencies globally.' },
    { bg:'linear-gradient(135deg,#0B6E6E,#5BB8D4)', title:'Bulk Updates', desc:'Sync multiple products from NetSuite to Shopify simultaneously in one operation.' },
    { bg:'linear-gradient(135deg,#7C3AED,#A855F7)', title:'Transaction Reconciliation', desc:'Automatically reconcile Shopify fees, payments and deposits in your NetSuite account.' },
  ]

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero-shopify min-h-screen flex items-center pt-20 relative overflow-hidden" style={{isolation:'isolate'}}>
        <div className="absolute inset-0 grid-lines opacity-60 z-10 pointer-events-none"></div>
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute top-20 right-10 w-96 h-96 rounded-full animate-float" style={{background:'radial-gradient(circle,rgba(150,191,72,.15) 0%,transparent 70%)'}}></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full" style={{background:'radial-gradient(circle,rgba(27,111,208,.2) 0%,transparent 70%)'}}></div>
          <div className="absolute top-1/3 right-1/4">
            <div className="w-2.5 h-2.5 rounded-full" style={{background:'#96BF48'}}></div>
            <div className="absolute inset-0 rounded-full" style={{background:'#96BF48',animation:'pulse-ring 2.8s ease-out infinite',opacity:.5}}></div>
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
                <span className="text-xs font-semibold" style={{color:'#96BF48'}}>Shopify</span>
              </div>
              <div className="inline-flex items-center gap-2.5 mb-7 px-4 py-2 rounded-full border" style={{background:'rgba(150,191,72,.1)',borderColor:'rgba(150,191,72,.3)'}}>
                <span className="text-lg">🛍️</span>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{color:'#96BF48'}}>Shopify DirectConnect</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{letterSpacing:'-0.03em',lineHeight:1.08}}>
                Discover Shopify<br />
                <span style={{background:'linear-gradient(135deg,#96BF48,#c5e07a)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>DirectConnect</span> —<br />
                the Best NetSuite<br />Shopify Integration
              </h1>
              <div className="space-y-3 mb-10">
                {['Supports both retail and wholesale eCommerce for Shopify and Shopify Plus','Fully installed in NetSuite — no external integration platform to learn or manage','Pre-built connector ready out-of-the-box with customizable add-ons'].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{background:'rgba(150,191,72,.25)',border:'1px solid rgba(150,191,72,.4)'}}>
                      <svg className="w-2.5 h-2.5" style={{color:'#96BF48'}} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    </div>
                    <p className="text-sm" style={{color:'rgba(255,255,255,.75)'}}>{item}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-shopify text-white font-bold px-7 py-3.5 rounded-xl text-sm">Request A Demo</Link>
                <Link href="#benefits" className="btn-outline-white btn-outline-white-shopify text-white font-semibold px-6 py-3.5 rounded-xl text-sm">Benefits</Link>
                <Link href="#features" className="btn-outline-white btn-outline-white-shopify text-white font-semibold px-6 py-3.5 rounded-xl text-sm">Key Features</Link>
                <Link href="#addons" className="btn-outline-white btn-outline-white-shopify text-white font-semibold px-6 py-3.5 rounded-xl text-sm">Add-Ons</Link>
                <Link href="/integrations" className="btn-outline-white btn-outline-white-shopify text-white font-semibold px-6 py-3.5 rounded-xl text-sm inline-flex items-center gap-2">
                  See All Bundles <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center items-center" style={{animation:'fade-in 1.2s ease both .4s',opacity:0}}>
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 rounded-3xl blur-3xl" style={{background:'linear-gradient(135deg,rgba(150,191,72,.2),rgba(27,111,208,.15))'}}></div>
                <div className="relative rounded-3xl p-8 border" style={{background:'rgba(255,255,255,.04)',borderColor:'rgba(150,191,72,.2)',backdropFilter:'blur(10px)',boxShadow:'0 0 0 1px rgba(150,191,72,.1),0 24px 64px rgba(11,37,84,.3)'}}>
                  <div className="flex flex-col items-center justify-center" style={{height:'300px'}}>
                    <div className="rounded-2xl flex items-center justify-center p-6" style={{background:'white',width:'220px',height:'140px'}}>
                      <img src="/brand_assests/shopify.png" alt="Shopify Logo" style={{maxWidth:'180px',maxHeight:'100px',objectFit:'contain'}} />
                    </div>
                    <div style={{fontSize:'12px',color:'rgba(255,255,255,.4)',marginTop:'12px'}}>NetSuite Integration</div>
                  </div>
                </div>
                <div className="absolute -top-4 -left-6 bg-white rounded-2xl px-4 py-3 shadow-2xl card-lift">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#96BF48,#78a835)'}}><span className="text-white text-sm">🛍️</span></div>
                    <div><div className="text-xs font-bold" style={{color:'#0B2554'}}>Shopify Plus</div><div className="text-[10px] text-gray-400">Supported</div></div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-6 bg-white rounded-2xl px-4 py-3 shadow-2xl card-lift">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#0B2554,#1B6FD0)'}}><svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg></div>
                    <div><div className="text-xs font-bold" style={{color:'#0B2554'}}>19+ Features</div><div className="text-[10px] text-gray-400">Out of the Box</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#96BF48'}}>Why DirectConnect</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>Benefits of In8Sync's<br />NetSuite Shopify Integration</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl p-8 border border-gray-100 card-lift reveal" style={{background:'#F8F9FC',boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{background:'linear-gradient(135deg,#96BF48,#78a835)',boxShadow:'0 6px 20px rgba(150,191,72,.3)'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 className="text-lg font-bold mb-3" style={{color:'#0B2554'}}>Reduce Time Spent Entering Data</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Shopify DirectConnect connects data flows between Shopify and NetSuite — automatically syncing data rather than manually keeping it up-to-date in two separate systems. Eliminate the bottleneck of double-entry forever.</p>
            </div>
            <div className="rounded-3xl p-8 border border-gray-100 card-lift reveal reveal-delay-1" style={{background:'#F8F9FC',boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{background:'linear-gradient(135deg,#0B2554,#1B6FD0)',boxShadow:'0 6px 20px rgba(11,37,84,.2)'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <h3 className="text-lg font-bold mb-3" style={{color:'#0B2554'}}>Manage 100% of Your Integration in NetSuite</h3>
              <p className="text-gray-500 text-sm leading-relaxed">In8Sync installs Shopify DirectConnect directly in your NetSuite account. No third-party platform, no middleware — manage everything from NetSuite for superior performance, easier management, and a more agile integration.</p>
            </div>
            <div className="rounded-3xl p-8 border border-gray-100 card-lift reveal reveal-delay-2" style={{background:'#F8F9FC',boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{background:'linear-gradient(135deg,#1B6FD0,#5BB8D4)',boxShadow:'0 6px 20px rgba(27,111,208,.3)'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
              </div>
              <h3 className="text-lg font-bold mb-3" style={{color:'#0B2554'}}>Eliminate Data Entry Errors</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Automatic data syncing between Shopify and NetSuite prevents data inconsistencies across systems. Say goodbye to costly human errors and hello to reliable, real-time accuracy across every record.</p>
            </div>
            <div className="rounded-3xl p-8 border border-gray-100 card-lift reveal reveal-delay-3" style={{background:'#F8F9FC',boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{background:'linear-gradient(135deg,#059669,#10B981)',boxShadow:'0 6px 20px rgba(16,185,129,.25)'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
              </div>
              <h3 className="text-lg font-bold mb-3" style={{color:'#0B2554'}}>Setup & Managed Support from In8Sync</h3>
              <p className="text-gray-500 text-sm leading-relaxed">In8Sync's team of NetSuite experts handle installation, setup, and testing. Fully-managed support is included at no additional cost — so you're never left troubleshooting alone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section id="features" className="py-24" style={{background:'#F5F7FC'}}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#1B6FD0'}}>What's Included</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>Key Features of Shopify<br />DirectConnect</h2>
            <p className="text-gray-500 text-base leading-relaxed">Everything you need, natively built into NetSuite — ready to go out of the box.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div key={f.title} className={`feature-card bg-white rounded-2xl p-6 border border-gray-100 reveal${i%3===1?' reveal-delay-1':i%3===2?' reveal-delay-2':''}`}>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:f.bg}}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"/></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1" style={{color:'#0B2554'}}>{f.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 reveal">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-xl text-sm mr-3">Request A Demo</Link>
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold px-8 py-4 rounded-xl border" style={{color:'#0B2554',borderColor:'rgba(11,37,84,.2)'}}>Contact Us</Link>
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section id="addons" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#96BF48'}}>Expand Your Integration</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>Add-Ons &<br />Advanced Features</h2>
            <p className="text-gray-500 text-sm leading-relaxed">The following add-ons are priced separately and quoted based on configuration time required.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {bg:'linear-gradient(135deg,#0B2554,#1B6FD0)',icon:<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>,title:'Multiple Site Support',desc:'Connect as many Shopify sites to NetSuite as you need with a single integration.'},
              {bg:'linear-gradient(135deg,#96BF48,#78a835)',icon:<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>,title:'Multi-Currency Support',desc:'Enable multi-currency between Shopify and NetSuite for global storefronts.'},
              {bg:'linear-gradient(135deg,#7C3AED,#A855F7)',icon:<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>,title:'Narvar Returns',desc:'Using Narvar in Shopify? Automatically create corresponding records in NetSuite and manage the post-purchase experience directly.'},
              {bg:'linear-gradient(135deg,#059669,#10B981)',icon:<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>,title:'Transaction Reconciliation',desc:'Reconcile Shopify fees, payments and deposits automatically in NetSuite.'},
              {bg:'linear-gradient(135deg,#1B6FD0,#3B8AE0)',icon:<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>,title:'Lead Forms',desc:'Use all your NetSuite marketing, leads, and support case forms directly in Shopify.'},
              {bg:'linear-gradient(135deg,#F59E0B,#FBBF24)',icon:<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z"/>,title:'Price Level Support',desc:'Sync multiple price levels to Shopify and assign to customers directly in NetSuite.'},
              {bg:'linear-gradient(135deg,#0B6E6E,#5BB8D4)',icon:<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>,title:'Quantity Pricing',desc:'Sync quantity-based pricing from NetSuite to Shopify for tiered wholesale pricing.'},
            ].map((a, i) => (
              <div key={a.title} className={`rounded-2xl p-6 border border-gray-100 card-lift reveal${i%3===1?' reveal-delay-1':i%3===2?' reveal-delay-2':''}`} style={{background:'#F8F9FC'}}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background:a.bg}}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">{a.icon}</svg>
                  </div>
                  <h4 className="font-bold text-sm" style={{color:'#0B2554'}}>{a.title}</h4>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 reveal">
            <Link href="/contact" className="btn-shopify inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-xl text-sm mr-3">Request A Demo</Link>
            <Link href="/contact" className="btn-outline-navy inline-flex items-center gap-2 text-sm font-semibold px-8 py-4 rounded-xl" style={{color:'#0B2554'}}>Contact Us</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20" style={{background:'#F5F7FC'}}>
        <div className="max-w-3xl mx-auto px-6 md:px-12 reveal">
          <div className="rounded-3xl p-10 md:p-14 relative overflow-hidden border" style={{background:'linear-gradient(135deg,#0B2554,#0d1e42)',borderColor:'rgba(91,184,212,.15)',boxShadow:'0 24px 80px rgba(11,37,84,.3)'}}>
            <div className="absolute top-8 right-10 text-9xl font-serif leading-none select-none" style={{color:'rgba(91,184,212,.08)'}}>"</div>
            <div className="flex gap-1 mb-6">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-5 h-5" style={{color:'#FFD700'}} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
            </div>
            <blockquote className="text-xl font-light leading-relaxed mb-8 text-white" style={{lineHeight:1.7}}>"We use In8Sync for several e-commerce integrations and advance NetSuite scripting to help automate our business process, and reduce manual labor. We have been so satisfied with their work, we continually have them develop and implement new features in our NetSuite instance."</blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{background:'linear-gradient(135deg,#96BF48,#78a835)'}}>T</div>
              <div><div className="font-semibold text-white">Tony N.</div><div className="text-sm" style={{color:'rgba(255,255,255,.45)'}}>Workwell Technologies</div></div>
            </div>
          </div>
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
            <Link href="/woocommerce" className="group bg-white rounded-2xl p-6 border border-gray-100 card-lift flex items-center gap-5 reveal" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)',textDecoration:'none'}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white border border-gray-100 p-2"><img src="/logos/woocommerce_logo.svg" alt="WooCommerce" className="w-full h-full object-contain" /></div>
              <div><h3 className="font-bold text-sm mb-0.5" style={{color:'#0B2554'}}>WooCommerce DirectConnect</h3><p className="text-xs text-gray-400">Full B2B & B2C — starting at $200/mo</p></div>
              <svg className="w-4 h-4 text-gray-300 ml-auto transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </Link>
            <Link href="/squarespace" className="group bg-white rounded-2xl p-6 border border-gray-100 card-lift flex items-center gap-5 reveal reveal-delay-1" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)',textDecoration:'none'}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white border border-gray-100 p-2"><img src="/logos/squarespace_logo.png" alt="Squarespace" className="w-full h-full object-contain" /></div>
              <div><h3 className="font-bold text-sm mb-0.5" style={{color:'#0B2554'}}>Squarespace DirectConnect</h3><p className="text-xs text-gray-400">Orders, customers & product sync</p></div>
              <svg className="w-4 h-4 text-gray-300 ml-auto transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden" style={{background:'linear-gradient(135deg,#0B2554,#153470 50%,#1B6FD0)'}}>
        <div className="absolute inset-0 grid-lines opacity-30"></div>
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10 reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{letterSpacing:'-0.03em'}}>Drive Your Business Forward</h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{color:'rgba(255,255,255,.7)'}}>Ready to connect Shopify and NetSuite natively? Let's get started.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white font-bold px-8 py-4 rounded-xl text-sm transition-all hover:-translate-y-1" style={{color:'#0B2554',boxShadow:'0 4px 20px rgba(0,0,0,.2)'}}>
            Contact Us <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </section>

      <Footer />
      <RevealObserver />
    </>
  )
}
