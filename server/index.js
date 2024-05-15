const server = require("./src/server");
const PORT = 3001;
const { conn } = require("./src/db.js");

try {
  conn.sync({ force: true }).then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  });
} catch (error) {
  console.log(error);
}
