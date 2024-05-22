import React from "react";
import { Link } from "react-router-dom";
import style from "./landingPage.module.css";

export function Landing() {
  return (
    <div className={style.holder}>
      <div className={style.land}>
        <h1 className={style.title}>Descubre el mundo</h1>
        <div className={style.divi}>
          <button className={style.button}>
            <Link className={style.link} to="/countries">
              Home
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Landing;
