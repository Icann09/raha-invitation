import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Wedding of Dillo & Alisyah",
  description: "Wedding Invitation",

  openGraph: {
  title: "The Wedding of Dillo & Alisyah",
  description: "Sabtu, 18 Mei 2026",
  url: "https://raha-invitation.vercel.app/invitation/luxury01", // Gunakan full URL jika ragu
  siteName: "Raha Invitation",
  images: [
    {
      url: "/images/luxury01/wedding-preview.jpg", // Pastikan file ini tersedia di /public
      width: 1200,
      height: 630,
      alt: "Undangan Pernikahan Dillo & Alisyah",
    },
  ],
  locale: "id_ID",
  type: "article", // Gunakan 'article' untuk konten spesifik seperti undangan
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