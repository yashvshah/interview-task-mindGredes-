import React from "react";
import Card from "../Components/Card";
import { PiCloudLightningLight } from "react-icons/pi";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import Button from "../Components/Button";
import { FaArrowRightLong } from "react-icons/fa6";

const CardItems = [
  {
    icon: <PiCloudLightningLight size={50} />,
    subText:
      "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
    profileName: "Jane Cooper",
    profileFollower: "10KWh",
  },
  {
    icon: <PiCloudLightningLight size={50} />,
    subText:
      "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
    profileName: "Jane Cooper",
    profileFollower: "10KWh",
  },
  {
    icon: <PiCloudLightningLight size={50} />,
    subText:
      "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
    profileName: "Jane Cooper",
    profileFollower: "10KWh",
  },
  {
    icon: <PiCloudLightningLight size={50} />,
    subText:
      "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
    profileName: "Jane Cooper",
    profileFollower: "10KWh",
  },
  {
    icon: <PiCloudLightningLight size={50} />,
    subText:
      "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
    profileName: "Jane Cooper",
    profileFollower: "10KWh",
  },
  {
    icon: <PiCloudLightningLight size={50} />,
    subText:
      "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
    profileName: "Jane Cooper",
    profileFollower: "10KWh",
  },
];

const SubContentFour: React.FC = () => {
  return (
    <div className="bg-purple-700 p-20">
      <div className="flex flex-col lg:flex-row justify-between mb-20">
        <div className="text-center lg:text-left">
          <p className="text-amber-300 text-lg font-semibold">
            Join other Sun harvesters
          </p>
          <h1 className="text-3xl lg:text-6xl font-bold my-3 text-white">
            Make something awesome
          </h1>
          <p className="text-xl text-white">
            Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
            Eleifend mi tristique condimentum congue fusce nunc, donec magnis
            commodo.
          </p>
        </div>
        <div>
          <Button btnClassName="text-xl font-bold flex items-center mt-6 mx-auto lg:mx-0">
            Request a Quote
            <span className="pl-3">
              <FaArrowRightLong />
            </span>
          </Button>
        </div>
      </div>
      <div className="flex flex-col lg:flex lg:flex-row gap-5">
        {CardItems.map((item, index) => (
          <Card
            key={index}
            icon={item.icon}
            profileName={item.profileName}
            subText={item.subText}
            profileFollower={item.profileFollower}
          />
        ))}
      </div>
      <div className="flex text-amber-300 mt-10">
        <a>
          <IoArrowBackCircleOutline size={50} />
        </a>
        <a>
          <IoArrowForwardCircleOutline size={50} />
        </a>
      </div>
    </div>
  );
};

export default SubContentFour;
