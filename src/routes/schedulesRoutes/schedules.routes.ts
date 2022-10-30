import { Router } from 'express';
import createScheduleController from '../../controllers/schedulesControllers/createSchedules.controller';
import listSchedulesController from '../../controllers/schedulesControllers/listSchedules.controller';
import adminPermissionMiddleware from '../../middlewares/adminPermissionMidlleware';
import authenticationMiddleware from '../../middlewares/authentication.middleware';

const schedulesRoutes = Router();

schedulesRoutes.post('', authenticationMiddleware, createScheduleController);
schedulesRoutes.get('/properties/:id', authenticationMiddleware, adminPermissionMiddleware, listSchedulesController);

export default schedulesRoutes;