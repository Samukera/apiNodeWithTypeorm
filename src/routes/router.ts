import { Router } from 'express';
import cityRouter from './city.routes';
import clientRouter from './client.routes';

const routes = Router();

routes.use('/clients', clientRouter);
routes.use('/cities', cityRouter);

export default routes;
