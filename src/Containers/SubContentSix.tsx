import React from "react";
import Button from "../Components/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import macbook from "../Assets/Macbook.svg";

const SubContentSix: React.FC = () => {
  return (
    <div className="bg-purple-700 p-20">
      <div className="flex flex-col lg:flex-row justify-between mb-20">
        <div className="flex-1 text-center lg:text-left">
          <p className="text-amber-300 text-lg font-semibold">
            Join other Sun harvesters
          </p>
          <h1 className="text-3xl lg:text-6xl font-bold my-3 text-white">
            All the power that you need for
            <br /> your house is now available
          </h1>
        </div>
        <div>
          <Button btnClassName="text-xl font-bold flex items-center mt-6 mx-auto lg:mx-0">
            Request a Quote
            <span className="pl-3">
              <FaArrowRightLong />
            </span>
          </Button>
          <p className="text-white">Egestas fringilla aliquam leo</p>
        </div>
      </div>
      <div className="flex justify-center">
        <img src={macbook} alt="macbook" className="w-full" />
      </div>
    </div>
  );
};

export default SubContentSix;
