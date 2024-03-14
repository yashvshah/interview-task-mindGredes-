import React from "react";

interface CardItemsProps {
  icon: React.ReactElement;
  profileName: string;
  subText: string;
  profileFollower: string;
}

const Card: React.FC<CardItemsProps> = ({
  icon,
  subText,
  profileName,
  profileFollower,
}) => {
  return (
    <div className="bg-white rounded-lg p-8 hover:scale-110">
      <div className="my-4">{icon}</div>
      <p>{subText}</p>
      <div className="flex items-center mt-8">
        <img
          src={"https://avatar.iran.liara.run/public/boy?username=Ash"}
          alt="Profile"
          className="w-16 h-16 rounded-full mx-2 shadow-md"
        />
        <div className="text-left">
          <h6 className="text-xl font-semibold text-gray-800">{profileName}</h6>
          <p className="text-gray-600">{profileFollower}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
