import { format } from "date-fns";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-10 text-center space-y-3">
      <h1 className="jacquard-24 font-bold text-6xl text-[#444444]">
        The Chicago Times
      </h1>
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p className="text-xl text-accent font-semibold">
        {format(new Date(), "EEEE, MMMM MM, yyyy")}
      </p>
      <p className="text-xl text-accent font-semibold">
        {format(currentTime, "hh : mm : ss aa")}
      </p>
    </div>
  );
};

export default Header;
