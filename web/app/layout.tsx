import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sports Scribe - AI-Powered Sports Journalism",
  description: "Intelligent sports journalism platform using multi-agent AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
