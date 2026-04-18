import Link from "next/link";

export default function WatchPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#c9a962]/10 border border-[#c9a962]/30 text-[#c9a962] text-sm font-medium tracking-wide mb-6">
            CONTENT HUB
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Watch
            <br />
            <span className="text-gradient-gold">Aspire</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Interior design inspiration, media walls, luxury home tours, and room transformations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gradient-gold">29K+</span>
              <span className="text-gray-400">YouTube Subs</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gradient-gold">93K+</span>
              <span className="text-gray-400">TikTok Followers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gradient-gold">17M+</span>
              <span className="text-gray-400">Total Views</span>
            </div>
          </div>
        </div>

        {/* Platforms */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* YouTube */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">▶</div>
              <div>
                <h2 className="text-2xl font-bold">YouTube</h2>
                <p className="text-gray-400 text-sm">@Aspire-Interiors</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6">
              Long-form content including luxury home tours, room transformations, 
              media wall showcases, and style deep-dives.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="text-sm">
                <span className="text-[#c9a962]">Top Performer:</span>
                <span className="text-gray-400"> French Chateau Ruins (534K views, 133% retention)</span>
              </div>
              <div className="text-sm">
                <span className="text-[#c9a962]">Recent Growth:</span>
                <span className="text-gray-400"> +5,402% views in 28 days</span>
              </div>
            </div>
            
            <a 
              href="https://youtube.com/@Aspire-Interiors"
              className="inline-flex items-center gap-2 text-[#c9a962] hover:underline"
            >
              Subscribe on YouTube →
            </a>
          </div>

          {/* TikTok */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-black border border-white/20 flex items-center justify-center text-white font-bold">♪</div>
              <div>
                <h2 className="text-2xl font-bold">TikTok</h2>
                <p className="text-gray-400 text-sm">@aspire_interiors.com</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6">
              Short-form content featuring quick transformations, trending styles, 
              and viral interior design moments.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="text-sm">
                <span className="text-[#c9a962]">Total Likes:</span>
                <span className="text-gray-400"> 757.5K</span>
              </div>
              <div className="text-sm">
                <span className="text-[#c9a962]">Recent Views:</span>
                <span className="text-gray-400"> 1.8M (28 days)</span>
              </div>
            </div>
            
            <a 
              href="https://tiktok.com/@aspire_interiors.com"
              className="inline-flex items-center gap-2 text-[#c9a962] hover:underline"
            >
              Follow on TikTok →
            </a>
          </div>
        </div>

        {/* Content Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Content <span className="text-gradient-gold">Categories</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Media Walls", desc: "Our specialty — terrazzo, walnut, marble designs", icon: "🖼️" },
              { title: "Room Transformations", desc: "Before/after reveals that inspire", icon: "✨" },
              { title: "Luxury Home Tours", desc: "Full property showcases", icon: "🏰" },
              { title: "Style Showcases", desc: "All 12 signature styles in action", icon: "🎨" },
            ].map((cat, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-4xl mb-4">{cat.icon}</div>
                <h3 className="font-semibold mb-2">{cat.title}</h3>
                <p className="text-gray-400 text-sm">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Video Placeholder */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Featured Content</h2>
          <div className="aspect-video max-w-4xl mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">▶️</div>
              <p className="text-gray-400">YouTube Video Embed</p>
              <p className="text-sm text-gray-500 mt-2">French Chateau Ruins Transformation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
