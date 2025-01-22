'use client';

import Link from "next/link";
import Image from 'next/image';
import { useState, useRef, useEffect } from "react";

export default function Navigation() {
  const [isGalleryHovered, setIsGalleryHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsGalleryHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsGalleryHovered(false);
    }, 300); // 300ms delay before hiding menu
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="fixed w-full z-50 p-4 bg-black/90 backdrop-blur-sm text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="Jimmy Cheng Photography"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold">Jimmy Cheng</span>
        </Link>
        <div className="space-x-6 relative">
          <Link href="/" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
          <div
            ref={menuRef}
            className="inline-block relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/gallery" className="hover:text-gray-300 transition-colors inline-block py-2">
              Gallery
            </Link>
            {/* Added padding around the menu to increase hover area */}
            <div className={`absolute -left-4 pt-2 pb-1 px-4 transition-all duration-300 ${
              isGalleryHovered ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}>
              <div className="bg-black/90 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden">
                <Link 
                  href="/gallery#faded-memories" 
                  className="block px-6 py-3 hover:bg-white/10 transition-colors"
                >
                  Faded Memories
                </Link>
                <Link 
                  href="/gallery#windswept-horizons" 
                  className="block px-6 py-3 hover:bg-white/10 transition-colors"
                >
                  Windswept Horizons
                </Link>
                <Link 
                  href="/gallery#unscripted-symphonies" 
                  className="block px-6 py-3 hover:bg-white/10 transition-colors"
                >
                  Shadows & Silhouettes
                </Link>
              </div>
            </div>
          </div>
          <Link href="/shop" className="hover:text-gray-300 transition-colors">
            Shop
          </Link>
          <Link href="/contact" className="hover:text-gray-300 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
} 