"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const GOLD = "#907243";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - will connect to Supabase once credentials are provided
    setSubmitted(true);
    setEmail("");
  };

  const navItems = ['App', 'Pricing', 'About', 'Contact'];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="Aspire" width={40} height={40} className="rounded" />
              <span className="text-xl font-bold tracking-wider">ASPIRE</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-sm font-medium text-gray-400 hover:text-white transition"
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

      <div className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        {/* Coming Soon */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
          Coming <span style={{ color: GOLD }}>Soon</span>
        </h1>

      {/* Aspire Logo */}
      <div className="mb-8">
        <Image 
          src="/logo.png" 
          alt="Aspire Interiors" 
          width={120} 
          height={120} 
          className="rounded mx-auto"
        />
        <p className="text-2xl font-semibold tracking-wider mt-4 text-center">ASPIRE</p>
      </div>

      {/* #OMGASPIRE */}
      <div className="mb-12">
        <span 
          className="inline-block px-6 py-3 text-2xl font-bold rounded-full border-2"
          style={{ borderColor: GOLD, color: GOLD }}
        >
          #OMGASPIRE
        </span>
      </div>

      {/* Email Signup */}
      <div className="w-full max-w-md">
        {!submitted ? (
          <>
            <p className="text-center text-gray-400 mb-4">
              Be the first to know when we launch
            </p>
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-white/10 focus:border-[#907243] focus:outline-none text-white placeholder-gray-500"
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-full font-semibold transition hover:opacity-90"
                style={{ backgroundColor: GOLD, color: 'black' }}
              >
                Notify Me
              </button>
            </form>
          </>
        ) : (
          <div className="text-center p-8 rounded-2xl border border-white/10">
            <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke={GOLD} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h3 className="text-xl font-semibold mb-2" style={{ color: GOLD }}>You're on the list!</h3>
            <p className="text-gray-400">We'll let you know as soon as we launch.</p>
          </div>
        )}
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-6 mt-12">
        <a href="https://youtube.com/@Aspire-Interiors" className="text-gray-400 hover:text-white transition">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>
        <a href="https://tiktok.com/@aspire_interiors.com" className="text-gray-400 hover:text-white transition">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
          </svg>
        </a>
      </div>

      {/* Footer */}
      <p className="text-gray-500 text-sm mt-12">
        © 2026 Aspire Interiors. All rights reserved.
      </p>
    </div>
    </div>
  );
}
