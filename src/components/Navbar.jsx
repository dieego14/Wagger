import { Link } from "react-router-dom";
import { FaDog } from "react-icons/fa";
import { GiSittingDog } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {

  const [dog, setDog] = useState(false);
  return (
    <div className="max-w-[1920px] h-24 flex items-center mx-auto bg-gray-100">
      <h1 className=" flex gap-2 text-5xl lg:text-5xl font-myFont2 black ml-6">
        <Link to="/"> Wagger</Link>
        <div onClick={() => setDog(!dog)} className={dog ? "hidden" : ""} >
          <GiSittingDog />
        </div>

        {dog ? (
          <div>
            <FaDog onClick={() => setDog(!dog)}/>
          </div>
        ): (
          ""
        )}
      </h1>
      <ul className="text-black flex mr-10 text-xl">
        <li className="p-4">
          <Link to="/About"> About </Link>
        </li>
        <li className="p-4">
          <Link to="/Services"> Services </Link>
        </li>
        <li className="p-4">
          <Link to="/Contact"> Contact </Link>
        </li>
        <li className="p-4">
          <Link to="/About"> Etc. </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
