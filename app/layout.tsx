import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import { ThemeProvider } from "./components/ui/providers/theme-provider";
import ClientProviders from "./components/providers/ClientProviders";

export const metadata: Metadata = {
  metadataBase: new URL("https://masglobalai.com"),
  title: {
    default: "MAS Global AI | Enterprise Software & AI Engineering Solutions",
    template: "%s | MAS Global AI",
  },
  description:
    "MAS Global AI is an enterprise technology consulting and software engineering firm specializing in autonomous AI workflows, distributed cloud architectures, and digital transformation.",
  keywords: [
    "Enterprise AI Development",
    "Custom Software Engineering",
    "Cloud Architecture",
    "DevOps Consulting",
    "Hyderabad Software Company",
    "Next.js Development",
    "Spring Boot Microservices",
    "Intelligent OCR Systems",
  ],
  authors: [{ name: "MAS Global AI Engineering Team" }],
  creator: "MAS Global AI",
  publisher: "MAS Global AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://masglobalai.com",
    siteName: "MAS Global AI",
    title: "MAS Global AI | Enterprise Software & AI Engineering Solutions",
    description:
      "Enterprise AI automation, custom software development, cloud infrastructure, and intelligent digital transformation services.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MAS Global AI - Enterprise Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAS Global AI | Enterprise Software & AI Engineering",
    description:
      "Autonomous AI workflows, high-throughput microservices, and multi-cloud engineering.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://masglobalai.com/#organization",
        name: "MAS Global AI",
        url: "https://masglobalai.com",
        logo: {
          "@type": "ImageObject",
          url: "https://masglobalai.com/logo.png",
          caption: "MAS Global AI Logo",
        },
        image: "https://masglobalai.com/og-image.png",
        email: "contact@masglobalai.com",
        telephone: "+91-8862065378",
        founder: {
          "@type": "Person",
          name: "Shaikh Majhar",
          jobTitle: "Founder & AI/ML Engineer",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Ameerpet",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          postalCode: "500016",
          addressCountry: "IN",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+91-8862065378",
            contactType: "customer service",
            areaServed: ["IN", "US", "GB", "AE"],
            availableLanguage: ["English", "Hindi", "Telugu", "Urdu"],
          },
        ],
        sameAs: [
          "https://www.linkedin.com/in/shaikhmajhar",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://masglobalai.com/#service",
        name: "MAS Global AI - Technology Consulting",
        url: "https://masglobalai.com",
        priceRange: "$$$$",
        telephone: "+91-8862065378",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Ameerpet",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          postalCode: "500016",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 17.4375,
          longitude: 78.4483,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "09:00",
            closes: "19:00",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://masglobalai.com/#website",
        url: "https://masglobalai.com",
        name: "MAS Global AI",
        description:
          "Enterprise Software Development, Cloud Architecture, and AI Solutions",
        publisher: {
          "@id": "https://masglobalai.com/#organization",
        },
      },
    ],
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary transition-colors duration-150">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          <ClientProviders />
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
