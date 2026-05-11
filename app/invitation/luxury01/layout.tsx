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
      type: "website",
      locale: "id_ID",

      images: [
        {
          url: "/api/og?v=1",
          width: 1080,
          height: 1350,
          alt: "Undangan Pernikahan Dillo & Alisyah",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "The Wedding of Dillo & Alisyah",
      description: "Sabtu, 18 Mei 2026",

      images: ["/api/og?v=1"],
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