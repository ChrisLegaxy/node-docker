import { Request, Response } from 'express';
import welcome from '../models';

export default (req: Request, res: Response) => {
  res.json(welcome);
};
