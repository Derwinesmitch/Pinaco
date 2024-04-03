import Circle from "./UI/Circle";
const Links = () => {
  return (
    <div className="flex flex-wrap justify-between my-5">
      <div className="w-1/2 md:w-1/2 lg:w-auto mb-2 md:mb-0 md:pr-2 lg:pr-0 flex justify-center">
        <Circle text="Clases" />
      </div>
      <div className="w-1/2 md:w-1/2 lg:w-auto mb-2 md:mb-0 md:pl-2 flex justify-center">
        <Circle text="Cumpleaños" />
      </div>
      <div className="w-1/2 md:w-1/2 lg:w-auto mb-2 md:mb-0 md:pr-2 lg:pr-0 flex justify-center">
        <Circle text="Eventos" />
      </div>
      <div className="w-1/2 md:w-1/2 lg:w-auto mb-2 md:mb-0 md:pl-2 flex justify-center">
        <Circle text="Club de Arte" />
      </div>
      <div className="w-1/2 md:w-1/2 lg:w-auto mb-2 md:mb-0 md:pr-2 lg:pr-0 flex justify-center">
        <Circle text="Kits" />
      </div>
      <div className="w-1/2 md:w-1/2 lg:w-auto mb-2 md:mb-0 md:pl-2 flex justify-center">
        <Circle text="Mini Colonia" />
      </div>
      <div className="w-1/2 md:w-1/2 lg:w-auto mb-2 md:mb-0 md:mx-auto lg:mx-0 flex justify-center">
        <Circle text="Clases Moviles" />
      </div>
    </div>
  );
};

export default Links;
