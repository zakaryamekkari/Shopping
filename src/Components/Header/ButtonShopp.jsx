import React from "react";
import { FaCartShopping } from "react-icons/fa6";
function ButtonShopp() {
  return (
    <button
      onClick={() => alert("Ordering not available yet")}
      className="  flex justify-center items-center gap-1 rounded-lg bg-gradient-to-r
     from-primry to-scandry max-md:w-[30px] max-md:h-6 max-md:hover:w-[75px]
      hover:w-[100px] md:w-[60px] md:h-7  
     group transition-all duration-300"
    >
      <span
        className="group-hover:block hidden transition-all duration-200 
    uppercase text-white text-[12px]"
      >
        Order
      </span>
      <FaCartShopping className="text-white text-[16px]" />
    </button>
  );
}

export default ButtonShopp;
