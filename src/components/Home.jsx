import Carousel from "./Carousel";
import Intro from "./Intro";
import Links from "./Links";
import Quotes from "./Quotes";
import About from "./About";
import Shell from "./UI/Shell";

const Home = () => {
  return (
    // <div className="main">
    <Shell>
      <Carousel />
      <div className="w-full flex justify-center">
        <div className="w-4/5 ">
          <Intro />
          <Links />
          <Quotes />
          <About />
        </div>
      </div>
    </Shell>
    // </div>
  );
};

export default Home;
