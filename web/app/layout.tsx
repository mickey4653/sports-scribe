import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Header } from "../components/layout/header";

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
          {children}
        </Providers>
      </body>
    </html>
  );
}
