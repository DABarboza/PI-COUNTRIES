const axios = require("axios");
const { Country } = require("../db");

module.exports = async function getCountriesFromApi(req, res) {
  try {
    let countries = await axios.get("http://localhost:5000/countries");
    countries = countries.data?.map((e) => {
      return {
        id: e.cca3,
        name: e.name.common,
        flag: e.flags.png,
        continent: e.continents[0],
        capital: e.capital,
        subregion: e.subregion,
        area: e.area,
        population: e.population,
      };
    });
    await Country.bulkCreate(countries);
    return countries;
  } catch (error) {
    console.log(error);
    throw new Error("Error saving countries in db");
  }
};
