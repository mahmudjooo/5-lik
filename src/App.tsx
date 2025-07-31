
const App = () => {
  return (
    <section className="relative w-full h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="relative w-full max-w-[800px] mx-auto">
          <img
            src=""
            alt="Erling Haaland"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="mt-8">
          <p className="text-sm text-gray-600 font-medium">Athlete Picks</p>
          <h1 className="text-3xl md:text-4xl font-semibold mt-1">Erling Haaland</h1>
          <button className="mt-4 px-6 py-3 bg-black text-white rounded-full text-lg hover:opacity-90 transition">
            Shop
          </button>
        </div>
      </div>
    </section>
  );
};

export default App;
