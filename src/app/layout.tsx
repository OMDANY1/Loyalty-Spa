import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/contexts/AppContext";

export const metadata: Metadata = {
  title: "Loyalty Spa | سبا لويالتي — تجربة استرخاء استثنائية",
  description:
    "خدمات المساج والعناية المتكاملة في أجواء فاخرة صُممت لراحتك. احجزي جلستك الآن في Loyalty Spa وانعمي بأرقى تجارب السبا.",
  keywords: "سبا, مساج, حمام مغربي, عناية بالشعر, واكس, فاخر, loyalty spa",
  icons: { icon: "/logo.png", apple: "/logo.png" },
  openGraph: {
    title: "Loyalty Spa | سبا لويالتي",
    description: "لحظات من الهدوء... وتجربة استرخاء استثنائية",
    type: "website",
    locale: "ar_SA",
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
      </head>
      <body className="antialiased">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
