import React from "react";

const Banner = ({ bannerAPI: { title, text, imgSrc, btnText } }) => {
  return (
    <>
      <div className="relative w-full max-w-5xl ml-auto mr-auto mt-0 mb-3 xl:w-[95vw] rounded-lg">
        <div className="">
          <img
            className="h-[35vh] w-full rounded-lg"
            src={imgSrc}
            alt="banner-image"
          />
        </div>
        <div className="absolute top-20 left-12 w-full h-[45%] flex flex-col items-start justify-between md:items-center md:justify-between md:left-0 md:top-14">
          <h1 className="text-3xl font-bold text-slate-900 drop-shadow-lg filter">
            {title}
          </h1>
          <p className="text-base sm:text-sm">{text}</p>
          <button
            type="button"
            className="py-1.5 px-5 bg-gradient-to-b from-gray-900 to-slate-800 text-slate-300 text-sm rounded-full shadow-lg shadow-slate-900 transition-all duration-300 active:scale-110"
          >
            {btnText}
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
