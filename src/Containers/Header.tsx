import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../Components/Button";
import { CiHeadphones } from "react-icons/ci";

const navItems = [
  {
    navItem: "Products",
    link: "#",
  },
  {
    navItem: "Solutions",
    link: "#",
  },
  {
    navItem: "Services",
    link: "#",
  },
  {
    navItem: "Configure",
    link: "#",
  },
];

const Header: React.FC = () => {
  return (
    <div>
      <nav>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex">
            <div className="font-bold text-2xl mr-4">sollar</div>
            <div className="hidden md:block">
              <ul className="flex space-x-4">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="flex items-center w-full p-2 text-gray-900 font-medium"
                    >
                      {item.navItem}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:flex items-center hidden">
            <div className="flex items-center mr-5 text-blue-700">
              <span className="mr-3">
                <CiHeadphones />
              </span>
              555 818 282
            </div>
            <Button btnClassName="text-lg font-medium flex items-center">
              Request a Quote
              <span className="pl-3">
                <FaArrowRightLong />
              </span>
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
