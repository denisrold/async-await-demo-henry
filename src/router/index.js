const { Router } = require("express");
const usersRouter = require("./usersRouter");
const postRouter = require("./postRouter");
const router = Router();

//llega la peticion y redirecciona. segun su path.

router.use("/users", usersRouter); // ante una peticion de /user voy a buscar en userRouter

router.use("/post", postRouter); //ante una peticion de /post, me voy a buscar a postRouter;
//Al momento en que la request llega al router, el router
//Debe abrirse en dos nuevos routers.

module.exports = router;
