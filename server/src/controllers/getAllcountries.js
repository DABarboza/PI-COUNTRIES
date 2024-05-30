const axios = require("axios");
const { Country } = require("../db");

module.exports = async function getCountriesFromApi(req, res, next) {
  try {
    let countries = await Country.findAll();
    if (countries.length === 0) {
      const countriesData = await fetchCountriesFromApi();
      await Country.bulkCreate(countriesData);
      countries = await Country.findAll(); // Re-fetch after creating
    }
    if (countries.length === 0) {
      return res.status(404).json({ message: "Countries not found" });
    }
    return res.status(200).json(countries);
  } catch (error) {
    console.log(error);
    return next(error); // Use next(error) to handle errors globally
  }
};

async function fetchCountriesFromApi() {
  try {
    const response = await axios.get("http://localhost:5000/countries");
    const countriesData = response.data?.map((country) => {
      return {
        id: country.cca3,
        name: country.name.common,
        flag: country.flags.png,
        continent: country.continents[0],
        capital: country.capital,
        subregion: country.subregion,
        area: country.area,
        population: country.population,
      };
    });
    return countriesData;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching countries from API");
  }
}
