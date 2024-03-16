import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="bg-red-300 w-full flex justify-center">
      <div className="w-4/5 flex justify-end">
        <div className="flex p-2 space-x-10">
          <div>pinaco@hotmail.com</div>
          <div className="flex space-x-3">
            <div>
              <FaInstagram size="1.5rem" />
            </div>
            <div>
              <FaXTwitter size="1.5rem" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
