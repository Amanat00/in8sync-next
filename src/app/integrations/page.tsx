'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'

export default function Integrations() {
  const [activeTab, setActiveTab] = useState('all')

  const showCat = (cat: string) => cat === 'all' || activeTab === 'all' || activeTab === cat

  return (
    <>
      <Navbar />
      <RevealObserver />

      {/* HERO */}
      <section className="hero-int pt-28 pb-20 relative overflow-hidden" style={{isolation:'isolate'}}>
        <div className="absolute inset-0 grid-lines opacity-60 z-10 pointer-events-none"></div>
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute top-16 right-8 w-[500px] h-[500px] rounded-full animate-float" style={{background:'radial-gradient(circle,rgba(27,111,208,.08) 0%,transparent 70%)'}}></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full" style={{background:'radial-gradient(circle,rgba(91,184,212,.07) 0%,transparent 70%)',animation:'float 9s ease-in-out infinite .5s'}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
          <div className="flex items-center gap-2 mb-8" style={{animation:'fade-in .6s ease both'}}>
            <Link href="/" className="text-xs font-medium" style={{color:'rgba(255,255,255,.4)'}}>Home</Link>
            <svg className="w-3 h-3" style={{color:'rgba(255,255,255,.25)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            <span className="text-xs font-medium" style={{color:'#5BB8D4'}}>All Integrations</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div style={{animation:'slide-up .9s cubic-bezier(.23,1,.32,1) both'}}>
              <div className="badge-pill mb-5 inline-flex items-center gap-1.5" style={{background:'rgba(91,184,212,.12)',color:'#5BB8D4',border:'1px solid rgba(91,184,212,.2)'}}>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                Native NetSuite Integrations — No iPaaS
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-5" style={{letterSpacing:'-0.03em'}}>All <span style={{background:'linear-gradient(135deg,#5BB8D4,#1B6FD0)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>NetSuite</span><br />Integrations</h1>
              <p className="text-lg md:text-xl leading-relaxed mb-8" style={{color:'rgba(255,255,255,.55)'}}>Every integration DirectConnect offers — built natively inside NetSuite with no middleware, no per-transaction fees, and no third-party iPaaS layer to manage.</p>
              <div className="flex flex-wrap gap-4 mb-14">
                <Link href="/contact" className="btn-primary text-white font-semibold px-7 py-3.5 rounded-xl text-sm">Schedule a Demo</Link>
                <a href="#integrations" className="text-sm font-semibold px-7 py-3.5 rounded-xl" style={{background:'rgba(255,255,255,.07)',color:'rgba(255,255,255,.8)',border:'1.5px solid rgba(255,255,255,.12)'}}>Browse Integrations ↓</a>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4" style={{animation:'slide-up 1.1s cubic-bezier(.23,1,.32,1) .2s both'}}>
                <div className="stat-box text-center"><div className="text-3xl font-bold text-white mb-1">13+</div><div className="text-xs font-medium" style={{color:'rgba(255,255,255,.45)'}}>Integrations</div></div>
                <div className="stat-box text-center"><div className="text-3xl font-bold text-white mb-1">4</div><div className="text-xs font-medium" style={{color:'rgba(255,255,255,.45)'}}>Categories</div></div>
                <div className="stat-box text-center"><div className="text-3xl font-bold text-white mb-1">0</div><div className="text-xs font-medium" style={{color:'rgba(255,255,255,.45)'}}>Middleware Required</div></div>
                <div className="stat-box text-center"><div className="text-3xl font-bold text-white mb-1">24/7</div><div className="text-xs font-medium" style={{color:'rgba(255,255,255,.45)'}}>Automated Sync</div></div>
              </div>
            </div>
            {/* Right: Connection Diagram */}
            <div className="relative flex justify-center items-center" style={{animation:'fade-in 1.2s ease both .4s',opacity:0}}>
              <div className="relative w-full max-w-lg">
                <div className="absolute inset-0 rounded-3xl blur-3xl" style={{background:'linear-gradient(135deg,rgba(27,111,208,.25),rgba(91,184,212,.15))'}}></div>
                <div className="relative rounded-3xl p-8 border" style={{background:'rgba(255,255,255,.04)',borderColor:'rgba(91,184,212,.2)',backdropFilter:'blur(10px)'}}>
                  <div className="flex flex-col items-center gap-4 py-4">
                    {/* NetSuite node */}
                    <div className="flex items-center gap-3 px-5 py-3 rounded-2xl w-full max-w-xs" style={{background:'rgba(27,111,208,.15)',border:'1px solid rgba(27,111,208,.3)'}}>
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:'linear-gradient(135deg,#0B2554,#1B6FD0)'}}>
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/></svg>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Oracle NetSuite</div>
                        <div className="text-[10px]" style={{color:'rgba(255,255,255,.5)'}}>Native ERP Platform</div>
                      </div>
                    </div>
                    {/* Arrows + In8Sync center */}
                    <div className="flex items-center justify-center gap-4 w-full max-w-xs">
                      <div className="flex-1 h-px" style={{background:'linear-gradient(90deg,transparent,rgba(91,184,212,.5))'}}></div>
                      <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{background:'linear-gradient(135deg,#0B2554,#1B6FD0)',boxShadow:'0 0 0 4px rgba(91,184,212,.15),0 8px 32px rgba(11,37,84,.4)'}}>
                        <span className="text-[9px] font-bold text-white text-center leading-tight">In8<br />Sync</span>
                      </div>
                      <div className="flex-1 h-px" style={{background:'linear-gradient(90deg,rgba(91,184,212,.5),transparent)'}}></div>
                    </div>
                    {/* App nodes row */}
                    <div className="grid grid-cols-4 gap-2 w-full max-w-xs">
                      <div className="flex flex-col items-center gap-1.5 p-2 rounded-xl" style={{background:'rgba(255,255,255,.05)',border:'1px solid rgba(255,255,255,.08)'}}>
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center p-1 bg-white"><img src="/logos/shopify_logo.png" alt="eCommerce" className="w-full h-full object-contain" /></div>
                        <span className="text-[8px] text-center font-medium" style={{color:'rgba(255,255,255,.5)'}}>eCommerce</span>
                      </div>
                      <div className="flex flex-col items-center gap-1.5 p-2 rounded-xl" style={{background:'rgba(255,255,255,.05)',border:'1px solid rgba(255,255,255,.08)'}}>
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center p-1 bg-white"><img src="/logos/Amazon_logo.png" alt="Marketplace" className="w-full h-full object-contain" /></div>
                        <span className="text-[8px] text-center font-medium" style={{color:'rgba(255,255,255,.5)'}}>Marketplace</span>
                      </div>
                      <div className="flex flex-col items-center gap-1.5 p-2 rounded-xl" style={{background:'rgba(255,255,255,.05)',border:'1px solid rgba(255,255,255,.08)'}}>
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center p-1 bg-white"><img src="/logos/Salesforce_logo.png" alt="CRM" className="w-full h-full object-contain" /></div>
                        <span className="text-[8px] text-center font-medium" style={{color:'rgba(255,255,255,.5)'}}>CRM</span>
                      </div>
                      <div className="flex flex-col items-center gap-1.5 p-2 rounded-xl" style={{background:'rgba(255,255,255,.05)',border:'1px solid rgba(255,255,255,.08)'}}>
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center p-1 bg-white"><img src="/logos/Extensiv_logo.png" alt="3PL" className="w-full h-full object-contain" /></div>
                        <span className="text-[8px] text-center font-medium" style={{color:'rgba(255,255,255,.5)'}}>3PL</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating badges */}
                <div className="absolute -top-4 -left-6 bg-white rounded-2xl px-4 py-3 shadow-2xl card-lift">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#0B2554,#1B6FD0)'}}><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg></div>
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

      {/* INTEGRATIONS GRID */}
      <section id="integrations" className="py-24" style={{background:'#F7F9FC'}}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-12 reveal">
            {[
              {key:'all', label:'All (13)'},
              {key:'ecommerce', label:'eCommerce (3)'},
              {key:'marketplace', label:'Marketplaces (3)'},
              {key:'crm', label:'CRM (3)'},
              {key:'3pl', label:'3PL Fulfillment (7)'},
            ].map(tab => (
              <button key={tab.key} className={`category-tab${activeTab === tab.key ? ' active' : ''}`} onClick={() => setActiveTab(tab.key)}>{tab.label}</button>
            ))}
          </div>

          {/* eCommerce */}
          {showCat('ecommerce') && (
          <div id="cat-ecommerce" className="mb-16">
            <div className="flex items-center gap-3 mb-6 reveal">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center p-1" style={{background:'#F0F9FF',border:'1px solid #BFECFF'}}><img src="/logos/shopify_logo.png" alt="eCommerce" className="w-full h-full object-contain" /></div>
              <h2 className="text-xl font-bold" style={{color:'#0B2554'}}>eCommerce</h2>
              <span className="badge-pill" style={{background:'#EEF4FF',color:'#1B6FD0'}}>3 integrations</span>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              <Link href="/shopify" className="int-card p-6 reveal reveal-delay-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className="int-card-icon" style={{background:'#F0F9FF',border:'1.5px solid #BFECFF'}}><img src="/logos/shopify_logo.png" alt="Shopify" className="w-full h-full object-contain p-1" /></div>
                  <div className="flex-1 min-w-0"><div className="font-bold text-base mb-0.5" style={{color:'#0B2554'}}>Shopify</div><div className="text-xs" style={{color:'#64748B'}}>eCommerce platform</div></div>
                  <svg className="w-4 h-4 flex-shrink-0 mt-1" style={{color:'#1B6FD0'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{color:'#475569'}}>Sync orders, customers, inventory, and products between Shopify and NetSuite in real time.</p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="badge-pill" style={{background:'#F0F9FF',color:'#0369A1'}}>Orders</span>
                  <span className="badge-pill" style={{background:'#F0F9FF',color:'#0369A1'}}>Customers</span>
                  <span className="badge-pill" style={{background:'#F0F9FF',color:'#0369A1'}}>Inventory</span>
                </div>
              </Link>
              <Link href="/woocommerce" className="int-card p-6 reveal reveal-delay-2">
                <div className="flex items-start gap-4 mb-4">
                  <div className="int-card-icon" style={{background:'#F5F0FF',border:'1.5px solid #DDD6FE'}}><img src="/logos/woocommerce_logo.svg" alt="WooCommerce" className="w-full h-full object-contain p-1" /></div>
                  <div className="flex-1 min-w-0"><div className="font-bold text-base mb-0.5" style={{color:'#0B2554'}}>WooCommerce</div><div className="text-xs" style={{color:'#64748B'}}>WordPress eCommerce</div></div>
                  <svg className="w-4 h-4 flex-shrink-0 mt-1" style={{color:'#1B6FD0'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{color:'#475569'}}>Bidirectional sync between WooCommerce and NetSuite for orders, products, and fulfillment.</p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="badge-pill" style={{background:'#F5F0FF',color:'#7C3AED'}}>Orders</span>
                  <span className="badge-pill" style={{background:'#F5F0FF',color:'#7C3AED'}}>Products</span>
                  <span className="badge-pill" style={{background:'#F5F0FF',color:'#7C3AED'}}>Fulfillment</span>
                </div>
              </Link>
              <Link href="/squarespace" className="int-card p-6 reveal reveal-delay-3">
                <div className="flex items-start gap-4 mb-4">
                  <div className="int-card-icon" style={{background:'#FFFBEB',border:'1.5px solid #FDE68A'}}><img src="/logos/squarespace_logo.png" alt="Squarespace" className="w-full h-full object-contain p-1" /></div>
                  <div className="flex-1 min-w-0"><div className="font-bold text-base mb-0.5" style={{color:'#0B2554'}}>Squarespace</div><div className="text-xs" style={{color:'#64748B'}}>Design-led eCommerce</div></div>
                  <svg className="w-4 h-4 flex-shrink-0 mt-1" style={{color:'#1B6FD0'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{color:'#475569'}}>Connect Squarespace store data to NetSuite for unified order management and accounting.</p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="badge-pill" style={{background:'#FFFBEB',color:'#92400E'}}>Orders</span>
                  <span className="badge-pill" style={{background:'#FFFBEB',color:'#92400E'}}>Customers</span>
                  <span className="badge-pill" style={{background:'#FFFBEB',color:'#92400E'}}>Products</span>
                </div>
              </Link>
            </div>
          </div>
          )}

          {/* Marketplaces */}
          {showCat('marketplace') && (
          <div id="cat-marketplace" className="mb-16">
            <div className="flex items-center gap-3 mb-6 reveal">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center p-1" style={{background:'#FFFBEB',border:'1px solid #FDE68A'}}><img src="/logos/Amazon_logo.png" alt="Marketplaces" className="w-full h-full object-contain" /></div>
              <h2 className="text-xl font-bold" style={{color:'#0B2554'}}>Marketplaces</h2>
              <span className="badge-pill" style={{background:'#FFFBEB',color:'#92400E'}}>3 integrations</span>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              <Link href="/amazon-seller-central" className="int-card p-6 reveal reveal-delay-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className="int-card-icon" style={{background:'#FFF3D6',border:'1.5px solid #FDE68A'}}><img src="/logos/Amazon-Seller-Central_logo.png" alt="Amazon Seller Central" className="w-full h-full object-contain p-1" /></div>
                  <div className="flex-1 min-w-0"><div className="font-bold text-base mb-0.5" style={{color:'#0B2554'}}>Amazon Seller Central</div><div className="text-xs" style={{color:'#64748B'}}>3P Marketplace seller</div></div>
                  <svg className="w-4 h-4 flex-shrink-0 mt-1" style={{color:'#1B6FD0'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{color:'#475569'}}>Automate Amazon FBA/FBM order processing, inventory updates, and financial reconciliation.</p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="badge-pill" style={{background:'#FFF3D6',color:'#92400E'}}>FBA/FBM</span>
                  <span className="badge-pill" style={{background:'#FFF3D6',color:'#92400E'}}>Inventory</span>
                  <span className="badge-pill" style={{background:'#FFF3D6',color:'#92400E'}}>Finance</span>
                </div>
              </Link>
              <Link href="/amazon-vendor-central" className="int-card p-6 reveal reveal-delay-2">
                <div className="flex items-start gap-4 mb-4">
                  <div className="int-card-icon" style={{background:'#DBEAFE',border:'1.5px solid #BFDBFE'}}><img src="/logos/Amazon-Vendor-Central_logo.png" alt="Amazon Vendor Central" className="w-full h-full object-contain p-1" /></div>
                  <div className="flex-1 min-w-0"><div className="font-bold text-base mb-0.5" style={{color:'#0B2554'}}>Amazon Vendor Central</div><div className="text-xs" style={{color:'#64748B'}}>1P Wholesale supplier</div></div>
                  <svg className="w-4 h-4 flex-shrink-0 mt-1" style={{color:'#1B6FD0'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{color:'#475569'}}>Manage wholesale purchase orders from Amazon Vendor Central directly within NetSuite.</p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="badge-pill" style={{background:'#DBEAFE',color:'#1D4ED8'}}>Purchase Orders</span>
                  <span className="badge-pill" style={{background:'#DBEAFE',color:'#1D4ED8'}}>ASN</span>
                  <span className="badge-pill" style={{background:'#DBEAFE',color:'#1D4ED8'}}>Invoicing</span>
                </div>
              </Link>
              <Link href="/ebay" className="int-card p-6 reveal reveal-delay-3">
                <div className="flex items-start gap-4 mb-4">
                  <div className="int-card-icon" style={{background:'#FFE4E4',border:'1.5px solid #FECACA'}}><img src="/logos/eBay_logo.png" alt="eBay" className="w-full h-full object-contain p-1" /></div>
                  <div className="flex-1 min-w-0"><div className="font-bold text-base mb-0.5" style={{color:'#0B2554'}}>eBay</div><div className="text-xs" style={{color:'#64748B'}}>Global auction &amp; fixed price</div></div>
                  <svg className="w-4 h-4 flex-shrink-0 mt-1" style={{color:'#1B6FD0'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{color:'#475569'}}>Sync eBay listings, orders, and returns to NetSuite for complete omnichannel visibility.</p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="badge-pill" style={{background:'#FFE4E4',color:'#991B1B'}}>Listings</span>
                  <span className="badge-pill" style={{background:'#FFE4E4',color:'#991B1B'}}>Orders</span>
                  <span className="badge-pill" style={{background:'#FFE4E4',color:'#991B1B'}}>Returns</span>
                </div>
              </Link>
            </div>
          </div>
          )}

          {/* CRM */}
          {showCat('crm') && (
          <div id="cat-crm" className="mb-16">
            <div className="flex items-center gap-3 mb-6 reveal">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center p-1" style={{background:'#D0EDFA',border:'1px solid #BAE6FD'}}><img src="/logos/Salesforce_logo.png" alt="CRM" className="w-full h-full object-contain" /></div>
              <h2 className="text-xl font-bold" style={{color:'#0B2554'}}>CRM</h2>
              <span className="badge-pill" style={{background:'#D0EDFA',color:'#0369A1'}}>3 integrations</span>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              <Link href="/salesforce" className="int-card p-6 reveal reveal-delay-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className="int-card-icon" style={{background:'#D0EDFA',border:'1.5px solid #BAE6FD'}}><img src="/logos/Salesforce_logo.png" alt="Salesforce" className="w-full h-full object-contain p-1" /></div>
                  <div className="flex-1 min-w-0"><div className="font-bold text-base mb-0.5" style={{color:'#0B2554'}}>Salesforce</div><div className="text-xs" style={{color:'#64748B'}}>CRM &amp; sales platform</div></div>
                  <svg className="w-4 h-4 flex-shrink-0 mt-1" style={{color:'#1B6FD0'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{color:'#475569'}}>Bidirectional sync of Accounts, Contacts, Opportunities, and Quotes between Salesforce and NetSuite.</p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="badge-pill" style={{background:'#D0EDFA',color:'#0369A1'}}>Accounts</span>
                  <span className="badge-pill" style={{background:'#D0EDFA',color:'#0369A1'}}>Opportunities</span>
                  <span className="badge-pill" style={{background:'#D0EDFA',color:'#0369A1'}}>Quotes</span>
                </div>
              </Link>
              <Link href="/zapier" className="int-card p-6 reveal reveal-delay-2">
                <div className="flex items-start gap-4 mb-4">
                  <div className="int-card-icon" style={{background:'#FFE0D0',border:'1.5px solid #FDBA74'}}><img src="/logos/zapier_logo.svg" alt="Zapier" className="w-full h-full object-contain p-1" /></div>
                  <div className="flex-1 min-w-0"><div className="font-bold text-base mb-0.5" style={{color:'#0B2554'}}>Zapier</div><div className="text-xs" style={{color:'#64748B'}}>Workflow automation</div></div>
                  <svg className="w-4 h-4 flex-shrink-0 mt-1" style={{color:'#1B6FD0'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{color:'#475569'}}>Connect NetSuite to thousands of apps through Zapier's automation engine — no code required.</p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="badge-pill" style={{background:'#FFE0D0',color:'#C2410C'}}>Zaps</span>
                  <span className="badge-pill" style={{background:'#FFE0D0',color:'#C2410C'}}>Triggers</span>
                  <span className="badge-pill" style={{background:'#FFE0D0',color:'#C2410C'}}>Actions</span>
                </div>
              </Link>
              <Link href="/zendesk" className="int-card p-6 reveal reveal-delay-3">
                <div className="flex items-start gap-4 mb-4">
                  <div className="int-card-icon" style={{background:'#C8EDED',border:'1.5px solid #99D6D6'}}><img src="/logos/zendesk_logo.svg" alt="Zendesk" className="w-full h-full object-contain p-1" /></div>
                  <div className="flex-1 min-w-0"><div className="font-bold text-base mb-0.5" style={{color:'#0B2554'}}>Zendesk</div><div className="text-xs" style={{color:'#64748B'}}>Customer support platform</div></div>
                  <svg className="w-4 h-4 flex-shrink-0 mt-1" style={{color:'#1B6FD0'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{color:'#475569'}}>Sync Tickets, Organizations, Agents, and End Users between Zendesk and NetSuite Cases.</p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="badge-pill" style={{background:'#C8EDED',color:'#17494D'}}>Tickets</span>
                  <span className="badge-pill" style={{background:'#C8EDED',color:'#17494D'}}>Agents</span>
                  <span className="badge-pill" style={{background:'#C8EDED',color:'#17494D'}}>Organizations</span>
                </div>
              </Link>
            </div>
          </div>
          )}

          {/* 3PL Fulfillment */}
          {showCat('3pl') && (
          <div id="cat-3pl" className="mb-8">
            <div className="flex items-center gap-3 mb-6 reveal">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center p-1" style={{background:'#EFF6FF',border:'1px solid #BFDBFE'}}><img src="/logos/Extensiv_logo.png" alt="3PL" className="w-full h-full object-contain" /></div>
              <h2 className="text-xl font-bold" style={{color:'#0B2554'}}>3PL Fulfillment</h2>
              <span className="badge-pill" style={{background:'#EEF4FF',color:'#1D4ED8'}}>7 integrations</span>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
              {[
                {href:'/extensiv', logo:'/logos/Extensiv_logo.png', iconBg:'#EFF6FF', iconBorder:'#BFDBFE', name:'Extensiv', sub:'3PL warehouse mgmt', desc:'Full WMS integration — Item Master, Sales Orders, POs, TOs, and RMAs in both directions.', badges:[{bg:'#EFF6FF',color:'#1D4ED8',label:'WMS'},{bg:'#EFF6FF',color:'#1D4ED8',label:'Bi-directional'}], delay:'reveal-delay-1'},
                {href:'/capacity-3pl', logo:'/logos/Capacity-3PL_logo.png', iconBg:'#F0FFF4', iconBorder:'#BBF7D0', name:'Capacity 3PL', sub:'Fulfillment operations', desc:'Sync outbound orders and receive fulfillment confirmations, receipts, and inventory variance.', badges:[{bg:'#F0FFF4',color:'#166534',label:'Orders'},{bg:'#F0FFF4',color:'#166534',label:'Receipts'}], delay:'reveal-delay-2'},
                {href:'/shipstation', logo:'/logos/shipstation_logo.png', iconBg:'#FFF7ED', iconBorder:'#FDBA74', name:'ShipStation', sub:'Multi-carrier shipping', desc:'Streamline shipping workflows — push orders out, pull fulfillments and cancellations back.', badges:[{bg:'#FFF7ED',color:'#C2410C',label:'Shipping'},{bg:'#FFF7ED',color:'#C2410C',label:'Labels'}], delay:'reveal-delay-3'},
                {href:'/radial', logo:'/logos/Radial_logo.png', iconBg:'#FFF5F5', iconBorder:'#FECACA', name:'Radial', sub:'B2C fulfillment partner', desc:'Enterprise B2C fulfillment with 30+ years of experience. Full order and inventory lifecycle.', badges:[{bg:'#FFF5F5',color:'#991B1B',label:'B2C'},{bg:'#FFF5F5',color:'#991B1B',label:'Enterprise'}], delay:'reveal-delay-4'},
                {href:'/idrive-fulfillment', logo:'/logos/idrive_logo.png', iconBg:'#EEF4FF', iconBorder:'#BFDBFE', name:'iDrive Fulfillment', sub:'Warehouse operations', desc:'Send Item Master, Sales Orders, POs, TOs, and RMAs — receive fulfillments, receipts, and variance.', badges:[{bg:'#EEF4FF',color:'#1D4ED8',label:'Outbound'},{bg:'#EEF4FF',color:'#1D4ED8',label:'Inbound'}], delay:'reveal-delay-5'},
                {href:'/ceva-logistics', logo:'/logos/ceva_logo.png', iconBg:'#FEF3C7', iconBorder:'#FDE68A', name:'CEVA Logistics', sub:'Global supply chain', desc:'1,300+ facilities across 170+ countries. Enterprise global logistics deeply connected to NetSuite.', badges:[{bg:'#FEF3C7',color:'#92400E',label:'Global'},{bg:'#FEF3C7',color:'#92400E',label:'Enterprise'}], delay:'reveal-delay-6'},
                {href:'/veracore', logo:'/logos/veracore_logo.png', iconBg:'#CFFAFE', iconBorder:'#A5F3FC', name:'Veracore', sub:'Cloud 3PL platform', desc:'Sync Item Master, Sales Orders, and POs. Receive fulfillments, receipts, and inventory variance.', badges:[{bg:'#CFFAFE',color:'#0E7490',label:'Cloud 3PL'},{bg:'#CFFAFE',color:'#0E7490',label:'Inventory'}], delay:'reveal-delay-1'},
              ].map(item => (
                <Link key={item.href} href={item.href} className={`int-card p-6 reveal ${item.delay}`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="int-card-icon" style={{background:item.iconBg,border:`1.5px solid ${item.iconBorder}`}}><img src={item.logo} alt={item.name} className="w-full h-full object-contain p-1" /></div>
                    <div className="flex-1 min-w-0"><div className="font-bold text-base mb-0.5" style={{color:'#0B2554'}}>{item.name}</div><div className="text-xs" style={{color:'#64748B'}}>{item.sub}</div></div>
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{color:'#475569'}}>{item.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.badges.map(b => <span key={b.label} className="badge-pill" style={{background:b.bg,color:b.color}}>{b.label}</span>)}
                  </div>
                  <div className="mt-3 flex items-center gap-1 text-xs font-semibold" style={{color:'#1B6FD0'}}>View integration <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></div>
                </Link>
              ))}
            </div>
          </div>
          )}

        </div>
      </section>

      {/* WHY NATIVE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14 reveal">
            <div className="badge-pill mb-4 mx-auto inline-flex" style={{background:'#EEF4FF',color:'#1B6FD0'}}>Why Native Integration</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.02em'}}>Built inside NetSuite.<br />Not bolted on.</h2>
            <p className="text-base leading-relaxed max-w-xl mx-auto" style={{color:'#64748B'}}>Every In8Sync integration runs as a native SuiteApp — no middleware server, no API keys to rotate, no third-party platform between you and your data.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl p-7 reveal reveal-delay-1" style={{background:'#F7F9FC',border:'1.5px solid #E8EDF5'}}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-xl" style={{background:'linear-gradient(135deg,#1B6FD0,#3B8AE0)'}}>⚡</div>
              <h3 className="font-bold text-base mb-2" style={{color:'#0B2554'}}>No Per-Transaction Fees</h3>
              <p className="text-sm leading-relaxed" style={{color:'#64748B'}}>Flat monthly pricing regardless of order volume. Scale your business without watching integration costs grow.</p>
            </div>
            <div className="rounded-2xl p-7 reveal reveal-delay-2" style={{background:'#F7F9FC',border:'1.5px solid #E8EDF5'}}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-xl" style={{background:'linear-gradient(135deg,#0B2554,#1B6FD0)'}}>🔒</div>
              <h3 className="font-bold text-base mb-2" style={{color:'#0B2554'}}>Data Never Leaves NetSuite</h3>
              <p className="text-sm leading-relaxed" style={{color:'#64748B'}}>No external servers storing your customer or financial data. Integrations run entirely within your NetSuite account.</p>
            </div>
            <div className="rounded-2xl p-7 reveal reveal-delay-3" style={{background:'#F7F9FC',border:'1.5px solid #E8EDF5'}}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-xl" style={{background:'linear-gradient(135deg,#5BB8D4,#1B6FD0)'}}>🛠️</div>
              <h3 className="font-bold text-base mb-2" style={{color:'#0B2554'}}>NetSuite-Native Customization</h3>
              <p className="text-sm leading-relaxed" style={{color:'#64748B'}}>Leverage saved searches, custom fields, workflows, and SuiteScript to tailor every integration to your exact processes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{background:'linear-gradient(135deg,#0B2554 0%,#1B3A70 50%,#0D2E6A 100%)'}}>
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center reveal">
          <div className="badge-pill mb-6 mx-auto inline-flex" style={{background:'rgba(91,184,212,.15)',color:'#5BB8D4',border:'1px solid rgba(91,184,212,.25)'}}>Ready to connect your stack?</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5" style={{letterSpacing:'-0.02em'}}>Start with one integration.<br />Scale to your entire ecosystem.</h2>
          <p className="text-base leading-relaxed mb-8 max-w-xl mx-auto" style={{color:'rgba(255,255,255,.55)'}}>Our team will map your data flows, configure the integration, and go live in days — not months.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-white font-semibold px-8 py-4 rounded-xl">Schedule a Demo</Link>
            <a href="tel:+18886044120" className="text-sm font-semibold px-8 py-4 rounded-xl flex items-center gap-2" style={{background:'rgba(255,255,255,.08)',color:'rgba(255,255,255,.8)',border:'1.5px solid rgba(255,255,255,.15)'}}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              +1 (888) 604-4120
            </a>
          </div>
          <p className="text-xs mt-5" style={{color:'rgba(255,255,255,.3)'}}>Mon – Fri, 8am – 8pm MT · No commitment required</p>
        </div>
      </section>

      <Footer />
    </>
  )
}
