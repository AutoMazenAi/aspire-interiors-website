import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#c9a962]/10 border border-[#c9a962]/30 text-[#c9a962] text-sm font-medium tracking-wide mb-6">
            OUR STORY
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About
            <br />
            <span className="text-gradient-gold">Aspire Interiors</span>
          </h1>
        </div>

        {/* Brand Story */}
        <div className="prose prose-invert prose-lg max-w-none mb-16">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-400">
            Aspire Interiors was founded with a simple but powerful mission: to democratize 
            luxury interior design through the power of AI. We believe everyone deserves to 
            live in a space that inspires them — regardless of budget or design experience.
          </p>
          
          <p className="text-gray-400">
            What started as a passion project sharing media wall designs on YouTube has 
            grown into a community of over 120,000 design enthusiasts across platforms, 
            with our content reaching millions of viewers seeking inspiration for their homes.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-12">AI-Powered Innovation</h2>
          
          <p className="text-gray-400">
            The Aspire Interiors iOS app represents the future of interior design. Using 
            advanced AI models, we can take any inspiration — from a photograph of armour 
            to a scoop of ice cream — and transform it into a fully realised room design. 
            Upload your space, choose from 12 signature styles, and see your vision come 
            to life in seconds.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-12">Our Speciality: Media Walls</h2>
          
          <p className="text-gray-400">
            Media walls have become our signature — representing 14.3% of our search traffic 
            and our most requested content. From terrazzo statement pieces to warm walnut 
            herringbone, fluted panels to luxurious marble, we've helped thousands envision 
            their perfect living room centrepiece.
          </p>
        </div>

        {/* Founder */}
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#c9a962]/30 to-[#8b7355]/30 flex items-center justify-center text-4xl">
              👤
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Alexander Vaughn</h3>
              <p className="text-[#c9a962] mb-4">Founder, Aspire Interiors</p>
              <p className="text-gray-400">
                Interior design content creator, AI innovator, and founder of AutoMazen AI Ltd. 
                Passionate about making luxury design accessible to everyone.
              </p>
            </div>
          </div>
        </div>

        {/* AutoMazen Connection */}
        <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-[#c9a962]/10 to-[#8b7355]/10 border border-[#c9a962]/30">
          <h3 className="text-xl font-bold mb-4">Part of AutoMazen AI Ltd</h3>
          <p className="text-gray-400 mb-6">
            Aspire Interiors is the consumer brand of AutoMazen AI, a company dedicated to 
            bringing AI-powered solutions to everyday problems. From interior design to business 
            automation, we're building the future.
          </p>
          <a 
            href="https://automazen.ai"
            className="inline-flex items-center gap-2 text-[#c9a962] hover:underline"
          >
            Visit AutoMazen AI →
          </a>
        </div>
      </div>
    </div>
  );
}
