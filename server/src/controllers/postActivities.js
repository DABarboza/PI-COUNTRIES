const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const postActivities = async (req, res) => {
  const { name, difficulty, duration, season, countryID } = req.body;
  try {
    const existingActivity = await Activity.findOne({ where: { name: name } });

    if (existingActivity) {
      res.status(200).json({ message: "Activity already exists" });
    } else {
      const newActivity = await Activity.create({
        name: name,
        difficulty: difficulty,
        duration: duration,
        season: season,
      });

      await newActivity.addCountry(countryID);
      res.status(201).json("Activity created");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getActivities = async (req, res) => {
  try {
    const activities = await Activity.findAll({
      include: {
        model: Country,
        through: { attributes: [] },
      },
    });
    return activities;
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { postActivities, getActivities };
