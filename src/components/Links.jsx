import Circle from "./UI/Circle";
const Links = () => {
  return (
    <div className="flex justify-between my-5">
      <div className="">
        <Circle text="Clases" />
      </div>
      <div className="">
        <Circle text="Cumpleaños" />
      </div>
      <div className="">
        <Circle text="Eventos" />
      </div>
      <div className="">
        <Circle text="Club de Arte" />
      </div>
      <div className="">
        <Circle text="Kits" />
      </div>
      <div className="">
        <Circle text="Mini Colonia" />
      </div>
      <div className="">
        <Circle text="Clases Moviles" />
      </div>
    </div>
  );
};

export default Links;
