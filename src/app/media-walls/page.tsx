export default function MediaWallsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#c9a962]/10 border border-[#c9a962]/30 text-[#c9a962] text-sm font-medium tracking-wide mb-6">
            SEO GOLD KEYWORD · 14.3% OF TRAFFIC
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Media Wall
            <br />
            <span className="text-gradient-gold">Design Ideas</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover stunning media wall designs for your home. From terrazzo to fluted panels, 
            walnut herringbone to marble — find the perfect style with AI-powered interior design.
          </p>
        </div>

        {/* What is a Media Wall */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-2xl font-bold mb-4">What is a Media Wall?</h2>
          <p className="text-gray-400 mb-4">
            A media wall is the centrepiece of modern living spaces — a thoughtfully designed feature wall 
            that houses your television, media equipment, and often includes integrated storage, lighting, 
            and stunning architectural details. It's where functionality meets artistry.
          </p>
          <p className="text-gray-400 mb-4">
            At Aspire Interiors, media walls are our specialty. We've helped thousands of homeowners 
            transform their living rooms with bespoke designs that range from minimalist floating units 
            to dramatic floor-to-ceiling installations featuring premium materials like terrazzo, walnut, 
            marble, and fluted panels.
          </p>
          <p className="text-gray-400">
            Whether you're looking for inspiration or ready to design your own, our AI-powered app 
            lets you visualize different styles in your actual space before making any commitments.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Popular <span className="text-gradient-gold">Materials</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Terrazzo", desc: "Bold, speckled patterns that make a statement" },
              { name: "Walnut", desc: "Rich, warm wood tones with herringbone patterns" },
              { name: "Fluted Panels", desc: "Textured vertical lines for modern elegance" },
              { name: "Marble", desc: "Timeless luxury with natural veining" },
              { name: "Acoustic Slats", desc: "Sound-absorbing with visual interest" },
              { name: "Concrete", desc: "Industrial raw aesthetic with modern appeal" },
              { name: "Brass Accents", desc: "Metallic touches for sophisticated glamour" },
              { name: "Charcoal", desc: "Deep, moody tones for dramatic contrast" },
            ].map((material, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#c9a962]/50 transition-all">
                <div className="aspect-video rounded-lg bg-gradient-to-br from-[#c9a962]/20 to-[#8b7355]/20 mb-4 flex items-center justify-center">
                  <span className="text-3xl">🖼️</span>
                </div>
                <h3 className="font-semibold mb-1">{material.name}</h3>
                <p className="text-gray-400 text-sm">{material.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-12 rounded-2xl bg-gradient-to-r from-[#c9a962]/10 to-[#8b7355]/10 border border-[#c9a962]/30">
          <h2 className="text-3xl font-bold mb-4">Ready to Design Your Media Wall?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Upload a photo of your living room and see 12+ media wall styles instantly. 
            Our AI will show you exactly how each design will look in your space.
          </p>
          <a 
            href="https://apps.apple.com/app/aspire-interiors"
            className="btn-gold inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-semibold text-black"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Design Your Media Wall
          </a>
        </div>
      </div>
    </div>
  );
}
