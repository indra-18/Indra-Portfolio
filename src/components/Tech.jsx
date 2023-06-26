import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { developer } from "../assets";
const Tech = () => {
  return (
    <div className="md:flex justify-between">
      <div className=" max-w-[200px] translate-x-12 max-md:mb-28">
        <img src={developer} className=" scale-150 " alt="software developer" />
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-10 -translate-y-5">
        {technologies.map((technology) => (
          <div className={` p-2 shadow-purple-400 shadow-inner w-20 h-20`} key={technology.name}>
            <img src={technology.icon} className="w-full h-full" title={technology.name} alt={technology.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
