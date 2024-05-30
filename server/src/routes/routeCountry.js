const { Router } = require("express");
const router = Router();

const getAllCountries = require("../controllers/getAllcountries");
const getCountryById = require("../controllers/getCountryById");
const getCountryByName = require("../controllers/getCountryByName");

router.get("/countries", async (req, res, next) => {
  try {
    res.setHeader("Cache-Control", "no-store");
    const countries = await getAllCountries(req, res, next);
    if (res.headersSent) return; // Check if headers are already sent
    if (!countries || countries.length === 0) {
      return res.status(404).json({ message: "No countries found" });
    }
    return res.json(countries);
  } catch (error) {
    return next(error);
  }
});

router.get("/countries/:id", async (req, res, next) => {
  try {
    res.setHeader("Cache-Control", "no-store");
    const countryById = await getCountryById(req, res, next);
    if (res.headersSent) return;
    if (!countryById) {
      return res.status(404).json({ message: "Country not found" });
    }
    return res.json(countryById);
  } catch (error) {
    return next(error);
  }
});

router.get("/countries/name/:name", async (req, res, next) => {
  try {
    res.setHeader("Cache-Control", "no-store");
    const countryByName = await getCountryByName(req, res, next);
    if (res.headersSent) return;
    if (!countryByName) {
      return res.status(404).json({ message: "Country not found" });
    }
    return res.json(countryByName);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
