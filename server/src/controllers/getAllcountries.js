const { Country } = require("../db");

module.exports = async function getAllCountries(req, res) {
  const countries = await Country.findAll();
  if (!countries.length) {
    res.status(404).json({ message: "No countries found" });
  }
  return countries;
};
