import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { environments } from '../config/environments';

export default (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      status: 'error',
      message: 'Unauthorized',
    });
  }

  const token = authorization.replace('Bearer', '').trim();

  try {
    jwt.verify(token, String(environments.secret));
    next();
  } catch (err) {
    return res.status(401).json({
      status: 'error',
      message: 'Unauthorized',
    });
  }
};
