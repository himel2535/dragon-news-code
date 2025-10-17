import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  const date = new Date();
  const weekday = format(date, "EEEE");
  const rest = format(date, "MMMM dd, yyyy");
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <img src={logo} alt="" className="mt-10" />
      <p className="text-accent-content">Journalism Without Fear or Favour</p>
      <p className="text-semibold text-accent">
        <span className="text-primary">{weekday }  </span>
        <span> {rest}</span>
      </p>
    </div>
  );
};

export default Header;
