'use client'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'

export default function About() {
  return (
    <>
      <Navbar />

      {/* ABOUT HERO */}
      <section className="hero-about min-h-screen flex items-center pt-32 pb-16 relative overflow-hidden" style={{isolation:'isolate'}}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 right-10 w-[500px] h-[500px] rounded-full animate-float" style={{background:'radial-gradient(circle,rgba(27,111,208,.2) 0%,transparent 70%)'}}></div>
          <div className="absolute -bottom-10 -left-10 w-[300px] h-[300px] rounded-full animate-float2" style={{background:'radial-gradient(circle,rgba(91,184,212,.1) 0%,transparent 70%)'}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* LEFT */}
            <div style={{animation:'slide-up .9s cubic-bezier(.23,1,.32,1) both'}}>
              <div className="flex items-center gap-2 mb-6">
                <Link href="/" className="text-xs font-medium transition-colors" style={{color:'rgba(255,255,255,.4)'}}>Home</Link>
                <svg className="w-3 h-3" style={{color:'rgba(255,255,255,.25)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                <span className="text-xs font-medium" style={{color:'#5BB8D4'}}>About</span>
              </div>
              <p className="text-[11px] font-semibold tracking-widest uppercase mb-5" style={{color:'#5BB8D4'}}>Our Story</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6" style={{letterSpacing:'-0.03em',lineHeight:1.05}}>
                We Make NetSuite<br />
                <span className="font-bold gradient-text">Work The Way</span><br />
                <span className="font-semibold text-white">You Want It To</span>
              </h1>
              <p className="text-lg max-w-2xl" style={{color:'rgba(255,255,255,.8)',lineHeight:1.75}}>Headquartered in Grand Junction, Colorado, In8Sync has been providing advanced NetSuite solutions for over a decade with a passionate global team of experts.</p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link href="/contact" className="btn-primary text-white font-bold px-7 py-3.5 rounded-xl text-sm">Get In Touch</Link>
                <Link href="/about#story" className="btn-outline text-white font-semibold px-6 py-3.5 rounded-xl text-sm">Our Story</Link>
              </div>
            </div>
            {/* RIGHT — Image */}
            <div className="relative flex justify-center" style={{animation:'fade-in 1.2s ease both .5s',opacity:0}}>
              <div className="relative w-full max-w-lg">
                <div className="absolute inset-0 rounded-3xl blur-3xl" style={{background:'linear-gradient(135deg,rgba(27,111,208,.3),rgba(91,184,212,.2))'}}></div>
                <div className="relative rounded-3xl overflow-hidden border p-3" style={{background:'rgba(255,255,255,.04)',borderColor:'rgba(91,184,212,.2)',backdropFilter:'blur(10px)',boxShadow:'0 32px 80px rgba(11,37,84,.5)'}}>
                  <img
                    src="/brand_assests/our_team.jpg"
                    alt="In8Sync Team"
                    className="w-full h-auto rounded-2xl"
                    style={{maxHeight:'420px',objectFit:'contain'}}
                  />
                </div>
                {/* Floating badge top */}
                <div className="absolute -top-5 -right-5 bg-white rounded-2xl px-4 py-3 shadow-2xl card-lift">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#0B2554,#1B6FD0)'}}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
                    </div>
                    <div>
                      <div className="text-xs font-bold" style={{color:'#0B2554'}}>NetSuite Partner</div>
                      <div className="text-[10px] text-gray-400">Advanced Certified</div>
                    </div>
                  </div>
                </div>
                {/* Floating badge bottom */}
                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl px-4 py-3 shadow-2xl card-lift">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#059669,#10B981)'}}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
                    </div>
                    <div>
                      <div className="text-xs font-bold" style={{color:'#0B2554'}}>10+ Years</div>
                      <div className="text-[10px] text-gray-400">NetSuite Expertise</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-white border-b border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center reveal">
              <div className="text-4xl font-bold mb-1" style={{color:'#0B2554',letterSpacing:'-0.03em'}}>10+</div>
              <div className="text-sm text-gray-400 font-medium">Years of Experience</div>
            </div>
            <div className="text-center reveal reveal-delay-1">
              <div className="text-4xl font-bold mb-1" style={{color:'#0B2554',letterSpacing:'-0.03em'}}>9+</div>
              <div className="text-sm text-gray-400 font-medium">Integration Bundles</div>
            </div>
            <div className="text-center reveal reveal-delay-2">
              <div className="text-4xl font-bold mb-1" style={{color:'#0B2554',letterSpacing:'-0.03em'}}>100%</div>
              <div className="text-sm text-gray-400 font-medium">Native NetSuite</div>
            </div>
            <div className="text-center reveal reveal-delay-3">
              <div className="text-4xl font-bold mb-1" style={{color:'#0B2554',letterSpacing:'-0.03em'}}>Global</div>
              <div className="text-sm text-gray-400 font-medium">Team of Experts</div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="py-24" style={{background:'#F5F7FC'}}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <div className="relative">
                <div className="img-overlay rounded-3xl" style={{boxShadow:'0 24px 80px rgba(11,37,84,.2)'}}>
                  <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" alt="In8Sync Office" className="w-full h-[480px] object-cover rounded-3xl" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-2xl border border-gray-100 card-lift">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#0B2554,#1B6FD0)'}}>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    </div>
                    <div>
                      <div className="text-xs font-bold" style={{color:'#0B2554'}}>Grand Junction</div>
                      <div className="text-[10px] text-gray-400">Colorado, USA</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <p className="text-[11px] font-semibold tracking-widest uppercase mb-4" style={{color:'#1B6FD0'}}>About In8Sync</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color:'#0B2554',letterSpacing:'-0.025em',lineHeight:1.1}}>A Decade of NetSuite<br />Excellence</h2>
              <div className="space-y-5">
                <p className="text-gray-500 text-base leading-relaxed">In8Sync is more than a NetSuite Integration Partner. We are Advanced NetSuite Automation Experts. Our global team has spent over a decade perfecting the art of making NetSuite work exactly the way businesses need it to.</p>
                <p className="text-gray-500 text-base leading-relaxed">What sets us apart is our singular focus: unlike competitors who dabble in multiple platforms, we focus all of our efforts exclusively on integrating and automating systems with NetSuite. This makes us the most specialized, most capable NetSuite solutions provider in the market.</p>
                <p className="text-gray-500 text-base leading-relaxed">Our integration bundles are natively built into and fully hosted within NetSuite. No slow, expensive iPaaS integrators, no third-party platforms. Pure, performant NetSuite automation.</p>
              </div>
              <div className="mt-10 flex gap-3">
                <Link href="/contact" className="btn-primary text-white text-sm font-semibold px-7 py-3.5 rounded-xl">Get In Touch</Link>
                <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-3.5 rounded-xl transition-colors duration-200 border" style={{borderColor:'rgba(11,37,84,.15)',color:'#0B2554'}}>
                  Request Demo
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#1B6FD0'}}>Our Values</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-5" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>What We Stand For</h2>
            <p className="text-gray-500 text-base leading-relaxed">These principles guide every integration we build and every client relationship we cultivate.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title:'Performance First', desc:'We build natively inside NetSuite for maximum speed and reliability — no middleware bottlenecks, no performance compromises.', bg:'linear-gradient(135deg,#0B2554,#1B6FD0)', shadow:'rgba(27,111,208,.3)', icon:<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/> },
              { title:'Deep Specialization', desc:'Unlike generalist developers, we focus 100% of our efforts on NetSuite — giving you access to the deepest expertise in the industry.', bg:'linear-gradient(135deg,#0B6E6E,#5BB8D4)', shadow:'rgba(91,184,212,.3)', icon:<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/> },
              { title:'Client-First Support', desc:'We are dedicated to providing timely and effective support. Your success is our success — from implementation through ongoing optimization.', bg:'linear-gradient(135deg,#1B6FD0,#5BB8D4)', shadow:'rgba(27,111,208,.25)', icon:<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/> },
              { title:'Custom Solutions', desc:"We don't just sell pre-built tools. Our in-house developers craft custom scripts, modules, and integrations tailored exactly to your workflow.", bg:'linear-gradient(135deg,#7C3AED,#A855F7)', shadow:'rgba(124,58,237,.25)', icon:<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/> },
              { title:'Cost Efficiency', desc:'No expensive third-party platforms. No ongoing iPaaS fees. Our native approach dramatically reduces both the cost and complexity of your integrations.', bg:'linear-gradient(135deg,#059669,#10B981)', shadow:'rgba(16,185,129,.25)', icon:<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/> },
              { title:'Passion for NetSuite', desc:"NetSuite isn't just what we do — it's what we love. Our team's passion translates into solutions that go beyond the expected.", bg:'linear-gradient(135deg,#DC2626,#F87171)', shadow:'rgba(220,38,38,.2)', icon:<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/> },
            ].map((v, i) => (
              <div key={v.title} className={`value-card rounded-3xl p-8 border border-gray-100 reveal${i%3===1?' reveal-delay-1':i%3===2?' reveal-delay-2':''}`} style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{background:v.bg,boxShadow:`0 6px 20px ${v.shadow}`}}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">{v.icon}</svg>
                </div>
                <h3 className="text-base font-bold mb-3" style={{color:'#0B2554'}}>{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24" style={{background:'#F5F7FC'}}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <p className="text-[11px] font-semibold tracking-widest uppercase mb-4" style={{color:'#1B6FD0'}}>Our Team</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color:'#0B2554',letterSpacing:'-0.025em',lineHeight:1.1}}>In-House Experts,<br />Not Outsourced<br />Freelancers</h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">Our team of in-house software architects and developers have unparalleled NetSuite experience. Unlike many competitors, every project is handled by our own dedicated professionals who eat, sleep, and breathe NetSuite.</p>
              <div className="space-y-4">
                {[
                  { bg:'linear-gradient(135deg,#0B2554,#1B6FD0)', title:'SuiteCloud Developer Network Certified', desc:'Officially recognized by NetSuite as a certified development partner, ensuring the highest quality implementations.' },
                  { bg:'linear-gradient(135deg,#0B6E6E,#5BB8D4)', title:'Global Team, Colorado Roots', desc:'Headquartered in Grand Junction, CO with a global team of developers available to support clients worldwide.' },
                  { bg:'linear-gradient(135deg,#1B6FD0,#3B8AE0)', title:'Holistic Implementation to Support', desc:'From initial implementation to writing custom scripts and ongoing support — we are your complete NetSuite partner.' },
                ].map(item => (
                  <div key={item.title} className="flex items-start gap-4 p-4 rounded-2xl border border-gray-100 bg-white card-lift">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{background:item.bg}}>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1" style={{color:'#0B2554'}}>{item.title}</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative reveal reveal-delay-2 flex items-center justify-center">
              <div className="absolute inset-0 rounded-3xl blur-2xl" style={{background:'linear-gradient(135deg,rgba(27,111,208,.15),rgba(91,184,212,.1))'}}></div>
              <img src="/brand_assests/ChatGPT Image Mar 6, 2026, 12_57_43 PM 1.svg" alt="In8Sync Team" className="relative w-full h-auto rounded-3xl" style={{boxShadow:'0 24px 80px rgba(11,37,84,.2)',maxHeight:'420px',objectFit:'contain'}} />
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-24" style={{background:'#F5F7FC'}}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#1B6FD0'}}>Our Team</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-5" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>Leadership & Key Team Members</h2>
            <p className="text-gray-500 text-base leading-relaxed">The dedicated experts behind every NetSuite integration we deliver.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name:'Misty Lasater', role:'Director of Business Administration / Accounts Consultant', tenure:'2+ Years at In8Sync', desc:'Misty oversees business operations, financial coordination, and client account strategy, ensuring efficient processes and strong customer relationships across In8Sync.', expertise:['Operational Leadership','Financial & Administrative Oversight','Client Account Management','Strategic Cross-Functional Collaboration'], bg:'linear-gradient(135deg,#0B2554,#1B6FD0)', dot:'#1B6FD0' },
              { name:'Krista Maxson', role:'Director of Operations', tenure:'1+ Year at In8Sync', desc:'Krista leads organizational alignment and operational strategy, ensuring scalable, efficient, and audit-ready operations across In8Sync.', expertise:['Operational Strategy & Organizational Alignment','Process Optimization & Governance','Team Leadership & Development','Scalable Operations & Audit Readiness'], bg:'linear-gradient(135deg,#0B6E6E,#5BB8D4)', dot:'#5BB8D4' },
              { name:'Marcel Pestana', role:'Senior NetSuite Developer', tenure:'10+ Years at In8Sync', desc:'Marcel develops advanced NetSuite integrations and scalable SuiteCloud solutions for complex business systems.', expertise:['SuiteScript Development','NetSuite Integrations','SuiteCloud Architecture','Custom NetSuite Applications'], bg:'linear-gradient(135deg,#7C3AED,#A855F7)', dot:'#7C3AED' },
              { name:'Andrew Dawson', role:'Director of Support Services', tenure:'5+ Years at In8Sync', desc:'Andrew oversees global support operations, ensuring reliable service and seamless client support across all projects.', expertise:['Managed Support Operations','Customer Experience Leadership','Project Coordination','Global Client Support'], bg:'linear-gradient(135deg,#059669,#10B981)', dot:'#059669' },
              { name:'Nick Hazlewood', role:'Director of Sales', tenure:'2+ Years at In8Sync', desc:'Nick leads global sales initiatives, aligning NetSuite solutions with client business goals to drive long-term partnerships and growth.', expertise:['Global Sales Strategy','Channel Partnerships','Revenue Growth & Sales','NetSuite Solutions Consulting'], bg:'linear-gradient(135deg,#DC2626,#F87171)', dot:'#DC2626' },
              { name:'Sonia Gates', role:'Director of Customer Success', tenure:'Since 2025', desc:'Sonia leads customer success initiatives, helping clients maximize the long-term value of their NetSuite solutions.', expertise:['Customer Success Strategy','Enterprise Account Management','Client Adoption & Values','Cross-Functional Collaboration'], bg:'linear-gradient(135deg,#F59E0B,#FBBF24)', dot:'#F59E0B' },
            ].map((member, i) => (
              <div key={member.name} className={`bg-white rounded-3xl p-7 border border-gray-100 team-card reveal${i%3===1?' reveal-delay-1':i%3===2?' reveal-delay-2':''}`} style={{boxShadow:'0 2px 12px rgba(11,37,84,.05)'}}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{background:member.bg}}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                </div>
                <h3 className="font-bold text-base mb-0.5" style={{color:'#1B6FD0'}}>{member.name}</h3>
                <p className="text-xs font-semibold mb-1" style={{color:'#0B2554'}}>{member.role}</p>
                <p className="text-[11px] text-gray-400 mb-3">{member.tenure}</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{member.desc}</p>
                <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{color:'#0B2554'}}>Expertise</p>
                <ul className="space-y-1">
                  {member.expertise.map(e => (
                    <li key={e} className="text-xs text-gray-500 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{background:member.dot}}></span>{e}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION MAP */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-xl mx-auto mb-10 reveal">
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#1B6FD0'}}>Our Location</p>
            <h2 className="text-3xl font-bold mb-3" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>Grand Junction, Colorado</h2>
            <p className="text-gray-500 text-sm leading-relaxed">Where innovation meets the Colorado Rockies. Our headquarters sit in the heart of Grand Junction, with a global team supporting clients worldwide.</p>
          </div>
          <div className="reveal rounded-3xl overflow-hidden" style={{height:'420px',boxShadow:'0 24px 80px rgba(11,37,84,.15)'}}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50080.45!2d-108.5506!3d39.0639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87468a4c5b0df3cf%3A0x2c7001e3e5c0b5e7!2sGrand%20Junction%2C%20CO!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="420"
              style={{border:0,display:'block'}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24" style={{background:'#F5F7FC'}}>
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14 reveal">
            <p className="text-[11px] font-semibold tracking-widest uppercase mb-3" style={{color:'#1B6FD0'}}>FAQ</p>
            <h2 className="text-4xl font-bold mb-3" style={{color:'#0B2554',letterSpacing:'-0.025em'}}>Got Questions? We've Got Answers</h2>
          </div>
          <div className="space-y-3 reveal">
            {[
              { q:'What sets In8Sync apart from other NetSuite solution providers?', a:"In8Sync is exclusively focused on NetSuite. Unlike generalist developers or iPaaS platforms, every member of our team specializes in NetSuite integrations, customizations, and automation. Our integrations are natively built inside NetSuite with no external middleware, resulting in faster performance, better reliability, and lower cost." },
              { q:'What kinds of integration projects has In8Sync done?', a:'We have built integrations across eCommerce platforms (Shopify, WooCommerce, Squarespace), marketplaces (Amazon Seller and Vendor Central, eBay), CRM systems (Salesforce, Zendesk, Zapier), and 3PL fulfillment providers (Extensiv, ShipStation, Radial, CEVA Logistics, and more). We also build fully custom SuiteApps, SuiteScripts, and automation workflows.' },
              { q:'What experience does In8Sync have with customizing NetSuite?', a:'Our team has over a decade of NetSuite experience including SuiteScript 1.0 and 2.x development, RESTlets, Suitelets, custom records, saved searches, workflows, and full SuiteCloud platform development. We are SuiteCloud Developer Network (SDN) certified, ensuring the highest quality implementations.' },
              { q:'Can we try In8Sync solutions before buying?', a:'Yes. We offer live demos of our integration bundles tailored to your specific business setup. You can see exactly how data flows between your systems before making any commitment. Contact our team to schedule a personalized demonstration.' },
              { q:"What's the lead time to implement an In8Sync solution?", a:'Our pre-built integration bundles can typically go live within days to a few weeks depending on your NetSuite configuration. Custom development projects are scoped individually and we\'ll provide a clear timeline during the discovery phase.' },
              { q:'Does In8Sync offer SuiteApps?', a:'Yes. Our integration bundles are packaged as SuiteApps, fully built and hosted within NetSuite. This means you get all the reliability and performance of a native NetSuite application with no external dependencies.' },
              { q:'Does In8Sync partner with other solution providers?', a:"Yes. We actively partner with NetSuite implementation partners, resellers, and technology consultants to provide specialized integration support for their clients. If you're a partner looking to add native NetSuite integration capabilities, reach out to us." },
              { q:'How can I learn more about In8Sync solutions?', a:'The best way to get started is to schedule a free demo with our team. We\'ll walk you through the integration that fits your business, show you the data flow in real time, and answer any questions. You can also explore our integration pages or call us directly at +1 (888) 604-4120.' },
            ].map(faq => (
              <details key={faq.q} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden" style={{boxShadow:'0 2px 8px rgba(11,37,84,.04)'}}>
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-semibold text-sm select-none" style={{color:'#0B2554'}}>
                  {faq.q}
                  <svg className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" style={{color:'#1B6FD0'}} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                </summary>
                <div className="px-6 pb-6 text-sm text-gray-500 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden" style={{background:'linear-gradient(135deg,#0B2554 0%,#153470 50%,#1B6FD0 100%)'}}>
        <div className="absolute inset-0 grid-lines opacity-30"></div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-3xl" style={{background:'radial-gradient(ellipse,rgba(91,184,212,.18) 0%,transparent 70%)'}}></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10 reveal">
          <p className="text-[11px] font-semibold tracking-widest uppercase mb-5" style={{color:'#5BB8D4'}}>Let's Work Together</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{letterSpacing:'-0.03em'}}>Ready to Transform<br />Your NetSuite Experience?</h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{color:'rgba(255,255,255,.6)',lineHeight:1.75}}>Schedule a demo and discover why businesses trust In8Sync to power their NetSuite automation.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-sm font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1" style={{color:'#0B2554',boxShadow:'0 4px 20px rgba(0,0,0,.2)'}}>
              Schedule a Demo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </Link>
            <Link href="/contact" className="btn-outline inline-block text-white text-sm font-semibold px-8 py-4 rounded-xl">Contact Us</Link>
          </div>
        </div>
      </section>

      <Footer />
      <RevealObserver />
    </>
  )
}
