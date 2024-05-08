const axios = require("axios");
const server = require("./src/server");
const PORT = 3001;
const { conn } = require("./src/db.js");

try {
  server.listen(PORT, async () => {
    console.log(`Server raised in port: ${PORT}`);
    await conn.sync({});
  });
} catch (error) {
  console.log(error);
}
