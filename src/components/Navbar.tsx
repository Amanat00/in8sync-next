'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [intOpen, setIntOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const pathname = usePathname()

  const isHome = pathname === '/'
  const isAbout = pathname === '/about'
  const isContact = pathname === '/contact'
  const isIntegration = !isHome && !isAbout && !isContact

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return
      if (window.scrollY > 60) {
        navRef.current.style.background = 'rgba(7,18,32,0.98)'
        navRef.current.style.borderBottomColor = 'rgba(91,184,212,.18)'
      } else {
        navRef.current.style.background = 'rgba(7,18,32,0.92)'
        navRef.current.style.borderBottomColor = 'rgba(91,184,212,.12)'
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50">
        <nav ref={navRef} className="px-6 md:px-12 py-4 transition-all duration-300" style={{background:'rgba(7,18,32,0.92)',backdropFilter:'blur(20px)',borderBottom:'1px solid rgba(91,184,212,.12)'}}>
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 group">
              <img src="/brand_assests/image (6).png" alt="In8Sync" className="h-[56px] w-auto transition-transform duration-300 group-hover:scale-105" />
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className={`text-sm font-semibold transition-colors duration-200${isHome ? '' : ' text-white/80 hover:text-white'}`} style={isHome ? {color:'#5BB8D4'} : undefined}>Home</Link>

              {/* MEGA MENU */}
              <div className="mega-group">
                <button className={`text-sm font-medium flex items-center gap-1.5 transition-colors duration-200 py-2${isIntegration ? '' : ' text-white/80 hover:text-white'}`} style={isIntegration ? {color:'#5BB8D4'} : undefined}>
                  NetSuite Integrations
                  <svg className="mega-arrow w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7"/></svg>
                </button>
                <div className="mega-panel">
                  <div className="mega-inner">
                    {/* eCommerce */}
                    <div className="mega-col">
                      <p className="mega-cat">eCommerce</p>
                      <Link href="/shopify" className="mega-link">
                        <span className="mega-link-icon" style={{background:'#F0F9FF'}}><img src="/logos/shopify_logo.png" alt="Shopify" style={{width:'16px',height:'16px',objectFit:'contain'}} /></span> Shopify
                      </Link>
                      <Link href="/woocommerce" className="mega-link">
                        <span className="mega-link-icon" style={{background:'#F5F0FF'}}><img src="/logos/woocommerce_logo.svg" alt="WooCommerce" style={{width:'16px',height:'16px',objectFit:'contain'}} /></span> WooCommerce
                      </Link>
                      <Link href="/squarespace" className="mega-link">
                        <span className="mega-link-icon" style={{background:'#F0FFF4'}}><img src="/logos/squarespace_logo.png" alt="Squarespace" style={{width:'16px',height:'16px',objectFit:'contain'}} /></span> Squarespace
                      </Link>
                    </div>
                    {/* Marketplaces */}
                    <div className="mega-col">
                      <p className="mega-cat">Marketplaces</p>
                      <Link href="/amazon-seller-central" className="mega-link">
                        <span className="mega-link-icon" style={{background:'#FFFBEB'}}><img src="/logos/Amazon-Seller-Central_logo.png" alt="Amazon Seller Central" style={{width:'16px',height:'16px',objectFit:'contain'}} /></span> Amazon Seller Central
                      </Link>
                      <Link href="/amazon-vendor-central" className="mega-link">
                        <span className="mega-link-icon" style={{background:'#FFF7ED'}}><img src="/logos/Amazon-Vendor-Central_logo.png" alt="Amazon Vendor Central" style={{width:'16px',height:'16px',objectFit:'contain'}} /></span> Amazon Vendor Central
                      </Link>
                      <Link href="/ebay" className="mega-link">
                        <span className="mega-link-icon" style={{background:'#EFF6FF'}}><img src="/logos/eBay_logo.png" alt="eBay" style={{width:'16px',height:'16px',objectFit:'contain'}} /></span> eBay
                      </Link>
                    </div>
                    {/* CRM */}
                    <div className="mega-col">
                      <p className="mega-cat">CRM</p>
                      <Link href="/salesforce" className="mega-link">
                        <span className="mega-link-icon" style={{background:'#EFF6FF'}}><img src="/logos/Salesforce_logo.png" alt="Salesforce" style={{width:'16px',height:'16px',objectFit:'contain'}} /></span> Salesforce
                      </Link>
                      <Link href="/zapier" className="mega-link">
                        <span className="mega-link-icon" style={{background:'#FFF5F5'}}><img src="/logos/zapier_logo.svg" alt="Zapier" style={{width:'16px',height:'16px',objectFit:'contain'}} /></span> Zapier
                      </Link>
                      <Link href="/zendesk" className="mega-link">
                        <span className="mega-link-icon" style={{background:'#F0FDF4'}}><img src="/logos/zendesk_logo.svg" alt="Zendesk" style={{width:'16px',height:'16px',objectFit:'contain'}} /></span> Zendesk
                      </Link>
                    </div>
                    {/* 3PL */}
                    <div className="mega-col">
                      <p className="mega-cat">3PL Fulfillment</p>
                      <Link href="/extensiv" className="mega-link">
                        <span className="mega-link-icon" style={{background:'#EFF6FF'}}><img src="/logos/Extensiv_logo.png" alt="Extensiv" style={{width:'16px',height:'16px',objectFit:'contain'}} /></span> Extensiv
                      </Link>
                      <Link href="/capacity-3pl" className="mega-link">
                        <span className="mega-link-icon" style={{background:'#F0FFF4'}}><img src="/logos/Capacity-3PL_logo.png" alt="Capacity 3PL" style={{width:'16px',height:'16px',objectFit:'contain'}} /></span> Capacity 3PL
                      </Link>
                      <Link href="/shipstation" className="mega-link">
                        <span className="mega-link-icon" style={{background:'#FFFBEB'}}><img src="/logos/shipstation_logo.png" alt="ShipStation" style={{width:'16px',height:'16px',objectFit:'contain'}} /></span> ShipStation
                      </Link>
                      <Link href="/radial" className="mega-link">
                        <span className="mega-link-icon" style={{background:'#FFF5F5'}}><img src="/logos/Radial_logo.png" alt="Radial" style={{width:'16px',height:'16px',objectFit:'contain'}} /></span> Radial
                      </Link>
                      <Link href="/idrive-fulfillment" className="mega-link">
                        <span className="mega-link-icon" style={{background:'#F5F0FF'}}><img src="/logos/idrive_logo.png" alt="iDrive Fulfillment" style={{width:'16px',height:'16px',objectFit:'contain'}} /></span> iDrive Fulfillment
                      </Link>
                      <Link href="/ceva-logistics" className="mega-link">
                        <span className="mega-link-icon" style={{background:'#F0FFF4'}}><img src="/logos/ceva_logo.png" alt="CEVA Logistics" style={{width:'16px',height:'16px',objectFit:'contain'}} /></span> CEVA Logistics
                      </Link>
                      <Link href="/veracore" className="mega-link">
                        <span className="mega-link-icon" style={{background:'#EFF6FF'}}><img src="/logos/veracore_logo.png" alt="Veracore" style={{width:'16px',height:'16px',objectFit:'contain'}} /></span> Veracore
                      </Link>
                    </div>
                    {/* Footer row */}
                    <div className="mega-footer">
                      <span className="text-xs text-gray-400">All integrations natively built inside NetSuite — no iPaaS</span>
                      <Link href="/integrations" className="text-xs font-semibold flex items-center gap-1 transition-colors" style={{color:'#1B6FD0'}}>
                        View all integrations
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/about" className={`text-sm font-medium transition-colors duration-200${isAbout ? '' : ' text-white/80 hover:text-white'}`} style={isAbout ? {color:'#5BB8D4'} : undefined}>About</Link>
              <Link href="/contact" className={`text-sm font-medium transition-colors duration-200${isContact ? '' : ' text-white/80 hover:text-white'}`} style={isContact ? {color:'#5BB8D4'} : undefined}>Contact</Link>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <a href="https://account.in8sync.com/" className="btn-outline text-white text-sm font-semibold px-7 py-3.5 rounded-xl">Sign In</a>
            </div>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`} style={{overflowY:'auto'}}>
        <button onClick={() => setMobileOpen(false)} className="absolute top-6 right-6 text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
        <img src="/brand_assests/image (6).png" alt="In8Sync" className="h-[56px] mb-6" />

        <Link href="/" onClick={() => setMobileOpen(false)} className="text-white text-xl font-medium">Home</Link>

        {/* INTEGRATIONS ACCORDION */}
        <div>
          <button onClick={() => setIntOpen(!intOpen)} className="w-full flex items-center justify-between text-white text-xl font-medium py-1">
            NetSuite Integrations
            <svg className="w-5 h-5 transition-transform duration-300" style={{transform: intOpen ? 'rotate(180deg)' : 'rotate(0deg)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
          </button>
          {intOpen && (
            <div className="mt-3 ml-2 space-y-4 pb-2">
              {/* eCommerce */}
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{color:'#5BB8D4'}}>eCommerce</p>
                <div className="space-y-1">
                  <Link href="/shopify" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 py-1.5 text-sm font-medium" style={{color:'rgba(255,255,255,.85)'}}>
                    <span className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 bg-white p-1"><img src="/logos/shopify_logo.png" alt="Shopify" className="w-full h-full object-contain" /></span> Shopify
                  </Link>
                  <Link href="/woocommerce" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 py-1.5 text-sm font-medium" style={{color:'rgba(255,255,255,.85)'}}>
                    <span className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 bg-white p-1"><img src="/logos/woocommerce_logo.svg" alt="WooCommerce" className="w-full h-full object-contain" /></span> WooCommerce
                  </Link>
                  <Link href="/squarespace" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 py-1.5 text-sm font-medium" style={{color:'rgba(255,255,255,.85)'}}>
                    <span className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 bg-white p-1"><img src="/logos/squarespace_logo.png" alt="Squarespace" className="w-full h-full object-contain" /></span> Squarespace
                  </Link>
                </div>
              </div>
              {/* Marketplaces */}
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{color:'#5BB8D4'}}>Marketplaces</p>
                <div className="space-y-1">
                  <Link href="/amazon-seller-central" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 py-1.5 text-sm font-medium" style={{color:'rgba(255,255,255,.85)'}}>
                    <span className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 bg-white p-1"><img src="/logos/Amazon-Seller-Central_logo.png" alt="Amazon Seller Central" className="w-full h-full object-contain" /></span> Amazon Seller Central
                  </Link>
                  <Link href="/amazon-vendor-central" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 py-1.5 text-sm font-medium" style={{color:'rgba(255,255,255,.85)'}}>
                    <span className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 bg-white p-1"><img src="/logos/Amazon-Vendor-Central_logo.png" alt="Amazon Vendor Central" className="w-full h-full object-contain" /></span> Amazon Vendor Central
                  </Link>
                  <Link href="/ebay" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 py-1.5 text-sm font-medium" style={{color:'rgba(255,255,255,.85)'}}>
                    <span className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 bg-white p-1"><img src="/logos/eBay_logo.png" alt="eBay" className="w-full h-full object-contain" /></span> eBay
                  </Link>
                </div>
              </div>
              {/* CRM */}
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{color:'#5BB8D4'}}>CRM</p>
                <div className="space-y-1">
                  <Link href="/salesforce" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 py-1.5 text-sm font-medium" style={{color:'rgba(255,255,255,.85)'}}>
                    <span className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 bg-white p-1"><img src="/logos/Salesforce_logo.png" alt="Salesforce" className="w-full h-full object-contain" /></span> Salesforce
                  </Link>
                  <Link href="/zapier" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 py-1.5 text-sm font-medium" style={{color:'rgba(255,255,255,.85)'}}>
                    <span className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 bg-white p-1"><img src="/logos/zapier_logo.svg" alt="Zapier" className="w-full h-full object-contain" /></span> Zapier
                  </Link>
                  <Link href="/zendesk" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 py-1.5 text-sm font-medium" style={{color:'rgba(255,255,255,.85)'}}>
                    <span className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 bg-white p-1"><img src="/logos/zendesk_logo.svg" alt="Zendesk" className="w-full h-full object-contain" /></span> Zendesk
                  </Link>
                </div>
              </div>
              {/* 3PL */}
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{color:'#5BB8D4'}}>3PL Fulfillment</p>
                <div className="space-y-1">
                  <Link href="/extensiv" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 py-1.5 text-sm font-medium" style={{color:'rgba(255,255,255,.85)'}}>
                    <span className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 bg-white p-1"><img src="/logos/Extensiv_logo.png" alt="Extensiv" className="w-full h-full object-contain" /></span> Extensiv
                  </Link>
                  <Link href="/capacity-3pl" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 py-1.5 text-sm font-medium" style={{color:'rgba(255,255,255,.85)'}}>
                    <span className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 bg-white p-1"><img src="/logos/Capacity-3PL_logo.png" alt="Capacity 3PL" className="w-full h-full object-contain" /></span> Capacity 3PL
                  </Link>
                  <Link href="/shipstation" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 py-1.5 text-sm font-medium" style={{color:'rgba(255,255,255,.85)'}}>
                    <span className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 bg-white p-1"><img src="/logos/shipstation_logo.png" alt="ShipStation" className="w-full h-full object-contain" /></span> ShipStation
                  </Link>
                  <Link href="/radial" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 py-1.5 text-sm font-medium" style={{color:'rgba(255,255,255,.85)'}}>
                    <span className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 bg-white p-1"><img src="/logos/Radial_logo.png" alt="Radial" className="w-full h-full object-contain" /></span> Radial
                  </Link>
                  <Link href="/idrive-fulfillment" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 py-1.5 text-sm font-medium" style={{color:'rgba(255,255,255,.85)'}}>
                    <span className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 bg-white p-1"><img src="/logos/idrive_logo.png" alt="iDrive Fulfillment" className="w-full h-full object-contain" /></span> iDrive Fulfillment
                  </Link>
                  <Link href="/ceva-logistics" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 py-1.5 text-sm font-medium" style={{color:'rgba(255,255,255,.85)'}}>
                    <span className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 bg-white p-1"><img src="/logos/ceva_logo.png" alt="CEVA Logistics" className="w-full h-full object-contain" /></span> CEVA Logistics
                  </Link>
                  <Link href="/veracore" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 py-1.5 text-sm font-medium" style={{color:'rgba(255,255,255,.85)'}}>
                    <span className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 bg-white p-1"><img src="/logos/veracore_logo.png" alt="Veracore" className="w-full h-full object-contain" /></span> Veracore
                  </Link>
                </div>
              </div>
              <Link href="/integrations" onClick={() => setMobileOpen(false)} className="inline-flex items-center gap-1.5 text-xs font-semibold" style={{color:'#5BB8D4'}}>
                View all integrations <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
              </Link>
            </div>
          )}
        </div>

        <Link href="/about" onClick={() => setMobileOpen(false)} className="text-white text-xl font-medium">About</Link>
        <Link href="/contact" onClick={() => setMobileOpen(false)} className="text-white text-xl font-medium">Contact</Link>
        <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-primary text-white text-base font-semibold px-10 py-4 rounded-2xl mt-4">Request Demo</Link>
      </div>
    </>
  )
}
