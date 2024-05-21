const { Router } = require("express");
const router = Router();

const {
  getActivities,
  postActivities,
} = require("../controllers/postActivities");

//!Traigo las actividades de la db
router.get("/activities", async (req, res) => {
  try {
    const activities = await getActivities();
    if (activities.length === 0) {
      return res.status(404).json({ message: "No activities found" });
    }
    res.json(activities);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error retrieving activities" });
  }
});

router.post("/activities", async (req, res) => {
  try {
    const newActivity = await postActivities(req, res);
    res.status(201).json(newActivity);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
