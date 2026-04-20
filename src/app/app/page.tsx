"use client";

import Image from "next/image";
import Link from "next/link";

const GOLD = "#907243";

const styles = [
  { name: 'Classic European', image: '/website-images/optimized/styles/style-classic-european.jpg' },
  { name: 'Coastal Escape', image: '/website-images/optimized/styles/style-coastal-escape.jpg' },
  { name: 'Modern Deco', image: '/website-images/optimized/styles/style-modern-deco.jpg' },
  { name: 'Minimal Essential', image: '/website-images/optimized/styles/style-minimal-essential.jpg' },
  { name: 'Futuristic Visionary', image: '/website-images/optimized/styles/style-futuristic-visionary.jpg' },
  { name: 'Industrial Raw', image: '/website-images/optimized/styles/style-industrial-raw.jpg' },
  { name: 'Historical Heritage', image: '/website-images/optimized/styles/style-historical-heritage.jpg' },
  { name: 'Organic Natural', image: '/website-images/optimized/styles/style-organic-natural.jpg' },
  { name: 'Urban Contemporary', image: '/website-images/optimized/styles/style-urban-contemporary.jpg' },
  { name: 'Warm Welcome', image: '/website-images/optimized/styles/style-warm-welcome.jpg' },
  { name: 'Bold Expressive', image: '/website-images/optimized/styles/style-bold-expressive.jpg' },
  { name: 'Art Nouveau Revival', image: '/website-images/optimized/styles/style-art-nouveau.jpg' },
];

export default function AppPage() {
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
                  className={`text-sm transition ${item === 'App' ? 'font-semibold' : 'text-gray-400 hover:text-white'}`}
                  style={item === 'App' ? { color: GOLD } : {}}
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
          <p className="text-sm tracking-widest uppercase mb-4" style={{ color: GOLD }}>Aspire App</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Transform in Seconds</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get your Interior Design Super Powers from the Aspire App. From Bespoke Creations to Fixed Styles, you can have your new design in seconds for the fraction of a cost of an Interior Designer.
          </p>
        </div>
      </section>

      {/* Bespoke Mode — Three Ways to Create */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest uppercase mb-4" style={{ color: GOLD }}>Bespoke Mode</p>
            <h2 className="text-4xl font-bold mb-4">Three Ways to Create</h2>
            <p className="text-gray-400 text-lg">Describe your vision, get inspired, or recreate any room.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Option 1: Text Only */}
            <div className="p-8 rounded-2xl border border-white/10 hover:border-[#907243] transition">
              <div className="relative w-full h-48 rounded-xl mb-6 overflow-hidden">
                <Image
                  src="/website-images/optimized/bespoke/bespoke-text-vision.jpg"
                  alt="Describe Your Vision - Phone with text input"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Describe Your Vision</h3>
              <p className="text-gray-400">
                Simply type what you want. &quot;A cozy Scandinavian living room with warm wood tones and soft lighting.&quot; No images needed — just your words and your room photo.
              </p>
            </div>

            {/* Option 2: With Inspiration (Mood Board) */}
            <div className="p-8 rounded-2xl border border-white/10 hover:border-[#907243] transition">
              <div className="relative w-full h-48 rounded-xl mb-6 overflow-hidden">
                <Image
                  src="/website-images/optimized/bespoke/bespoke-mood-board.jpg"
                  alt="Upload a Mood Board - Inspiration materials"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Upload a Mood Board</h3>
              <p className="text-gray-400">
                Found colours, textures, or styles you love? Upload any inspiration image — a paint swatch, fabric sample, nature photo, or Pinterest find. Our AI extracts the colours, materials, and mood into 6 key fields (ceiling, flooring, walls, seating, furniture, lighting). Edit them, then generate.
              </p>
            </div>

            {/* Option 3: Style Match / Room Inspiration */}
            <div className="p-8 rounded-2xl border border-white/10 hover:border-[#907243] transition">
              <div className="relative w-full h-48 rounded-xl mb-6 overflow-hidden">
                <Image
                  src="/website-images/optimized/bespoke/bespoke-recreate-room.jpg"
                  alt="Recreate Any Room - Luxury living room"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Recreate Any Room</h3>
              <p className="text-gray-400">
                See a room you absolutely love? Upload that photo and our AI analyses the architecture, materials, and style — then recreates that exact look in your own space. Or get inspired from any image you like, just upload a cool image and let us turn that into a room design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Mode — 12 Curated Styles */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest uppercase mb-4" style={{ color: GOLD }}>Materials Mode</p>
            <h2 className="text-4xl font-bold mb-4">Design by Material</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Pick your aesthetic, then fine-tune every surface through our 8-step wizard.
            </p>
          </div>

          <div className="mb-12 p-8 rounded-2xl border border-white/10">
            <p className="text-gray-400 text-center mb-8">
              Choose from 12 distinct interior design styles, then walk through our guided wizard to specify every element. From ceilings to lighting, you control every material and finish.
            </p>

            {/* The 12 Styles Grid */}
            <h3 className="text-xl font-semibold mb-6 text-center">The 12 Styles</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
              {styles.map((style, index) => (
                <div key={index} className="relative aspect-[4/5] rounded-lg overflow-hidden group">
                  <Image
                    src={style.image}
                    alt={style.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <span className="text-sm font-medium">{style.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* The 8-Step Wizard */}
          <div className="p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-semibold mb-8 text-center">The 8-Step Wizard</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Style Family', desc: 'Choose from 12 curated aesthetics' },
                { step: '2', title: 'Ceiling', desc: '5 options with colour variants' },
                { step: '3', title: 'Flooring', desc: '5 options with colour variants' },
                { step: '4', title: 'Walls', desc: '6 options with colour variants' },
                { step: '5', title: 'Seating/Bed', desc: '6 options with colour variants' },
                { step: '6', title: 'Furniture Set', desc: '5-6 curated accessory combinations' },
                { step: '7', title: 'Lighting', desc: '6 options with colour variants' },
                { step: '8', title: 'Review', desc: 'See your complete design before generating' }
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 font-bold"
                    style={{ backgroundColor: GOLD, color: 'black' }}
                  >
                    {item.step}
                  </div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Styles — 300+ Curated Designs */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-sm tracking-widest uppercase mb-4" style={{ color: GOLD }}>Fixed Styles</p>
          <h2 className="text-4xl font-bold mb-4">300+ Curated Designs</h2>
          <p className="text-xl text-gray-400 mb-8">
            Browse 300+ professionally designed looks. Upload, select, done.
          </p>
          <div className="p-8 rounded-2xl border border-white/10 mb-8">
            <p className="text-gray-400">
              No decisions to make — pure inspiration. Browse our library of over 300 ready-made room designs across all styles. Each preset is a complete design package. Upload your room, tap a style, and get an instant transformation.
            </p>
          </div>
          {/* Curated Design Images */}
          <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
            {[
              { src: '/website-images/optimized/designs/design-bioluminescent-cobalt.jpg', name: 'Bioluminescent Cobalt' },
              { src: '/website-images/optimized/designs/design-biophilic-retreat.jpg', name: 'Biophilic Retreat' },
              { src: '/website-images/optimized/designs/design-blush-fluted.jpg', name: 'Blush Fluted' },
              { src: '/website-images/optimized/designs/design-bold-geometric.jpg', name: 'Bold Geometric' },
              { src: '/website-images/optimized/designs/design-coastal-calm.jpg', name: 'Coastal Calm' },
              { src: '/website-images/optimized/designs/design-contemporary-art.jpg', name: 'Contemporary Art' },
              { src: '/website-images/optimized/designs/design-curved-elegance.jpg', name: 'Curved Elegance' },
              { src: '/website-images/optimized/designs/design-jewelbox-glam.jpg', name: 'Jewelbox Glam' }
            ].map((design) => (
              <div key={design.name} className="group relative aspect-square rounded-lg overflow-hidden border border-white/10">
                <Image
                  src={design.src}
                  alt={design.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-2 translate-y-full group-hover:translate-y-0 transition duration-300">
                  <p className="text-xs font-medium text-center" style={{ color: GOLD }}>{design.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest uppercase mb-4" style={{ color: GOLD }}>How It Works</p>
            <h2 className="text-4xl font-bold">3 Simple Steps</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold"
                style={{ backgroundColor: GOLD, color: 'black' }}
              >
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Upload</h3>
              <p className="text-gray-400">Snap or choose your room photo</p>
            </div>

            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold"
                style={{ backgroundColor: GOLD, color: 'black' }}
              >
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Choose Your Path</h3>
              <p className="text-gray-400">Bespoke (3 options), Materials (12 styles), or Fixed (300+ designs)</p>
            </div>

            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold"
                style={{ backgroundColor: GOLD, color: 'black' }}
              >
                3
              </div>
              <h3 className="text-xl font-bold mb-3">See the Magic</h3>
              <p className="text-gray-400">Aspire App generates your transformation in 15-20 seconds</p>
            </div>
          </div>
        </div>
      </section>

      {/* Available on iPhone */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-sm tracking-widest uppercase mb-4" style={{ color: GOLD }}>Download</p>
          <h2 className="text-4xl font-bold mb-8">Available on iPhone</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 rounded-xl bg-white/5">
              <h3 className="font-semibold mb-4" style={{ color: GOLD }}>What&apos;s Included</h3>
              <ul className="space-y-3 text-gray-400 text-left">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke={GOLD} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  3 Bespoke creation modes
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke={GOLD} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  12 curated material styles
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke={GOLD} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  300+ fixed designs
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke={GOLD} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  8-step guided wizard
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-white/5">
              <h3 className="font-semibold mb-4" style={{ color: GOLD }}>Start Free</h3>
              <p className="text-gray-400 mb-6">
                Get 3 free designs when you download. No credit card required.
              </p>
              <a 
                href="/coming-soon"
                className="inline-flex items-center gap-3 px-8 py-4 font-semibold rounded-full transition hover:scale-105"
                style={{ backgroundColor: GOLD, color: 'black' }}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download on the App Store
              </a>
            </div>
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
