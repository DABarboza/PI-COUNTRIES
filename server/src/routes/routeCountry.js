const { Router } = require("express");
const router = Router();

const getAllCountries = require("../controllers/getAllcountries");
const getCountryById = require("../controllers/getCountryById");
const getCountryByName = require("../controllers/getCountryByName");

router.get("/countries", async (req, res, next) => {
  try {
    const countries = await getAllCountries(req, res);
    if (countries.length === 0) {
      return res.status(404).json({ message: "No countries found" });
    }
    res.json(countries);
  } catch (error) {
    next(error);
  }
});

router.get("/countries/:id", async (req, res, next) => {
  try {
    const countryById = await getCountryById(req, res);
    if (!countryById) {
      return res.status(404).json({ message: "Country not found" });
    }
    res.json(countryById);
  } catch (error) {
    next(error);
  }
});

router.get("/countries/name/:name", async (req, res, next) => {
  try {
    const countryByName = await getCountryByName(req, res);
    if (!countryByName) {
      return res.status(404).json({ message: "Country not found" });
    }
    res.json(countryByName);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
