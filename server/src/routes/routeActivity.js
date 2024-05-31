const { Router } = require("express");
const router = Router();

const {
  getActivities,
  postActivities,
} = require("../controllers/postActivities");
const getActivityById = require("../controllers/getActivityById");

router.post("/activities", async (req, res, next) => {
  try {
    const newActivity = await postActivities(req, res, next);
    return res.json(newActivity);
  } catch (error) {
    return next(error);
  }
});

router.get("/activities", async (req, res, next) => {
  try {
    const activities = await getActivities(req, res, next);
    return res.json(activities);
  } catch (error) {
    return next(error);
  }
});

router.get("/activities/:id", async (req, res, next) => {
  try {
    const activityById = await getActivityById(req, res, next);
    return res.json(activityById);
  } catch (error) {
    return next(error);
  }
});
module.exports = router;
