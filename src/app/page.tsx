"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Bronze gold from your spec
const GOLD = "#907243";

interface MoodBoardItem {
  id: number;
  moodBoard: string;
  results: string[];
  title: string;
  description: string;
}

const moodBoards: MoodBoardItem[] = [
  {
    id: 1,
    moodBoard: "/website-images/optimized/mood-board-gold-black.jpg",
    results: [
      "/website-images/optimized/design-gold-black-luxury-1.jpg",
      "/website-images/optimized/design-gold-black-luxury-2.jpg",
      "/website-images/optimized/design-gold-black-luxury-3.jpg",
    ],
    title: "Gold & Black Luxury",
    description: "Inspired by high-end fashion editorials featuring gold jewelry against dramatic black backdrops. This mood board captures the essence of modern luxury with metallic accents and deep, rich tones.",
  },
  {
    id: 2,
    moodBoard: "/website-images/optimized/mood-board-emerald-gold.jpg",
    results: ["/website-images/optimized/design-emerald-gold-elegance.jpg"],
    title: "Emerald & Gold Elegance",
    description: "Drawing from nature's most precious gemstones, this design combines deep emerald greens with warm gold accents for a timeless, sophisticated aesthetic.",
  },
  {
    id: 3,
    moodBoard: "/website-images/optimized/mood-board-cream-natural.jpg",
    results: ["/website-images/optimized/design-cream-natural-tones.jpg"],
    title: "Cream & Natural Tones",
    description: "Soft, organic textures meet warm neutrals in this calming design inspired by Scandinavian minimalism and natural materials.",
  },
  {
    id: 4,
    moodBoard: "/website-images/optimized/mood-board-grey-silver.jpg",
    results: ["/website-images/optimized/design-grey-silver-modern.jpg"],
    title: "Grey & Silver Modern",
    description: "Contemporary cool tones with metallic silver accents create a sleek, urban atmosphere perfect for modern living spaces.",
  },
  {
    id: 5,
    moodBoard: "/website-images/optimized/mood-board-pink-green.jpg",
    results: ["/website-images/optimized/design-pink-green-fresh.jpg"],
    title: "Pink & Light Green Fresh",
    description: "Soft pastel hues inspired by spring gardens and contemporary art, bringing a fresh, airy feel to any room.",
  },
];

interface InspirationPair {
  id: number;
  inspiration: string;
  result: string;
  title: string;
  description: string;
}

const inspirationPairs: InspirationPair[] = [
  {
    id: 1,
    inspiration: "/website-images/optimized/inspiration-beach-coastal.jpg",
    result: "/website-images/optimized/result-beach.jpg",
    title: "Coastal Serenity",
    description: "Beach-inspired design with soft blues and sandy neutrals",
  },
  {
    id: 2,
    inspiration: "/website-images/optimized/inspiration-highland-cow-rustic.jpg",
    result: "/website-images/optimized/result-highland-cow.jpg",
    title: "Rustic Charm",
    description: "Highland cow inspired warm, earthy tones",
  },
  {
    id: 3,
    inspiration: "/website-images/optimized/inspiration-futuristic-cop.jpg",
    result: "/website-images/optimized/result-cop.jpg",
    title: "Futuristic Edge",
    description: "Bold, contemporary design with metallic accents",
  },
  {
    id: 4,
    inspiration: "/website-images/optimized/inspiration-pink-flamingo.jpg",
    result: "/website-images/optimized/result-pink-flamingo.jpg",
    title: "Tropical Pop",
    description: "Vibrant pink inspired by tropical wildlife",
  },
  {
    id: 5,
    inspiration: "/website-images/optimized/inspiration-gold-black-statue.jpg",
    result: "/website-images/optimized/result-gold-black-statue.jpg",
    title: "Gold Statue",
    description: "Luxurious gold and black interior inspired by classical sculpture",
  },
  {
    id: 6,
    inspiration: "/website-images/optimized/inspiration-coral.jpg",
    result: "/website-images/optimized/result-coral.jpg",
    title: "Vibrant Coral",
    description: "Underwater coral reef inspired colorful design",
  },
  {
    id: 7,
    inspiration: "/website-images/optimized/inspiration-unicorn.jpg",
    result: "/website-images/optimized/result-unicorn.jpg",
    title: "Iridescent Dreams",
    description: "Pastel iridescent design inspired by mythical unicorn",
  },
  {
    id: 8,
    inspiration: "/website-images/optimized/inspiration-gold-black-necklace.jpg",
    result: "/website-images/optimized/result-gold-black-necklace.jpg",
    title: "Gold Necklace Elegance",
    description: "Sophisticated gold and black interior inspired by luxury jewelry",
  },
];

interface FixedDesign {
  id: number;
  image: string;
  title: string;
}

const fixedDesigns: FixedDesign[] = [
  { id: 1, image: "/website-images/optimized/fixed-blush-marble.jpg", title: "Blush Marble" },
  { id: 2, image: "/website-images/optimized/fixed-bold-geometric.jpg", title: "Bold Geometric" },
  { id: 3, image: "/website-images/optimized/fixed-modern-deco.jpg", title: "Modern Deco" },
  { id: 4, image: "/website-images/optimized/fixed-moroccan-amethyst.jpg", title: "Moroccan Amethyst" },
  { id: 5, image: "/website-images/optimized/fixed-forestcore.jpg", title: "Forestcore" },
  { id: 6, image: "/website-images/optimized/fixed-futuristic-white-lab.jpg", title: "Futuristic White Lab" },
  { id: 7, image: "/website-images/optimized/fixed-opulent-baroque.jpg", title: "Opulent Baroque" },
  { id: 8, image: "/website-images/optimized/fixed-sapphire-silk.jpg", title: "Sapphire Silk" }
];

export default function Home() {
  const [selectedMoodBoard, setSelectedMoodBoard] = useState<MoodBoardItem | null>(null);
  const [selectedInspiration, setSelectedInspiration] = useState<InspirationPair | null>(null);
  const [selectedFixedDesign, setSelectedFixedDesign] = useState<FixedDesign | null>(null);

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
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Get the App
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Main Image */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-sm tracking-widest uppercase mb-6" style={{ color: GOLD }}>
              Interior Design at your Fingertips
            </p>
            <h1 className="text-6xl lg:text-8xl font-bold leading-[0.9] mb-8">
              One Room,
              <span className="block" style={{ color: GOLD }}>Endless Possibilities</span>
            </h1>
          </div>

          {/* Main Image with Gold Border */}
          <div className="max-w-4xl mx-auto mb-12">
            <div 
              className="p-2"
              style={{ 
                background: `linear-gradient(135deg, ${GOLD} 0%, #6b5432 50%, ${GOLD} 100%)`,
                borderRadius: '4px'
              }}
            >
              <div className="aspect-[16/9] relative overflow-hidden bg-black">
                <Image 
                  src="/website-images/optimized/hero-main-design.jpg" 
                  alt="Aspire Interior Design" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xl text-gray-400 mb-8">
              Upload a photo and see your space transformed by AI in seconds. 12 signature interior design styles.
            </p>
            <a 
              href="/coming-soon" 
              className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold transition hover:opacity-90 rounded-full"
              style={{ backgroundColor: GOLD, color: 'black' }}>
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on the App Store
            </a>
          </div>
        </div>
      </section>

      {/* Bespoke Section - Mood Board to Creation */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest uppercase mb-4" style={{ color: GOLD }}>Bespoke</p>
            <h2 className="text-5xl font-bold mb-4">Mood Board to Creation</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Upload a Mood Board, Apply the design to your room and you get these results
            </p>
          </div>

          {/* Mood Board Rows */}
          <div className="space-y-16">
            {moodBoards.map((item) => (
              <div key={item.id} className="group">
                {/* Row Layout: Mood Board → Results */}
                <div className="grid md:grid-cols-12 gap-6 items-center">
                  {/* Mood Board Image */}
                  <div className="md:col-span-3">
                    <button
                      onClick={() => setSelectedMoodBoard(item)}
                      className="relative aspect-square w-full overflow-hidden bg-gray-900 focus:outline-none focus:ring-2 focus:ring-[#907243]"
                    >
                      <Image 
                        src={item.moodBoard}
                        alt={item.title}
                        fill
                        className="object-cover hover:scale-105 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition flex items-center justify-center">
                        <p className="text-sm font-medium" style={{ color: GOLD }}>View Details</p>
                      </div>
                    </button>
                    <p className="text-xs text-gray-500 mt-2 text-center uppercase tracking-wider">Mood Board</p>
                    <h3 className="text-xl font-semibold mt-4 text-center" style={{ color: GOLD }}>{item.title}</h3>
                  </div>

                  {/* Arrow / Connection */}
                  <div className="md:col-span-1 flex justify-center">
                    <svg className="w-8 h-8 text-gray-600 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <svg className="w-8 h-8 text-gray-600 md:hidden rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>

                  {/* Result Images */}
                  <div className={`md:col-span-8 grid ${item.results.length === 3 ? 'grid-cols-3' : item.results.length === 2 ? 'grid-cols-2' : 'grid-cols-1'} gap-4`}>
                    {item.results.map((result, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedMoodBoard(item)}
                        className="relative aspect-[4/3] overflow-hidden bg-gray-900 focus:outline-none focus:ring-2 focus:ring-[#907243]"
                      >
                        <div 
                          className="absolute inset-0 p-1"
                          style={{ background: `linear-gradient(135deg, ${GOLD}, #6b5432)` }}
                        >
                          <div className="relative w-full h-full overflow-hidden">
                            <Image 
                              src={result}
                              alt={`${item.title} Result ${idx + 1}`}
                              fill
                              className="object-cover hover:scale-105 transition duration-500"
                            />
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration Gallery */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-sm tracking-widest uppercase mb-4" style={{ color: GOLD }}>Bespoke - Image Inspiration</p>
            <h2 className="text-4xl font-bold">Inspired by Everything</h2>
            <p className="text-gray-400 mt-4">From beaches to animals — if you can imagine it, we can take inspiration from it</p>
          </div>

          {/* First 4 Pairs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            {inspirationPairs.slice(0, 4).map((pair) => (
              <div key={pair.id} className="flex flex-col items-center">
                {/* Inspiration Image */}
                <button
                  onClick={() => setSelectedInspiration(pair)}
                  className="relative aspect-square w-full overflow-hidden bg-gray-900 focus:outline-none focus:ring-2 focus:ring-[#907243] hover:scale-105 transition duration-500"
                >
                  <Image 
                    src={pair.inspiration}
                    alt={`${pair.title} Inspiration`}
                    fill
                    className="object-cover"
                  />
                </button>

                {/* Label + Down Arrow */}
                <div className="flex flex-col items-center my-3">
                  <p className="text-[10px] uppercase tracking-wider mb-1" style={{ color: GOLD }}>Inspiration</p>
                  <svg className="w-4 h-4" fill="none" stroke={GOLD} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>

                {/* Result Image */}
                <button
                  onClick={() => setSelectedInspiration(pair)}
                  className="relative aspect-square w-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#907243] hover:scale-105 transition duration-500"
                  style={{ 
                    padding: '2px',
                    background: `linear-gradient(135deg, ${GOLD}, #6b5432)`
                  }}
                >
                  <div className="relative w-full h-full overflow-hidden bg-gray-900">
                    <Image 
                      src={pair.result}
                      alt={`${pair.title} Result`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* Second 4 Pairs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {inspirationPairs.slice(4, 8).map((pair) => (
              <div key={pair.id} className="flex flex-col items-center">
                {/* Inspiration Image */}
                <button
                  onClick={() => setSelectedInspiration(pair)}
                  className="relative aspect-square w-full overflow-hidden bg-gray-900 focus:outline-none focus:ring-2 focus:ring-[#907243] hover:scale-105 transition duration-500"
                >
                  <Image 
                    src={pair.inspiration}
                    alt={`${pair.title} Inspiration`}
                    fill
                    className="object-cover"
                  />
                </button>

                {/* Label + Down Arrow */}
                <div className="flex flex-col items-center my-3">
                  <p className="text-[10px] uppercase tracking-wider mb-1" style={{ color: GOLD }}>Inspiration</p>
                  <svg className="w-4 h-4" fill="none" stroke={GOLD} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>

                {/* Result Image */}
                <button
                  onClick={() => setSelectedInspiration(pair)}
                  className="relative aspect-square w-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#907243] hover:scale-105 transition duration-500"
                  style={{ 
                    padding: '2px',
                    background: `linear-gradient(135deg, ${GOLD}, #6b5432)`
                  }}
                >
                  <div className="relative w-full h-full overflow-hidden bg-gray-900">
                    <Image 
                      src={pair.result}
                      alt={`${pair.title} Result`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fixed Designs Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-sm tracking-widest uppercase mb-4" style={{ color: GOLD }}>Bespoke - Fixed Designs</p>
            <h2 className="text-5xl font-bold mb-4">300+ Preset Designs</h2>
            <p className="text-xl text-gray-400">Upload a photo, select fixed and choose your preset</p>
          </div>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-2 gap-6">
            {fixedDesigns.map((design) => (
              <button
                key={design.id}
                onClick={() => setSelectedFixedDesign(design)}
                className="group relative aspect-[4/3] overflow-hidden bg-gray-900 focus:outline-none focus:ring-2 focus:ring-[#907243]"
                style={{ 
                  padding: '3px',
                  background: `linear-gradient(135deg, ${GOLD}, #6b5432)`
                }}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image 
                    src={design.image}
                    alt={design.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-semibold" style={{ color: GOLD }}>{design.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">Click to see transformation</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Watch Us Transform - YouTube & TikTok */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-sm tracking-widest uppercase mb-4" style={{ color: GOLD }}>Watch the Magic</p>
            <h2 className="text-4xl font-bold mb-4">37 Million Views & Counting</h2>
            <p className="text-gray-400 text-lg">See real rooms transformed in seconds</p>
          </div>
          
          {/* YouTube Shorts */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" style={{ color: GOLD }}>
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span className="text-lg font-semibold">YouTube Shorts</span>
              <span className="text-sm text-gray-500">30K+ subscribers</span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-[9/16] max-w-sm mx-auto w-full">
                <iframe 
                  src="https://www.youtube.com/embed/LrbMmqSsRBM" 
                  title="YouTube Short 1"
                  className="w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="aspect-[9/16] max-w-sm mx-auto w-full">
                <iframe 
                  src="https://www.youtube.com/embed/UxoNBr9_wAk" 
                  title="YouTube Short 2"
                  className="w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* TikTok */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" style={{ color: GOLD }}>
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
              <span className="text-lg font-semibold">TikTok</span>
              <span className="text-sm text-gray-500">100K+ followers</span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-[9/16] max-w-sm mx-auto w-full">
                <iframe
                  src="https://www.tiktok.com/embed/7535377203593268502"
                  title="TikTok Video 1"
                  className="w-full h-full rounded-lg border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="aspect-[9/16] max-w-sm mx-auto w-full">
                <iframe
                  src="https://www.tiktok.com/embed/7548572852237126934"
                  title="TikTok Video 2"
                  className="w-full h-full rounded-lg border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mood Board Modal */}
      {selectedMoodBoard && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
          onClick={() => setSelectedMoodBoard(null)}
        >
          <div 
            className="max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-[#111] rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 sticky top-0 bg-[#111]">
              <h3 className="text-2xl font-semibold" style={{ color: GOLD }}>{selectedMoodBoard.title}</h3>
              <button 
                onClick={() => setSelectedMoodBoard(null)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Description */}
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">{selectedMoodBoard.description}</p>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Mood Board */}
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">Mood Board</p>
                  <div className="aspect-square relative overflow-hidden bg-gray-800 rounded-lg">
                    <Image 
                      src={selectedMoodBoard.moodBoard}
                      alt={selectedMoodBoard.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Results */}
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">Designs created by the Aspire App</p>
                  <div className={`grid ${selectedMoodBoard.results.length === 1 ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
                    {selectedMoodBoard.results.map((result, idx) => (
                      <div key={idx} className="aspect-square relative overflow-hidden bg-gray-800 rounded-lg">
                        <Image 
                          src={result}
                          alt={`Result ${idx + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 text-center">
                <a 
                  href="/coming-soon" 
                  className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold transition hover:opacity-90 rounded-full"
                  style={{ backgroundColor: GOLD, color: 'black' }}
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Create Your Own Design
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Inspiration Modal */}
      {selectedInspiration && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
          onClick={() => setSelectedInspiration(null)}
        >
          <div 
            className="max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-[#111] rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 sticky top-0 bg-[#111]">
              <h3 className="text-2xl font-semibold" style={{ color: GOLD }}>{selectedInspiration.title}</h3>
              <button 
                onClick={() => setSelectedInspiration(null)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Description */}
              <p className="text-gray-300 mb-8 text-lg leading-relaxed text-center">{selectedInspiration.description}</p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                {/* Inspiration Image */}
                <div className="flex-1 w-full max-w-sm">
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-3 text-center">Inspiration</p>
                  <div className="aspect-square relative overflow-hidden bg-gray-800 rounded-lg">
                    <Image 
                      src={selectedInspiration.inspiration}
                      alt={`${selectedInspiration.title} Inspiration`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-center py-2 md:py-0">
                  <svg className="w-8 h-8 md:w-10 md:h-10 rotate-90 md:rotate-0" fill="none" stroke={GOLD} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                {/* Generated Result */}
                <div className="flex-1 w-full max-w-sm">
                  <p className="text-sm mb-3 text-center" style={{ color: GOLD, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Design created by the Aspire App
                  </p>
                  <div 
                    className="aspect-square relative overflow-hidden rounded-lg p-1"
                    style={{ background: `linear-gradient(135deg, ${GOLD}, #6b5432)` }}
                  >
                    <div className="relative w-full h-full overflow-hidden">
                      <Image 
                        src={selectedInspiration.result}
                        alt={`${selectedInspiration.title} Result`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 text-center">
                <a 
                  href="/coming-soon"
                  className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold transition hover:opacity-90 rounded-full"
                  style={{ backgroundColor: GOLD, color: 'black' }}
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Create Your Own Design
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fixed Design Modal */}
      {selectedFixedDesign && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
          onClick={() => setSelectedFixedDesign(null)}
        >
          <div 
            className="max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-[#111] rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 sticky top-0 bg-[#111]">
              <h3 className="text-2xl font-semibold" style={{ color: GOLD }}>{selectedFixedDesign.title}</h3>
              <button 
                onClick={() => setSelectedFixedDesign(null)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                {/* Original Room */}
                <div className="flex-1 w-full max-w-sm">
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-3 text-center">Your Room</p>
                  <div className="aspect-[4/3] relative overflow-hidden bg-gray-800 rounded-lg">
                    <Image 
                      src="/website-images/optimized/hero-main-design.jpg"
                      alt="Original Room"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-center py-2 md:py-0">
                  <svg className="w-8 h-8 md:w-10 md:h-10 rotate-90 md:rotate-0" fill="none" stroke={GOLD} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                {/* Fixed Design Result */}
                <div className="flex-1 w-full max-w-sm">
                  <p className="text-sm mb-3 text-center" style={{ color: GOLD, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {selectedFixedDesign.title}
                  </p>
                  <div 
                    className="aspect-[4/3] relative overflow-hidden rounded-lg p-1"
                    style={{ background: `linear-gradient(135deg, ${GOLD}, #6b5432)` }}
                  >
                    <div className="relative w-full h-full overflow-hidden">
                      <Image 
                        src={selectedFixedDesign.image}
                        alt={selectedFixedDesign.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 text-center">
                <a 
                  href="/coming-soon"
                  className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold transition hover:opacity-90 rounded-full"
                  style={{ backgroundColor: GOLD, color: 'black' }}
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Apply This Design to Your Room
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

            {/* Final CTA Section */}
      <section className="py-24 border-t border-white/10 relative overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(ellipse at center, #907243 0%, transparent 70%)' }} />
        
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
          {/* Social Proof Counter */}
          <div className="mb-8">
            <p className="text-6xl md:text-7xl font-bold mb-2" style={{ color: GOLD }}>50,000+</p>
            <p className="text-lg text-gray-400">Room transformations & counting</p>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Become the Next<br />
            <span style={{ color: GOLD }}>Interior Designer?</span>
          </h2>

          {/* Subcopy */}
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands transforming their spaces. Your dream room is just one tap away.
          </p>

          {/* Hashtag Campaign */}
          <div className="mb-10">
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-3">Share Your Creation</p>
            <div className="inline-block px-6 py-3 border-2 rounded-full" style={{ borderColor: GOLD }}>
              <span className="text-2xl md:text-3xl font-bold" style={{ color: GOLD }}>#OMGASPIRE</span>
            </div>
            <p className="text-sm text-gray-400 mt-3">Share your designs on TikTok & Instagram</p>
          </div>

          {/* Big CTA Button */}
          <a 
            href="/coming-soon"
            className="inline-flex items-center gap-3 px-10 py-5 text-lg font-semibold transition hover:scale-105 rounded-full shadow-2xl"
            style={{ backgroundColor: GOLD, color: 'black', boxShadow: '0 0 40px rgba(144, 114, 67, 0.4)' }}
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Start Creating Now
          </a>

          {/* Trust indicators */}
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Free to download • No credit card required</span>
          </div>
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
