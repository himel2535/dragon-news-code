import React from "react";
import { NavLink } from "react-router";
import user from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="grid grid-cols-12 items-center justify-between">
      <div className="col-span-3"></div>
      <div className="nav flex gap-5 justify-center text-center items-center text-accent col-span-6">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn justify-end flex items-center gap-4 col-span-3">
        <img src={user} alt="" />
        <button className="btn btn-primary px-10">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
