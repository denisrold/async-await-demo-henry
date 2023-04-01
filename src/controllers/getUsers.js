let data = require("../utils/data");
//Este controller se encarga de obtener y retornar la informacion de todos los usuarios.
const getUsers = async () => {
  // en caso de ser una operacion async --> la funcion no retorna data, retorna una promesa
  return data; // data es el valor de resolucion de la promesa.
};

//controller --> Funcion que se encarga de interactuar con los DATOS. bdd o []local
//handlers --> Funcion que maneja la logica de una determinada ruta.
//^^ En este caso mis handlers seran usersRouter y postRouter

//Handler se encarga de la ruta, le pide ayuda al controller para que el controller intractue
//con el array o base de datos y le de la informacion de la bdd o [] al handler.

//Los controllers -> siempre son asyncronos porque trabajan con la base de datos.
module.exports = getUsers;
