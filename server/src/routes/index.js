const { Router } = require("express");
const routeActivity = require("./routeActivity");
const routeCountry = require("./routeCountry");

const router = Router();

router.use("/api", routeActivity);
router.use("/api", routeCountry);

module.exports = router;
