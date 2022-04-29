import { Router } from 'express';
import clientController from '../controller/clientController';

const clientRouter = Router();

clientRouter.route('/').get(clientController.findClient);

clientRouter.route('/createClient').post(clientController.create);

clientRouter.route('/:clientId').delete(clientController.delete);

clientRouter
  .route('/:clientId/changeClientName')
  .put(clientController.changeClientName);

export default clientRouter;
