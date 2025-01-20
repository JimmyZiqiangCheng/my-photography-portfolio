import Image from 'next/image';

export default function Gallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1511895426328-dc8714191300",
      category: "Wedding"
    },
    {
      src: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
      category: "Landscape"
    },
    {
      src: "https://images.unsplash.com/photo-1537368910025-700350fe46c7",
      category: "Portrait"
    },
    {
      src: "https://images.unsplash.com/photo-1604017011826-d3b4c23f8914",
      category: "Street"
    },
    {
      src: "https://images.unsplash.com/photo-1496843916299-590492c751f4",
      category: "Wedding"
    },
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      category: "Landscape"
    },
    {
      src: "https://images.unsplash.com/photo-1532635241-17e820acc59f",
      category: "Portrait"
    },
    {
      src: "https://images.unsplash.com/photo-1581456495146-65a71b2c8e52",
      category: "Event"
    },
    {
      src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
      category: "Landscape"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Portfolio Gallery</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <div key={i} className="relative aspect-square group cursor-pointer">
            <Image
              src={img.src}
              alt={`Gallery Image ${i + 1}`}
              fill
              className="object-cover rounded-lg transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
              <p className="text-white text-xl font-semibold">{img.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 