export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400">Last updated: April 2026</p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-gray-400">
            We collect information you provide directly to us, such as when you create an account, 
            subscribe to our newsletter, or contact us. This may include your name, email address, 
            and any other information you choose to provide.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-400">
            We use the information we collect to provide, maintain, and improve our services, 
            to communicate with you, and to personalize your experience.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. Information Sharing</h2>
          <p className="text-gray-400">
            We do not sell or rent your personal information to third parties. We may share 
            information with service providers who assist us in operating our business.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">4. Contact Us</h2>
          <p className="text-gray-400">
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:mark@automazen.ai" className="text-[#c9a962]">mark@automazen.ai</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
