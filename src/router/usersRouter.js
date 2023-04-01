const { Router } = require("express");
const getUsers = require("../controllers/getUsers");
const createUser = require("../controllers/createUsers");
const usersRouter = Router();
// ESTOS SON LOS HANDLERS, MANEJAN LA LOGICA DE LOS HANDLERS. --> NO SE COMUNICAN CON LA BASE DE DATOS.

//Es barra sola, porque  si llego al router de userRoute ya es "/users"
usersRouter.get("/", async (req, res) => {
  //Al ser una operacion asyncrona puede  haber errores que vamos a manejar con el try catch;
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message }); // siempre se manda el error del mesaje. nunca el error en si.
    //EL ERROR TIENE INFORMACION SENSIBLE DEL SERVIDOR.
  }
});

usersRouter.post("/", async (req, res) => {
  try {
    const { name, email, username } = req.body;

    const newUser = await createUser({
      name,
      email,
      username,
    });
    res.status(200).json({ created: "OK", newUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
usersRouter.get("/:id", (req, res) => {
  res.send("Estoy en la ruta /:id, info de un usuario por id.");
});
module.exports = usersRouter;
