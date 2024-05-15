const { Router } = require("express");
const router = Router();

const getCountriesFromApi = require("../controllers/getCountriesFromApi");
const getAllCountries = require("../controllers/getAllcountries");
const getCountryById = require("../controllers/getCountryById");

//!Traigo los paises de la api
router.get("/", async (req, res) => {
  try {
    const countries = await getCountriesFromApi();
    res.json({ message: "Countries saved in db" });
    return countries;
  } catch (error) {
    console.log(error);
    res.status(500).json("Error saving countries in db");
  }
});

//!Traigo los paises de la db
router.get("/countries", async (req, res) => {
  try {
    const countries = await getAllCountries();
    if (countries.length === 0) {
      return res.status(404).json({ message: "No countries found" });
    }
    res.json(countries);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error retrieving countries" });
  }
});

//!Traigo un pais por id
router.get("/countries/:id", async (req, res) => {
  try {
    const country = await getCountryById(req, res);
    if (!country) {
      return res.status(404).json({ message: "Country not found" });
    }
    return country;
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error retrieving country" });
  }
});

module.exports = router;
