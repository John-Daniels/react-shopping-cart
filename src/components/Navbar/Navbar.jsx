import React from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-[60px] shadow-sm w-full bg-white flex justify-between items-center">
      <div className="px-5">
        <AiOutlineShoppingCart className="text-[25px]" />
      </div>
      <div className="flex justify-center items-center ">
        <Link to={"/"}>
          <h1 className="font-thin text-3xl brand">Kodershop</h1>
        </Link>
      </div>

      <div className="px-5">
        <Link to={"/cart"}>
          <AiOutlineShoppingCart className="text-[25px]" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
