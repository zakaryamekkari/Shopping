import React from "react";

import { IoSearch } from "react-icons/io5";
function Search() {
  return (
    <div className="relative group">
      <input
        type="search"
        placeholder="SEARCH HERE"
        className="rounded-full p-1 px-3 border-[1px] w-[200px]
        hover:w-[300px] transition-all duration-300 outline-none border-gray-300
      focus:border-primry focus:border-[2px] 
        peer max-md:w-[150px] hover:max-md:w-[200px] max-md:text-[12px] md:w-[250px] hover:md:w-[350px] "
      />
      <IoSearch
        className="absolute top-1/4 right-4 
                  peer-placeholder-shown:opacity-100 opacity-0
                  text-primry"
      />
    </div>
  );
}

export default Search;
