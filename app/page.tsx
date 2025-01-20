import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Sarah Anderson Photography</h1>
        <p className="text-xl text-gray-600">Capturing Life's Beautiful Moments Through My Lens</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">About Me</h2>
          <p className="text-gray-600">
            Hello! I'm Sarah, a professional photographer based in New York City with over 8 years of experience
            capturing life's most precious moments. My passion lies in portrait and landscape photography,
            where I blend natural light with creative composition to tell unique stories.
          </p>
          <p className="text-gray-600">
            Whether it's a wedding, family portrait, or commercial shoot, I bring my artistic vision and
            technical expertise to every project. My work has been featured in various photography magazines
            and exhibitions across the country.
          </p>
        </div>
        <div className="relative h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            alt="Sarah Anderson - Professional Photographer"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              src: "https://images.unsplash.com/photo-1511895426328-dc8714191300",
              title: "Wedding Photography"
            },
            {
              src: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
              title: "Nature & Landscapes"
            },
            {
              src: "https://images.unsplash.com/photo-1537368910025-700350fe46c7",
              title: "Portrait Sessions"
            }
          ].map((img, i) => (
            <div key={i} className="relative h-[300px] group cursor-pointer">
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover rounded-lg transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                <p className="text-white text-xl font-semibold">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 