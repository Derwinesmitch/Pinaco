import "./App.css";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="main">
      <Header />
      <Navbar />

      <Carousel />
      <div className="w-full flex justify-center">
        <div className="w-4/5 ">
          <Intro />
        </div>
      </div>
    </div>
  );
}

export default App;
