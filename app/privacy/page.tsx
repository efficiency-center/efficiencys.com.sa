import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Efficiency Center",
  description: "Privacy policy for Efficiency Center.",
};

export default function PrivacyPage() {
  return (
    <div className="legal-page">
      <header className="legal-page__header">
        <Link href="/" className="legal-page__back">
          &larr; Back to home
        </Link>
      </header>
      <main className="legal-page__main">
        <div className="legal-page__content">
          <h1>Privacy Policy</h1>
          <p className="legal-page__updated">Last updated: June 2026</p>

          <h2>1. Information We Collect</h2>
          <p>
            When you use our contact form or book a tour, we collect your name, email address, and phone number. We do not collect any information automatically beyond what is standard for web servers (IP address, browser type).
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information you provide solely to respond to your inquiry, schedule tours, and communicate about our services. We do not sell, rent, or share your personal information with third parties for marketing purposes.
          </p>

          <h2>3. Data Storage</h2>
          <p>
            Your contact information is stored securely and retained only as long as necessary to fulfill the purpose for which it was collected. You may request deletion of your data at any time by contacting us.
          </p>

          <h2>4. Third-Party Services</h2>
          <p>
            Our website uses Google Maps for location display and may use analytics tools to understand site usage. These services have their own privacy policies.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. To exercise these rights, contact us at contact@efficiencys.com.sa or call +966 58 111 5550.
          </p>

          <h2>6. Contact</h2>
          <p>
            For questions about this privacy policy, contact us at:<br />
            Efficiency Center, 6919 Prince Turki ST, Corniche Park, Al-Khobar, Saudi Arabia<br />
            Email: contact@efficiencys.com.sa<br />
            Phone: +966 58 111 5550
          </p>
        </div>
      </main>
    </div>
  );
}
