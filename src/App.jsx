import "./App.css";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="main">
      <Header />
      <Navbar />
      <div></div>
      <Carousel />
    </div>
  );
}

export default App;
