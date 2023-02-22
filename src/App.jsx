import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Carousel from "./Carousel";
import Content from "./Content";
import Hire from "./Hire";
import Featured from "./Featured";
import Growth from "./Growth";
import Image from "./Image";
import Footer from "./Footer";

function App() {
  return (
    <div className="flex justify-center font-inter">
      <div className="">
        <Navbar />
        <Hero />
        <Carousel />
        <Content />
        <Hire />
        <Featured />
        <Growth />
        <Image />
        <Footer />
      </div>
    </div>
  );
}

export default App;
