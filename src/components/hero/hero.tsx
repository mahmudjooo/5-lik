import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* YouTube video as background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <iframe
          className="w-full h-full object-cover"
          src="https://www.youtube.com/embed/b0Ezn5pZE7o?autoplay=1&mute=1&loop=1&playlist=b0Ezn5pZE7o&controls=0&showinfo=0&modestbranding=1&enablejsapi=1"
          title="Nike video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      {/* Overlay to darken video */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content on top */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-4">
          Nike React Technology
        </h1>
        <p className="text-lg md:text-2xl max-w-xl mb-6 drop-shadow">
          Power meets performance in the latest collection.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
