import React from "react";
import desktop from "../Assets/sub-banner.svg";

const ContentOne: React.FC = () => {
  return (
    <div className="text-center my-20">
      <p className="text-amber-900 text-lg font-semibold">No more waste</p>
      <h1 className="text-3xl lg:text-6xl font-bold">Pick the Sun</h1>
      <p className="text-2xl mt-6 lg:mx-72">
        Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec
        ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor
        pharetra sed in mauris elementum sollicitudin.
      </p>
      <img src={desktop} alt="image" className="w-full" />
    </div>
  );
};

export default ContentOne;
