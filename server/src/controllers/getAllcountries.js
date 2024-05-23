const { Country } = require("../db");

module.exports = async function getAllCountries(req, res) {
  try {
    const countries = await Country.findAll();
    if (!countries.length) {
      return res.status(404).json({ message: "Countries not found" });
    }
    return res.status(200).json(countries);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
