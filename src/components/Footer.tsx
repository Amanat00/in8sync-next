'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy pt-16 pb-8" style={{background:'#0B2554'}}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b" style={{borderColor:'rgba(255,255,255,.08)'}}>
          <div className="col-span-2 md:col-span-1">
            <img src="/brand_assests/site_logo.png" alt="In8Sync" className="h-[72px] mb-5" />
            <p className="text-sm leading-relaxed mb-6" style={{color:'rgba(255,255,255,.4)'}}>Advanced NetSuite Integration and Automation Partner.</p>
            <div className="flex gap-3 mb-5">
              <a href="https://www.linkedin.com/company/in8sync/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-200" style={{background:'rgba(255,255,255,.07)',color:'rgba(255,255,255,.5)'}}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background='rgba(27,111,208,.4)'; (e.currentTarget as HTMLElement).style.color='white' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background='rgba(255,255,255,.07)'; (e.currentTarget as HTMLElement).style.color='rgba(255,255,255,.5)' }}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://www.youtube.com/@in8sync" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-200" style={{background:'rgba(255,255,255,.07)',color:'rgba(255,255,255,.5)'}}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background='rgba(255,0,0,.4)'; (e.currentTarget as HTMLElement).style.color='white' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background='rgba(255,255,255,.07)'; (e.currentTarget as HTMLElement).style.color='rgba(255,255,255,.5)' }}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
              </a>
              <a href="mailto:sales@in8sync.com" className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-200" style={{background:'rgba(255,255,255,.07)',color:'rgba(255,255,255,.5)'}}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background='rgba(234,67,53,.4)'; (e.currentTarget as HTMLElement).style.color='white' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background='rgba(255,255,255,.07)'; (e.currentTarget as HTMLElement).style.color='rgba(255,255,255,.5)' }}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
              </a>
            </div>
            <a href="https://sphericalbrm.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl" style={{background:'rgba(255,255,255,.06)',border:'1px solid rgba(255,255,255,.1)'}}>
              <span className="text-xs font-semibold" style={{color:'rgba(255,255,255,.5)'}}>Powered by</span>
              <span className="text-xs font-bold" style={{color:'rgba(91,184,212,.8)'}}>Spherical BRM</span>
            </a>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-5">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm transition-colors duration-200 hover:text-white" style={{color:'rgba(255,255,255,.4)'}}>About Us</Link></li>
              <li><Link href="/contact" className="text-sm transition-colors duration-200 hover:text-white" style={{color:'rgba(255,255,255,.4)'}}>Support</Link></li>
              <li><Link href="/contact" className="text-sm transition-colors duration-200 hover:text-white" style={{color:'rgba(255,255,255,.4)'}}>Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-5">Products</h4>
            <ul className="space-y-3">
              <li><Link href="/amazon-seller-central" className="text-sm transition-colors duration-200 hover:text-white" style={{color:'rgba(255,255,255,.4)'}}>Amazon Seller Central</Link></li>
              <li><Link href="/amazon-vendor-central" className="text-sm transition-colors duration-200 hover:text-white" style={{color:'rgba(255,255,255,.4)'}}>Amazon Vendor Central</Link></li>
              <li><Link href="/shopify" className="text-sm transition-colors duration-200 hover:text-white" style={{color:'rgba(255,255,255,.4)'}}>Shopify DirectConnect</Link></li>
              <li><Link href="/woocommerce" className="text-sm transition-colors duration-200 hover:text-white" style={{color:'rgba(255,255,255,.4)'}}>WooCommerce DirectConnect</Link></li>
              <li><Link href="/squarespace" className="text-sm transition-colors duration-200 hover:text-white" style={{color:'rgba(255,255,255,.4)'}}>Squarespace DirectConnect</Link></li>
              <li><Link href="/ebay" className="text-sm transition-colors duration-200 hover:text-white" style={{color:'rgba(255,255,255,.4)'}}>eBay DirectConnect</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{color:'#5BB8D4'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span className="text-sm" style={{color:'rgba(255,255,255,.5)'}}>+1 (888) 604-4120</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{color:'#5BB8D4'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <span className="text-sm" style={{color:'rgba(255,255,255,.5)'}}>sales@in8sync.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{color:'#5BB8D4'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span className="text-sm" style={{color:'rgba(255,255,255,.5)'}}>600 Rood Ave, Grand Junction, CO 81501, United States</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{color:'rgba(255,255,255,.25)'}}>© 2024 In8Sync. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs transition-colors hover:text-white" style={{color:'rgba(255,255,255,.25)'}}>Privacy Policy</a>
            <div className="flex items-center gap-2">
              <div className="text-xs px-2.5 py-1 rounded" style={{background:'rgba(91,184,212,.1)',color:'#5BB8D4',border:'1px solid rgba(91,184,212,.2)',fontSize:'10px',fontWeight:600}}>SuiteCloud Certified</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
