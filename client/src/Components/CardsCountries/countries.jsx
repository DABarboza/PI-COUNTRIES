import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./countries.module.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  return (
      <div className={style.container}>
      <h1>Countries</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.name}>
            <Link to={`/countries/${country.alpha2Code}`}>{country.name}</Link>
            </li>
            
        ))}
      </ul>
    </div>
  );
};

export default Countries;
