import React from "react";
import logo_shopping from "../../assets/images/logo_shopping.png";
function Logo() {
  return (
    <div className="flex items-center gap-3 ">
      <a href="#">
        <img
          className="w-8 rounded-lg max-md:w-6 "
          src={logo_shopping}
          alt="Logo Shopping"
        />
      </a>
      <a href="#" className="uppercase font-bold max-md:text-[14px]  ">
        shopping
      </a>
    </div>
  );
}

export default Logo;
