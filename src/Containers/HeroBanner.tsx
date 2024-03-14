import React from "react";
import Button from "../Components/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import banner from "../Assets/hero-banner.svg";

const HeroBanner: React.FC = () => {
  return (
    <div className="container mx-auto flex flex-col items-center text-center mt-96 lg:mt-0 lg:text-left lg:flex lg:items-start">
      <div className="lg:w-1/2 mt-6">
        <h1 className="text-3xl lg:text-7xl font-bold">
          Get the Sun to Power Your Home
        </h1>
        <p className="text-2xl mt-6">
          Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
          orci dui consequat turpis scelerisque.
        </p>
        <Button btnClassName="text-xl font-bold flex items-center mt-6 mx-auto lg:mx-0">
          Request a Quote
          <span className="pl-3">
            <FaArrowRightLong />
          </span>
        </Button>
        <p className="text-xl mt-32 text-left">
          “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
          orci dui consequat turpis scelerisque faucibus.”
        </p>
        <div className="flex items-center mt-8">
          <img
            src={"https://avatar.iran.liara.run/public/boy?username=Ash"}
            alt="Profile"
            className="w-16 h-16 rounded-full mx-2 shadow-md"
          />
          <div className="text-left">
            <h6 className="text-xl font-semibold text-gray-800">
              Rwanda Melflor
            </h6>
            <p className="text-gray-600">zerowaste.com</p>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 -z-50">
        <img src={banner} alt="hero" className="w-96 lg:w-full" />
      </div>
    </div>
  );
};

export default HeroBanner;
