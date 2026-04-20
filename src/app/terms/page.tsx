"use client";

import Link from "next/link";

const GOLD = "#907243";

export default function TermsOfService() {
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
        <p className="text-gray-400 mb-12">Last updated: April 2026</p>

        <div className="prose prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">1. About These Terms</h2>
            <p className="text-gray-300 mb-4">
              These Terms of Service ("Terms") govern your use of the Aspire Interiors app ("App") provided by High Ticket Dropshipping Ltd, trading as AutoMazen.ai ("we", "us", "our").
            </p>
            <p className="text-gray-300 mb-4">
              Registered in England and Wales.<br />
              Registered address: 167-169 Great Portland Street, 5th Floor, London, England, W1W 5PF
            </p>
            <p className="text-gray-300">
              By downloading or using the App, you agree to these Terms. If you do not agree, do not use the App.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">2. The Service</h2>
            <p className="text-gray-300">
              Aspire Interiors is an AI-powered interior design app. You upload a photo of a room, choose a design style or materials, and our AI generates a redesigned version of that space. Designs are saved to your account and can be edited or shared.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">3. Eligibility and Account</h2>
            <p className="text-gray-300 mb-4">
              You must be at least 13 years old to use Aspire Interiors. By using the App, you confirm that you meet this requirement.
            </p>
            <p className="text-gray-300">
              You sign in using Sign in with Apple. You are responsible for maintaining the security of your Apple ID. We are not liable for any loss resulting from unauthorised access to your account.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">4. Credits and Subscriptions</h2>
            
            <h3 className="text-xl font-medium mb-3">a) Credits</h3>
            <p className="text-gray-300 mb-6">
              Generating a design costs 1 credit. Credits are deducted only after a design is successfully generated. If a generation fails, your credit is not deducted.
            </p>

            <h3 className="text-xl font-medium mb-3">b) Subscription plans</h3>
            <p className="text-gray-300 mb-6">
              Aspire Pro (Monthly and Annual) provides a credit allocation each billing period. Credits from subscriptions do not roll over to the next period.
            </p>

            <h3 className="text-xl font-medium mb-3">c) Token packs</h3>
            <p className="text-gray-300 mb-6">
              Token packs are one-time purchases of credits available to all users. Token pack credits do not expire.
            </p>

            <h3 className="text-xl font-medium mb-3">d) Pricing</h3>
            <p className="text-gray-300 mb-6">
              All prices are shown in your local currency as set by Apple. Prices are inclusive of applicable taxes where required.
            </p>

            <h3 className="text-xl font-medium mb-3">e) Billing and renewal</h3>
            <p className="text-gray-300 mb-6">
              Subscriptions auto-renew unless cancelled at least 24 hours before the end of the current period. You can manage and cancel subscriptions in your iPhone Settings → Apple ID → Subscriptions.
            </p>

            <h3 className="text-xl font-medium mb-3">f) Refunds</h3>
            <p className="text-gray-300 mb-6">
              All purchases are processed by Apple. Refund requests must be submitted to Apple in accordance with their refund policy at reportaproblem.apple.com. We do not process refunds directly.
            </p>

            <h3 className="text-xl font-medium mb-3">g) Price changes</h3>
            <p className="text-gray-300">
              We may change subscription prices with reasonable notice. Price changes will take effect at your next renewal.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">5. Uploaded Images — Your Responsibility</h2>
            <p className="text-gray-300 mb-4">
              The App allows you to upload images in several contexts:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
              <li>A photo of your room for AI redesign</li>
              <li>A mood board image for style inspiration</li>
              <li>A reference image to copy a room's style</li>
            </ul>
            <p className="text-gray-300 mb-4">By uploading any image to the App, you confirm that:</p>
            <p className="text-gray-300 mb-4">
              <strong>a)</strong> You are the owner of that image, or you have explicit permission from the copyright holder to use it for this purpose.
            </p>
            <p className="text-gray-300 mb-4">
              <strong>b)</strong> The image does not infringe the intellectual property rights, privacy rights, or any other rights of any third party.
            </p>
            <p className="text-gray-300 mb-4">
              <strong>c)</strong> You understand that uploading images owned by third parties — including but not limited to professional photography, magazine editorial images, brand imagery, or content owned by entertainment companies — without authorisation may infringe copyright law.
            </p>
            <p className="text-gray-300 mb-4">
              <strong>d)</strong> You take full responsibility for any image you upload and any consequences arising from that upload.
            </p>
            <p className="text-gray-300 mb-4">
              We do not review uploaded images for copyright compliance. If we receive a valid infringement notice relating to content you have uploaded, we reserve the right to remove that content and suspend your account.
            </p>
            <p className="text-gray-300">
              High Ticket Dropshipping Ltd t/a AutoMazen.ai accepts no liability for any copyright infringement or other rights violation arising from images uploaded by users.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">6. AI-Generated Content</h2>
            
            <h3 className="text-xl font-medium mb-3">a) Your uploads</h3>
            <p className="text-gray-300 mb-6">
              By uploading any image (including room photos, mood board images, or reference images), you confirm that you have the legal right to use that image and grant us a limited, non-exclusive licence to process it solely for the purpose of generating your design within the App. We do not use your uploaded images to train AI models or for any other purpose.
            </p>

            <h3 className="text-xl font-medium mb-3">b) Generated designs</h3>
            <p className="text-gray-300 mb-6">
              AI-generated designs produced by the App are provided for your personal, non-commercial use. You may share designs for personal purposes (e.g. social media, sharing with friends, interior planning).
            </p>

            <h3 className="text-xl font-medium mb-3">c) No guarantee of results</h3>
            <p className="text-gray-300 mb-6">
              AI-generated designs are creative interpretations and not technical specifications. We make no guarantee that a generated design is architecturally accurate, structurally feasible, or suitable for any specific purpose.
            </p>

            <h3 className="text-xl font-medium mb-3">d) AI limitations</h3>
            <p className="text-gray-300">
              Generated images may occasionally contain imperfections, unexpected elements, or inaccuracies. We continuously work to improve quality but cannot guarantee perfect results.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">7. Acceptable Use</h2>
            <p className="text-gray-300 mb-4">You agree not to:</p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Upload images you do not have the right to use</li>
              <li>Upload images containing people without their consent</li>
              <li>Use the App for any unlawful purpose</li>
              <li>Attempt to reverse-engineer, copy, or exploit any part of the App or its AI systems</li>
              <li>Abuse or attempt to circumvent the credit system</li>
              <li>Use the App to generate content that is offensive, harmful, or violates the rights of others</li>
            </ul>
            <p className="text-gray-300">
              We reserve the right to suspend or terminate accounts that violate these Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">8. Intellectual Property</h2>
            <p className="text-gray-300">
              The App, including its design, code, branding, and underlying AI systems, is owned by High Ticket Dropshipping Ltd t/a AutoMazen.ai and protected by intellectual property law. Nothing in these Terms grants you any right to use our trademarks, logos, or other brand features.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">9. Availability and Changes</h2>
            <p className="text-gray-300 mb-4">
              We aim to keep Aspire Interiors available at all times, but we do not guarantee uninterrupted access. We may update, modify, or discontinue features of the App at any time.
            </p>
            <p className="text-gray-300">
              We will give reasonable notice of significant changes where possible.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">10. Disclaimer of Warranties</h2>
            <p className="text-gray-300">
              The App is provided "as is" and "as available". To the fullest extent permitted by law, we disclaim all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">11. Limitation of Liability</h2>
            <p className="text-gray-300 mb-4">
              To the fullest extent permitted by law, High Ticket Dropshipping Ltd t/a AutoMazen.ai's total liability to you for any claim arising from use of the App is limited to the amount you paid us in the 12 months preceding the claim.
            </p>
            <p className="text-gray-300 mb-4">
              We are not liable for any indirect, incidental, consequential, or punitive damages, or loss of data, even if we have been advised of the possibility of such damages.
            </p>
            <p className="text-gray-300">
              Nothing in these Terms limits liability that cannot be excluded under applicable law, including liability for death or personal injury caused by our negligence.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">12. Governing Law</h2>
            <p className="text-gray-300">
              These Terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">13. Contact</h2>
            <p className="text-gray-300">
              For support or questions about these Terms, contact us at: <a href="mailto:support@automazen.ai" className="hover:opacity-80" style={{ color: GOLD }}>support@automazen.ai</a>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">14. Changes to These Terms</h2>
            <p className="text-gray-300">
              We may update these Terms from time to time. We will notify you of material changes through the App. Continued use of the App after changes take effect constitutes acceptance of the updated Terms.
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
