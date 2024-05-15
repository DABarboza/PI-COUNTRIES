const { Router } = require("express");
const routeCountry = require("./routeCountry");

const router = Router();

//LLamado a la api
router.use("/", routeCountry);
router.use("/countries", routeCountry);
router.use("/countries/:id", routeCountry);

module.exports = router;
