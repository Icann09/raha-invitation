import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL("https://raha-invitation.vercel.app"),

    title: "The Wedding of Dillo & Alisyah",
    description: "Wedding Invitation - Sabtu, 18 Mei 2026",

    openGraph: {
      title: "The Wedding of Dillo & Alisyah",
      description: "Sabtu, 18 Mei 2026",
      url: "/invitation/luxury01",
      siteName: "Raha Invitation",

      images: [
        {
          url: "/images/luxury01/wedding-preview.jpg",
          width: 1080,
          height: 1920,
          alt: "Undangan Pernikahan Dillo & Alisyah",
          type: "image/jpeg",
        },
      ],

      locale: "id_ID",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: "The Wedding of Dillo & Alisyah",
      description: "Sabtu, 18 Mei 2026",

      images: [
        "/images/luxury01/wedding-preview.jpg",
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

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}