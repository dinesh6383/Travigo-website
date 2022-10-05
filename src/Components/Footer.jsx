import React from "react";

const Footer = ({ footerAPI: { titles, links, sociallinks } }) => {
  return (
    <>
      <footer className="bg-gradient-to-b from-emerald-400 to-green-300 pt-24 pb-7">
        <div className="grid items-center justify-items-center grid-cols-3">
          {titles?.map((val, index) => {
            return (
              <div
                key={index}
                className="grid items-center justify-items-center"
              >
                <h1 className="text-xl lg:text-base uppercase font-semibold">
                  {val.title}
                </h1>
              </div>
            );
          })}
          {links?.map((val, index) => {
            return (
              <ul
                key={index}
                className="grid justify-items-center items-center gap-1"
              >
                {val?.map((list, index) => {
                  return (
                    <li key={index} className="text-sm sm:text-xs">
                      {list.link}
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
        <div className="w-7/12 lg:w-[95vw] m-auto mt-9">
          <div className="h-[0.1vh] bg-black/30 my-7 md:my-5"></div>
          <div className="flex items-center justify-between px-7 md:px-0 md:gap-5 md:flex-col-reverse">
            <p className="text-sm md:text-center">
              Copyright <sup className="text-base font-bold">&copy;</sup> All
              Reserved Rights 2022
            </p>
            <div className="flex items-center gap-3">
              {sociallinks?.map((val, index) => {
                return (
                  <img
                    key={index}
                    src={val.icon}
                    alt="social-icons"
                    className="w-5 h-5"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
