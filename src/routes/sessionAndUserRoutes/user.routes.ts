import { Router } from "express";
import registerUserController from "../../controllers/userControllers/registerUser.controller";
import authenticateKeysMiddleware from "../../middlewares/authenticateKeys.middleware";
import authenticationMiddleware from "../../middlewares/authentication.middleware";
import adminPermissionMiddleware from "../../middlewares/adminPermissionMidlleware"; 
import listUsersController from "../../controllers/userControllers/listUsers.controller";
import updateUserController from "../../controllers/userControllers/updateUser.controller";
import deleteUserController from "../../controllers/userControllers/deleteUser.controller";

const userRoutes = Router();

userRoutes.post('', registerUserController);
userRoutes.get('', authenticationMiddleware, adminPermissionMiddleware, listUsersController);
userRoutes.get('/:id', authenticationMiddleware, listUsersController);
userRoutes.patch('/:id', authenticationMiddleware, authenticateKeysMiddleware, adminPermissionMiddleware, updateUserController);
userRoutes.delete('/:id', authenticationMiddleware, adminPermissionMiddleware, deleteUserController);

export default userRoutes;