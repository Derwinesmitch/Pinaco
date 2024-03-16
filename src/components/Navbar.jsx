const Navbar = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center">
        <div className="m-1 flex justify-center">
          <img
            className="w-1/6 h-1/6"
            src="https://scontent-ber1-1.xx.fbcdn.net/v/t39.30808-6/326696853_1170258603605040_650900985396845983_n.png?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zKtxWgAp0ScAX_defKc&_nc_ht=scontent-ber1-1.xx&oh=00_AfCiLOJ5AU44CZ7ewymWRQLqdqhFE4HgIHDbn2_mWFiARg&oe=65FB0039"
          ></img>
        </div>
        <div className="flex m-1">
          <div className="m-1">Clases</div>
          <div className="m-1">Talleres</div>
          <div className="m-1">Info</div>
          <div className="m-1">Cosas</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
