/* eslint-disable react/prop-types */
import { useState } from "react";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const images = [
    "https://scontent-ber1-1.xx.fbcdn.net/v/t39.30808-6/429819500_18246202198222612_950066809474743318_n.jpg?stp=dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xN4gv3QhHC8AX_78KYK&_nc_ht=scontent-ber1-1.xx&oh=00_AfALwCH-B4EVCioPhk01wpGoosqT6QtFDPiSQ7LaAoZ6Pw&oe=65FA481A",
    "https://scontent-ber1-1.xx.fbcdn.net/v/t39.30808-6/430774443_811344071026453_1604875604082032479_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3pNQV2slh8QAX8OpYR4&_nc_ht=scontent-ber1-1.xx&oh=00_AfB-fHLIaxG_F7drVsjLI3233J8uWXwBG_e4ehBpaTI8ug&oe=65FAF8F1",
    "https://scontent-ber1-1.xx.fbcdn.net/v/t39.30808-6/400639449_18232035499222612_1632612425735263000_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Mmzl0wkaZHsAX_OU97S&_nc_ht=scontent-ber1-1.xx&oh=00_AfBnnDmJearhiJC9p8Dk20ep-eXuIOKVfkPkeBr6QV7Yzw&oe=65FA0D8D",
  ];

  return (
    <div className="relative overflow-hidden max-w-full">
      <button
        onClick={prevSlide}
        className="absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-lg border-none px-4 py-2 cursor-pointer z-10 transition duration-300 hover:bg-opacity-80"
      >
        &lt;
      </button>
      <img
        src={images[activeIndex]}
        alt={`Slide ${activeIndex}`}
        className="w-full h-[60vh] block transition duration-300 ease-in-out hover:scale-105 object-cover"
      />
      <button
        onClick={nextSlide}
        className="absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-lg border-none px-4 py-2 cursor-pointer z-10 transition duration-300 hover:bg-opacity-80 right-0"
      >
        &gt;
      </button>
    </div>
  );
};
export default Carousel;
