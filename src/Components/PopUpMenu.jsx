import React from "react";
import { NavLink } from "react-router-dom";
import close from "../Images/close.png";

const PopUpMenu = ({ navlinks, sideBar, toggleSideBar }) => {
  return (
    <>
      <nav
        className={`fixed top-0  bg-white w-[250px] h-[100vh] z-10 px-6 py-20 right-0 transition-all duration-200 ${
          sideBar ? "block" : "hidden"
        }`}
      >
        <div
          onClick={() => toggleSideBar(!sideBar)}
          className="flex items-center justify-center w-5 absolute top-8"
        >
          <img src={close} className="object-cover shadow-sm filter" />
        </div>
        <ul className="flex items-center justify-between flex-col gap-3 h-[80%]">
          {navlinks.map((link, index) => {
            return (
              <li key={index} className="text-lg font-bold">
                <NavLink to={"#"}>{link.link}</NavLink>
              </li>
            );
          })}
        </ul>
        <ul className="flex items-center justify-center">
          <li>
            <button
              type="button"
              className="button-emrald flex justify-center items-center mt-14 text-white"
            >
              Join us
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default PopUpMenu;
