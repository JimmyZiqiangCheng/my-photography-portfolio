import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sarah Anderson Photography",
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
        <nav className="p-4 bg-black text-white">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              Sarah Anderson
            </Link>
            <div className="space-x-6">
              <Link href="/" className="hover:text-gray-300 transition-colors">
                Home
              </Link>
              <Link href="/gallery" className="hover:text-gray-300 transition-colors">
                Gallery
              </Link>
              <Link href="/shop" className="hover:text-gray-300 transition-colors">
                Shop
              </Link>
              <Link href="/contact" className="hover:text-gray-300 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="p-4 bg-black text-white mt-auto">
          <div className="container mx-auto text-center">
            <p>© {new Date().getFullYear()} Sarah Anderson Photography. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
} 