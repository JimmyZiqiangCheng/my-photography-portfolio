import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jimmy Cheng Photography",
  description: "Professional photographer specializing in weddings, portraits, and landscape photography",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="pt-16">{children}</main>
        <footer className="p-4 bg-black text-white mt-auto">
          <div className="container mx-auto text-center">
            <p>© {new Date().getFullYear()} Jimmy Cheng Photography. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
} 