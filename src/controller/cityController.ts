/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/class-name-casing */
import { Request, Response } from 'express';
import cityService from '../service/cityService';

export default {
  findCity: async (req: Request, res: Response): Promise<Response> => {
    try {
      const data = req.query;
      
      const resultCity = await cityService.findCity(data);
      
      if (resultCity.length === 0) {
        return res.status(204).json(resultCity);
      }

      return res.status(200).json(resultCity);

    } catch (err) {
      return res.status(500).json(err);
    }
  },

  create: async (req: Request, res: Response): Promise<Response> => {
    try {
      const data = req.body;

      const resultCity = await cityService.createCity(data);

      if (resultCity.length === 0) {
        return res.status(204).json(resultCity);
      }

      return res.status(201).json(resultCity);
      
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
