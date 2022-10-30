import { Router } from "express";
import createPropertyController from '../../controllers/propertiesControllers/createProperty.controller';
import listPropertiesController from '../../controllers/propertiesControllers/listProperties.controller';
import adminPermissionMiddleware from "../../middlewares/adminPermissionMidlleware"; 
import authenticationMiddleware from "../../middlewares/authentication.middleware";

const propertiesRoutes = Router();

propertiesRoutes.post('', authenticationMiddleware, adminPermissionMiddleware, createPropertyController);
propertiesRoutes.get('', listPropertiesController);

export default propertiesRoutes;
