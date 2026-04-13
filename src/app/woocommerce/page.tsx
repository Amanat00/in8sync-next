'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'

function AccordionItem({ id, iconBg, icon, title, children, open, onToggle }: {
  id: string; iconBg: string; icon: React.ReactNode; title: string;
  children: React.ReactNode; open: boolean; onToggle: () => void
}) {
  return (
    <div className="reveal">
    <div className={`acc-item${open ? ' open' : ''}`} id={id}>
      <button className="acc-btn" onClick={onToggle}>
        <div className="flex items-center gap-3">
          <div className="acc-icon" style={{background:iconBg}}>{icon}</div>
          <span className="font-semibold text-sm" style={{color:'#0B2554'}}>{title}</span>
        </div>
        <svg className="acc-chevron w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
      </button>
      <div className="acc-content">
        <div className="acc-inner">{children}</div>
      </div>
    </div>
    </div>
  )
}

function FeatRow({ color = '#7F54B3', title, desc }: { color?: string; title: string; desc: string }) {
  return (
    <div className="feat-row">
      <div className="feat-dot mt-1.5" style={{background:color}}></div>
      <div>
        <p className="text-xs font-semibold mb-0.5" style={{color:'#0B2554'}}>{title}</p>
        <p className="text-xs text-gray-400">{desc}</p>
      </div>
    </div>
  )
}

export default function WooCommerce() {
  const [openAcc, setOpenAcc] = useState<string | null>(null)
  const toggle = (id: string) => setOpenAcc(prev => prev === id ? null : id)

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero-woo min-h-[calc(100vh-30px)] flex items-center pt-[65px] pb-4 relative overflow-hidden" style={{isolation:'isolate'}}>
        <div className="absolute inset-0 grid-lines opacity-60 z-10 pointer-events-none"></div>
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute top-16 right-8 w-96 h-96 rounded-full animate-float" style={{background:'radial-gradient(circle,rgba(127,84,179,.18) 0%,transparent 70%)'}}></div>
          <div className="absolute top-1/3 right-1/4">
            <div className="w-3 h-3 rounded-full" style={{background:'#9B6FC8'}}></div>
            <div className="absolute inset-0 rounded-full" style={{background:'#9B6FC8',animation:'pulse-ring 2.8s ease-out infinite',opacity:.5}}></div>
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
                <span className="text-xs font-semibold" style={{color:'#9B6FC8'}}>WooCommerce</span>
              </div>
              <div className="inline-flex items-center gap-2.5 mb-7 px-4 py-2 rounded-full border" style={{background:'rgba(127,84,179,.1)',borderColor:'rgba(127,84,179,.3)'}}>
                <span className="text-lg">🛒</span>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{color:'#9B6FC8'}}>WooCommerce DirectConnect</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{letterSpacing:'-0.03em',lineHeight:1.08}}>
                The First & Best<br />
                <span className="woo-text">WooCommerce</span><br />
                NetSuite Integration
              </h1>
              <p className="text-lg mb-8" style={{color:'rgba(255,255,255,.78)',lineHeight:1.75}}>Full retail and wholesale eCommerce support — hosted within NetSuite with no external integration platform. Fully-featured out-of-the-box with advanced customizable add-ons.</p>
              <div className="space-y-2.5 mb-10">
                {['Full retail & wholesale B2B support','Natively hosted in NetSuite — no external platform','Starting at $200/month (billed annually)'].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{background:'rgba(127,84,179,.25)',border:'1px solid rgba(127,84,179,.4)'}}>
                      <svg className="w-2.5 h-2.5" style={{color:'#9B6FC8'}} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    </div>
                    <p className="text-sm" style={{color:'rgba(255,255,255,.75)'}}>{item}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-woo text-white font-bold px-7 py-3.5 rounded-xl text-sm">Request a Demo</Link>
                <Link href="#benefits" className="btn-outline-white btn-outline-white-woo text-white font-semibold px-6 py-3.5 rounded-xl text-sm">Benefits</Link>
                <Link href="#features" className="btn-outline-white btn-outline-white-woo text-white font-semibold px-6 py-3.5 rounded-xl text-sm">Key Features</Link>
                <Link href="#addons" className="btn-outline-white btn-outline-white-woo text-white font-semibold px-6 py-3.5 rounded-xl text-sm">Add-ons</Link>
                <Link href="/integrations" className="btn-outline-white btn-outline-white-woo text-white font-semibold px-6 py-3.5 rounded-xl text-sm inline-flex items-center gap-2">
                  See All Bundles <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center" style={{animation:'fade-in 1.2s ease both .4s',opacity:0}}>
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 rounded-3xl blur-3xl" style={{background:'linear-gradient(135deg,rgba(127,84,179,.25),rgba(27,111,208,.15))'}}></div>
                <div className="relative rounded-3xl p-8 border" style={{background:'rgba(255,255,255,.04)',borderColor:'rgba(127,84,179,.2)',backdropFilter:'blur(10px)',boxShadow:'0 24px 64px rgba(11,37,84,.3)'}}>
                  <div className="flex flex-col items-center justify-center" style={{height:'300px'}}>
                    <div className="rounded-2xl flex items-center justify-center p-6" style={{background:'white',width:'220px',height:'140px'}}>
                      <img src="/brand_assests/woocommerce.png" alt="WooCommerce Logo" style={{maxWidth:'180px',maxHeight:'100px',objectFit:'contain'}} />
                    </div>
                    <div style={{fontSize:'12px',color:'rgba(255,255,255,.4)',marginTop:'12px'}}>NetSuite Integration</div>
                  </div>
                </div>
                <div className="absolute -top-4 -left-6 bg-white rounded-2xl px-4 py-3 shadow-2xl card-lift">
                  <div className="flex items-center gap-2.5"><div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#7F54B3,#9B6FC8)'}}><span className="text-white text-sm">🛒</span></div><div><div className="text-xs font-bold" style={{color:'#0B2554'}}>B2B Ready</div><div className="text-[10px] text-gray-400">Wholesale Support</div></div></div>
                </div>
                <div className="absolute -bottom-4 -right-6 bg-white rounded-2xl px-4 py-3 shadow-2xl card-lift">
                  <div className="flex items-center gap-2.5"><div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#0B2554,#1B6FD0)'}}><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div><div><div className="text-xs font-bold" style={{color:'#0B2554'}}>$200/mo</div><div className="text-[10px] text-gray-400">All Features Included</div></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH IS OVER BANNER */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center reveal">
          <p className="text-[11px] font-semibold tracking-widest uppercase mb-2" style={{color:'#7F54B3'}}>THE SEARCH IS OVER!</p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>The First and Best WooCommerce NetSuite Integration</h2>
        </div>
      </section>

      {/* WHY DIRECTCONNECT */}
      <section id="benefits" className="py-24" style={{background:'#F5F7FC'}}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#7F54B3'}}>Why DirectConnect</p>
            <h2 className="text-4xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>Benefits of Our WooCommerce<br />NetSuite Integration</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 card-lift reveal" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{background:'linear-gradient(135deg,#7F54B3,#9B6FC8)',boxShadow:'0 6px 20px rgba(127,84,179,.3)'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 className="text-lg font-bold mb-3" style={{color:'#0B2554'}}>Cut Data Management Time in Half</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Stop wasting time syncing data manually. WooCommerce DirectConnect integrates data flows bi-directionally between WooCommerce/WordPress and NetSuite, giving you a true omni-channel experience.</p>
            </div>
            <div className="rounded-3xl p-8 border border-gray-100 card-lift reveal reveal-delay-1" style={{background:'#F8F9FC',boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{background:'linear-gradient(135deg,#0B2554,#1B6FD0)',boxShadow:'0 6px 20px rgba(11,37,84,.2)'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <h3 className="text-lg font-bold mb-3" style={{color:'#0B2554'}}>No External Integration Platform</h3>
              <p className="text-gray-500 text-sm leading-relaxed">WooCommerce DirectConnect is natively built into and fully hosted in NetSuite — offering superior performance, dramatically reducing management time and skill required, and saving you a lot of money.</p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 card-lift reveal reveal-delay-2" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{background:'linear-gradient(135deg,#1B6FD0,#5BB8D4)',boxShadow:'0 6px 20px rgba(27,111,208,.3)'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </div>
              <h3 className="text-lg font-bold mb-3" style={{color:'#0B2554'}}>Accurate, Real-time Syncing</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Data flows are fully automated between WooCommerce/WordPress and NetSuite in real-time — you never have to worry about orders, inventory, customers, or products being out of sync.</p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 card-lift reveal reveal-delay-3" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{background:'linear-gradient(135deg,#059669,#10B981)',boxShadow:'0 6px 20px rgba(16,185,129,.25)'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
              </div>
              <h3 className="text-lg font-bold mb-3" style={{color:'#0B2554'}}>Full Installation & Managed Support</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Not a technical expert? Not to worry. WooCommerce DirectConnect comes fully-featured out-of-the-box, and In8Sync's expert developers handle installation and provide fully-managed support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* KEY FEATURES ACCORDION */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 reveal">
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#1B6FD0'}}>What's Included</p>
            <h2 className="text-4xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>Key Features of In8Sync's<br />NetSuite WooCommerce Integration</h2>
          </div>
          <div className="space-y-3">
            <AccordionItem id="acc1" open={openAcc==='acc1'} onToggle={() => toggle('acc1')}
              iconBg="linear-gradient(135deg,#7F54B3,#9B6FC8)"
              icon={<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>}
              title="Product & Inventory Management">
              <FeatRow title="Hosted Within NetSuite" desc="No 3rd-party integration platform — hosted fully within NetSuite, saving time, money, and hassle." />
              <FeatRow title="Sync Categories from NetSuite to WooCommerce" desc="Manage & sync categories using NetSuite website categories, or manage directly within WooCommerce." />
              <FeatRow title="Sync Products from NetSuite to WooCommerce" desc="Manage all aspects of NetSuite items with real-time syncing. Map & sync essential product and accounting data." />
              <FeatRow title="Sync Inventory Stock Levels" desc="Inventory stock levels sync from NetSuite to WooCommerce on a scheduled basis." />
              <FeatRow title="Sync Customers Bi-Directionally" desc="Create and manage customers in WooCommerce or NetSuite. The sync automatically searches, finds, or creates customers on purchase." />
              <FeatRow title="Sync Price Levels, Item Pricing, Group Pricing" desc="Out-of-the-box support for syncing customer price levels so customers see their specific NetSuite pricing when logged in." />
            </AccordionItem>
            <AccordionItem id="acc2" open={openAcc==='acc2'} onToggle={() => toggle('acc2')}
              iconBg="linear-gradient(135deg,#1B6FD0,#3B8AE0)"
              icon={<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>}
              title="Orders & Sales">
              <FeatRow color="#1B6FD0" title="Sync Sales Orders from WooCommerce to NetSuite" desc="Sync in real-time or on a schedule. Map any fields for your custom SO form. Automate the entire sales order process." />
              <FeatRow color="#1B6FD0" title="Promotions Support" desc="Manage promotions in NetSuite by syncing them directly into WooCommerce in real-time." />
              <FeatRow color="#1B6FD0" title="Coupon Codes Support" desc="Manage coupons and discounts in WooCommerce, auto-applying the mapped discount item on sales orders." />
              <FeatRow color="#1B6FD0" title="Taxes Support" desc="Sync tax rates from NetSuite directly into WooCommerce — or use a WooCommerce tax service and sync the calculated amount to NetSuite." />
            </AccordionItem>
            <AccordionItem id="acc3" open={openAcc==='acc3'} onToggle={() => toggle('acc3')}
              iconBg="linear-gradient(135deg,#059669,#10B981)"
              icon={<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>}
              title="Payments & Shipping">
              <FeatRow color="#059669" title="Payment Gateways" desc="Use any payment gateway in WooCommerce. Authorize or capture in WooCommerce, or authorize in WooCommerce and capture in NetSuite on fulfillment. All major gateways supported." />
              <FeatRow color="#059669" title="Shipping Methods" desc="Setup any shipping methods in WooCommerce — table rate, calculator plugins, or standard methods. All mapped to associated NetSuite shipping methods on sales orders." />
              <FeatRow color="#059669" title="Item Fulfillment & Shipment Tracking" desc="Automatically send shipment tracking information back to WooCommerce from the item fulfillment record in NetSuite." />
            </AccordionItem>
            <AccordionItem id="acc4" open={openAcc==='acc4'} onToggle={() => toggle('acc4')}
              iconBg="linear-gradient(135deg,#F59E0B,#FBBF24)"
              icon={<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>}
              title="Advanced Features">
              <FeatRow color="#F59E0B" title="Multi Currency Support" desc="Use multiple currencies from NetSuite items and primary currency from customer records." />
              <FeatRow color="#F59E0B" title="Multiple Address Support" desc="Sync full address books from NetSuite to WooCommerce, letting customers manage multiple addresses." />
              <FeatRow color="#F59E0B" title="Quote / Estimate Sync Bi-Directionally" desc="Allow customers to place quote requests in WooCommerce and sync to NetSuite as Estimates/Quotes — and vice versa." />
              <FeatRow color="#F59E0B" title="Multi Location Support" desc="Sync stock levels from multiple NetSuite locations — combine or send as custom fields for advanced shopping cart rules." />
              <FeatRow color="#F59E0B" title="World-Class Support" desc="In-house software architects with unparalleled NetSuite experience — the most specialized WooCommerce NetSuite partner." />
            </AccordionItem>
          </div>
        </div>
      </section>

      {/* EXTEND FURTHER / ADD-ONS */}
      <section id="addons" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#7F54B3'}}>Extend Further</p>
            <h2 className="text-4xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>Add-Ons & Advanced Features</h2>
            <p className="text-gray-400 text-sm">Priced separately — quoted based on configuration time required.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {title:'Custom Taxonomies',desc:'Custom taxonomy support for products when you must customize WooCommerce to meet specific requirements.'},
              {title:'Estimate Sync Support',desc:'Use WooCommerce Quote plugins or regular checkout to sync quotes into NetSuite as Estimates.'},
              {title:'Forms Support',desc:'Use all your NetSuite forms in WordPress — manage all form data right in NetSuite, keeping everything in one place.'},
              {title:'Gravity Forms Support',desc:'Sync Gravity Form submissions directly into NetSuite as leads with custom field mapping.'},
              {title:'Events Plugin Support',desc:'Manage events in NetSuite and sell tickets directly in WooCommerce for event-driven organizations.'},
              {title:'Store Locator',desc:"Map your clients' stores who sell your products — a full store locator in WordPress, all managed in NetSuite."},
              {title:'Subscriptions & Auto Delivery',desc:"Use WooCommerce Subscriptions plugins or In8Sync's Simple Subscriptions bundle to manage auto delivery in NetSuite."},
              {title:'Conditional Checkout Options',desc:'Allow different payment methods during B2B checkout based on credit limits, available credit, and holds.'},
              {title:'B2B NetSuite Customer Portal',desc:'Full portal with invoice payments, credit memos, order history, quotes, balances, credit limits, and support cases.'},
            ].map((a, i) => (
              <div key={a.title} className={`rounded-2xl p-5 border border-gray-100 card-lift reveal${i%3===1?' reveal-delay-1':i%3===2?' reveal-delay-2':''}`} style={{background:'#F8F9FC'}}>
                <h4 className="font-bold text-sm mb-2" style={{color:'#0B2554'}}>{a.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 reveal">
            <Link href="/contact" className="btn-woo inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-xl text-sm mr-3">Request A Demo</Link>
            <Link href="/contact" className="btn-outline-navy inline-flex items-center gap-2 text-sm font-semibold px-8 py-4 rounded-xl" style={{color:'#0B2554'}}>Contact Us</Link>
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
            <Link href="/shopify" className="group bg-white rounded-2xl p-6 border border-gray-100 card-lift flex items-center gap-5 reveal" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)',textDecoration:'none'}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white border border-gray-100 p-2"><img src="/logos/shopify_logo.png" alt="Shopify" className="w-full h-full object-contain" /></div>
              <div><h3 className="font-bold text-sm mb-0.5" style={{color:'#0B2554'}}>Shopify DirectConnect</h3><p className="text-xs text-gray-400">Full retail sync — starting at $200/mo</p></div>
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
      <section className="py-20 relative overflow-hidden" style={{background:'linear-gradient(135deg,#0B2554,#153470 50%,#7F54B3)'}}>
        <div className="absolute inset-0 grid-lines opacity-30"></div>
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10 reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{letterSpacing:'-0.03em'}}>Drive Your Business Forward</h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{color:'rgba(255,255,255,.7)'}}>Ready to connect WooCommerce and NetSuite natively? Our experts are ready to help.</p>
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
