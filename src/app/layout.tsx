import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/contexts/AppContext";

export const metadata: Metadata = {
  title: "Loyalty Spa | لويالتي سبا",
  description:
    "لحظات من الهدوء... وتجربة استرخاء استثنائية",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Loyalty Spa | لويالتي سبا",
    description:
      "لحظات من الهدوء... وتجربة استرخاء استثنائية",
    url: "https://YOUR_DOMAIN",
    siteName: "Loyalty Spa",
    images: [
      {
        url: "/og-image.png",
        width: 1080,
        height: 1080,
        alt: "Loyalty Spa",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Loyalty Spa | لويالتي سبا",
    description:
      "لحظات من الهدوء... وتجربة استرخاء استثنائية",
    images: ["/og-image.png"],
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#24342F" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta property="og:image" content="https://YOUR_DOMAIN/og-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:height" content="1080" />
        <meta name="twitter:image" content="https://YOUR_DOMAIN/og-image.png" />
      </head>
      <body className="antialiased">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
