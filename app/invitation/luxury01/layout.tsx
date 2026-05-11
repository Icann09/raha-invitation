import type { Metadata } from "next";

// Use generateMetadata instead of static metadata for better control
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "The Wedding of Dillo & Alisyah",
    description: "Wedding Invitation - Sabtu, 18 Mei 2026",
    
    // Clear any parent Open Graph to ensure complete override
    openGraph: {
      title: "The Wedding of Dillo & Alisyah",
      description: "Sabtu, 18 Mei 2026",
      url: "https://raha-invitation.vercel.app/invitation/luxury01",
      siteName: "Raha Invitation",
      images: [
        {
          url: "https://raha-invitation.vercel.app/images/luxury01/wedding-preview(1).jpg",
          width: 1200,
          height: 630,
          alt: "Undangan Pernikahan Dillo & Alisyah",
          type: "image/jpeg",
        },
      ],
      locale: "id_ID",
      type: "website",
      // Force these to be used instead of parent
      determiner: "auto",
    },
    
    twitter: {
      card: "summary_large_image",
      title: "The Wedding of Dillo & Alisyah",
      description: "Sabtu, 18 Mei 2026",
      images: ["https://raha-invitation.vercel.app/images/luxury01/wedding-preview(1).jpg"],
      site: "@raha_invitation", // Optional: add your Twitter handle
    },
    
    // Add these to help crawlers
    robots: {
      index: true,
      follow: true,
    },
    
    alternates: {
      canonical: "https://raha-invitation.vercel.app/invitation/luxury01",
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
