import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import usa from "../public/image/country/usa.png";
import nigeria from "../public/image/country/nigeria.png";
import uk from "../public/image/country/uk.png";
import brazil from "../public/image/country/brazil.png";
import sa from "../public/image/country/sa.png";
import australia from "../public/image/country/aust.png";
import china from "../public/image/country/china.png";
import nz from "../public/image/country/nz.png";
import Singapore from "../public/image/country/singapore.png";
import russia from "../public/image/country/russia.png";
import india from "../public/image/country/india.png";
import japan from "../public/image/country/japan.png";
import canada from "../public/image/country/canada.png";
import sw from "../public/image/country/sw.png";

export const countryList = [
  { country: "United States", code: "USD", image: usa, symbol: "$" },
  { country: "Nigeria", code: "NGN", image: nigeria, symbol: "₦" },
  { country: "United Kingdom", code: "GBP", image: uk, symbol: "£" },
  { country: "Japan", code: "JPY", image: japan, symbol: "¥" },
  { country: "Canada", code: "CAD", image: canada, symbol: "$" },
  { country: "Australia", code: "AUD", image: australia, symbol: "$" },
  { country: "Switzerland", code: "CHF", image: sw, symbol: "CHF" },
  { country: "China", code: "CNY", image: china, symbol: "¥" },
  { country: "India", code: "INR", image: india, symbol: "₹" },
  { country: "New Zealand", code: "NZD", image: nz, symbol: "$" },
  { country: "Singapore", code: "SGD", image: Singapore, symbol: "$" },
  { country: "South Africa", code: "ZAR", image: sa, symbol: "R" },
  { country: "Brazil", code: "BRL", image: brazil, symbol: "R$" },
  { country: "Russia", code: "RUB", image: russia, symbol: "₽" },
];
const Rate = () => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const API_KEY = "8702adc5b43e6a2320325702";

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`
        );
        const data = await response.json();

        if (data.result === "success") {
          setRates(data.conversion_rates);
        } else {
          console.error("Error fetching currency rates:", data.error);
        }
      } catch (error) {
        console.error("Error fetching currency rates:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, [API_KEY]);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  // List of countries and their currency codes

  return (
    <div className="md:p-10 p-4 block  bg-white ">
      <div className="mt-10 text-center ">
        <p className="text-[#db2777] tracking-2px mb-4">LIVE EXCHANGE RATES</p>
        <h1 className="font-bold md:text-[35px] text-xl md:w-[600px] mx-auto leading-relaxed">
          {" "}
          Exchange Money Across The World In Real Time With Lowest Fees
        </h1>
      </div>
      <div className="px-2  shadow">
        <div className="bg-black flex flex-col   text-white rounded p-2  border-b-2">
          <h3>Currency Rate</h3>
        </div>
        <div>
          <ul></ul>
        </div>

        <ul>
          {countryList.map(
            ({ country, code, image, symbol }) =>
              rates[code] && (
                <li
                  key={code}
                  className="  flex  justify-between items-center md:flex md:flex-row md:justify-between border-b-2 py-4  px-2  "
                >
                  <div className=" flex items-center">
                    <img
                      className="rounded-full"
                      src={image}
                      alt={`${country} flag`}
                      style={{ width: "30px", marginRight: "10px" }}
                    />
                    <div>
                      <p className="text-[12px] md:text-[20px]"> {country}:</p>
                    </div>
                  </div>

                  <div className="flex">
                    <span className="text-[12px] md:text-[20px] font-semibold">
                      {" "}
                      {symbol}
                    </span>
                    <span className="text-[12px] md:text-[20px] text-green-400 ml-1">
                      {rates[code]}
                    </span>
                  </div>
                  <div>
                    <button class="overflow-hidden  w-24 h-8 md:w-36 md:p-2 md:h-12 bg-black text-white border-none rounded-md text-xs font-bold cursor-pointer relative z-10 group">
                      Buy
                      <span class="absolute w-40 h-28 -top-8 -left-2 bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
                      <span class="absolute w-40 h-28 -top-8 -left-2 bg-[#db2777] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
                      <span class="absolute w-40 h-28 -top-8 -left-2 bg-[#db2777] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
                      <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute  left-8 z-10">
                        Buy
                      </span>
                    </button>
                  </div>
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Rate;
