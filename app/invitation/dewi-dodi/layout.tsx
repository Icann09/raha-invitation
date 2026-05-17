import type { Metadata, Viewport } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL("https://raha-invitation.vercel.app"),

    title: "The Wedding of Dewi & Dodi",
    description: "Wedding Invitation - Senin, 10 Juni 2026",

    openGraph: {
      title: "The Wedding of Dewi & Idot",
      description: "Sabtu, 8 Juni 2026",
      url: "/invitation/dewi-dodi",
      siteName: "Raha Invitation",

      images: [
        {
          url: "/images/dewi-idot/wedding-preview.jpg",
          width: 1080,
          height: 1920,
          alt: "Undangan Pernikahan Dewi & Dodi",
          type: "image/jpeg",
        },
      ],

      locale: "id_ID",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: "The Wedding of Dewi & Dodi",
      description: "Senin, 10 Juni 2026",

      images: [
        "/images/dewi-idot/wedding-preview.jpg",
      ],
    },

    robots: {
      index: true,
      follow: true,
    },

    alternates: {
      canonical: "/invitation/dewi-dodi",
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
   minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}