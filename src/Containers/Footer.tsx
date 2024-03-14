import React from "react";
import logo from "../Assets/Logo-Container.svg";

const Footer: React.FC = () => {
  return (
    <div className="bg-white p-5 flex flex-col items-center justify-center lg:flex-row lg:justify-around">
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <img src={logo} alt="logo" />
        <span className="mx-3">@ 2023 Soller, Inc. All rights reserved.</span>
      </div>
      <div>
        <a href="#" className="mx-2">
          Terms
        </a>
        <a href="#" className="mx-2">
          Privacy
        </a>
        <a href="#" className="mx-2">
          Support
        </a>
      </div>
    </div>
  );
};

export default Footer;
