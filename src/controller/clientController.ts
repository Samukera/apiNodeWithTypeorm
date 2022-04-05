/* eslint-disable prettier/prettier */
import { Request, Response } from 'express';
import clientService from '../service/clientService';

export default {
  findClient: async (req: Request, res: Response): Promise<Response> => {
    try {
      const data = req.query;
      const resultClients = await clientService.findClient(data);

      if (resultClients.length === 0) {
        return res.status(204).json(resultClients);
      }

      return res.status(200).json(resultClients);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  create: async (req: Request, res: Response): Promise<Response> => {
    try {
      const data = req.body;

      const resultClients = await clientService.createClient(data);

      if (resultClients[0]) {
        return res.status(400).json(resultClients);
      }
      

      return res.status(201).json(resultClients);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  delete: async (req: Request, res: Response): Promise<Response> => {
    try {
      const { clientId } = req.params;
      const resultClients = await clientService.deleteClient(Number(clientId));

      if (resultClients.affected === 0) {
        return res.status(204).json(resultClients);
      }

      return res.status(200).json(resultClients);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  changeClientName: async (req: Request, res: Response): Promise<Response> => {
    try {
      const { clientId } = req.params;
      const { name } = req.body;

      const resultClients = await clientService.changeClientName(
        Number(clientId),
        name,
      );

      if (resultClients.affected === 0) {
        return res.status(204).send(resultClients);
      }

      return res.status(200).json(resultClients);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
