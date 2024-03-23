import "./App.css";
import About from "./components/About";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Links from "./components/Links";
import Navbar from "./components/Navbar";
import Quotes from "./components/Quotes";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="main">
      <Header />
      <Navbar />

      <Carousel />
      <div className="w-full flex justify-center">
        <div className="w-4/5 ">
          <Intro />
          <Links />
          <Quotes />
          <About />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
