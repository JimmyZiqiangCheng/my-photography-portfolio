export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Me</h1>
      
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 font-medium">Name</label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block mb-2 font-medium">Message</label>
          <textarea
            id="message"
            rows={6}
            className="w-full p-2 border rounded"
            required
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Send Message
        </button>
      </form>
    </div>
  );
} 