import { CustomDropDown } from "@/components";
import { tickers } from "@/constants";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-full h-20 px-8 bg-black fixed z-20">
      <div>
        <img
          src="./clarum.svg"
          alt="Clarum"
          className="w-1/2 h-full px-2 py-1 rounded-md bg-white hover:bg-slate-300 transition ease-in-out duration-400"
        />
      </div>
      <CustomDropDown placeHolder="Select a Ticker" options={tickers} />
    </div>
  );
};

export default NavBar;
