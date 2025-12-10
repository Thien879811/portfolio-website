import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Alex Doe - Full-Stack Developer",
  description: "Developer • Engineer • Product Builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-display antialiased`}>
        <div className="relative flex min-h-screen w-full flex-col bg-background-dark dark group/design-root overflow-x-hidden">
          <div className="layout-container flex h-full grow flex-col">
            <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
              <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <Header />
                <main className="flex-1 flex flex-col justify-center gap-12 py-10 md:gap-20 md:py-16 lg:gap-24 lg:py-20">
                  {children}
                </main>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
