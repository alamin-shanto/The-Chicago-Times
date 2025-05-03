import { format } from "date-fns";
import React from "react";

const Header = () => {
  return (
    <div className="mt-10 text-center space-y-3">
      <h1 className="jacquard-24 font-bold text-6xl text-[#444444]">
        The Chicago Times
      </h1>
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p className="text-xl text-accent font-semibold">
        {format(new Date(), "EEEE, MMMM MM, yyyy")}
      </p>
    </div>
  );
};

export default Header;
