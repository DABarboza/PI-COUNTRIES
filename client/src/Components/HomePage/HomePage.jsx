import React, { useEffect } from "react";
import Countries from "../CardsCountries/countries";
import { getCountries } from "../../actions/action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import style from "./homePage.module.css";
import Nav from "../Nav/Nav";

export function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div>
      <Nav />
      <div>
        <Countries />
      </div>
    </div>
  );
}

export default HomePage;
