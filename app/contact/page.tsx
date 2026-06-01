import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import "./contact.css";

export const metadata: Metadata = {
  title: "Contact Us | Efficiency Center",
  description:
    "Get in touch with Efficiency Center in Al-Khobar. Share your details and our team will contact you about serviced offices and coworking spaces.",
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      <header className="contact-page__header">
        <Link href="/" className="contact-page__back">
          ← Back to home
        </Link>
      </header>
      <main className="contact-page__main">
        <ContactForm />
      </main>
    </div>
  );
}
