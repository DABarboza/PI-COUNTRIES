import style from "./country.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Country = ({ id, name, flag, region }) => {
  return (
    <div className={style.countryCard}>
      <Link to={`/countries/${id}`}>
        <div className={style.flagContainer}>
          <img src={flag} alt={`${name} flag`} className={style.flag} />
        </div>
        <h3>{name}</h3>
        <p>{region}</p>
      </Link>
    </div>
  );
};

Country.propTypes = {
  flag: PropTypes.string,
  name: PropTypes.string,
  region: PropTypes.string,
  id: PropTypes.string,
};

export default Country;
