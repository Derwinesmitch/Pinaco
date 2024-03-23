import Header from "../Header";
import Navbar from "../Navbar";

const Shell = ({ children }) => {
  return (
    <div className="no-scrollbar overflow-y-auto h-[100vh]">
      <Header />
      <Navbar />
      {children}
    </div>
  );
};

export default Shell;
