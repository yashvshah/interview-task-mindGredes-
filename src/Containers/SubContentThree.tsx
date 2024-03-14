import React from "react";
import CommonLayout from "../Components/CommonLayout";
import Phone from "../Assets/phone-two.png";
import { PiTreeStructureThin, PiUploadLight } from "react-icons/pi";
import { SlLike } from "react-icons/sl";
import { MdOutlineViewCompact } from "react-icons/md";

const Items = [
  {
    icon: <PiTreeStructureThin size={30} />,
    title: "Erat sit",
    subText:
      "Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis.",
  },
  {
    icon: <SlLike size={30} />,
    title: "Ullamcorper arcu",
    subText:
      "Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus auctor habitant duis dictum ",
  },
  {
    icon: <PiUploadLight size={30} />,
    title: "Et pellentesque",
    subText:
      "Mi vitae, massa eu molestie massa euismod volutpat condimentum. Blandit molestie ullamcorper hendrerit purus lorem vulputate.",
  },
  {
    icon: <MdOutlineViewCompact size={30} />,
    title: "Amet egestas",
    subText:
      "Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada velit et, ullamcorper malesuada amet, felis. ",
  },
];

const SubContentThree: React.FC = () => {
  return (
    <div className="flex flex-col-reverse lg:flex lg:flex-row-reverse justify-between">
      <div className="">
        <img src={Phone} alt="phone" className="" />
      </div>
      <div className="basis-1/2 ml-28">
        <CommonLayout
          Items={Items}
          mainTitle={"System features"}
          subTitle={"Powerful features"}
          subParagraph={
            "Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed."
          }
        />
      </div>
    </div>
  );
};

export default SubContentThree;
