import { useEffect } from "react";
import Country from "../CardsCountries/Country";
import { getCountries } from "../../actions/action";
import { useDispatch, useSelector } from "react-redux";
import style from "./homePage.module.css";
import Nav from "../Nav/Nav";

export function HomePage() {
  const dispatch = useDispatch();

  // Obtener la lista de países del estado de Redux
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div>
      <Nav />
      <div className={style.countriesContainer}>
        {countries.map((country) => (
          <Country
            key={country.id}
            id={country.id}
            name={country.name}
            flag={country.flag}
            region={country.region}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
