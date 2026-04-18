import Link from "next/link";

const styles = [
  { name: "Classic European", desc: "Timeless elegance with ornate details" },
  { name: "Coastal Escape", desc: "Breezy, beach-inspired tranquillity" },
  { name: "Modern Deco", desc: "Geometric glamour meets contemporary" },
  { name: "Minimal Essential", desc: "Less is more, perfectly executed" },
  { name: "Futuristic Visionary", desc: "Bold, forward-thinking design" },
  { name: "Industrial Raw", desc: "Urban edge with exposed elements" },
  { name: "Historical Heritage", desc: "Period character with modern comfort" },
  { name: "Organic Natural", desc: "Biophilic design bringing nature in" },
  { name: "Urban Contemporary", desc: "City living at its finest" },
  { name: "Warm Welcome", desc: "Cosy, inviting, lived-in luxury" },
  { name: "Bold Expressive", desc: "Dramatic statements that inspire" },
  { name: "Art Nouveau Revival", desc: "Flowing lines and natural forms" },
];

export default function StylesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#c9a962]/10 border border-[#c9a962]/30 text-[#c9a962] text-sm font-medium tracking-wide mb-6">
            12 SIGNATURE STYLES
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Find Your
            <br />
            <span className="text-gradient-gold">Perfect Aesthetic</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From Classic European to Art Nouveau Revival, discover your ideal interior design style 
            and see it come to life in your own space.
          </p>
        </div>

        {/* Styles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {styles.map((style, i) => (
            <div 
              key={i}
              className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#c9a962]/50 transition-all cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-[#c9a962]/20 to-[#8b7355]/20 mb-4 flex items-center justify-center overflow-hidden">
                <span className="text-4xl group-hover:scale-110 transition-transform">🏠</span>
              </div>
              <h3 className="font-semibold mb-1 group-hover:text-[#c9a962] transition-colors">{style.name}</h3>
              <p className="text-gray-400 text-sm">{style.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Available for Living Rooms, Bedrooms, and Bathrooms
          </p>
          <a 
            href="https://apps.apple.com/app/aspire-interiors"
            className="btn-gold inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-semibold text-black"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Try Any Style in Your Room
          </a>
        </div>
      </div>
    </div>
  );
}
