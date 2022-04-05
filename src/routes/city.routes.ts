/* eslint-disable prettier/prettier */
import { Router } from 'express';
import cityController from '../controller/cityController';

const cityRouter = Router();

/* POST /cities/createCity   POST CREATE CITY */
cityRouter.post('/createCity', cityController.create);

/* GET /cities/              GET CITY WITH FILTERS */
cityRouter.route('/').get(cityController.findCity) 


export default cityRouter;
