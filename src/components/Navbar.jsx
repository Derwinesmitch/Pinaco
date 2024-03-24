import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center">
        <div className="m-1 flex justify-center">
          <img
            className="w-1/12 h-1/12"
            src="https://scontent-ber1-1.xx.fbcdn.net/v/t39.30808-6/326696853_1170258603605040_650900985396845983_n.png?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zKtxWgAp0ScAX_defKc&_nc_ht=scontent-ber1-1.xx&oh=00_AfCiLOJ5AU44CZ7ewymWRQLqdqhFE4HgIHDbn2_mWFiARg&oe=65FB0039"
          ></img>
        </div>
        <div className="flex m-1">
          <Link to="/" className="m-1">
            Home
          </Link>
          <Link to="/clases" className="m-1">
            Clases
          </Link>
          <Link to="/cumpleanos" className="m-1">
            Cumpleaños
          </Link>
          <Link to="/eventos" className="m-1">
            Eventos
          </Link>
          <Link to="/club" className="m-1">
            Club de Arte
          </Link>
          <Link to="/kits" className="m-1">
            Kits
          </Link>
          <Link to="/colonia" className="m-1">
            Mini Colonia
          </Link>
          <Link to="/moviles" className="m-1">
            Clases Moviles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
