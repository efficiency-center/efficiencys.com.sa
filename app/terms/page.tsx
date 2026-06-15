import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Efficiency Center",
  description: "Terms and conditions for Efficiency Center.",
};

export default function TermsPage() {
  return (
    <div className="legal-page">
      <header className="legal-page__header">
        <Link href="/" className="legal-page__back">
          &larr; Back to home
        </Link>
      </header>
      <main className="legal-page__main">
        <div className="legal-page__content">
          <h1>Terms &amp; Conditions</h1>
          <p className="legal-page__updated">Last updated: June 2026</p>

          <h2>1. Services</h2>
          <p>
            Efficiency Center provides serviced office spaces, coworking facilities, meeting rooms, and related business services at our locations in Al-Khobar and Riyadh, Saudi Arabia.
          </p>

          <h2>2. Use of Facilities</h2>
          <p>
            Members and visitors agree to use the facilities responsibly, maintain a professional environment, and comply with all applicable local laws and regulations.
          </p>

          <h2>3. Booking and Payment</h2>
          <p>
            Office and meeting room bookings are subject to availability. Payment terms and pricing are discussed during consultation and confirmed in individual agreements.
          </p>

          <h2>4. Liability</h2>
          <p>
            Efficiency Center takes reasonable measures to ensure the safety and security of all visitors and members. However, personal belongings are the responsibility of their owners.
          </p>

          <h2>5. Website Use</h2>
          <p>
            This website is provided for informational purposes. While we strive to keep information accurate and up to date, we make no warranties about the completeness or reliability of the content.
          </p>

          <h2>6. Intellectual Property</h2>
          <p>
            All content on this website, including text, images, logos, and design, is the property of Efficiency Center Co. and may not be reproduced without written permission.
          </p>

          <h2>7. Contact</h2>
          <p>
            For questions about these terms, contact us at:<br />
            Efficiency Center, 6919 Prince Turki ST, Corniche Park, Al-Khobar, Saudi Arabia<br />
            Email: contact@efficiencys.com.sa<br />
            Phone: +966 58 111 5550
          </p>
        </div>
      </main>
    </div>
  );
}
