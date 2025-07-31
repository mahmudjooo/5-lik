import Card from "./components/card/card";
import HeroSection from "./components/card2/card2";
import Hero from "./components/hero/hero";
import Holod from "./components/holond/holond";
import Footer from "./footer/footer";
import Navbar from "./shared/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeroSection />
      <Holod />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
