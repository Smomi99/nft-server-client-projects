import React from "react";
import DropsForm from "../DropsForm/DropsForm";
import LstNew from "../LstNew/LstNew";
import ThirdBanner from "../ThirdBanner/ThirdBanner";
import Trending from "../Trending/Trending";

const ThirdPage = () => {
  return (
    <div>
      <ThirdBanner />
      <Trending />
      <DropsForm />
      <LstNew />
    </div>
  );
};

export default ThirdPage;
