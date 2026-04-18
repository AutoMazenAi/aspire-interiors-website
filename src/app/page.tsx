import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] noise-overlay">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-xl">
                <Image 
                  src="/logo.png" 
                  alt="Aspire Interiors" 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="text-xl font-semibold tracking-tight">
                ASPIRE
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              {['App', 'Watch', 'Styles', 'About'].map((item) => (
                <Link 
                  key={item}
                  href={`/${item.toLowerCase()}`} 
                  className="text-sm text-gray-400 hover:text-white transition-colors underline-gold"
                >
                  {item}
                </Link>
              ))}
            </div>
            <a 
              href="https://apps.apple.com/app/aspire-interiors" 
              className="btn-gold px-6 py-2.5 rounded-full text-sm font-semibold text-black flex items-center gap-2"
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
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#c9a962]/10 rounded-full blur-[120px] float" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#8b7355]/10 rounded-full blur-[100px] float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#c9a962]/5 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-[#c9a962] text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-[#c9a962] pulse-glow" />
              AI-POWERED INTERIOR DESIGN
            </span>
          </div>
          
          {/* Headline */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8 leading-[0.9]">
            Your Room,
            <br />
            <span className="text-gradient-gold">Reimagined</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Upload a photo. Describe your vision. Use any image as inspiration. 
            See your space transformed by AI in seconds.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
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
              href="/app"
              className="px-8 py-4 rounded-full text-lg font-semibold glass hover:bg-white/10 transition-all flex items-center gap-2"
            >
              See How It Works
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </Link>
          </div>
          
          {/* Trust badges */}
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <span className="text-[#c9a962]">★★★★★</span> Early Access
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-700" />
            <span>17M+ Transformations</span>
            <span className="w-1 h-1 rounded-full bg-gray-700" />
            <span>Free for 3 designs</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-[#c9a962] rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* The Bespoke Experience */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-[#c9a962] text-sm font-medium tracking-widest uppercase">Three Ways to Create</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              The Bespoke <span className="text-gradient-gold">Experience</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everyone designs differently. Choose the path that works for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "✍️",
                title: "Write Your Vision",
                description: "Describe your dream room in your own words. Our AI translates your vision into photorealistic designs.",
                example: "\"A warm minimalist bedroom with terracotta accents and natural wood\"",
                gradient: "from-amber-500/20 to-orange-500/20"
              },
              {
                icon: "🖼️",
                title: "Upload Inspiration",
                description: "Upload any image — a mood board, Pinterest pin, even a sunset or fashion photo. Our AI extracts the style.",
                example: "\"Soldier's armor → Industrial living room\"",
                gradient: "from-[#c9a962]/20 to-[#8b7355]/20",
                featured: true
              },
              {
                icon: "📸",
                title: "Redesign Your Room",
                description: "Take a photo of your actual room and instantly see it in 12 different styles. Your space, reimagined.",
                example: "\"Your living room → Classic European, Modern Deco...\"",
                gradient: "from-emerald-500/20 to-teal-500/20"
              }
            ].map((card, i) => (
              <div 
                key={i}
                className={`relative group ${card.featured ? 'md:-mt-4 md:mb-4' : ''}`}
              >
                <div className={`h-full rounded-3xl glass-strong p-8 card-hover gold-glow-hover ${card.featured ? 'border-[#c9a962]/30' : ''}`}>
                  {card.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#c9a962] text-black text-xs font-bold rounded-full">
                      MOST POPULAR
                    </div>
                  )}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{card.description}</p>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-sm text-[#c9a962]">{card.example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "29K+", label: "YouTube Subscribers", icon: "▶️" },
              { value: "93K+", label: "TikTok Followers", icon: "♪" },
              { value: "17M+", label: "Transformations", icon: "✨" },
              { value: "12", label: "Design Styles", icon: "🎨" },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* See It In Action */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#c9a962]/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="text-[#c9a962] text-sm font-medium tracking-widest uppercase">Watch the Magic</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              See It In <span className="text-gradient-gold">Action</span>
            </h2>
            <p className="text-xl text-gray-400">
              Real transformations from our community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "French Chateau Transformation", views: "534K views", platform: "YouTube", icon: "▶️" },
              { title: "Terrazzo Media Wall Design", views: "287K views", platform: "YouTube", icon: "▶️" },
              { title: "Before & After Compilation", views: "1.2M views", platform: "TikTok", icon: "♪" },
            ].map((video, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 overflow-hidden relative mb-4 group-hover:border-[#c9a962]/50 transition-all">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#c9a962]/20 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-2xl">▶️</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span className="text-xs px-2 py-1 rounded bg-black/50 backdrop-blur">{video.platform}</span>
                  </div>
                </div>
                <h3 className="font-semibold mb-1 group-hover:text-[#c9a962] transition-colors">{video.title}</h3>
                <p className="text-sm text-gray-500">{video.views}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-12">
            <a href="https://youtube.com/@Aspire-Interiors" className="px-6 py-3 rounded-full glass hover:bg-white/10 transition-all flex items-center gap-2">
              <span>▶️</span> Subscribe on YouTube
            </a>
            <a href="https://tiktok.com/@aspire_interiors.com" className="px-6 py-3 rounded-full glass hover:bg-white/10 transition-all flex items-center gap-2">
              <span>♪</span> Follow on TikTok
            </a>
          </div>
        </div>
      </section>

      {/* Style Gallery */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#c9a962] text-sm font-medium tracking-widest uppercase">12 Signature Styles</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              Find Your <span className="text-gradient-gold">Aesthetic</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Classic European", "Coastal Escape", "Modern Deco", "Minimal Essential",
              "Futuristic Visionary", "Industrial Raw", "Historical Heritage", "Organic Natural",
              "Urban Contemporary", "Warm Welcome", "Bold Expressive", "Art Nouveau Revival"
            ].map((style, i) => (
              <div 
                key={i}
                className="group cursor-pointer"
              >
                <div className="aspect-square rounded-xl glass border border-white/10 overflow-hidden relative mb-3 group-hover:border-[#c9a962]/50 transition-all card-hover">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:from-[#c9a962]/20 group-hover:to-[#8b7355]/20 transition-all" />
                  <div className="absolute inset-0 flex items-center justify-center text-3xl opacity-50 group-hover:opacity-100 transition-opacity">
                    🏠
                  </div>
                </div>
                <p className="text-sm text-center text-gray-400 group-hover:text-white transition-colors">{style}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              How It <span className="text-gradient-gold">Works</span>
            </h2>
            <p className="text-xl text-gray-400">From idea to stunning design in under 30 seconds</p>
          </div>

          <div className="space-y-12">
            {[
              { step: "01", title: "Choose Your Path", desc: "Pick from 3 bespoke options: Text, Inspiration, or Redesign" },
              { step: "02", title: "Upload & Describe", desc: "Add a photo, write your vision, or upload inspiration" },
              { step: "03", title: "AI Magic", desc: "Our AI generates your redesign in seconds" },
              { step: "04", title: "Save & Share", desc: "Download, edit history, or share your design" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-8 group">
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl glass flex items-center justify-center text-2xl font-bold text-[#c9a962] group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <span className="inline-flex items-center gap-2 text-[#c9a962]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Takes less than 30 seconds
            </span>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Simple <span className="text-gradient-gold">Pricing</span>
            </h2>
            <p className="text-xl text-gray-400">Start free. Upgrade when you're ready.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Free",
                price: "£0",
                desc: "Try before you buy",
                features: ["3 room transformations", "All 12 styles", "Basic support"],
                cta: "Download Free"
              },
              {
                name: "Monthly",
                price: "£8.99",
                original: "£12.99",
                desc: "Founding member pricing",
                features: ["Unlimited transformations", "All styles & materials", "Save & share designs", "Edit history", "Priority support"],
                cta: "Get Started",
                featured: true
              },
              {
                name: "Annual",
                price: "£69.99",
                original: "£99.99",
                desc: "Save 35%",
                features: ["Everything in Monthly", "35% savings", "Exclusive styles"],
                cta: "Save with Annual"
              }
            ].map((plan, i) => (
              <div key={i} className={`relative ${plan.featured ? 'md:-mt-4 md:mb-4' : ''}`}>
                <div className={`h-full rounded-3xl p-8 ${plan.featured ? 'glass-strong border-[#c9a962]/30 gold-glow' : 'glass'}`}>
                  {plan.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#c9a962] text-black text-xs font-bold rounded-full">
                      BEST VALUE
                    </div>
                  )}
                  <h3 className="text-lg font-medium text-gray-400 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    {plan.original && (
                      <span className="text-gray-500 line-through">{plan.original}</span>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm mb-6">{plan.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-gray-300">
                        <span className="text-[#c9a962]">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="https://apps.apple.com/app/aspire-interiors"
                    className={`block w-full py-3 rounded-full font-semibold text-center transition-all ${
                      plan.featured 
                        ? 'btn-gold text-black' 
                        : 'glass hover:bg-white/10'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#c9a962]/10 via-transparent to-[#8b7355]/10" />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get Design <span className="text-gradient-gold">Inspiration</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Weekly trends, new styles, and exclusive tips delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full glass border border-white/10 focus:border-[#c9a962] focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="btn-gold px-8 py-4 rounded-full font-semibold text-black"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">Join 50,000+ design enthusiasts</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-8 h-8 overflow-hidden rounded-lg">
                  <Image 
                    src="/logo.png" 
                    alt="Aspire Interiors" 
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-lg font-semibold">ASPIRE</span>
              </div>
              <p className="text-gray-400 text-sm">
                AI-powered interior design. Transform your space in seconds.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-sm">Product</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="/app" className="hover:text-[#c9a962] transition-colors">App</Link></li>
                <li><Link href="/styles" className="hover:text-[#c9a962] transition-colors">Styles</Link></li>
                <li><Link href="/pricing" className="hover:text-[#c9a962] transition-colors">Pricing</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-sm">Content</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="https://youtube.com/@Aspire-Interiors" className="hover:text-[#c9a962] transition-colors">YouTube</a></li>
                <li><a href="https://tiktok.com/@aspire_interiors.com" className="hover:text-[#c9a962] transition-colors">TikTok</a></li>
                <li><Link href="/watch" className="hover:text-[#c9a962] transition-colors">Watch</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-sm">Company</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="/about" className="hover:text-[#c9a962] transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-[#c9a962] transition-colors">Contact</Link></li>
                <li><a href="https://automazen.ai" className="hover:text-[#c9a962] transition-colors">AutoMazen AI</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
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
