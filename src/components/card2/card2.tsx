import Image from "../../assets/image copy 2.png";
import Image1 from "../../assets/image copy 3.png";
import Image2 from "../../assets/image copy.png";
import Image3 from "../../assets/image.png";

const HeroSection = () => {
  const blocks = [
    { img: Image, title: "Back to Sport", text: "Standout Looks for School" },
    { img: Image1, title: "Total 90", text: "Look of Football" },
    { img: Image2, title: "Turn Offseason On", text: "Summer Ready" },
    { img: Image3, title: "Structure 26 ", text: "Just In" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 py-10">
      {blocks.map(({ img, title, text }, idx) => (
        <div
          key={idx}
          className="relative h-[400px] md:h-[800px] flex items-start justify-start rounded-lg overflow-hidden shadow-lg p-6"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative z-10 text-white max-w-xl text-left mt-auto">
            <p className="uppercase text-sm font-semibold mb-2">{text}</p>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6">
              {title}
            </h1>
            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
              Shop
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSection;
