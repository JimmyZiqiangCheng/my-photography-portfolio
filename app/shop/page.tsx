import Image from 'next/image';

export default function Shop() {
  const products = [
    {
      name: "Golden Hour Preset Pack",
      description: "Transform your photos with this collection of 15 carefully crafted presets perfect for sunset and outdoor photography.",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1501862700950-18382cd41497"
    },
    {
      name: "Wedding Photography Collection",
      description: "A complete set of 25 professional presets designed specifically for wedding and engagement photos.",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1519741497674-611481863552"
    },
    {
      name: "Portrait Pro Bundle",
      description: "Enhance your portrait photography with these 20 premium presets designed for all skin tones.",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Photography Shop</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, i) => (
          <div key={i} className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative aspect-square mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-xl font-bold mb-4">${product.price}</p>
            <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
} 