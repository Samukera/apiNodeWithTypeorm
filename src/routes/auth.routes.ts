import { Router } from 'express';
import authController from '../controller/authController';

const cityRouter = Router();

cityRouter.route('/').post(authController.authenticate);

export default cityRouter;
