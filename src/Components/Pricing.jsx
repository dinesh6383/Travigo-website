import React from "react";
import PriceCard from "./PriceCard";

const Pricing = ({ pricingapi }) => {
  return (
    <>
      <div className="my-16 relative">
        <div className="travigo-container">
          <div className="grid items-center justify-items-center mb-11 md:mb-7 text-center gap-2">
            <h1 className=" text-5xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl font-bold filter drop-shadow-lg text-slate-900">
              {pricingapi.title}
            </h1>
            <p className="text-xl lg:text-sm text-gray-900">
              {pricingapi.text}
            </p>
            <div className="ring-1 ring-slate-100 rounded-full py-1.5 px-2 flex justify-between gap-5 my-5 shadow-md shadow-slate-200">
              <button type="button" className="button-emrald sm:w-auto">
                {pricingapi.btn1}
              </button>
              <button
                type="button"
                className="button-light sm:w-auto shadow-slate-200 bg-slate-100"
              >
                {pricingapi.btn2}
              </button>
            </div>
          </div>
          <div className="grid items-center grid-cols-2 md:grid-cols-1 w-full max-w-5xl md:max-w-md gap-9 lg:gap- m-auto">
            {pricingapi?.plans?.map((price, index) => {
              return <PriceCard key={index} price={price} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
