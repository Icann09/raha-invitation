import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL("https://raha-invitation.vercel.app"),

    title: "The Wedding of Dillo & Alisyah",
    description: "Wedding Invitation - Sabtu, 18 Mei 2026",

    openGraph: {
      title: "The Wedding of Dillo & Alisyah",
      description: "Wedding Invitation - Sabtu, 18 Mei 2026",
      url: "/invitation/luxury01",
      siteName: "Raha Invitation",

      // ✅ Portrait image for WhatsApp (9:16 ratio)
      images: [
        {
          url: "/images/luxury01/whatsapp-preview.jpg", // Dedicated WhatsApp image
          width: 1080,    // WhatsApp optimal width
          height: 1920,   // WhatsApp optimal height (9:16 portrait)
          alt: "Undangan Pernikahan Dillo & Alisyah",
          type: "image/jpeg",
        },
        // Fallback landscape image
        {
          url: "/images/luxury01/wedding-preview.jpg",
          width: 1200,
          height: 630,
          alt: "Undangan Pernikahan Dillo & Alisyah",
        },
      ],

      locale: "id_ID",
      type: "website",
    },

    // ✅ WhatsApp-specific optimization
    twitter: {
      card: "summary_large_image",
      title: "The Wedding of Dillo & Alisyah",
      description: "Wedding Invitation - Sabtu, 18 Mei 2026",
      images: [
        "/images/luxury01/whatsapp-preview.jpg", // Same portrait image
      ],
    },

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: "/invitation/luxury01",
    },
  };
}