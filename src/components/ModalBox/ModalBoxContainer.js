import React from "react";
import { WelcomeSlide } from './WelcomeSlide'
import { FirstSlide } from "./FirstSlide";
import { SecondSlide } from "./SecondSlide";
import { ThirdSlide } from "./ThirdSlide";
import { FourthSlide } from "./FourthSlide";
import { FifthSlide } from "./FifthSlide";

export const ModalBox = () => {

  return (
    <div>
      <WelcomeSlide />
      <FirstSlide />
      <SecondSlide />
      <ThirdSlide />
      <FourthSlide />
      <FifthSlide />
    </div>
  );
};
