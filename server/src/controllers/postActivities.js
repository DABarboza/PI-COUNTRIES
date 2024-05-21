const { Activity, Country } = require("../db");

const getActivities = async (req, res) => {
  try {
    const activities = await Activity.findAll();
    if (!activities.length) {
      return [];
    }
    return activities;
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const postActivities = async (req, res) => {
  try {
    const { name, difficulty, duration, season, country } = req.body;
    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
      country,
    });
    return newActivity;
  } catch (error) {
    console.log(error);
    res.send({ error: error.message });
  }
};

module.exports = { getActivities, postActivities };
