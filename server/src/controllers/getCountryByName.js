const { Country } = require("../db");

module.exports = async function getCountryById(req, res) {
  const { name } = req.params;
  try {
    const country = await Country.findOne({ where: { name: name } });
    if (!country) {
      return res.status(404).json({ message: "Country not found" });
    }
    return res.json(country);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error retrieving country" });
  }
};
