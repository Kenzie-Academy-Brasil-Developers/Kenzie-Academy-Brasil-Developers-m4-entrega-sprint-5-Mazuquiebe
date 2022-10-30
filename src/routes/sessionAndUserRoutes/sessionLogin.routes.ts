import { Router } from "express";
import loginController from "../../controllers/userControllers/login.controller";

const loginRoute = Router();

loginRoute.post('', loginController);

export default loginRoute;