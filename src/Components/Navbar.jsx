import React, { useEffect, useState } from "react";
import logo from "../Images/logo.png";
import menu from "../Images/menu.svg";
import { navlinks } from "../Data/travigoData";
import { NavLink } from "react-router-dom";
import PopUpMenu from "./PopUpMenu";

const Navbar = ({ navlinks }) => {
  const [sideBar, toggleSideBar] = useState(false);
  const [navState, setNavState] = useState(false);
  const togglePopUp = () => toggleSideBar(!sideBar);

  const onNavscroll = () => {
    if (window.scrollY > 180) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavscroll);
    return () => {
      window.removeEventListener("scroll", onNavscroll);
    };
  }, []);

  return (
    <div>
      <header className={`nav-default ${navState && "nav-sticky"}`}>
        <nav className="flex items-center justify-between travigo-container">
          <NavLink to={"/"} className="flex items-center ">
            <img src={logo} alt="logo" className="w-22 h-9 object-fill" />
          </NavLink>
          <ul className="flex items-center lg:hidden gap-7">
            {navlinks?.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink to={"#"} className="text-lg text-slate-900">
                    {link.link}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <ul>
            <li>
              <button
                type="button"
                className="button-emrald px-7 text-base lg:hidden transition-all duration-200 active:scale-90"
              >
                Join us
              </button>
            </li>
          </ul>
          <ul className="hidden lg:flex items-center">
            <li>
              <button
                type="button"
                onClick={togglePopUp}
                className="flex items-center justify-center"
              >
                <img
                  src={menu}
                  alt="hamburger-icon"
                  className="object-cover shadow-sm filter"
                />
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <PopUpMenu
        navlinks={navlinks}
        sideBar={sideBar}
        toggleSideBar={toggleSideBar}
      />
    </div>
  );
};

export default Navbar;
