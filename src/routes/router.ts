import { Router } from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import cityRouter from './city.routes';
import clientRouter from './client.routes';
import authRouter from './auth.routes';

const routes = Router();

routes.use('/auth', authRouter);

routes.use('/clients', authMiddleware, clientRouter);
routes.use('/cities', authMiddleware, cityRouter);

export default routes;
