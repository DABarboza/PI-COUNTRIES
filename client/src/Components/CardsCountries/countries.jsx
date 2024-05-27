import React, { useEffect } from "react";
import Country from "./Country";
import { useSelector } from "react-redux";
import Style from "./countries.module.css";

const Countries = () => {
  const countries = useSelector((state) => state.countries);
  const [currentPage, setCurrentPage] = React.useState(0);

  let nextPage = () => {
    if (countries.length > currentPage + 10) {
      setCurrentPage(currentPage);
    } else {
      setCurrentPage(currentPage + 10);
    }
  };

  let prevPage = () => {
    if (currentPage < 9) {
      setCurrentPage(0);
    } else {
      setCurrentPage(currentPage - 10);
    }
  };
  const firstPage = () => {
    setCurrentPage(0);
  };

  const lastPage = () => {
    setCurrentPage(countries.length - 10);
    console.log(currentPage);
  };

  useEffect(() => {
    firstPage();
  }, [countries]);

  const filteredCountries = countries.slice(currentPage, currentPage + 10);

  return (
    <div>
      <button onClick={prevPage} className={Style.button}>{`<<`}</button>
      <button onClick={firstPage} className={Style.button}>{`<`}</button>
      <button onClick={nextPage} className={Style.button}>{`>`}</button>
      <button onClick={lastPage} className={Style.button}>{`>>`}</button>
      <div className={Style.grid}>
        {filteredCountries.map((e) => (
          <Country
            key={e.id}
            id={e.id}
            flag={e.flag}
            name={e.name}
            region={e.region}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
