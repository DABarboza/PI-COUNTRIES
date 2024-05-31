const { Activity, Country } = require("../db");

const getActivityById = async (req, res) => {
  const { id } = req.params;
  if (!id) throw new Error("Missing ID");
  const findActivity = await Activity.findOne({
    where: { id: id },
    include: { model: Country },
  });
  return findActivity;
};

module.exports = getActivityById;
