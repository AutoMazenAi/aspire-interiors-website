"use client";

import Image from "next/image";
import Link from "next/link";

const GOLD = "#907243";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="Aspire" width={40} height={40} className="rounded" />
              <span className="text-lg font-semibold tracking-wider">ASPIRE</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              {['App', 'Pricing', 'About', 'Contact'].map((item) => (
                <Link 
                  key={item} 
                  href={`/${item.toLowerCase()}`} 
                  className={`text-sm transition ${item === 'Pricing' ? 'font-semibold' : 'text-gray-400 hover:text-white'}`}
                  style={item === 'Pricing' ? { color: GOLD } : {}}
                >
                  {item}
                </Link>
              ))}
            </div>
            <a 
              href="/coming-soon" 
              className="px-6 py-3 text-sm font-semibold transition hover:opacity-90 rounded-full flex items-center gap-2"
              style={{ backgroundColor: GOLD, color: 'black' }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Get the App
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-sm tracking-widest uppercase mb-4" style={{ color: GOLD }}>Simple, Transparent Pricing</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Choose Your Plan</h1>
          <p className="text-xl text-gray-400 mb-8">
            Start free, upgrade when you're ready. All plans include our 300+ preset designs.
          </p>
          
          {/* Founding Member Banner */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border mb-12" style={{ borderColor: GOLD, backgroundColor: 'rgba(144, 114, 67, 0.1)' }}>
            <svg className="w-5 h-5" fill="none" stroke={GOLD} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span style={{ color: GOLD }}>Lock in founding member prices before they increase in 3 months</span>
          </div>
        </div>
      </section>

      {/* Aspire Pro Subscriptions */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <p className="text-sm tracking-widest uppercase mb-12 text-center" style={{ color: GOLD }}>Aspire Pro</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Monthly Plan */}
            <div className="relative p-8 rounded-2xl border border-white/10 hover:border-[#907243] transition">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Monthly</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold" style={{ color: GOLD }}>$9.99 / £9.99</span>
                  <span className="text-gray-400">/month</span>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-4xl font-bold mb-1">50</div>
                <p className="text-sm text-gray-400">designs per month</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke={GOLD} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>40 designs + 10 complimentary</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke={GOLD} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Perfect for trying out</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke={GOLD} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cancel anytime</span>
                </div>
              </div>
              
              <div className="p-4 rounded-lg bg-white/5 mb-6">
                <p className="text-sm text-gray-400 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Price rises to £12.99 in 3 months
                </p>
              </div>
              
              <a 
                href="/coming-soon"
                className="block w-full py-4 text-center font-semibold rounded-full transition hover:opacity-90"
                style={{ backgroundColor: GOLD, color: 'black' }}
              >
                Subscribe Monthly
              </a>
            </div>

            {/* Annual Plan - Best Value */}
            <div 
              className="relative p-8 rounded-2xl border-2"
              style={{ borderColor: GOLD, backgroundColor: 'rgba(144, 114, 67, 0.05)' }}
            >
              {/* Best Value Badge */}
              <div 
                className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-semibold"
                style={{ backgroundColor: GOLD, color: 'black' }}
              >
                Best Value — Save 25%
              </div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Annual</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold" style={{ color: GOLD }}>$89.99 / £89.99</span>
                  <span className="text-gray-400">/year</span>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-4xl font-bold mb-1">840</div>
                <p className="text-sm text-gray-400">designs per year</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke={GOLD} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>480 designs + 360 complimentary</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke={GOLD} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-semibold" style={{ color: GOLD }}>Founding members only</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke={GOLD} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Works out to £7.50/month</span>
                </div>
              </div>
              
              <div className="p-4 rounded-lg bg-white/5 mb-6">
                <p className="text-sm text-gray-400 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Price rises to £124.99 in 3 months
                </p>
              </div>
              
              <a 
                href="/coming-soon"
                className="block w-full py-4 text-center font-semibold rounded-full transition hover:opacity-90"
                style={{ backgroundColor: GOLD, color: 'black' }}
              >
                Subscribe Annual
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Top Up Designs */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-sm tracking-widest uppercase mb-4" style={{ color: GOLD }}>Top Up Designs</p>
            <h2 className="text-3xl font-bold mb-4">No Subscription Needed</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Every pack includes complimentary designs — for the moments a result just needs another try.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Starter Pack */}
            <div className="p-6 rounded-xl border border-white/10 hover:border-[#907243] transition text-center">
              <div className="text-4xl font-bold mb-1">10</div>
              <p className="text-sm text-gray-400 mb-4">designs</p>
              <div 
                className="inline-block px-3 py-1 rounded-full text-xs mb-4"
                style={{ backgroundColor: 'rgba(144, 114, 67, 0.2)', color: GOLD }}
              >
                +2 complimentary (12 total)
              </div>
              <h3 className="font-semibold mb-4">Starter Pack</h3>
              
              <a 
                href="/coming-soon"
                className="block w-full py-3 text-center font-semibold rounded-lg transition hover:opacity-90"
                style={{ backgroundColor: GOLD, color: 'black' }}
              >
                $4.99 / £4.99
              </a>
            </div>

            {/* Popular Pack */}
            <div className="p-6 rounded-xl border border-white/10 hover:border-[#907243] transition text-center">
              <div className="text-4xl font-bold mb-1">25</div>
              <p className="text-sm text-gray-400 mb-4">designs</p>
              <div 
                className="inline-block px-3 py-1 rounded-full text-xs mb-4"
                style={{ backgroundColor: 'rgba(144, 114, 67, 0.2)', color: GOLD }}
              >
                +5 complimentary (30 total)
              </div>
              <h3 className="font-semibold mb-4">Popular Pack</h3>
              
              <a 
                href="/coming-soon"
                className="block w-full py-3 text-center font-semibold rounded-lg transition hover:opacity-90"
                style={{ backgroundColor: GOLD, color: 'black' }}
              >
                $9.99 / £9.99
              </a>
            </div>

            {/* Value Pack */}
            <div className="p-6 rounded-xl border border-white/10 hover:border-[#907243] transition text-center">
              <div className="text-4xl font-bold mb-1">50</div>
              <p className="text-sm text-gray-400 mb-4">designs</p>
              <div 
                className="inline-block px-3 py-1 rounded-full text-xs mb-4"
                style={{ backgroundColor: 'rgba(144, 114, 67, 0.2)', color: GOLD }}
              >
                +10 complimentary (60 total)
              </div>
              <h3 className="font-semibold mb-4">Value Pack</h3>
              
              <a 
                href="/coming-soon"
                className="block w-full py-3 text-center font-semibold rounded-lg transition hover:opacity-90"
                style={{ backgroundColor: GOLD, color: 'black' }}
              >
                $16.99 / £16.99
              </a>
            </div>

            {/* Ultimate Pack */}
            <div className="p-6 rounded-xl border border-white/10 hover:border-[#907243] transition text-center">
              <div className="text-4xl font-bold mb-1">100</div>
              <p className="text-sm text-gray-400 mb-4">designs</p>
              <div 
                className="inline-block px-3 py-1 rounded-full text-xs mb-4"
                style={{ backgroundColor: 'rgba(144, 114, 67, 0.2)', color: GOLD }}
              >
                +20 complimentary (120 total)
              </div>
              <h3 className="font-semibold mb-4">Ultimate Pack</h3>
              
              <a 
                href="/coming-soon"
                className="block w-full py-3 text-center font-semibold rounded-lg transition hover:opacity-90"
                style={{ backgroundColor: GOLD, color: 'black' }}
              >
                $29.99 / £29.99
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Trust Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <svg className="w-10 h-10 mx-auto mb-4" fill="none" stroke={GOLD} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="font-semibold mb-2">Secure Payment</h3>
              <p className="text-sm text-gray-400">Apple Pay & in-app purchase</p>
            </div>
            
            <div>
              <svg className="w-10 h-10 mx-auto mb-4" fill="none" stroke={GOLD} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <h3 className="font-semibold mb-2">Restore Purchases</h3>
              <p className="text-sm text-gray-400">Never lose your designs</p>
            </div>
            
            <div>
              <svg className="w-10 h-10 mx-auto mb-4" fill="none" stroke={GOLD} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="font-semibold mb-2">Cancel Anytime</h3>
              <p className="text-sm text-gray-400">In your Apple Settings</p>
            </div>
          </div>
          
          <p className="text-gray-400 text-sm">
            Subscriptions auto-renew. Cancel anytime in Settings. Prices shown in GBP.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Download the app and start with 3 free designs. No credit card required.
          </p>
          
          <a 
            href="/coming-soon"
            className="inline-flex items-center gap-3 px-10 py-5 text-lg font-semibold transition hover:scale-105 rounded-full"
            style={{ backgroundColor: GOLD, color: 'black' }}
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download on the App Store
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-500 text-sm">
              © 2026 Aspire Interiors. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition">Privacy</Link>
              <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
