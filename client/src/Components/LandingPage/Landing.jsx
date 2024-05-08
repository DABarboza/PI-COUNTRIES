import React from "react";
import { link } from "react-router-dom";
import style from "./landing.module.css";
import img from "./countries.png";

export function Landing() {
  return (
    <div>
      <div className={style.container}>
        <img className={style.img} src={img} alt="Countries" />
        <h1 className={style.title}>Countries</h1>
      </div>
    </div>
  );
}

export default Landing;
