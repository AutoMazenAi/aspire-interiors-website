import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/logo.png" 
                alt="Aspire Interiors" 
                width={40} 
                height={40} 
                className="rounded"
              />
              <span className="text-xl font-semibold tracking-tight">
                ASPIRE
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/app" className="text-sm text-gray-300 hover:text-[#c9a962] transition-colors underline-gold">
                App
              </Link>
              <Link href="/media-walls" className="text-sm text-gray-300 hover:text-[#c9a962] transition-colors underline-gold">
                Media Walls
              </Link>
              <Link href="/styles" className="text-sm text-gray-300 hover:text-[#c9a962] transition-colors underline-gold">
                Styles
              </Link>
              <Link href="/watch" className="text-sm text-gray-300 hover:text-[#c9a962] transition-colors underline-gold">
                Watch
              </Link>
              <Link href="/about" className="text-sm text-gray-300 hover:text-[#c9a962] transition-colors underline-gold">
                About
              </Link>
            </div>
            <a 
              href="https://apps.apple.com/app/aspire-interiors" 
              className="btn-gold px-4 py-2 rounded-full text-sm font-medium text-black"
            >
              Get the App
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-[#1a1a1a]" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c9a962]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#c9a962]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#c9a962]/10 border border-[#c9a962]/30 text-[#c9a962] text-sm font-medium tracking-wide">
              AI-POWERED INTERIOR DESIGN
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            Transform Your
            <br />
            <span className="text-gradient-gold">Space with AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10">
            Upload a photo. Choose your style. See your room redesigned in seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://apps.apple.com/app/aspire-interiors"
              className="btn-gold px-8 py-4 rounded-full text-lg font-semibold text-black flex items-center gap-3"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on the App Store
            </a>
            <Link 
              href="/watch"
              className="px-8 py-4 rounded-full text-lg font-semibold border border-white/20 hover:border-[#c9a962] hover:text-[#c9a962] transition-all"
            >
              Watch Latest Video
            </Link>
          </div>
          
          <div className="mt-6 text-sm text-gray-500">
            £8.99/month · Founding Member Pricing
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 border-y border-white/10 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">29K+</div>
              <div className="text-sm text-gray-400">YouTube Subscribers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">93K+</div>
              <div className="text-sm text-gray-400">TikTok Followers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">17M+</div>
              <div className="text-sm text-gray-400">Total Views</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">12</div>
              <div className="text-sm text-gray-400">Signature Styles</div>
            </div>
          </div>
        </div>
      </section>

      {/* App Features Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Design Your <span className="text-gradient-gold">Dream Room</span>
            </h2>
            <p className="text-xl text-gray-400">Three ways to create your perfect space</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Text Only",
                description: "Start from scratch with your vision. Describe your dream room and let AI bring it to life.",
                icon: "✍️",
              },
              {
                title: "With Inspiration",
                description: "Upload any image — a soldier's armor, ice cream, a sunset — our AI extracts the essence and transforms it into interior design.",
                icon: "🎨",
              },
              {
                title: "Copy a Room",
                description: "Transform your existing space. Upload a photo of your room and reimagine it in any of our 12 signature styles.",
                icon: "🏠",
              },
            ].map((feature, i) => (
              <div 
                key={i}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#c9a962]/50 transition-all group"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#c9a962] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Walls CTA Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#c9a962] text-sm font-medium tracking-wide uppercase">
                Our Specialty
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                Media Wall
                <br />
                <span className="text-gradient-gold">Design Experts</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                From terrazzo to fluted panels, walnut herringbone to marble — discover stunning media wall designs and create your own with AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/media-walls"
                  className="btn-gold px-6 py-3 rounded-full font-semibold text-black text-center"
                >
                  Explore Media Walls
                </Link>
                <a 
                  href="https://apps.apple.com/app/aspire-interiors"
                  className="px-6 py-3 rounded-full font-semibold border border-white/20 hover:border-[#c9a962] hover:text-[#c9a962] transition-all text-center"
                >
                  Design Your Own
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#c9a962]/20 to-[#8b7355]/20 border border-[#c9a962]/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🖼️</div>
                  <p className="text-gray-400">Media Wall Gallery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Design Inspiration <span className="text-gradient-gold">Weekly</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Trend alerts, new styles, and exclusive tips delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-white/10 focus:border-[#c9a962] focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="btn-gold px-8 py-4 rounded-full font-semibold text-black"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image 
                  src="/logo.png" 
                  alt="Aspire Interiors" 
                  width={32} 
                  height={32} 
                  className="rounded"
                />
                <span className="text-lg font-semibold">ASPIRE</span>
              </div>
              <p className="text-gray-400 text-sm">
                AI-powered interior design. Transform your space in seconds.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/app" className="hover:text-[#c9a962] transition-colors">App</Link></li>
                <li><Link href="/styles" className="hover:text-[#c9a962] transition-colors">Styles</Link></li>
                <li><Link href="/media-walls" className="hover:text-[#c9a962] transition-colors">Media Walls</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Content</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://youtube.com/@Aspire-Interiors" className="hover:text-[#c9a962] transition-colors">YouTube</a></li>
                <li><a href="https://tiktok.com/@aspire_interiors.com" className="hover:text-[#c9a962] transition-colors">TikTok</a></li>
                <li><Link href="/watch" className="hover:text-[#c9a962] transition-colors">Watch</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/about" className="hover:text-[#c9a962] transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-[#c9a962] transition-colors">Contact</Link></li>
                <li><a href="https://automazen.ai" className="hover:text-[#c9a962] transition-colors">AutoMazen AI</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© 2026 Aspire Interiors. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-[#c9a962] transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-[#c9a962] transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
