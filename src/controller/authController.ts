import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { environments } from '../config/environments';

import Client from '../models/Client';

export default {
  authenticate: async (req: Request, res: Response): Promise<Response> => {
    try {
      const data = req.body;
      const repository = getRepository(Client);

      const user = await repository.findOne({
        email: data.email,
      });

      if (!user) {
        return res.status(401);
      }

      const isValidPassword = bcrypt.compare(data.password, user.password);

      if (!isValidPassword) {
        return res.status(401);
      }

      const token = jwt.sign(
        { id: user.clientId },
        String(environments.secret),
      );

      delete user.password;

      return res.status(200).json({
        user,
        token,
      });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};
