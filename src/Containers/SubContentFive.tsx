import React from "react";
import Image from "../Assets/Left.svg";
import { FaArrowRightLong } from "react-icons/fa6";

const SubContentFive: React.FC = () => {
  return (
    <div className="container mx-auto my-20">
      <div className="flex flex-col lg:flex-row items-center gap-32">
        <div>
          <img src={Image} alt="img" />
        </div>
        <div className="text-center lg:text-left">
          <p className="text-amber-900 text-lg font-semibold">Case studies</p>
          <h1 className="text-3xl lg:text-6xl font-bold my-5">
            Check how our systems have helped others
          </h1>
          <p className="text-xl">
            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et.
            Auctor turpis semper id sit ornare maecenas lectus sed.
          </p>
          <button className="text-lg text-orange-900 font-bold flex items-center mt-6 mx-auto lg:mx-0">
            Request a Quote
            <span className="pl-3">
              <FaArrowRightLong />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubContentFive;
