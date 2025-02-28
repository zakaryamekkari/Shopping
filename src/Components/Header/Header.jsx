import React from "react";

import DarkMode from "./DarkMode";
import Search from "./Search";
import Logo from "./Logo";
import ButtonShopp from "./ButtonShopp";

function Header() {
  return (
    <div className=" bg-primry/40 shadow-md dark:bg-slate-950">
      <div className="  container p-1 px-3 xl:px-24">
        <div className="flex items-center justify-between ">
          <Logo />
          <div className="flex items-center gap-3 md:gap-8">
            <Search />
            <ButtonShopp />
            <DarkMode />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
