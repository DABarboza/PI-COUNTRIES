const { Router } = require("express");
const { Country, Activity } = require("../db");

const router = Router();

// GET | /countries
router.get("/countries", async (req, res) => {
  try {
    const countries = await Country.findAll();
    res.json(countries);
    //console.log("arreglo de paises:", countries);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error en el servidor");
  }
});

// GET | /countries/:idPais
router.get("/countries/:idPais", async (req, res) => {
  const { idPais } = req.params;
  try {
    const country = await Country.findByPk(idPais);
    if (country) {
      res.json(country);
    } else {
      res.status(404).send("País no encontrado");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error en el servidor");
  }
});

// GET | /countries/name?="..."
router.get("/countries/name", async (req, res) => {
  const { name } = req.query;
  try {
    const countries = await Country.findAll({
      where: { name: { [Op.iLike]: `%${name}%` } },
    });
    if (countries.length) {
      res.json(countries);
    } else {
      res.status(404).send("No se encontraron países");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error en el servidor");
  }
});

// POST | /activities
router.post("/activities", async (req, res) => {
  const { activityData, countryIds } = req.body;
  try {
    const activity = await Activity.create(activityData);
    await activity.setCountries(countryIds);
    res.json(activity);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error en el servidor");
  }
});

module.exports = router;
