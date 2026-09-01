import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppProvider } from "@/contexts/AppContext";

const PRODUCTION_URL = "https://loyalty-spa-hkv5.vercel.app";

function getBaseUrl(): string {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL;

  if (!envUrl) {
    return PRODUCTION_URL;
  }

  const trimmed = envUrl.trim();
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }

  return `https://${trimmed}`;
}

export const viewport: Viewport = {
  themeColor: "#24342F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),

  title: "Loyalty Spa | لويالتي سبا",
  description:
    "لحظات من الهدوء... وتجربة استرخاء استثنائية - خدمات المساج والعناية المتكاملة في أجواء فاخرة صُممت لراحتك.",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Loyalty Spa | لويالتي سبا",
    description:
      "لحظات من الهدوء... وتجربة استرخاء استثنائية - خدمات المساج والعناية المتكاملة في أجواء فاخرة صُممت لراحتك.",
    url: "/",
    siteName: "Loyalty Spa",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Loyalty Spa | لويالتي سبا",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Loyalty Spa | لويالتي سبا",
    description:
      "لحظات من الهدوء... وتجربة استرخاء استثنائية - خدمات المساج والعناية المتكاملة في أجواء فاخرة صُممت لراحتك.",
    images: ["/preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    /*
     * suppressHydrationWarning: the AppContext will dynamically set
     * dir="rtl|ltr", lang="ar|en", and data-theme="light|dark" on the
     * <html> element after mounting, so we suppress the mismatch warning.
     */
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'light';
                  document.documentElement.setAttribute('data-theme', theme);
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&family=Cairo:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
