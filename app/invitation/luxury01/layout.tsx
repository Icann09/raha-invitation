import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://raha-invitation.vercel.app"),

  title: "The Wedding of Dillo & Alisyah",
  description: "Wedding Invitation",

  openGraph: {
    title: "The Wedding of Dillo & Alisyah",
    description: "Sabtu, 18 Mei 2026",
    url: "/invitation/luxury01",
    siteName: "Raha Invitation",

    images: [
      {
        url: "/images/luxury01/wedding-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Wedding Invitation",
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
    images: ["/images/luxury01/wedding-preview.jpg"],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}