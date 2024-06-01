import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetail } from "../../actions/action";
import { useDispatch, useSelector } from "react-redux";
import style from "../DetailPage/detailCountry.module.css";

function DetailCountry() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const countryDetail = useSelector((state) => state.countryDetail); // Actualiza esto según cómo se almacenan los detalles del país en el estado

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  if (!countryDetail) {
    return <div>Cargando...</div>; // Muestra un mensaje de carga mientras se cargan los datos del país
  }

  return (
    <div className={style.detailContainer}>
      <img src={countryDetail.flag} alt="flag" className={style.flag} />
          <h3 className={style.detailTitle}>{countryDetail.name}</h3>
      <h4> {countryDetail.id}</h4>
      <h4>Continent: {countryDetail.continent}</h4>
      <h4>Subregion: {countryDetail.subregion}</h4>
      <h4>Capital: {countryDetail.capital}</h4>
      <h4>Population: {countryDetail.population}</h4>
      <h4>Area: {countryDetail.area}</h4>
      <button
        onClick={() => (window.location.href = "/countries")}
        className={style.detailButton}>
        Home
      </button>
    </div>
  );
}

export default DetailCountry;
