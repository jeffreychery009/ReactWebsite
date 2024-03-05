import React from "react";
import motion from "framer-motion";

import style from "./Hero.module.css";
import { description } from "../Constants/index";

interface Props {
  heading: string;
}

const Hero = ({ heading }: Props) => {
  return (
    <section className={style.section}>
      <div className={`${style.padding} ${style.containerText}`}>
        <div className={style.column}>
          <div className={style.circle} />
          <div className={style.line} />
        </div>
        <div>
          <h1 className={style.header}>
            {heading}
            <span className={style.nameHeader}>Jeffrey</span>
          </h1>
          <p className={`${style.subText}`}>
            I am a UI designer, and frontend developer. <br /> Let's get to
            work!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
