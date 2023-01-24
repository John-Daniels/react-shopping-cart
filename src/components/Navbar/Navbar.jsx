import React from "react";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="h-[60px] shadow-sm w-full bg-white flex justify-between items-center">
      <div className="px-5">
        <GiHamburgerMenu className="text-[25px]" />
      </div>
      <div className="flex justify-center items-center ">
        <Link to={"/"}>
          <h1 className="font-thin text-3xl brand">Kodershop</h1>
        </Link>
      </div>

      <div className="px-5 relative">
        <span class="rounded-full w-[15px] h-[15px] flex justify-center items-center align-baseline font-bold text-[9px] p-1 bg-[red] text-white absolute -top-1 ml-[1.20rem]">
          {cartItems.length}
        </span>
        <Link to={"/cart"}>
          <AiOutlineShoppingCart className="text-[25px]" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
