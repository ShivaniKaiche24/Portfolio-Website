import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import PageOverlayTransition from "@/components/PageOverlayTransition";

// Font configuration
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

// ✅ Metadata must stay in this *server* file (no "use client" above)
export const metadata = {
  title: "Shivani Portfolio",
  description: "Professional portfolio by Shivani Kaiche",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning data-gramm="false">
      <body
        suppressHydrationWarning
        className={`${jetbrainsMono.variable} relative overflow-x-hidden`}
      >
        {/* Page transitions and layout */}
        <PageTransition>
          <PageOverlayTransition />
          <Header />
          <main className="relative z-10">{children}</main>
        </PageTransition>
      </body>
    </html>
  );
}
