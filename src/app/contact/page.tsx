"use client";

import Image from "next/image";
import Link from "next/link";

const GOLD = "#907243";

export default function ContactPage() {
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
                <Link key={item} href={`/${item.toLowerCase()}`} className="text-sm text-gray-400 hover:text-white transition">
                  {item}
                </Link>
              ))}
            </div>
            <a
              href="/coming-soon"
              className="px-6 py-3 text-sm font-semibold transition hover:opacity-90 rounded-full flex items-center gap-2"
              style={{ backgroundColor: GOLD, color: 'black' }}>
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Get the App
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-sm tracking-widest uppercase mb-6" style={{ color: GOLD }}>
              We'd Love to Hear From You
            </p>
            <h1 className="text-6xl lg:text-8xl font-bold leading-[0.9] mb-8">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have a question, partnership idea, or just want to say hello? We're here and we'd love to chat.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="p-8 border border-white/10 rounded-lg bg-white/[0.02] text-center">
              <div className="w-14 h-14 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: `${GOLD}20` }}>
                <svg className="w-7 h-7" fill="none" stroke={GOLD} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-400 mb-4">For general enquiries and support</p>
              <a href="mailto:alexander@aspire-interiors.com" className="text-lg font-medium hover:opacity-80 transition" style={{ color: GOLD }}>
                alexander@aspire-interiors.com
              </a>
            </div>

            {/* YouTube */}
            <div className="p-8 border border-white/10 rounded-lg bg-white/[0.02] text-center">
              <div className="w-14 h-14 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: `${GOLD}20` }}>
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill={GOLD}>
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">YouTube</h3>
              <p className="text-gray-400 mb-4">30K+ subscribers · Design transformations</p>
              <a href="https://youtube.com/@Aspire-Interiors" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:opacity-80 transition" style={{ color: GOLD }}>
                @Aspire-Interiors
              </a>
            </div>

            {/* TikTok */}
            <div className="p-8 border border-white/10 rounded-lg bg-white/[0.02] text-center">
              <div className="w-14 h-14 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: `${GOLD}20` }}>
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill={GOLD}>
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">TikTok</h3>
              <p className="text-gray-400 mb-4">100K+ followers · Viral transformations</p>
              <a href="https://tiktok.com/@aspire_interiors.com" target="_blank" rel="noopener noreferrer" className="text-lg font-medium hover:opacity-80 transition" style={{ color: GOLD }}>
                @aspire_interiors.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-sm tracking-widest uppercase mb-4" style={{ color: GOLD }}>Send a Message</p>
            <h2 className="text-4xl font-bold mb-4">Drop Us a Line</h2>
            <p className="text-gray-400">
              Fill out the form below and we'll get back to you as soon as we can.
            </p>
          </div>

          <div className="p-8 border border-white/10 rounded-lg bg-white/[0.02]">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#907243] transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#907243] transition"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#907243] transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 text-base font-semibold transition hover:opacity-90 rounded-full"
                style={{ backgroundColor: GOLD, color: 'black' }}
              >
                Send Message
              </button>
            </form>
            <p className="text-center text-gray-500 text-sm mt-6">
              Note: This form is currently for display only. Please email us directly at{' '}
              <a href="mailto:alexander@aspire-interiors.com" className="underline" style={{ color: GOLD }}>alexander@aspire-interiors.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* Press & Partnerships */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Press */}
            <div>
              <p className="text-sm tracking-widest uppercase mb-4" style={{ color: GOLD }}>Press</p>
              <h2 className="text-4xl font-bold mb-8">Media & Press</h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  We're always excited to share our story with journalists, bloggers, and content creators.
                  If you're working on a piece about AI, interior design, or the future of home tech,
                  we'd love to help.
                </p>
                <p>
                  For press enquiries, interview requests, and media kits, please reach out to us at{' '}
                  <a href="mailto:press@aspire-interiors.com" className="font-medium" style={{ color: GOLD }}>press@aspire-interiors.com</a>.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                {['Press Kit', 'Brand Assets', 'Fact Sheet'].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 text-sm border border-white/20 rounded-full text-gray-400"
                  >
                    {item} — Coming Soon
                  </span>
                ))}
              </div>
            </div>

            {/* Partnerships */}
            <div>
              <p className="text-sm tracking-widest uppercase mb-4" style={{ color: GOLD }}>Partnerships</p>
              <h2 className="text-4xl font-bold mb-8">Work With Us</h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  We're open to collaborations with brands, influencers, interior designers, furniture makers,
                  and anyone who shares our passion for beautiful spaces.
                </p>
                <p>
                  Whether you're interested in a content partnership, a brand collaboration, or integrating
                  Aspire into your business, we'd love to explore the possibilities together.
                </p>
                <p>
                  For partnership enquiries, please email{' '}
                  <a href="mailto:partnerships@aspire-interiors.com" className="font-medium" style={{ color: GOLD }}>partnerships@aspire-interiors.com</a>.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                {['Brand Collabs', 'Affiliate Programme', 'API Access'].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 text-sm border border-white/20 rounded-full text-gray-400"
                  >
                    {item} — Coming Soon
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Banner */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-sm tracking-widest uppercase mb-6" style={{ color: GOLD }}>Follow Along</p>
          <h2 className="text-3xl font-bold mb-8">Stay Connected</h2>
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://youtube.com/@Aspire-Interiors"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:border-[#907243] hover:bg-[#907243]/10 transition"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="https://tiktok.com/@aspire_interiors.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:border-[#907243] hover:bg-[#907243]/10 transition"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/aspireinteriors"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:border-[#907243] hover:bg-[#907243]/10 transition"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
          <p className="text-gray-500 mt-6">Share your designs with <span className="font-semibold" style={{ color: GOLD }}>#OMGASPIRE</span></p>
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
