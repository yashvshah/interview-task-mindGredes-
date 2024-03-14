import React from "react";
import Header from "../Containers/Header";
import HeroBanner from "../Containers/HeroBanner";
import SubContentOne from "../Containers/SubContentOne";
import SubContentTwo from "../Containers/SubContentTwo";
import SubContentThree from "../Containers/SubContentThree";
import SubContentFour from "../Containers/SubContentFour";
import SubContentFive from "../Containers/SubContentFive";
import SubContentSix from "../Containers/SubContentSix";
import Footer from "../Containers/Footer";

const WebPage: React.FC = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <SubContentOne />
      <SubContentTwo />
      <SubContentThree />
      <SubContentFour />
      <SubContentFive />
      <SubContentSix />
      <Footer />
    </>
  );
};

export default WebPage;
