import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Header } from "../components/layout/header";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sport Scribe - AI-Powered Sports Journalism",
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
          <Header />
          
          <div className="min-h-screen flex flex-col">
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        
        </Providers>
      </body>
    </html>
  );
}
