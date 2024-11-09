import React from "react";
import Select from "react-select";
import naija from "./naija.png";
import uk from "./yk.png";
import gh from "./ghana.png";
import german from "./german.png";
import usa from "./usa.png";
import turkey from "./tukos.png";

const SelectCountry = () => {
  const options = [
    {
      value: "ngn",
      label: (
        <div className="flex items-center">
          <img src={naija} alt="Nigeria" className="w-6 h-6 mr-2" />
          NGN
        </div>
      ),
    },
    {
      value: "gh",
      label: (
        <div className="flex items-center">
          <img src={gh} alt="Ghana" className="w-6 h-6 mr-2" />
          GH
        </div>
      ),
    },
    {
      value: "usa",
      label: (
        <div className="flex items-center">
          <img src={usa} alt="USA" className="w-6 h-6 mr-2" />
          USA
        </div>
      ),
    },
    {
      value: "uk",
      label: (
        <div className="flex items-center">
          <img src={uk} alt="UK" className="w-6 h-6 mr-2" />
          UK
        </div>
      ),
    },
    {
      value: "germany",
      label: (
        <div className="flex items-center">
          <img src={german} alt="Germany" className="w-6 h-6 mr-2" />
          GER
        </div>
      ),
    },
    {
      value: "turkey",
      label: (
        <div className="flex items-center">
          <img src={turkey} alt="Turkey" className="w-6 h-6 mr-2" />
          TUR
        </div>
      ),
    },
  ];

  // Set the default value to Nigeria (NGN)
  const defaultValue = options.find((option) => option.value === "ngn");

  return (
    <div className="w-full max-w-xs">
      <Select options={options} defaultValue={defaultValue} />
    </div>
  );
};

export default SelectCountry;
