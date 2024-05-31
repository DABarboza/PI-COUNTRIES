const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

async function postActivities(req, res) {
  const { name, difficulty, duration, season, countryID } = req.body;

  // Validación básica de entrada
  if (!name || !difficulty || !duration || !season || !Array.isArray(countryID)) {
    return res.status(400).send("Todos los campos son obligatorios y countryID debe ser un array de códigos de país");
  }

  try {
    // Busca o crea la actividad
    const [activity, created] = await Activity.findOrCreate({
      where: { name },
      defaults: { difficulty, duration, season },
    });

    // Busca los países correspondientes a los códigos proporcionados
    const countryMatch = await Country.findAll({
      where: {
        id: {
          [Op.in]: countryID,
        },
      },
    });

    if (countryMatch.length === 0) {
      return res.status(404).send("No se encontraron países con los códigos proporcionados");
    }

    // Asocia la actividad con los países encontrados
    await activity.addCountries(countryMatch);

    return res.status(201).send(activity);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Ocurrió un error al procesar la solicitud");
  }
}

async function getActivities() {
  try {
    const activities = await Activity.findAll({
      include: {
        model: Country,
        through: { attributes: [] }, // Para excluir atributos de la tabla intermedia
      },
    });
    return activities;
  } catch (error) {
    console.error(error);
    throw new Error("Error retrieving activities");
  }
}

module.exports = { postActivities, getActivities };
