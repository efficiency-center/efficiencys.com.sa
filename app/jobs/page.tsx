import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Apply for a Job | Efficiency Center",
  description:
    "We at Efficiency Center, crave for talents in the region in a multitude of fields and those set the base for our Excellence and success.",
  openGraph: {
    title: "Apply for a Job | Efficiency Center",
    description:
      "We at Efficiency Center, crave for talents in the region in a multitude of fields and those set the base for our Excellence and success.",
  },
};

export default function JobsPage() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-V9Y7BNMBPD"
        strategy="afterInteractive"
      />
      <Script id="jobs-gtag" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-V9Y7BNMBPD');
      `}</Script>

      <section id="job-form" className="py-5 text-center">
        <div
          className="pipedriveWebForms"
          data-pd-webforms="https://webforms.pipedrive.com/f/6xXR0ABQHbFfh64VTQIGAKClKPFSUQYv6kQtCPlnfbJK7ffQCXxQmazZzWxbC6PxHZ"
        >
          <Script
            src="https://webforms.pipedrive.com/f/loader"
            strategy="afterInteractive"
          />
        </div>
      </section>
    </>
  );
}
