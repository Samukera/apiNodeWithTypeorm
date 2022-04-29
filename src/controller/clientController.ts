import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Client from '../models/Client';
import clientService from '../service/clientService';

export default {
  findClient: async (req: Request, res: Response): Promise<Response> => {
    try {
      const { clientId, name } = req.query as any;
      const resultClients = await clientService.findClient(clientId, name);

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
      const repository = getRepository(Client);

      const userExists = await repository.findOne({
        email: data.email,
      });

      if (userExists) {
        return res.status(409).json(userExists);
      }

      const resultClients = await clientService.createClient(data);

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
