import Image from "next/image";
import Link from "next/link";

export default function AppPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#c9a962]/10 border border-[#c9a962]/30 text-[#c9a962] text-sm font-medium tracking-wide mb-6">
            iOS APP
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Your Personal
            <br />
            <span className="text-gradient-gold">Interior Designer</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Upload any photo. Extract inspiration from any image. See your room transformed in seconds with the power of AI.
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
          </div>
          <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-500">
            <span>★★★★★ Early Access</span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span>First 3 generations free</span>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How It <span className="text-gradient-gold">Works</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Choose Your Path", desc: "Pick from three bespoke options: Text Only, With Inspiration, or Copy a Room" },
              { step: "02", title: "Upload & Extract", desc: "Upload any image — even a soldier's armor or ice cream — and our AI translates it into design elements" },
              { step: "03", title: "Customize", desc: "Edit 6 key elements: ceilings, floors, walls, seating, furniture, lighting" },
              { step: "04", title: "Generate", desc: "See your room redesigned in seconds with stunning photorealistic results" },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-bold text-[#c9a962]/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Simple <span className="text-gradient-gold">Pricing</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-lg font-medium text-gray-400 mb-2">Free Trial</h3>
              <div className="text-4xl font-bold mb-4">Free</div>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>✓ First 3 generations</li>
                <li>✓ All 12 styles</li>
                <li>✓ Basic support</li>
              </ul>
            </div>
            
            <div className="p-8 rounded-2xl bg-[#c9a962]/10 border border-[#c9a962] relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#c9a962] text-black text-xs font-semibold rounded-full">
                FOUNDING MEMBER
              </div>
              <h3 className="text-lg font-medium text-gray-400 mb-2">Monthly</h3>
              <div className="text-4xl font-bold mb-1">£8.99</div>
              <div className="text-sm text-gray-500 mb-4">Regular: £12.99</div>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>✓ Unlimited generations</li>
                <li>✓ All styles & materials</li>
                <li>✓ Save & share designs</li>
                <li>✓ Edit history (5-10 versions)</li>
              </ul>
            </div>
            
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-lg font-medium text-gray-400 mb-2">Annual</h3>
              <div className="text-4xl font-bold mb-1">£69.99</div>
              <div className="text-sm text-gray-500 mb-4">Regular: £99.99 · Save 35%</div>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>✓ Everything in Monthly</li>
                <li>✓ 35% savings</li>
                <li>✓ Priority support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Everything You <span className="text-gradient-gold">Need</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "12 Living Room Styles", desc: "Classic European, Modern Deco, Industrial Raw, and more" },
              { title: "12 Bedroom Styles", desc: "All styles adapted for your perfect night's sleep" },
              { title: "12 Bathroom Styles", desc: "Complete bathroom collection for every aesthetic" },
              { title: "Edit History", desc: "Track 5-10 versions of each design" },
              { title: "Save & Share", desc: "Download and share your designs anywhere" },
              { title: "Any Image Works", desc: "Soldier, ice cream, car, nature → all become rooms" },
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="font-semibold mb-2 text-[#c9a962]">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
