export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#c9a962]/10 border border-[#c9a962]/30 text-[#c9a962] text-sm font-medium tracking-wide mb-6">
            GET IN TOUCH
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact <span className="text-gradient-gold">Us</span>
          </h1>
          <p className="text-gray-400">
            Have a question or business inquiry? We'd love to hear from you.
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#c9a962] focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#c9a962] focus:outline-none transition-colors"
                placeholder="you@example.com"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Subject</label>
            <select className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#c9a962] focus:outline-none transition-colors">
              <option>General Inquiry</option>
              <option>Business/Press</option>
              <option>Support</option>
              <option>Other</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea 
              rows={6}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#c9a962] focus:outline-none transition-colors resize-none"
              placeholder="Your message..."
            />
          </div>
          
          <button 
            type="submit"
            className="w-full btn-gold py-4 rounded-lg font-semibold text-black"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 mb-2">For business inquiries:</p>
          <a href="mailto:mark@automazen.ai" className="text-[#c9a962] hover:underline">
            mark@automazen.ai
          </a>
        </div>
      </div>
    </div>
  );
}
