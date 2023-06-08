import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [links, setLinks] = useState([
    { title: "COVID-19 Stats", link: "/covid" },
    { title: "Quotes", link: "/quotes" },
    { title: "Random Users", link: "/users" },
  ]);

  return (
    <div className="h-[50px] sm:h-[60px] shadow-sm w-full bg-white flex justify-between items-center px-8">
      <Link to={"/"} className="">
        <h1 className=" hidden sm:block font-normal text-lg sm:text-2xl brand">
          React Api Fetch Example{"</>"}
        </h1>

        <h1 className="  sm:hidden  font-normal text-lg sm:text-2xl brand">
          {"</>"}
        </h1>
      </Link>

      <div className="flex gap-2">
        {links.map(({ link, title }) => (
          <Link
            key={title}
            to={link}
            className="text-[10px] sm:text-[12px] hover:text-primaryColor"
          >
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
