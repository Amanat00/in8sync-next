'use client'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'

export default function ZendeskPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero-zd min-h-[calc(100vh-30px)] flex items-center pt-[65px] pb-4 relative overflow-hidden" style={{isolation:'isolate'}}>
        <div className="absolute inset-0 grid-lines opacity-60 z-10 pointer-events-none"></div>
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute top-16 right-8 w-96 h-96 rounded-full animate-float" style={{background:'radial-gradient(circle,rgba(58,191,191,.12) 0%,transparent 70%)'}}></div>
          <div className="absolute top-1/3 right-1/4"><div className="w-3 h-3 rounded-full" style={{background:'#3ABFBF'}}></div><div className="absolute inset-0 rounded-full" style={{background:'#3ABFBF',animation:'pulse-ring 2.8s ease-out infinite',opacity:.4}}></div></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 w-full relative z-20">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div style={{animation:'slide-up .9s cubic-bezier(.23,1,.32,1) both'}}>
              <div className="flex items-center gap-2 mb-6">
                <Link href="/" className="text-xs font-medium" style={{color:'rgba(255,255,255,.4)'}}>Home</Link>
                <svg className="w-3 h-3" style={{color:'rgba(255,255,255,.25)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                <span className="text-xs font-medium" style={{color:'rgba(255,255,255,.4)'}}>CRM</span>
                <svg className="w-3 h-3" style={{color:'rgba(255,255,255,.25)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                <span className="text-xs font-semibold" style={{color:'#3ABFBF'}}>Zendesk</span>
              </div>
              <div className="inline-flex items-center gap-2.5 mb-7 px-4 py-2 rounded-full border" style={{background:'rgba(58,191,191,.1)',borderColor:'rgba(58,191,191,.3)'}}>
                <span className="text-lg">🎧</span>
                <span className="text-xs font-semibold tracking-widest uppercase" style={{color:'#3ABFBF'}}>Zendesk DirectConnect</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{letterSpacing:'-0.03em',lineHeight:1.08}}>
                Directly Connecting<br />
                <span className="zd-text">NetSuite &amp; Zendesk</span>
              </h1>
              <p className="text-lg mb-8" style={{color:'rgba(255,255,255,.78)',lineHeight:1.75}}>In8Sync DirectConnect — the only native NetSuite integration that fully syncs your Zendesk support operations with NetSuite ERP. Save TIME, MONEY, and EXPERTISE.</p>
              <div className="grid grid-cols-3 gap-4 mb-10">
                <div className="rounded-2xl p-4 text-center" style={{background:'rgba(58,191,191,.08)',border:'1px solid rgba(58,191,191,.2)'}}>
                  <div className="text-2xl font-bold mb-1" style={{color:'#3ABFBF'}}>TIME</div>
                  <div className="text-xs" style={{color:'rgba(255,255,255,.55)'}}>Eliminate manual data entry across systems</div>
                </div>
                <div className="rounded-2xl p-4 text-center" style={{background:'rgba(58,191,191,.08)',border:'1px solid rgba(58,191,191,.2)'}}>
                  <div className="text-2xl font-bold mb-1" style={{color:'#3ABFBF'}}>MONEY</div>
                  <div className="text-xs" style={{color:'rgba(255,255,255,.55)'}}>Reduce errors that cost real dollars</div>
                </div>
                <div className="rounded-2xl p-4 text-center" style={{background:'rgba(58,191,191,.08)',border:'1px solid rgba(58,191,191,.2)'}}>
                  <div className="text-2xl font-bold mb-1" style={{color:'#3ABFBF'}}>EXPERTISE</div>
                  <div className="text-xs" style={{color:'rgba(255,255,255,.55)'}}>No developers or middleware required</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-zd text-white font-bold px-7 py-3.5 rounded-xl text-sm">Schedule A Demo</Link>
                <a href="#flows" className="btn-outline-white btn-outline-white-zd text-white font-semibold px-6 py-3.5 rounded-xl text-sm">Data Flows</a>
                <a href="#features" className="btn-outline-white btn-outline-white-zd text-white font-semibold px-6 py-3.5 rounded-xl text-sm">Features</a>
                <Link href="/integrations" className="btn-outline-white btn-outline-white-zd text-white font-semibold px-6 py-3.5 rounded-xl text-sm inline-flex items-center gap-2">See All Bundles <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></Link>
              </div>
            </div>
            <div className="relative flex justify-center" style={{animation:'fade-in 1.2s ease both .4s',opacity:0}}>
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 rounded-3xl blur-3xl" style={{background:'linear-gradient(135deg,rgba(23,73,77,.25),rgba(27,111,208,.12))'}}></div>
                <div className="relative rounded-3xl p-8 border" style={{background:'rgba(255,255,255,.03)',borderColor:'rgba(58,191,191,.18)',backdropFilter:'blur(10px)',boxShadow:'0 24px 64px rgba(0,0,0,.4)'}}>
                  <div className="flex flex-col items-center justify-center" style={{height:'300px'}}>
                    <div className="rounded-2xl flex items-center justify-center p-6" style={{background:'white',width:'220px',height:'140px'}}>
                      <img src="/brand_assests/Zendesk.png" alt="Zendesk Logo" style={{maxWidth:'180px',maxHeight:'100px',objectFit:'contain'}} />
                    </div>
                    <div style={{fontSize:'12px',color:'rgba(255,255,255,.4)',marginTop:'12px'}}>NetSuite Integration</div>
                  </div>
                </div>
                <div className="absolute -top-4 -left-6 bg-white rounded-2xl px-4 py-3 shadow-2xl card-lift">
                  <div className="flex items-center gap-2.5"><div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#17494D,#1E6166)'}}><span className="text-white text-sm">🎧</span></div><div><div className="text-xs font-bold text-navy">Tickets → Cases</div><div className="text-[10px] text-gray-400">Real-Time Sync</div></div></div>
                </div>
                <div className="absolute -bottom-4 -right-6 bg-white rounded-2xl px-4 py-3 shadow-2xl card-lift">
                  <div className="flex items-center gap-2.5"><div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#059669,#10B981)'}}><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg></div><div><div className="text-xs font-bold text-navy">Bi-Directional</div><div className="text-[10px] text-gray-400">Full Groups Sync</div></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MIDDLEWARE */}
      <section className="py-16" style={{background:'#03363D'}}>
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-4" style={{letterSpacing:'-0.02em'}}>No External Platform or Middleware</h2>
              <p className="text-white/80 text-sm leading-relaxed mb-3">While many other solutions run on an External Platform, also known as Middleware, In8Sync&apos;s Zendesk DirectConnect bundle is natively built into and fully hosted in NetSuite.</p>
              <p className="text-white/80 text-sm leading-relaxed mb-3">In8Sync&apos;s efficient approach dramatically reduces the <strong className="text-white">TIME</strong> and <strong className="text-white">SKILL</strong> required to manage, saving your business <strong className="text-white">MONEY</strong> and <strong className="text-white">RESOURCES</strong>.</p>
              <p className="text-white/80 text-sm leading-relaxed">No iPaaS. No middleware. No extra licensing. Just a native NetSuite integration.</p>
            </div>
            <div className="flex-shrink-0">
              <div className="relative w-48 h-48 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full flex items-center justify-center border-4 border-white/30" style={{background:'rgba(255,255,255,.1)'}}>
                  <div className="text-center">
                    <div className="text-white font-bold text-xl mb-1">Middleware</div>
                    <div className="text-white/60 text-xs">External Platform</div>
                  </div>
                </div>
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 192 192" fill="none">
                  <line x1="30" y1="30" x2="162" y2="162" stroke="white" strokeWidth={8} strokeLinecap="round" />
                  <line x1="162" y1="30" x2="30" y2="162" stroke="white" strokeWidth={8} strokeLinecap="round" />
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
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#17494D'}}>Why DirectConnect</p>
            <h2 className="text-4xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>What You Gain with<br />Zendesk DirectConnect</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 card-lift reveal" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{background:'linear-gradient(135deg,#17494D,#1E6166)',boxShadow:'0 4px 16px rgba(23,73,77,.3)'}}><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg></div>
              <h3 className="font-bold text-sm mb-2" style={{color:'#0B2554'}}>Real-Time Sync</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Tickets, customers, agents, and cases stay in sync the moment data changes — no batch delays.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 card-lift reveal reveal-delay-1" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{background:'linear-gradient(135deg,#17494D,#1E6166)',boxShadow:'0 4px 16px rgba(23,73,77,.3)'}}><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg></div>
              <h3 className="font-bold text-sm mb-2" style={{color:'#0B2554'}}>True Bi-Directional</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Data flows both ways — Zendesk to NetSuite and back. Changes in either system are instantly reflected.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 card-lift reveal reveal-delay-2" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{background:'linear-gradient(135deg,#17494D,#1E6166)',boxShadow:'0 4px 16px rgba(23,73,77,.3)'}}><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg></div>
              <h3 className="font-bold text-sm mb-2" style={{color:'#0B2554'}}>Native NetSuite</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Built directly inside NetSuite — no third-party middleware, no iPaaS overhead, no extra licensing.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 card-lift reveal reveal-delay-3" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{background:'linear-gradient(135deg,#17494D,#1E6166)',boxShadow:'0 4px 16px rgba(23,73,77,.3)'}}><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg></div>
              <h3 className="font-bold text-sm mb-2" style={{color:'#0B2554'}}>Full Team Visibility</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Agents, employees, and customers are always up to date — your whole team works from a single source of truth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DATA FLOWS */}
      <section id="flows" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#17494D'}}>Integration Architecture</p>
            <h2 className="text-4xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>Complete Data Flow Map</h2>
            <p className="text-gray-500 text-sm leading-relaxed">Every record type that flows between Zendesk and NetSuite — inbound, outbound, and bi-directional.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* Inbound */}
            <div className="reveal">
              <div className="flex items-center gap-3 mb-5 p-4 rounded-2xl" style={{background:'linear-gradient(135deg,rgba(23,73,77,.07),rgba(58,191,191,.05))',border:'1.5px solid rgba(23,73,77,.15)'}}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:'linear-gradient(135deg,#17494D,#1E6166)'}}><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg></div>
                <div><div className="text-xs font-bold" style={{color:'#17494D'}}>Inbound</div><div className="text-[11px] text-gray-400">Zendesk → NetSuite</div></div>
              </div>
              <div className="space-y-3">
                <div className="flow-card flow-card-zd reveal reveal-delay-1">
                  <div className="flex items-center gap-3">
                    <div className="flow-arrow" style={{background:'rgba(23,73,77,.1)'}}><span className="text-sm">🏢</span></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-semibold" style={{color:'#17494D'}}>Organizations</span>
                        <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                        <span className="text-xs font-semibold" style={{color:'#0B2554'}}>Customers</span>
                      </div>
                      <p className="text-[11px] text-gray-400 mt-0.5">Zendesk organizations sync as NetSuite customers</p>
                    </div>
                  </div>
                </div>
                <div className="flow-card flow-card-zd reveal reveal-delay-2">
                  <div className="flex items-center gap-3">
                    <div className="flow-arrow" style={{background:'rgba(23,73,77,.1)'}}><span className="text-sm">👤</span></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-semibold" style={{color:'#17494D'}}>End Users</span>
                        <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                        <span className="text-xs font-semibold" style={{color:'#0B2554'}}>Contacts / Customers</span>
                      </div>
                      <p className="text-[11px] text-gray-400 mt-0.5">End users map to NetSuite contacts or customers</p>
                    </div>
                  </div>
                </div>
                <div className="flow-card flow-card-zd reveal reveal-delay-3">
                  <div className="flex items-center gap-3">
                    <div className="flow-arrow" style={{background:'rgba(23,73,77,.1)'}}><span className="text-sm">🧑‍💼</span></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-semibold" style={{color:'#17494D'}}>Agents</span>
                        <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                        <span className="text-xs font-semibold" style={{color:'#0B2554'}}>Employees</span>
                      </div>
                      <p className="text-[11px] text-gray-400 mt-0.5">Zendesk agents become NetSuite employee records</p>
                    </div>
                  </div>
                </div>
                <div className="flow-card flow-card-zd reveal">
                  <div className="flex items-center gap-3">
                    <div className="flow-arrow" style={{background:'rgba(23,73,77,.1)'}}><span className="text-sm">🎫</span></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-semibold" style={{color:'#17494D'}}>Tickets</span>
                        <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                        <span className="text-xs font-semibold" style={{color:'#0B2554'}}>Cases</span>
                      </div>
                      <p className="text-[11px] text-gray-400 mt-0.5">Support tickets sync as cases in NetSuite CRM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Outbound */}
            <div className="reveal reveal-delay-1">
              <div className="flex items-center gap-3 mb-5 p-4 rounded-2xl" style={{background:'linear-gradient(135deg,rgba(27,111,208,.07),rgba(91,184,212,.05))',border:'1.5px solid rgba(27,111,208,.15)'}}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:'linear-gradient(135deg,#1B6FD0,#3B8AE0)'}}><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg></div>
                <div><div className="text-xs font-bold" style={{color:'#1B6FD0'}}>Outbound</div><div className="text-[11px] text-gray-400">NetSuite → Zendesk</div></div>
              </div>
              <div className="space-y-3">
                <div className="flow-card flow-card-zd reveal reveal-delay-1">
                  <div className="flex items-center gap-3">
                    <div className="flow-arrow" style={{background:'rgba(27,111,208,.1)'}}><span className="text-sm">🏢</span></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-semibold" style={{color:'#1B6FD0'}}>Customers</span>
                        <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                        <span className="text-xs font-semibold" style={{color:'#0B2554'}}>End Users</span>
                      </div>
                      <p className="text-[11px] text-gray-400 mt-0.5">NetSuite customers push to Zendesk as end users</p>
                    </div>
                  </div>
                </div>
                <div className="flow-card flow-card-zd reveal reveal-delay-2">
                  <div className="flex items-center gap-3">
                    <div className="flow-arrow" style={{background:'rgba(27,111,208,.1)'}}><span className="text-sm">🧑‍💼</span></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-semibold" style={{color:'#1B6FD0'}}>Employees</span>
                        <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                        <span className="text-xs font-semibold" style={{color:'#0B2554'}}>Agents</span>
                      </div>
                      <p className="text-[11px] text-gray-400 mt-0.5">Employee records create and update Zendesk agents</p>
                    </div>
                  </div>
                </div>
                <div className="flow-card flow-card-zd reveal reveal-delay-3">
                  <div className="flex items-center gap-3">
                    <div className="flow-arrow" style={{background:'rgba(27,111,208,.1)'}}><span className="text-sm">📋</span></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-semibold" style={{color:'#1B6FD0'}}>Cases</span>
                        <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                        <span className="text-xs font-semibold" style={{color:'#0B2554'}}>Tickets</span>
                      </div>
                      <p className="text-[11px] text-gray-400 mt-0.5">NetSuite cases push back as Zendesk support tickets</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bi-directional */}
            <div className="reveal reveal-delay-2">
              <div className="flex items-center gap-3 mb-5 p-4 rounded-2xl" style={{background:'linear-gradient(135deg,rgba(91,184,212,.1),rgba(58,191,191,.06))',border:'1.5px solid rgba(91,184,212,.25)'}}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:'linear-gradient(135deg,#5BB8D4,#3ABFBF)'}}><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg></div>
                <div><div className="text-xs font-bold" style={{color:'#5BB8D4'}}>Bi-Directional</div><div className="text-[11px] text-gray-400">Zendesk ↔ NetSuite</div></div>
              </div>
              <div className="space-y-3">
                <div className="flow-card flow-card-zd reveal reveal-delay-1" style={{borderColor:'rgba(91,184,212,.3)',background:'linear-gradient(135deg,rgba(91,184,212,.03),rgba(58,191,191,.02))'}}>
                  <div className="flex items-center gap-3">
                    <div className="flow-arrow" style={{background:'rgba(91,184,212,.15)'}}><span className="text-sm">👥</span></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-semibold" style={{color:'#17494D'}}>Groups</span>
                        <svg className="w-3 h-3" style={{color:'#5BB8D4'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
                        <span className="text-xs font-semibold" style={{color:'#0B2554'}}>Groups</span>
                      </div>
                      <p className="text-[11px] text-gray-400 mt-0.5">Group records sync both ways in real time</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Summary stats */}
              <div className="mt-6 rounded-2xl p-5" style={{background:'linear-gradient(135deg,#17494D,#0f3336)',boxShadow:'0 8px 30px rgba(23,73,77,.3)'}}>
                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{color:'#3ABFBF'}}>Record Summary</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/60">Inbound flows</span>
                    <span className="text-xs font-bold text-white">4 record types</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/60">Outbound flows</span>
                    <span className="text-xs font-bold text-white">3 record types</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/60">Bi-directional</span>
                    <span className="text-xs font-bold text-white">1 record type</span>
                  </div>
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-semibold text-white/70">Total synced records</span>
                    <span className="text-sm font-bold" style={{color:'#3ABFBF'}}>8 types</span>
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
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#17494D'}}>Platform Capabilities</p>
            <h2 className="text-4xl font-bold mb-4" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>Everything Included<br />Out of the Box</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="feat-card feat-card-zd reveal">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{background:'rgba(23,73,77,.1)'}}><svg className="w-4 h-4" style={{color:'#17494D'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg></div>
              <h3 className="font-bold text-sm mb-1.5" style={{color:'#0B2554'}}>Real-Time Event Triggers</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Webhooks fire instantly on create, update, or status change in either system.</p>
            </div>
            <div className="feat-card feat-card-zd reveal reveal-delay-1">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{background:'rgba(23,73,77,.1)'}}><svg className="w-4 h-4" style={{color:'#17494D'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg></div>
              <h3 className="font-bold text-sm mb-1.5" style={{color:'#0B2554'}}>Custom Field Mapping</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Map any Zendesk custom field to any NetSuite field — no hard-coded limits.</p>
            </div>
            <div className="feat-card feat-card-zd reveal reveal-delay-2">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{background:'rgba(23,73,77,.1)'}}><svg className="w-4 h-4" style={{color:'#17494D'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
              <h3 className="font-bold text-sm mb-1.5" style={{color:'#0B2554'}}>Error Handling &amp; Retry</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Automatic retry logic with detailed error logging inside NetSuite&apos;s native dashboard.</p>
            </div>
            <div className="feat-card feat-card-zd reveal">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{background:'rgba(23,73,77,.1)'}}><svg className="w-4 h-4" style={{color:'#17494D'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg></div>
              <h3 className="font-bold text-sm mb-1.5" style={{color:'#0B2554'}}>Conditional Sync Rules</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Only sync records that match your criteria — filter by ticket type, status, org, and more.</p>
            </div>
            <div className="feat-card feat-card-zd reveal reveal-delay-1">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{background:'rgba(23,73,77,.1)'}}><svg className="w-4 h-4" style={{color:'#17494D'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg></div>
              <h3 className="font-bold text-sm mb-1.5" style={{color:'#0B2554'}}>Multi-Brand Support</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Run multiple Zendesk brands or accounts synced into one or multiple NetSuite subsidiaries.</p>
            </div>
            <div className="feat-card feat-card-zd reveal reveal-delay-2">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{background:'rgba(23,73,77,.1)'}}><svg className="w-4 h-4" style={{color:'#17494D'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg></div>
              <h3 className="font-bold text-sm mb-1.5" style={{color:'#0B2554'}}>Audit Trail &amp; Reporting</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Full sync history and activity logs stored natively in NetSuite for compliance and review.</p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-20" style={{background:'#F5F7FC'}}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12 reveal"><p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#5BB8D4'}}>Explore More</p><h2 className="text-3xl font-bold" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>More CRM Integrations</h2></div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Link href="/salesforce" className="group bg-white rounded-2xl p-6 border border-gray-100 card-lift flex items-center gap-5 reveal" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)',textDecoration:'none'}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white border border-gray-100 p-2"><img src="/logos/Salesforce_logo.png" alt="Salesforce" className="w-full h-full object-contain" /></div>
              <div><h3 className="font-bold text-sm mb-0.5" style={{color:'#0B2554'}}>Salesforce DirectConnect</h3><p className="text-xs text-gray-400">17 record types — from $50/mo</p></div>
              <svg className="w-4 h-4 text-gray-300 ml-auto transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </Link>
            <Link href="/zapier" className="group bg-white rounded-2xl p-6 border border-gray-100 card-lift flex items-center gap-5 reveal reveal-delay-1" style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)',textDecoration:'none'}}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-white border border-gray-100 p-2"><img src="/logos/zapier_logo.svg" alt="Zapier" className="w-full h-full object-contain" /></div>
              <div><h3 className="font-bold text-sm mb-0.5" style={{color:'#0B2554'}}>Zapier DirectConnect</h3><p className="text-xs text-gray-400">Connect 4,000+ apps — from $100/mo</p></div>
              <svg className="w-4 h-4 text-gray-300 ml-auto transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FOOTER BANNER */}
      <section className="py-24" style={{background:'linear-gradient(135deg,#0B2554 0%,#0d1e42 50%,#0B2554 100%)'}}>
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{letterSpacing:'-0.03em'}}>Unify Zendesk &amp;<br /><span className="zd-text">NetSuite</span> Today</h2>
          <p className="text-lg mb-10" style={{color:'rgba(255,255,255,.65)',lineHeight:1.7}}>Stop copying data between systems. Start your Zendesk DirectConnect integration and give your support team and finance team a single source of truth.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-zd text-white font-bold px-10 py-4 rounded-2xl text-base">Schedule A Demo</Link>
            <a href="tel:+18886044120" className="btn-outline-white text-white font-semibold px-8 py-4 rounded-2xl text-base">+1 (888) 604-4120</a>
          </div>
        </div>
      </section>

      <Footer />
      <RevealObserver />
    </>
  )
}
