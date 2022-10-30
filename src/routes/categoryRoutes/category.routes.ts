import { Router } from "express";
import createCategoryController from '../../controllers/categoriesControllers/createCategory.controller';
import adminPermissionMiddleware from '../../middlewares/adminPermissionMidlleware';
import authenticationMiddleware from '../../middlewares/authentication.middleware';
import listCategoriesController from '../../controllers/categoriesControllers/listCategories.controller';


const categoryRoutes = Router();

categoryRoutes.post('',authenticationMiddleware, adminPermissionMiddleware, createCategoryController);
categoryRoutes.get('', listCategoriesController);
categoryRoutes.get('/:id/properties', listCategoriesController);

export default categoryRoutes;
