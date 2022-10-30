import 'reflect-metadata'
import 'express-async-errors'
import express from 'express'
import userRoutes from './routes/sessionAndUserRoutes/user.routes';
import loginRoute from './routes/sessionAndUserRoutes/sessionLogin.routes';
import categoryRoutes from './routes/categoryRoutes/category.routes';
import propertiesRoutes from './routes/propertiesRoutes/properties.routes'; 
import schedulesRoutes from './routes/schedulesRoutes/schedules.routes';
import errorHandlingMiddelware from './middlewares/errorHandling.middleware';

const app = express();

app.use(express.json());
app.use(errorHandlingMiddelware);

app.use('/login',loginRoute);
app.use('/users', userRoutes);
app.use('/categories', categoryRoutes);
app.use('/properties', propertiesRoutes);
app.use('/schedules', schedulesRoutes);

export default app;