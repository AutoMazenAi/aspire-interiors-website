"use client";

import Image from "next/image";
import Link from "next/link";

const GOLD = "#907243";

export default function AboutPage() {
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
              About Aspire
            </p>
            <h1 className="text-6xl lg:text-8xl font-bold leading-[0.9] mb-8">
              Our Story
            </h1>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-400 leading-relaxed">
              Born from a love of beautiful spaces and a frustration with the cost and complexity of interior design,
              Aspire was created to put professional-quality room transformations in everyone's pocket.
            </p>
          </div>
        </div>
      </section>

      {/* Why We Built Aspire */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm tracking-widest uppercase mb-4" style={{ color: GOLD }}>The Problem</p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                Why We Built<br />Aspire
              </h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  Interior design has always felt like a luxury reserved for the few. Hiring a professional designer
                  can cost thousands, and the process is slow, opaque, and intimidating.
                </p>
                <p>
                  For everyone else, the options were limited: scrolling Pinterest for hours, buying furniture
                  that doesn't quite work, or living with a space that never feels quite right.
                </p>
                <p>
                  We believed there had to be a better way — a way to combine the creativity of professional
                  design with the speed and accessibility of modern technology.
                </p>
              </div>
            </div>
            <div className="relative">
              <div
                className="p-2"
                style={{
                  background: `linear-gradient(135deg, ${GOLD} 0%, #6b5432 50%, ${GOLD} 100%)`,
                  borderRadius: '4px'
                }}
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-black">
                  <Image
                    src="/website-images/optimized/hero-main-design.jpg"
                    alt="Interior design transformation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The AI Solution */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div
                className="p-2"
                style={{
                  background: `linear-gradient(135deg, ${GOLD} 0%, #6b5432 50%, ${GOLD} 100%)`,
                  borderRadius: '4px'
                }}
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-black">
                  <Image
                    src="/website-images/optimized/design-gold-black-luxury-1.jpg"
                    alt="AI-powered interior design"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm tracking-widest uppercase mb-4" style={{ color: GOLD }}>The Solution</p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                AI Meets<br />Interior Design
              </h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  Aspire harnesses the power of cutting-edge artificial intelligence to understand your space,
                  your tastes, and your inspiration — then transforms them into stunning, photorealistic room
                  designs in seconds.
                </p>
                <p>
                  Upload a photo of your room. Describe your dream space. Or pull inspiration from anywhere —
                  a beach sunset, a piece of jewellery, even a soldier's armour. Our AI sees the design potential
                  in everything.
                </p>
                <p>
                  What used to take weeks and thousands of pounds now takes seconds and fits in your pocket.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Vision */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest uppercase mb-4" style={{ color: GOLD }}>The Vision</p>
            <h2 className="text-5xl font-bold mb-6">
              Professional Interior Design,<br />
              <span style={{ color: GOLD }}>Accessible to Everyone</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We believe everyone deserves to love the space they live in. Our mission is to democratise
              interior design and make beautiful rooms a reality for millions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Democratise Design",
                desc: "Remove the cost and complexity barriers that keep professional interior design out of reach for most people."
              },
              {
                title: "Inspire Creativity",
                desc: "Give everyone the tools to explore bold ideas, experiment with styles, and discover their personal aesthetic."
              },
              {
                title: "Transform Spaces",
                desc: "Turn every room into a space that reflects its owner's personality, taste, and aspirations."
              }
            ].map((item, i) => (
              <div key={i} className="p-8 border border-white/10 rounded-lg bg-white/[0.02]">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: `${GOLD}20` }}>
                  <span className="text-xl font-bold" style={{ color: GOLD }}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Team / Founder Story */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm tracking-widest uppercase mb-4" style={{ color: GOLD }}>The Founder</p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                A Story of<br />Passion & Vision
              </h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  Aspire was founded by someone who spent years staring at empty rooms, wondering why
                  making them beautiful had to be so difficult and expensive.
                </p>
                <p>
                  After experiencing firsthand the frustration of trying to design a home without professional
                  help — the endless Pinterest scrolling, the furniture that didn't fit, the colour schemes
                  that fell flat — the idea for Aspire was born.
                </p>
                <p>
                  Combining a deep love of interior design with expertise in AI and mobile technology,
                  the founder set out to build something that would change how people think about their spaces.
                </p>
                <p>
                  Today, Aspire has helped transform over 50,000 rooms and counting. But this is just the beginning.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div
                className="p-3"
                style={{
                  background: `linear-gradient(135deg, ${GOLD} 0%, #6b5432 50%, ${GOLD} 100%)`,
                  borderRadius: '50%'
                }}
              >
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#111] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: `${GOLD}20` }}>
                      <svg className="w-10 h-10" fill="none" stroke={GOLD} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-2xl font-bold" style={{ color: GOLD }}>Founder</p>
                    <p className="text-gray-500 mt-2">Visionary & Creator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50,000+", label: "Room Transformations" },
              { value: "37M+", label: "Content Views" },
              { value: "12", label: "Signature Styles" },
              { value: "300+", label: "Preset Designs" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl md:text-5xl font-bold mb-2" style={{ color: GOLD }}>{stat.value}</p>
                <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(ellipse at center, #907243 0%, transparent 70%)' }} />
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform<br />
            <span style={{ color: GOLD }}>Your Space?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Join thousands of people who have already discovered the magic of AI-powered interior design.
          </p>
          <a
            href="/coming-soon"
            className="inline-flex items-center gap-3 px-10 py-5 text-lg font-semibold transition hover:scale-105 rounded-full"
            style={{ backgroundColor: GOLD, color: 'black', boxShadow: '0 0 40px rgba(144, 114, 67, 0.4)' }}
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
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
