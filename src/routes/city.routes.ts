import { Router } from 'express';
import cityController from '../controller/cityController';

const cityRouter = Router();

cityRouter.post('/createCity', cityController.create);

cityRouter.route('/').get(cityController.findCity);

export default cityRouter;
