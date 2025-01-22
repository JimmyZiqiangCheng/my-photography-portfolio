'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '50px'
      }
    );

    document.querySelectorAll('.fade-in-element').forEach((element, index) => {
      if (element instanceof HTMLElement) {
        element.style.transitionDelay = `${index * 150}ms`;
      }
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const projects = [
    {
      src: "/images/portfolio/faded-memories.jpg",
      title: "Faded Memories",
      href: "/gallery#faded-memories"
    },
    {
      src: "/images/portfolio/windswept-horizons.jpg",
      title: "Windswept Horizons",
      href: "/gallery#windswept-horizons"
    },
    {
      src: "/images/portfolio/unscripted-symphonies.jpg",
      title: "Shadows & Silhouettes",
      href: "/gallery#unscripted-symphonies"
    }
  ];

  const featuredWork = [
    { src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4", aspect: "portrait" },
    { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e", aspect: "landscape-wide" },
    { src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716", aspect: "portrait" },
    { src: "https://images.unsplash.com/photo-1604017011826-d3b4c23f8914", aspect: "square" },
    { src: "https://images.unsplash.com/photo-1542224566-6e85f2e6772f", aspect: "landscape-wide" },
    { src: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e", aspect: "portrait" },
    { src: "https://images.unsplash.com/photo-1551316679-9c6ae9dec224", aspect: "landscape" },
    { src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b", aspect: "square" },
    { src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32", aspect: "portrait" },
    { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b", aspect: "landscape-wide" },
    { src: "https://images.unsplash.com/photo-1532635241-17e820acc59f", aspect: "square" },
    { src: "https://images.unsplash.com/photo-1496843916299-590492c751f4", aspect: "landscape" }
  ];

  return (
    <div className="max-w-[2000px] mx-auto">
      {/* Intro Section */}
      <section className="py-24 px-4 md:px-8 max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-light mb-8 tracking-wide">Fragments of vision</h1>
        <p className="text-sm text-gray-600 leading-relaxed tracking-wide max-w-xl mx-auto">
          Where Light Shapes Form and Shadows Carve Emotion.
        </p>
      </section>

      {/* Featured Work Section */}
      <section className="mb-24">
        <h2 className="text-lg font-light mb-12 tracking-widest text-center uppercase px-4 md:px-8">Featured Work</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-gray-100">
          {featuredWork.map((img, i) => (
            <div 
              key={i} 
              className={`relative overflow-hidden bg-white fade-in-element opacity-0 ${
                img.aspect === 'portrait' ? 'row-span-2' :
                img.aspect === 'landscape-wide' ? 'col-span-2' :
                img.aspect === 'square' ? '' :
                ''
              }`}
            >
              <div className={`relative ${
                img.aspect === 'portrait' ? 'aspect-[2/3]' :
                img.aspect === 'landscape' ? 'aspect-[4/3]' :
                img.aspect === 'landscape-wide' ? 'aspect-[2/1]' :
                'aspect-square'
              }`}>
                <Image
                  src={img.src}
                  alt={`Featured Work ${i + 1}`}
                  fill
                  className="object-cover transition-all duration-700 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 