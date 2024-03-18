import MovieClip from "./Video";

const Intro = () => {
  return (
    <div className="flex">
      <div className="flex">
        <div className="w-1/2 flex flex-col justify-center">
          <div className="mb-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua.
          </div>
          <div>
            <h2>Lorem ipsum</h2> ist ein Blindtext, der nichts bedeuten soll,
            sondern als Platzhalter im Layout verwendet wird,{" "}
          </div>
        </div>
        <div className="w-1/2 flex mt-10 object-cover">
          <MovieClip />
        </div>
      </div>
    </div>
  );
};

export default Intro;
