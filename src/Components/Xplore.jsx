import React from "react";

const Xplore = ({ title, placesApi }) => {
  //   console.log(placesApi);
  return (
    <>
      <div className="relative my-7 md:m-3 mt-3">
        <div className="travigo-container">
          <div className="flex justify-center text-center mb-11 md:mb-7">
            <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl font-bold filter drop-shadow-lg text-slate-900">
              {title}
            </h1>
          </div>
          <div className="grid items-center grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5">
            {placesApi?.map((place, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center gap-5 sm:gap-3 rounded-lg hover:bg-emerald-100 transition-all duration-300 cursor-pointer hover:scale-105"
                >
                  <div className="flex items-center">
                    <img
                      src={place.placeImg}
                      alt="place-image"
                      className="w-20 h-20 sm:w-16 sm:h-16 rounded-lg filter drop-shadow-lg"
                    />
                  </div>
                  <div className="flex items-start flex-col text-slate-900">
                    <h1 className="text-lg sm:text-sm font-bold">
                      {place.location}
                    </h1>
                    <p className="font-normal text-base lg:text-sm sm:text-xs">
                      {place.distance}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Xplore;
