export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400">Last updated: April 2026</p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-400">
            By accessing or using Aspire Interiors, you agree to be bound by these Terms of Use. 
            If you do not agree to these terms, please do not use our services.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. Use of Service</h2>
          <p className="text-gray-400">
            You agree to use our service only for lawful purposes and in accordance with these Terms. 
            You are responsible for all content you upload or generate through our platform.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. Intellectual Property</h2>
          <p className="text-gray-400">
            All content, features, and functionality of Aspire Interiors are owned by AutoMazen AI Ltd 
            and are protected by international copyright, trademark, and other intellectual property laws.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">4. Contact</h2>
          <p className="text-gray-400">
            For questions about these Terms, please contact us at{' '}
            <a href="mailto:mark@automazen.ai" className="text-[#c9a962]">mark@automazen.ai</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
