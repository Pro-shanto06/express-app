import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import Key from '../models/authKeyModel';
import { config } from '../config/config';

interface JwtPayload {
  key: string;
}

export const jwtToken = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1];

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret!) as JwtPayload;

    const validKey = await Key.findOne({ key: decoded.key });

    if (!validKey) {
      return res.sendStatus(401); 
    }

    next();
  } catch (err) {
    console.error('Token verification failed:', err);
    res.sendStatus(401); 
  }
};
