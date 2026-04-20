"use client";

import Link from "next/link";

const GOLD = "#907243";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3">
              <span className="text-xl font-bold tracking-wider">ASPIRE</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              {['App', 'Pricing', 'About', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-sm font-medium text-gray-400 hover:text-white transition"
                >
                  {item}
                </Link>
              ))}
            </div>
            <a 
              href="/coming-soon" 
              className="px-6 py-3 text-sm font-semibold transition hover:opacity-90 rounded-full flex items-center gap-2"
              style={{ backgroundColor: GOLD, color: 'black' }}
            >
              Get the App
            </a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-32 pb-20 max-w-4xl mx-auto px-6 lg:px-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-400 mb-12">Last updated: April 2026</p>

        <div className="prose prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">1. Who We Are</h2>
            <p className="text-gray-300 mb-4">
              Aspire Interiors is developed and operated by High Ticket Dropshipping Ltd, trading as AutoMazen.ai.
            </p>
            <p className="text-gray-300 mb-4">
              <strong>Registered in England and Wales.</strong><br />
              Registered address: 167-169 Great Portland Street, 5th Floor, London, England, W1W 5PF
            </p>
            <p className="text-gray-300">
              References to "we", "us" or "our" in this policy mean High Ticket Dropshipping Ltd t/a AutoMazen.ai.
            </p>
            <p className="text-gray-300 mt-4">
              If you have questions about this policy, contact us at: <a href="mailto:support@automazen.ai" className="hover:opacity-80" style={{ color: GOLD }}>support@automazen.ai</a>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">2. What Data We Collect</h2>
            
            <h3 className="text-xl font-medium mb-3">a) Account information</h3>
            <p className="text-gray-300 mb-6">
              When you sign in with Apple, we receive a unique Apple user identifier and, if you choose to share it, your email address. We store your display name if you provide one.
            </p>

            <h3 className="text-xl font-medium mb-3">b) Uploaded images</h3>
            <p className="text-gray-300 mb-6">
              When you use the App, you may upload images in the following contexts:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
              <li>A photo of your room for AI redesign</li>
              <li>A mood board image for style inspiration</li>
              <li>A reference image to copy a room's style</li>
            </ul>
            <p className="text-gray-300 mb-6">
              These images are transmitted to our AI processing service (Google Cloud / Vertex AI) solely to generate your design. We do not use your uploaded images to train AI models. The original image URL and generated result are stored in your account.
            </p>

            <h3 className="text-xl font-medium mb-3">c) Design history</h3>
            <p className="text-gray-300 mb-6">
              Your saved designs, edit history, and generated images are stored in your account so you can access them across sessions.
            </p>

            <h3 className="text-xl font-medium mb-3">d) Credits and purchases</h3>
            <p className="text-gray-300 mb-6">
              We store your credit balance, subscription type, and a transaction log of credit additions and deductions. Purchase processing is handled by Apple and RevenueCat — we do not store your payment card details.
            </p>

            <h3 className="text-xl font-medium mb-3">e) Usage analytics</h3>
            <p className="text-gray-300 mb-6">
              We collect anonymous usage events (e.g. "design started", "style selected") linked to a randomly generated device identifier — not to your Apple ID or email. This helps us understand how the app is used and improve it.
            </p>

            <h3 className="text-xl font-medium mb-3">f) Technical data stored locally</h3>
            <p className="text-gray-300">
              Generation timestamps and display preferences are stored locally on your device using standard iOS storage (UserDefaults). This data does not leave your device.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Data</h2>
            <p className="text-gray-300 mb-4">We use your data to:</p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Provide and personalise the Aspire Interiors service</li>
              <li>Generate AI room designs using your uploaded images</li>
              <li>Manage your credit balance and subscription</li>
              <li>Save your designs and edit history to your account</li>
              <li>Improve the app through anonymous usage analytics</li>
              <li>Respond to support requests</li>
            </ul>
            <p className="text-gray-300">
              We do not sell your personal data to third parties. We do not use your data for advertising.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">4. Third-Party Services</h2>
            <p className="text-gray-300 mb-6">Your data is processed by the following third-party services:</p>

            <h3 className="text-xl font-medium mb-3">Google Cloud / Vertex AI</h3>
            <p className="text-gray-300 mb-6">
              Your uploaded images and design prompts are sent to Google Cloud (us-central1 region) for AI image generation. Google processes this data in accordance with their Cloud Data Processing Addendum.
            </p>

            <h3 className="text-xl font-medium mb-3">Supabase</h3>
            <p className="text-gray-300 mb-6">
              We use Supabase to store your account information, designs, and usage analytics. Data is stored in Supabase-managed infrastructure.
            </p>

            <h3 className="text-xl font-medium mb-3">RevenueCat</h3>
            <p className="text-gray-300 mb-6">
              RevenueCat manages subscription and purchase verification. They receive your Apple subscriber identifier and purchase records.
            </p>

            <h3 className="text-xl font-medium mb-3">Apple</h3>
            <p className="text-gray-300">
              Sign-in, payment processing, and receipt verification are handled by Apple.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
            <p className="text-gray-300 mb-4">
              Your account data (profile, designs, edit history) is retained while your account is active. If you wish to delete your account and all associated data, contact us at <a href="mailto:support@automazen.ai" className="hover:opacity-80" style={{ color: GOLD }}>support@automazen.ai</a> and we will action this within 30 days.
            </p>
            <p className="text-gray-300">
              Anonymous analytics events are retained for up to 24 months.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights (UK GDPR)</h2>
            <p className="text-gray-300 mb-4">If you are based in the UK, you have the right to:</p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Data portability</li>
            </ul>
            <p className="text-gray-300 mb-4">
              To exercise any of these rights, contact us at <a href="mailto:support@automazen.ai" className="hover:opacity-80" style={{ color: GOLD }}>support@automazen.ai</a>.
            </p>
            <p className="text-gray-300">
              You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">7. Children</h2>
            <p className="text-gray-300">
              Aspire Interiors is not directed at children under the age of 13. We do not knowingly collect personal data from children.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">8. Changes to This Policy</h2>
            <p className="text-gray-300">
              We may update this Privacy Policy from time to time. We will notify you of significant changes through the app. The "last updated" date at the top of this page reflects the most recent revision.
            </p>
          </section>

          <div className="border-t border-white/10 pt-8 mt-12">
            <p className="text-gray-500 text-sm">
              High Ticket Dropshipping Ltd t/a AutoMazen.ai — Registered in England and Wales — 167-169 Great Portland Street, 5th Floor, London, England, W1W 5PF
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
