import React from "react";

interface MenuItems {
  icon: React.ReactElement;
  title: string;
  subText: string;
}

interface CommonLayoutProps {
  Items: MenuItems[];
  mainTitle: string;
  subTitle: string;
  subParagraph: string;
}

const CommonLayout: React.FC<CommonLayoutProps> = ({
  Items,
  mainTitle,
  subTitle,
  subParagraph,
}) => {
  return (
    <div className="my-10 text-center lg:text-left">
      <p className="text-amber-900 text-lg font-semibold">{mainTitle}</p>
      <h1 className="text-3xl lg:text-6xl font-bold mt-5">{subTitle}</h1>
      <p className="text-2xl mt-20">{subParagraph}</p>
      <div className="grid grid-cols-2 gap-10 mt-20">
        {Items.map((item, index) => (
          <div key={index} className="">
            <span className="text-blue-700">{item.icon}</span>
            <h6 className="text-xl font-bold my-2">{item.title}</h6>
            <p>{item.subText}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommonLayout;
