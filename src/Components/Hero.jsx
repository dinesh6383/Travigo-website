import React from "react";

const Hero = ({ hero }) => {
  return (
    <>
      <div className="flex flex-col bg-gradient-to-b from-emerald-200 to-white h-auto w-auto">
        <div className="travigo-container grid items-start justify-items-center">
          <div className="grid items-center justify-items-center mt-36 mb-16 md:mt-28 md:mb-12">
            <h1 className="text-7xl font-bold lg:text-6xl  md:text-5xl sm:text-4xl xsm:text-3xl text-black filter drop-shadow-lg">
              {hero.title}
            </h1>
            <h1 className="text-7xl font-bold lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl text-black filter drop-shadow-lg">
              {hero.subtitle}
            </h1>
            <p className="text-base my-5 text-center sm:text-sm">{hero.text}</p>
            <div className="flex items-center justify-center gap-11 sm:gap-3 sm:w-full sm:flex-col">
              <button type="button" className="button-emrald">
                {hero.btn1}
              </button>
              <button type="button" className="button-light">
                {hero.btn2}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center mb-11">
            <img
              src={hero.img}
              alt="dashboard-image"
              className="h-[85vh] w-full object-fill lg:h-[75vh] md:h-[57vh] sm:h-[35vh] sm:object-contain drop-shadow-emrald"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
