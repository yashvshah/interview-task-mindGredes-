import React from "react";
import CommonLayout from "../Components/CommonLayout";
import Phone from "../Assets/phone-one.png";
import { BsTruck, BsTrophy } from "react-icons/bs";
import { TbPigMoney } from "react-icons/tb";
import { IoWalkOutline } from "react-icons/io5";

const Items = [
  {
    icon: <BsTruck size={30} />,
    title: "Et mauris",
    subText:
      "Posuere quis sed mauris non curabitur pretium elementum eget.Feugiat sed maecenas eu accumsan tristique.",
  },
  {
    icon: <BsTrophy size={30} />,
    title: "Eget sit",
    subText:
      "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. ",
  },
  {
    icon: <IoWalkOutline size={30} />,
    title: "Imperdiet pellentesque",
    subText:
      "Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla.",
  },
  {
    icon: <TbPigMoney size={30} />,
    title: "Non libero",
    subText:
      "Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra.",
  },
];

const SubContentTwo = () => {
  return (
    <div className="flex flex-col-reverse lg:flex lg:flex-row">
      <div className="basis-1/2">
        <img src={Phone} alt="phone" className="" />
      </div>
      <div className="basis-1/2 mr-40">
        <CommonLayout
          Items={Items}
          mainTitle={"Services"}
          subTitle={"Personalized services"}
          subParagraph={
            "Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."
          }
        />
      </div>
    </div>
  );
};

export default SubContentTwo;
