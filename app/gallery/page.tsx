'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Gallery() {
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
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in-section').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const galleries = {
    'faded-memories': {
      title: 'Faded Memories',
      description: 'capturing the essence of nostalgia.',
      images: [
        { src: "https://images.unsplash.com/photo-1511895426328-dc8714191300", aspect: "portrait" },
        { src: "https://images.unsplash.com/photo-1496843916299-590492c751f4", aspect: "landscape" },
        { src: "https://images.unsplash.com/photo-1604017011826-d3b4c23f8914", aspect: "portrait" },
        { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e", aspect: "landscape-wide" },
        { src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4", aspect: "square" }
      ]
    },
    'windswept-horizons': {
      title: 'Windswept Horizons',
      description: 'Exploring the path of nature and mankind.',
      images: [
        { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b", aspect: "landscape-wide" },
        { src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716", aspect: "portrait" },
        { src: "https://images.unsplash.com/photo-1542224566-6e85f2e6772f", aspect: "landscape" },
        { src: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e", aspect: "square" }
      ]
    },
    'unscripted-symphonies': {
      title: 'Shadows & Silhouettes',
      description: 'Sculpting light with shadows.',
      images: [
        { src: "https://images.unsplash.com/photo-1532635241-17e820acc59f", aspect: "portrait" },
        { src: "https://images.unsplash.com/photo-1551316679-9c6ae9dec224", aspect: "landscape-wide" },
        { src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b", aspect: "square" },
        { src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32", aspect: "portrait" }
      ]
    }
  };

  return (
    <div className="max-w-[2000px] mx-auto px-4 py-24">
      {Object.entries(galleries).map(([id, gallery], index) => (
        <section 
          key={id}
          id={id}
          className="mb-32 last:mb-0 fade-in-section opacity-0"
        >
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-light mb-3">{gallery.title}</h2>
            <p className="text-gray-600">{gallery.description}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            {gallery.images.map((img, i) => (
              <div 
                key={i} 
                className={`relative overflow-hidden ${
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
                    alt={`${gallery.title} - Image ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
} 