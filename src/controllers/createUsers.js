const data = require("../utils/data");

//Este controller recibe la informacion de un user, y lo crea en la base de Datos.
const createUser = async ({ name, email, username }) => {
  if (!name || !email || !username) throw new Error("Faltan datos.");
  const newUser = { name, email, username };
  data.push(newUser);
  return newUser;
};

module.exports = createUser;
